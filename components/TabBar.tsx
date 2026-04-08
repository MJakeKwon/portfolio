'use client';

import { User, Briefcase, Code, History, Mail, MessageCircle } from 'lucide-react';
import { TabType } from '@/app/page';
import { cn } from '@/lib/utils';

interface TabBarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const TABS = [
  { id: 'about', label: '소개', icon: User },
  { id: 'projects', label: '프로젝트', icon: Briefcase },
  { id: 'skills', label: '기술', icon: Code },
  { id: 'experience', label: '경험', icon: History },
  { id: 'contact', label: '연락처', icon: Mail },
  { id: 'chat', label: '챗', icon: MessageCircle },
] as const;

export default function TabBar({ activeTab, onTabChange }: TabBarProps) {
  return (
    <nav className="bg-white/60 backdrop-blur-2xl border border-white/60 rounded-full px-2 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.04)] flex items-center gap-1">
      {TABS.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id as TabType)}
            className={cn(
              "flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 ease-out active:scale-95",
              isActive 
                ? "bg-apple-blue text-white shadow-lg shadow-apple-blue/20" 
                : "text-neutral-500 hover:bg-neutral-100"
            )}
          >
            <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
            <span className={cn(
              "text-xs font-medium hidden md:block",
              isActive ? "opacity-100" : "opacity-80"
            )}>
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
