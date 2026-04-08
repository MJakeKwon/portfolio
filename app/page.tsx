'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
import ChatInput from '@/components/ChatInput';
import CursorTrail from '@/components/CursorTrail';
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

  const showHeader = activeTab !== 'home';
  const showChatInput = activeTab === 'chat';

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <AboutTab />;
      case 'projects':
        return <ProjectsTab />;
      case 'skills':
        return <SkillsTab />;
      case 'experience':
        return <ExperienceTab />;
      case 'contact':
        return <ContactTab />;
      case 'chat':
        return <ChatTab />;
      case 'home':
      default:
        return <HomeTab onNavigate={setActiveTab} />;
    }
  };

  return (
    <main className="relative flex h-screen w-full flex-col overflow-hidden bg-[#f5f5f7]">
      {activeTab === 'home' ? <CursorTrail /> : null}

      <AnimatePresence>
        {showHeader ? (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            className="pointer-events-none fixed left-0 right-0 top-0 z-50 flex justify-center px-6 pt-6"
          >
            <Header onHome={() => setActiveTab('home')} />
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className={`flex-1 overflow-y-auto no-scrollbar ${showHeader ? 'pt-24' : 'pt-0'} ${showChatInput ? 'pb-40' : 'pb-16'}`}>
        <div className="mx-auto max-w-[1080px] px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.01 }}
              transition={{ duration: 0.24, ease: 'easeOut' }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="pointer-events-none fixed bottom-0 left-0 right-0 z-50 flex flex-col items-center gap-4 px-6 pb-8">
        {showChatInput ? (
          <div className="pointer-events-auto w-full max-w-[820px]">
            <AnimatePresence>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}>
                <ChatInput activeTab={activeTab} onNavigate={setActiveTab} />
              </motion.div>
            </AnimatePresence>
          </div>
        ) : null}

        {activeTab !== 'home' ? (
          <div className="pointer-events-auto">
            <AnimatePresence>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}>
                <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
              </motion.div>
            </AnimatePresence>
          </div>
        ) : null}
      </div>
    </main>
  );
}
