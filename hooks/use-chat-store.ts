'use client';

import { create } from 'zustand';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

interface ChatState {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
  waitTime: number | null;
  addMessage: (message: Omit<Message, 'id' | 'timestamp'>) => void;
  sendMessage: (content: string) => Promise<void>;
  clearError: () => void;
}

export const useChatStore = create<ChatState>((set, get) => ({
  messages: [],
  isLoading: false,
  error: null,
  waitTime: null,

  addMessage: (msg) => {
    const newMessage: Message = {
      ...msg,
      id: Math.random().toString(36).substring(7),
      timestamp: Date.now(),
    };
    set((state) => ({ messages: [...state.messages, newMessage] }));
  },

  sendMessage: async (content) => {
    const { addMessage, messages } = get();
    
    addMessage({ role: 'user', content });
    set({ isLoading: true, error: null, waitTime: null });

    try {
      const chatHistory = [...messages, { role: 'user', content }];
      const response = await fetch('/app/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: chatHistory }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.error === 'RATE_LIMIT_EXCEEDED') {
          set({ error: 'RATE_LIMIT_EXCEEDED', waitTime: data.waitTime });
          return;
        }
        if (data.error === 'QUOTA_EXCEEDED') {
          set({ error: 'QUOTA_EXCEEDED' });
          return;
        }
        if (data.error === 'AUTH_ERROR') {
          set({ error: 'AUTH_ERROR' });
          return;
        }
        throw new Error(data.error || 'SERVER_ERROR');
      }

      addMessage({ role: 'assistant', content: data.text });
    } catch (err) {
      set({ error: 'SERVER_ERROR' });
    } finally {
      set({ isLoading: false });
    }
  },

  clearError: () => set({ error: null, waitTime: null }),
}));
