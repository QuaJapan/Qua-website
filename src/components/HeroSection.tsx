import React from 'react';
import { QuaLogo } from './QuaLogo';
import { Language } from '../types';
import { 
  ArrowRight, 
  ShieldCheck, 
  Code2, 
  Layers, 
  Cpu, 
  Radio, 
  BookOpenCheck, 
  CheckCircle2 
} from 'lucide-react';

interface HeroSectionProps {
  lang: Language;
  onOpenCopilot: () => void;
  onOpenRFP: () => void;
  onExploreEcosystem: () => void;
  onViewRegistry: () => void;
  onExploreQuantum: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  onOpenRFP,
  onExploreEcosystem,
  onViewRegistry,
}) => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-24 border-b border-slate-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Corporate Identity & Registry Verification Row */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-slate-400 mb-8 font-sans">
          <span className="font-semibold text-slate-200">
            {lang === 'ja' ? 'Qua合同会社 (Qua LLC)' : 'Qua LLC (Official Corporate Site)'}
          </span>
          <span aria-hidden="true">·</span>
          <span>
            {lang === 'ja' ? 'Web・AIアプリケーション企画・設計・開発' : 'Web & AI Application Engineering'}
          </span>
          <span aria-hidden="true">·</span>
          <button
            onClick={onViewRegistry}
            className="text-sky-400 hover:text-sky-300 inline-flex items-center gap-1 underline underline-offset-4 cursor-pointer transition-colors"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>{lang === 'ja' ? '法人番号：0100-03-051369（法務局登記済）' : 'Corporate No. 0100-03-051369 (Verified)'}</span>
          </button>
        </div>

        {/* Main Hero Content */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Official 3D Orbital "Qua" Logo (Vertical Lockup Matching Uploaded Design) */}
          <div className="flex justify-center mb-8">
            <div className="px-10 py-6 rounded-3xl bg-[#0b1120]/90 border border-slate-800/90 shadow-2xl">
              <QuaLogo size="hero" showText={true} layout="vertical" />
            </div>
          </div>

          {/* English Vision Sub-kicker */}
          <p className="text-xs sm:text-sm font-mono-tech tracking-widest text-sky-400 mb-3">
            Creating the Future of the Frontier.
          </p>

          {/* Main Display Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white mb-6 leading-[1.18] [text-wrap:balance]">
            {lang === 'ja' ? (
              <>次世代のアプリケーションを創り出す。</>
            ) : (
              <>Creating Next-Generation Applications.</>
            )}
          </h1>

          {/* Clear, Grounded Corporate Description */}
          <p className="text-sm sm:text-lg text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-sans">
            {lang === 'ja' ? (
              <>
                <strong className="text-white font-semibold">Qua合同会社（Qua LLC）</strong>は、革命的英単語・語学単語学習アプリ『<strong className="text-sky-300">EitangoNihongo</strong>』や現在開発中の次世代SNS『<strong className="text-slate-200">Paralmeet</strong>』（Upcoming / Developing）をはじめとする自社アプリケーションの企画・開発、および法人・事業者様向けのソフトウェア受託開発を行うテクノロジー企業です。
              </>
            ) : (
              <>
                <strong className="text-white font-semibold">Qua LLC</strong> is a software development company building innovative applications—led by <strong className="text-sky-300">EitangoNihongo</strong>, our revolutionary English and language vocabulary learning app, and <strong className="text-slate-200">Paralmeet</strong>, our upcoming next-gen social network (Upcoming / Developing)—alongside custom software engineering for corporate clients.
              </>
            )}
          </p>

          {/* Primary & Secondary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
              onClick={onExploreEcosystem}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md whitespace-nowrap"
            >
              <span>{lang === 'ja' ? '新規事業・開発アプリを見る' : 'Explore Ventures & Applications'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenRFP}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              {lang === 'ja' ? 'アプリ開発・協業のご相談' : 'Inquire About App Development'}
            </button>
          </div>

          {/* Strategic Flagship Teaser Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-700/80 text-xs text-slate-300 mb-12 shadow-inner">
            <span className="font-semibold text-sky-400">FOCUS VENTURES:</span>
            <span>{lang === 'ja' ? '『Reach Today（主権者教育）』＆『Reanow（模擬世界MMO-SNS）』極秘開発推進中' : 'Developing Reach Today (Youth Civics) & Reanow (MMO Geopolitics)'}</span>
          </div>
        </div>

        {/* 3 Core Pillars of Qua's Application Development Business */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {/* Pillar 1 */}
          <div className="p-6 rounded-2xl bg-[#0b1120] border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono-tech font-semibold text-sky-400">01. In-House Products</span>
                <Layers className="w-5 h-5 text-sky-400" />
              </div>
              <h2 className="text-base sm:text-lg font-bold text-white mb-2">
                {lang === 'ja' ? '自社アプリケーションの企画・開発' : 'In-House Application Development'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {lang === 'ja'
                  ? '革命的英単語・語学単語学習アプリ「EitangoNihongo」の運営・提供と、次世代SNS「Paralmeet」（Upcoming / Developing）をはじめとする自社プロダクトの開発を推進しています。'
                  : 'Operating our revolutionary vocabulary & language learning app EitangoNihongo, while developing our upcoming next-gen social network Paralmeet.'}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5 text-sky-300 font-medium">
                <BookOpenCheck className="w-3.5 h-3.5 text-sky-400" />
                EitangoNihongo
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1.5 text-slate-300">
                <Radio className="w-3.5 h-3.5 text-slate-400" />
                Paralmeet (Upcoming)
              </span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 rounded-2xl bg-[#0b1120] border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono-tech font-semibold text-sky-400">02. Custom Engineering</span>
                <Code2 className="w-5 h-5 text-sky-400" />
              </div>
              <h2 className="text-base sm:text-lg font-bold text-white mb-2">
                {lang === 'ja' ? '受託アプリ開発・システム設計' : 'Custom Software & App Engineering'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {lang === 'ja'
                  ? '業務効率化システム、新規Webサービス、スマートフォン対応Webアプリなど、要件定義・UI/UX設計からフロントエンド・バックエンド実装、保守まで一貫して対応します。'
                  : 'Full-lifecycle software engineering for corporate clients—from requirements definition and UI/UX design to React/TypeScript implementation and maintenance.'}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 text-xs text-slate-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>{lang === 'ja' ? '要件定義・UI/UX設計・実装・保守対応' : 'End-to-End Design, Build & Maintenance'}</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 rounded-2xl bg-[#0b1120] border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono-tech font-semibold text-sky-400">03. AI & Interactive UI</span>
                <Cpu className="w-5 h-5 text-sky-400" />
              </div>
              <h2 className="text-base sm:text-lg font-bold text-white mb-2">
                {lang === 'ja' ? 'AI組み込み開発・インタラクティブUI' : 'AI Integration & Interactive UI R&D'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {lang === 'ja'
                  ? '大規模言語モデル（LLM）を活用したQ&Aボット・語学学習支援エンジンの構築や、量子ビット（Qubit）モデル等をブラウザ上で直感的に操作できる教育・科学系UIを開発しています。'
                  : 'Building LLM-powered Q&A bots, language learning systems, and interactive browser-based visualizers such as our online Qubit model interface.'}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 text-xs text-slate-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>{lang === 'ja' ? 'サイト内で量子ビットUI・Q&Aボットを公開中' : 'Live Qubit UI & Q&A Bot Available Below'}</span>
            </div>
          </div>
        </div>

        {/* Corporate Fact Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto p-5 rounded-2xl bg-[#090e1a] border border-slate-800/90">
          <div className="border-r border-slate-800/80 pr-3 last:border-r-0">
            <div className="text-xs text-slate-400">{lang === 'ja' ? '商号・法人格' : 'Legal Entity'}</div>
            <div className="text-sm font-bold text-white mt-1">
              {lang === 'ja' ? 'Qua合同会社 (Qua LLC)' : 'Qua LLC'}
            </div>
            <div className="text-[11px] text-slate-400 font-mono-tech tabular-nums mt-0.5">
              {lang === 'ja' ? '代表社員：神保 想叶' : 'Rep. Partner: Soya Jimbo'}
            </div>
          </div>

          <div className="border-r border-slate-800/80 pr-3 last:border-r-0">
            <div className="text-xs text-slate-400">{lang === 'ja' ? '会社法人等番号' : 'Corporate Number'}</div>
            <div className="text-sm font-bold text-white font-mono-tech tabular-nums mt-1">
              0100-03-051369
            </div>
            <div className="text-[11px] text-emerald-400 mt-0.5">
              {lang === 'ja' ? '法務局設立登記済（令和8年5月8日）' : 'Registered May 8, 2026'}
            </div>
          </div>

          <div className="border-r border-slate-800/80 pr-3 last:border-r-0">
            <div className="text-xs text-slate-400">{lang === 'ja' ? '主力アプリケーション' : 'Flagship App'}</div>
            <div className="text-sm font-bold text-sky-400 mt-1">
              EitangoNihongo
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              {lang === 'ja' ? '革命的英単語・語学単語学習アプリ' : 'Revolutionary Vocabulary App'}
            </div>
          </div>

          <div>
            <div className="text-xs text-slate-400">{lang === 'ja' ? '開発中プロダクト' : 'In Development'}</div>
            <div className="text-sm font-bold text-white mt-1">
              Paralmeet
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              {lang === 'ja' ? '次世代SNS (Upcoming / Developing)' : 'Next-Gen SNS (Upcoming / Developing)'}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
