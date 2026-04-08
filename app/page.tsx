'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
import ChatInput from '@/components/ChatInput';
import CursorTrail from '@/components/CursorTrail';

// Tabs
import HomeTab from '@/components/tabs/HomeTab';
import AboutTab from '@/components/tabs/AboutTab';
import ProjectsTab from '@/components/tabs/ProjectsTab';
import SkillsTab from '@/components/tabs/SkillsTab';
import ExperienceTab from '@/components/tabs/ExperienceTab';
import ContactTab from '@/components/tabs/ContactTab';
import ChatTab from '@/components/tabs/ChatTab';

export type TabType = 'home' | 'about' | 'projects' | 'skills' | 'experience' | 'contact' | 'chat';

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<TabType>('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <HomeTab onNavigate={setActiveTab} />;
      case 'about': return <AboutTab />;
      case 'projects': return <ProjectsTab />;
      case 'skills': return <SkillsTab />;
      case 'experience': return <ExperienceTab />;
      case 'contact': return <ContactTab />;
      case 'chat': return <ChatTab />;
      default: return <HomeTab onNavigate={setActiveTab} />;
    }
  };

  const showChatInput = activeTab === 'home' || activeTab === 'chat';
  const showHeader = activeTab !== 'home';

  return (
    <main className="relative h-screen w-full flex flex-col bg-[#F5F5F7] overflow-hidden">
      {/* Cursor Trail - Only on Home */}
      {activeTab === 'home' && <CursorTrail />}

      {/* Header - Hidden on Home */}
      <AnimatePresence>
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 pointer-events-none"
          >
            <Header onHome={() => setActiveTab('home')} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto no-scrollbar pt-20 pb-40">
        <div className="max-w-[640px] mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Fixed Area */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex flex-col items-center gap-4 pb-8 pointer-events-none">
        {/* Chat Input - Only on Home/Chat */}
        <div className="w-full max-w-[640px] px-6 pointer-events-auto">
          <AnimatePresence>
            {showChatInput && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
              >
                <ChatInput activeTab={activeTab} onNavigate={setActiveTab} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Tab Bar - Hidden on Home */}
        <div className="pointer-events-auto">
          <AnimatePresence>
            {activeTab !== 'home' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
              >
                <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
