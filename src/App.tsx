import React, { useState, useEffect } from 'react';
import { Language, ActiveBrand } from './types';
import { GalacticBackground } from './components/GalacticBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { QuaVentureSpotlight } from './components/QuaVentureSpotlight';
import { WebApplicationsPipeline } from './components/WebApplicationsPipeline';
import { QuaPhilosophyStory } from './components/QuaPhilosophyStory';
import { QuantumCoreShowcase } from './components/QuantumCoreShowcase';
import { DeepThinkingCopilot } from './components/DeepThinkingCopilot';
import { CorporateRegistry } from './components/CorporateRegistry';
import { NewsAndResearch } from './components/NewsAndResearch';
import { TokyoHQMap } from './components/TokyoHQMap';
import { Footer } from './components/Footer';
import { ContactRFPModal } from './components/ContactRFPModal';
import { ReachTodayPage } from './components/ReachTodayPage';
import { ReanowPage } from './components/ReanowPage';

export default function App() {
  const [lang, setLang] = useState<Language>('ja');
  const [activeBrand, setActiveBrand] = useState<ActiveBrand>('qua');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [targetAppName, setTargetAppName] = useState<string>('');
  const [copilotInitialPrompt, setCopilotInitialPrompt] = useState<string>('');

  // Sync with initial URL hash if present & ensure page starts at top
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('reach-today')) {
        setActiveBrand('reach-today');
      } else if (hash.includes('reanow')) {
        setActiveBrand('reanow');
      } else if (hash.includes('qua')) {
        setActiveBrand('qua');
      }
    };

    handleHash();

    // Scroll to top on initial page load if no explicit section anchor is requested
    const initialHash = window.location.hash.toLowerCase();
    if (!initialHash || initialHash === '#qua' || initialHash === '#') {
      window.scrollTo(0, 0);
    }

    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleBrandChange = (brand: ActiveBrand) => {
    setActiveBrand(brand);
    window.location.hash = brand === 'qua' ? '#qua' : `#${brand}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCopilotWithPrompt = (appName: string, context?: string) => {
    // If not on Qua corporate, switch to Qua corporate first
    if (activeBrand !== 'qua') {
      setActiveBrand('qua');
    }
    const prompt = context || (lang === 'ja'
      ? `Qua合同会社の新規事業およびWebアプリ「${appName}」について教えてください。`
      : `Please explain Qua LLC's strategic initiatives and application '${appName}'.`);
    
    setCopilotInitialPrompt(prompt);
    setTimeout(() => {
      const copilotEl = document.getElementById('copilot');
      if (copilotEl) {
        copilotEl.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const handleOpenNotifyModal = (contextTitle: string) => {
    setTargetAppName(contextTitle);
    setIsModalOpen(true);
  };

  const handleScrollToSection = (id: string) => {
    if (activeBrand !== 'qua') {
      setActiveBrand('qua');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#060a12] text-slate-100 relative selection:bg-blue-500/30 selection:text-sky-200">
      {/* Background Graphic System */}
      <GalacticBackground />

      {/* Global Navigation with Multi-Brand Switcher */}
      <Navbar
        lang={lang}
        activeBrand={activeBrand}
        onBrandChange={handleBrandChange}
        onLanguageChange={setLang}
        onOpenCopilot={() => handleScrollToSection('copilot')}
        onOpenRFP={() => {
          if (activeBrand === 'reach-today') {
            handleOpenNotifyModal('Reach Today サミット参加・支部開設申請');
          } else if (activeBrand === 'reanow') {
            handleOpenNotifyModal('Reanow 事前登録・市民権予約');
          } else {
            handleOpenNotifyModal('Webアプリ・システム受託開発のご相談');
          }
        }}
      />

      {/* Main Multi-Brand Switchable Pages */}
      <main className="relative z-10 pt-20">
        {/* BRAND 1: REACH TODAY (Global Youth Sovereignty Movement LP) */}
        {activeBrand === 'reach-today' && (
          <ReachTodayPage
            lang={lang}
            onNavigateBrand={handleBrandChange}
            onOpenInquiry={handleOpenNotifyModal}
          />
        )}

        {/* BRAND 2: REANOW (Cyberpunk MMO Geopolitics & SNS Product LP) */}
        {activeBrand === 'reanow' && (
          <ReanowPage
            lang={lang}
            onNavigateBrand={handleBrandChange}
            onOpenInquiry={handleOpenNotifyModal}
          />
        )}

        {/* BRAND 3: QUA LLC (Parent Corporate & Engineering Holding) */}
        {activeBrand === 'qua' && (
          <>
            {/* Hero Section */}
            <HeroSection
              lang={lang}
              onOpenCopilot={() => handleScrollToSection('copilot')}
              onOpenRFP={() => handleOpenNotifyModal('Webアプリ・システム受託開発のご相談')}
              onExploreEcosystem={() => handleScrollToSection('ventures')}
              onViewRegistry={() => handleScrollToSection('corporate')}
              onExploreQuantum={() => handleScrollToSection('qua-core-matrix')}
            />

            {/* Core Flagship Ventures: Reach Today & Reanow (Page 3 requirement) */}
            <QuaVentureSpotlight
              lang={lang}
              onNavigateBrand={handleBrandChange}
              onOpenInquiry={handleOpenNotifyModal}
            />

            {/* In-House Web Applications & Custom Software Development Process */}
            <WebApplicationsPipeline
              lang={lang}
              onOpenNotifyModal={handleOpenNotifyModal}
              onAskCopilotAboutApp={handleOpenCopilotWithPrompt}
            />

            {/* Corporate Philosophy & Engineering Ethos */}
            <QuaPhilosophyStory
              lang={lang}
              onOpenRFP={() => handleOpenNotifyModal('Webアプリ・システム受託開発のご相談')}
            />

            {/* Online Qubit (Bloch Sphere) Interactive UI Demo */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <QuantumCoreShowcase
                lang={lang}
                onOpenWaitlist={(appName) => handleOpenNotifyModal(appName)}
              />
            </div>

            {/* Official Q&A AI Bot */}
            <DeepThinkingCopilot
              lang={lang}
              initialPrompt={copilotInitialPrompt}
            />

            {/* Official Corporate Registry & Statutory Purposes */}
            <CorporateRegistry lang={lang} />

            {/* Corporate News & Announcements */}
            <NewsAndResearch lang={lang} />

            {/* Contact & Inquiry Desk */}
            <TokyoHQMap
              lang={lang}
              onOpenRFP={() => handleOpenNotifyModal('Webアプリ・システム受託開発のご相談')}
            />
          </>
        )}
      </main>

      {/* Corporate Multi-Brand Footer */}
      <Footer
        lang={lang}
        activeBrand={activeBrand}
        onBrandChange={handleBrandChange}
        onOpenRFP={() => handleOpenNotifyModal('総合お問い合わせ・相談')}
        onOpenCopilot={() => handleScrollToSection('copilot')}
      />

      {/* Inquiry & Application Consultation Modal */}
      <ContactRFPModal
        lang={lang}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultAppName={targetAppName}
      />
    </div>
  );
}
