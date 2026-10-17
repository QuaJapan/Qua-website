import React from 'react';
import { Language } from '../types';
import { QUA_BRAND_STORY } from '../data/corporateData';
import { 
  ArrowRight, 
  Code2, 
  Globe2, 
  Radio, 
  BookOpenCheck, 
  CheckCircle2 
} from 'lucide-react';

interface QuaPhilosophyStoryProps {
  lang: Language;
  onOpenRFP: () => void;
}

export const QuaPhilosophyStory: React.FC<QuaPhilosophyStoryProps> = ({ lang, onOpenRFP }) => {
  const evolutionPhases = [
    {
      phase: "Phase 01",
      statusJa: "現在運営・継続開発中",
      statusEn: "Active Flagship",
      titleJa: "革命的英単語・語学単語学習アプリの提供",
      titleEn: "Revolutionary Vocabulary Learning App",
      descJa: "文脈・ニュアンス・語源・最適反復を統合した革命的英単語・語学単語学習アプリ『EitangoNihongo』の開発・運営。",
      descEn: "Operating EitangoNihongo, our revolutionary English and language vocabulary learning application.",
      icon: BookOpenCheck,
    },
    {
      phase: "Phase 02",
      statusJa: "Upcoming / Developing",
      statusEn: "Upcoming / Developing",
      titleJa: "次世代SNS『Paralmeet』の開発",
      titleEn: "Next-Gen SNS 'Paralmeet'",
      descJa: "新しいソーシャル体験を実現する次世代SNSプロジェクト『Paralmeet』およびクリエイティブ支援ツールの企画・開発。（Upcoming / Developing）",
      descEn: "Developing our upcoming next-generation social networking platform Paralmeet and creator tools.",
      icon: Radio,
    },
    {
      phase: "Phase 03",
      statusJa: "受託・協業展開中",
      statusEn: "Client Engineering",
      titleJa: "法人・事業者向けアプリ・システム受託開発",
      titleEn: "Custom App & System Development",
      descJa: "自社プロダクト開発で培ったフロントエンド・バックエンド・AI連携の実装力を活かし、クライアント企業のWebアプリ・業務システムを構築。",
      descEn: "Delivering custom web applications, business systems, and UI/UX engineering for corporate clients.",
      icon: Code2,
    },
    {
      phase: "Phase 04",
      statusJa: "研究開発 (R&D)",
      statusEn: "R&D Horizon",
      titleJa: "量子ビットUI・先端技術ソフトウェアの社会実装",
      titleEn: "Advanced UI & Software R&D",
      descJa: "量子ビット（Qubit）モデル等のインタラクティブUIや、AIワークフロー・空間データ可視化技術など、次世代領域のソフトウェア研究開発。",
      descEn: "Researching interactive scientific visualizers, AI workflows, and spatial web interfaces.",
      icon: Globe2,
    }
  ];

  return (
    <section id="philosophy" className="py-20 sm:py-28 relative border-b border-slate-800/80 bg-[#060a12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono-tech text-sky-400 mb-2">
            CORPORATE PHILOSOPHY &amp; VISION
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight leading-tight">
            {lang === 'ja' ? QUA_BRAND_STORY.originTitleJa : QUA_BRAND_STORY.originTitleEn}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed font-sans">
            {lang === 'ja' ? QUA_BRAND_STORY.originSummaryJa : QUA_BRAND_STORY.originSummaryEn}
          </p>
        </div>

        {/* 4 Pillars of Qua Development Ethos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {QUA_BRAND_STORY.etymologyJa.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0b1120] border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-display font-bold text-white mb-1.5">
                  {pillar.root}
                </h3>
                <div className="text-xs font-medium text-sky-400 mb-3">
                  {lang === 'ja' ? pillar.meaningJa : pillar.meaningEn}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {lang === 'ja' ? pillar.descriptionJa : pillar.descriptionEn}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Business & Application Development Roadmap */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-[#0b1120] border border-slate-800">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-5 border-b border-slate-800 gap-4">
            <div>
              <div className="text-xs font-mono-tech text-sky-400 mb-1">
                BUSINESS &amp; PRODUCT ROADMAP
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                {lang === 'ja' ? '事業展開とアプリケーション開発計画' : 'Business Expansion & Application Development Roadmap'}
              </h3>
            </div>
            <div className="text-xs text-slate-400">
              {lang === 'ja' ? '着実なソフトウェア開発と段階的な事業領域の拡大' : 'Phased Software Engineering & Business Growth'}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {evolutionPhases.map((phase, i) => {
              const IconComponent = phase.icon;
              return (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-[#070b14] border border-slate-800/90 flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono-tech font-bold text-sky-400">{phase.phase}</span>
                      <span className="text-slate-400 text-[11px]">
                        {lang === 'ja' ? phase.statusJa : phase.statusEn}
                      </span>
                    </div>

                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 w-fit text-sky-400">
                      <IconComponent className="w-4 h-4" />
                    </div>

                    <h4 className="text-sm font-bold text-white leading-snug">
                      {lang === 'ja' ? phase.titleJa : phase.titleEn}
                    </h4>

                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      {lang === 'ja' ? phase.descJa : phase.descEn}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{lang === 'ja' ? '重点取り組み領域' : 'Core Initiative'}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Corporate Commitment Statement Banner */}
        <div className="rounded-2xl bg-[#0b1120] border border-slate-800 p-6 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="text-xs font-mono-tech text-sky-400">
                OUR ENGINEERING COMMITMENT
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                {lang === 'ja' ? QUA_BRAND_STORY.aiVisionTitleJa : QUA_BRAND_STORY.aiVisionTitleEn}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                {lang === 'ja' ? QUA_BRAND_STORY.aiVisionSummaryJa : QUA_BRAND_STORY.aiVisionSummaryEn}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href="#applications"
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span>{lang === 'ja' ? '開発アプリ・サービス一覧へ' : 'View Applications & Services'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenRFP}
                className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white text-xs font-semibold border border-slate-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                {lang === 'ja' ? 'アプリ開発・協業のお問い合わせ' : 'Inquire About Development'}
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
