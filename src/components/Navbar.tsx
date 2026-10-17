import React, { useState, useEffect } from 'react';
import { QuaLogo } from './QuaLogo';
import { Language, ActiveBrand } from '../types';
import { 
  Globe, 
  Menu, 
  X, 
  Building2, 
  Globe2, 
  Zap, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';

interface NavbarProps {
  lang: Language;
  activeBrand: ActiveBrand;
  onBrandChange: (brand: ActiveBrand) => void;
  onLanguageChange: (lang: Language) => void;
  onOpenCopilot: () => void;
  onOpenRFP: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  activeBrand,
  onBrandChange,
  onLanguageChange,
  onOpenCopilot,
  onOpenRFP,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Contextual links based on active brand
  const getNavLinks = () => {
    if (activeBrand === 'reach-today') {
      return [
        { href: '#', labelJa: 'トップ', labelEn: 'Home' },
        { href: '#mission', labelJa: 'ミッション・理念', labelEn: 'Mission' },
        { href: '#powered-by-reanow', labelJa: 'Reanow連動', labelEn: 'Powered by Reanow' },
        { href: '#chapters', labelJa: '世界支部・サミット', labelEn: 'Chapters & Summits' },
        { href: '#cta', labelJa: '参加・提携', labelEn: 'Join & Partner' },
      ];
    }
    if (activeBrand === 'reanow') {
      return [
        { href: '#', labelJa: 'トップ', labelEn: 'Home' },
        { href: '#features', labelJa: '4大統治システム', labelEn: 'Features' },
        { href: '#factions', labelJa: '3大所属勢力', labelEn: 'Factions' },
        { href: '#milestones', labelJa: '事前登録特典', labelEn: 'Milestones' },
      ];
    }
    // Default Qua Corporate
    return [
      { href: '#ventures', labelJa: '新規事業（Reanow/Reach）', labelEn: 'Flagship Ventures' },
      { href: '#applications', labelJa: 'アプリ開発・事業内容', labelEn: 'Apps & Services' },
      { href: '#philosophy', labelJa: '企業理念', labelEn: 'Philosophy' },
      { href: '#qua-core-matrix', labelJa: '量子ビットUIデモ', labelEn: 'Qubit UI' },
      { href: '#copilot', labelJa: 'Q&A ボット', labelEn: 'Q&A Bot' },
      { href: '#corporate', labelJa: '会社概要・登記', labelEn: 'Company Info' },
      { href: '#news', labelJa: 'お知らせ', labelEn: 'News' },
    ];
  };

  const navLinks = getNavLinks();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* 1. Global Multi-Brand Switcher Top Bar */}
      <div className="bg-[#04070f] border-b border-slate-800/80 text-xs py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
            <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider hidden sm:inline">
              QUA NETWORK:
            </span>

            {/* Brand 1: Qua LLC Corporate */}
            <button
              onClick={() => onBrandChange('qua')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                activeBrand === 'qua'
                  ? 'bg-blue-600/30 text-sky-200 border border-blue-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Building2 className="w-3.5 h-3.5 text-blue-400" />
              <span>{lang === 'ja' ? 'Qua合同会社（親会社）' : 'Qua LLC (Corporate)'}</span>
            </button>

            {/* Brand 2: Reach Today Movement */}
            <button
              onClick={() => onBrandChange('reach-today')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                activeBrand === 'reach-today'
                  ? 'bg-emerald-500/25 text-emerald-200 border border-emerald-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-emerald-300 hover:bg-slate-900'
              }`}
            >
              <Globe2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>{lang === 'ja' ? 'Reach Today（教育ムーブメント）' : 'Reach Today (Movement)'}</span>
            </button>

            {/* Brand 3: Reanow App */}
            <button
              onClick={() => onBrandChange('reanow')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                activeBrand === 'reanow'
                  ? 'bg-cyan-500/25 text-cyan-200 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-cyan-300 hover:bg-slate-900'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span>{lang === 'ja' ? 'Reanow（MMO-SNSアプリ）' : 'Reanow (App LP)'}</span>
            </button>
          </div>

          {/* Quick Cross-Indicator */}
          <div className="hidden md:flex items-center gap-3 text-[11px] text-slate-400">
            <span className="font-mono text-slate-500">3-BRAND INTEGRATED PLATFORM</span>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div
        className={`transition-colors duration-200 ${
          scrolled
            ? 'bg-[#070b14]/95 backdrop-blur-md border-b border-slate-800/80 py-3'
            : 'bg-[#070b14]/85 backdrop-blur-sm border-b border-white/5 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo Lockup */}
          <div className="flex items-center gap-3">
            {activeBrand === 'qua' && (
              <a href="#" className="flex items-center focus:outline-none">
                <QuaLogo size="sm" showText={true} subtitle="" />
              </a>
            )}

            {activeBrand === 'reach-today' && (
              <div 
                onClick={() => onBrandChange('reach-today')}
                className="flex items-center gap-2.5 cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-slate-950 font-black text-sm shadow-md shadow-emerald-500/20">
                  RT
                </div>
                <div>
                  <div className="font-display font-extrabold text-base tracking-tight text-white leading-none">
                    Reach Today
                  </div>
                  <div className="text-[10px] text-emerald-400 font-mono">
                    GLOBAL YOUTH CIVIC MOVEMENT
                  </div>
                </div>
              </div>
            )}

            {activeBrand === 'reanow' && (
              <div 
                onClick={() => onBrandChange('reanow')}
                className="flex items-center gap-2.5 cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-400 via-sky-500 to-fuchsia-500 p-0.5 shadow-md shadow-cyan-500/20">
                  <div className="w-full h-full bg-slate-950 rounded-[6px] flex items-center justify-center text-cyan-300 font-mono font-black text-xs">
                    RN
                  </div>
                </div>
                <div>
                  <div className="font-display font-black text-base tracking-wider text-white leading-none uppercase">
                    REANOW
                  </div>
                  <div className="text-[10px] text-pink-400 font-mono">
                    MMO GEOPOLITICAL SIMULATION
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href + link.labelEn}
                href={link.href}
                className="hover:text-white transition-colors whitespace-nowrap py-1 border-b-2 border-transparent hover:border-sky-400"
              >
                {lang === 'ja' ? link.labelJa : link.labelEn}
              </a>
            ))}
          </nav>

          {/* Actions & Language Switch */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onLanguageChange(lang === 'ja' ? 'en' : 'ja')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-medium text-slate-200 border border-slate-700/80 transition-colors cursor-pointer whitespace-nowrap"
              title="Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-sky-400" />
              <span>{lang === 'ja' ? 'EN' : '日本語'}</span>
            </button>

            {activeBrand === 'reach-today' ? (
              <button
                onClick={onOpenRFP}
                className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer whitespace-nowrap shadow-sm"
              >
                {lang === 'ja' ? '参加・サミット登録' : 'Join Summit'}
              </button>
            ) : activeBrand === 'reanow' ? (
              <button
                onClick={onOpenRFP}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs transition-all cursor-pointer whitespace-nowrap shadow-sm shadow-cyan-500/20"
              >
                {lang === 'ja' ? '事前登録する' : 'Pre-Register'}
              </button>
            ) : (
              <button
                onClick={onOpenRFP}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors cursor-pointer whitespace-nowrap shadow-sm"
              >
                {lang === 'ja' ? 'お問い合わせ・開発相談' : 'Contact & Inquiry'}
              </button>
            )}
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onLanguageChange(lang === 'ja' ? 'en' : 'ja')}
              className="px-2.5 py-1 rounded-lg bg-slate-900 text-xs text-slate-200 border border-slate-700"
            >
              {lang === 'ja' ? 'EN' : 'JA'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg bg-slate-900 text-slate-200 focus:outline-none border border-slate-700"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-[#080d19] border-b border-slate-800 px-4 pt-3 pb-6 mt-2 space-y-4">
            <div className="pb-3 border-b border-slate-800">
              <div className="text-[10px] font-mono text-slate-400 uppercase mb-2">ブランド切替:</div>
              <div className="grid grid-cols-3 gap-1.5">
                <button
                  onClick={() => { onBrandChange('qua'); setMobileMenuOpen(false); }}
                  className={`p-2 rounded text-[11px] font-medium text-center ${activeBrand === 'qua' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-300'}`}
                >
                  Qua合同会社
                </button>
                <button
                  onClick={() => { onBrandChange('reach-today'); setMobileMenuOpen(false); }}
                  className={`p-2 rounded text-[11px] font-medium text-center ${activeBrand === 'reach-today' ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-slate-900 text-slate-300'}`}
                >
                  Reach Today
                </button>
                <button
                  onClick={() => { onBrandChange('reanow'); setMobileMenuOpen(false); }}
                  className={`p-2 rounded text-[11px] font-medium text-center ${activeBrand === 'reanow' ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-900 text-slate-300'}`}
                >
                  Reanow
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800">
              {navLinks.map((link) => (
                <a
                  key={link.href + link.labelEn}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg bg-slate-900/60 hover:bg-slate-800 text-xs text-slate-300 hover:text-white"
                >
                  {lang === 'ja' ? link.labelJa : link.labelEn}
                </a>
              ))}
            </div>

            <button
              onClick={() => {
                onOpenRFP();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-lg bg-blue-600 text-white font-semibold text-xs text-center"
            >
              {lang === 'ja' ? 'お問い合わせ・相談' : 'Inquire Now'}
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
