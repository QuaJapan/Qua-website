import React from 'react';
import { QuaLogo } from './QuaLogo';
import { Language, ActiveBrand } from '../types';
import { OFFICIAL_CORPORATE_DATA } from '../data/corporateData';
import { ArrowUp, Mail, Globe2, Zap, Building2, ExternalLink } from 'lucide-react';

interface FooterProps {
  lang: Language;
  activeBrand: ActiveBrand;
  onBrandChange: (brand: ActiveBrand) => void;
  onOpenRFP: () => void;
  onOpenCopilot: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  lang, 
  activeBrand, 
  onBrandChange, 
  onOpenRFP, 
  onOpenCopilot 
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#04070f] border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
        
        {/* Brand Network Portal Strip */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest mb-1">
                QUA GROUP MULTI-BRAND ECOSYSTEM
              </div>
              <div className="text-white font-bold text-sm">
                {lang === 'ja' ? '3つのブランドを相互に切り替えてご覧いただけます' : 'Explore the 3 integrated brands governed by Qua LLC'}
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => onBrandChange('qua')}
                className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeBrand === 'qua'
                    ? 'bg-blue-600/30 border-blue-400 text-white'
                    : 'bg-slate-950 border-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                <Building2 className="w-3.5 h-3.5 text-blue-400" />
                <span>Qua合同会社 (親会社)</span>
              </button>

              <button
                onClick={() => onBrandChange('reach-today')}
                className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeBrand === 'reach-today'
                    ? 'bg-emerald-500/30 border-emerald-400 text-white'
                    : 'bg-slate-950 border-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                <Globe2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Reach Today (ムーブメント)</span>
              </button>

              <button
                onClick={() => onBrandChange('reanow')}
                className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeBrand === 'reanow'
                    ? 'bg-cyan-500/30 border-cyan-400 text-white'
                    : 'bg-slate-950 border-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
                <span>Reanow (MMO-SNSアプリ)</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Col 1 & 2: Brand Identity & Corporate Info */}
          <div className="lg:col-span-2 space-y-3">
            <QuaLogo size="sm" subtitle={lang === 'ja' ? 'Qua合同会社' : 'Qua LLC'} />
            
            <p className="text-slate-300 text-xs leading-relaxed max-w-sm font-sans">
              {lang === 'ja'
                ? 'Qua合同会社（Qua LLC）は、バックエンドの運営・IP保有法人として、グローバル主権者教育ムーブメント『Reach Today』、次世代MMO-SNS『Reanow』、革命的英単語アプリ『EitangoNihongo』、次世代SNS『Paralmeet』の企画・開発を推進しています。'
                : 'Qua LLC is the governing entity and technology IP holder behind Reach Today, Reanow, EitangoNihongo, and Paralmeet.'}
            </p>

            <div className="pt-2 text-[11px] font-mono-tech tabular-nums text-slate-400 space-y-1">
              <div>{lang === 'ja' ? '商号：Qua合同会社 (Qua LLC)' : 'Entity: Qua LLC'}</div>
              <div>{lang === 'ja' ? `法人番号：${OFFICIAL_CORPORATE_DATA.corporateNumber}` : `Corp No.: ${OFFICIAL_CORPORATE_DATA.corporateNumber}`}</div>
              <div>{lang === 'ja' ? `設立：${OFFICIAL_CORPORATE_DATA.establishedDateJa}` : `Est.: ${OFFICIAL_CORPORATE_DATA.establishedDateEn}`}</div>
              <div>{lang === 'ja' ? `代表社員：${OFFICIAL_CORPORATE_DATA.representativeJa}` : `Representative: ${OFFICIAL_CORPORATE_DATA.representativeEn}`}</div>
            </div>
          </div>

          {/* Col 3: Strategic Flagship Brands */}
          <div>
            <div className="font-display font-bold text-white text-xs mb-3 tracking-wide">
              {lang === 'ja' ? '3大ブランド・事業' : 'Core Brand Entities'}
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onBrandChange('qua')} className="hover:text-white text-left transition-colors cursor-pointer">
                  Qua合同会社 コーポレート
                </button>
              </li>
              <li>
                <button onClick={() => onBrandChange('reach-today')} className="text-emerald-400 hover:text-emerald-300 text-left transition-colors cursor-pointer flex items-center gap-1">
                  <span>Reach Today 公式LP</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </li>
              <li>
                <button onClick={() => onBrandChange('reanow')} className="text-cyan-400 hover:text-cyan-300 text-left transition-colors cursor-pointer flex items-center gap-1">
                  <span>Reanow アプリLP</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </li>
              <li><span className="text-slate-300">EitangoNihongo（英単語学習）</span></li>
              <li><span className="text-slate-500">Paralmeet（次世代SNS · Developing）</span></li>
            </ul>
          </div>

          {/* Col 4: Corporate Governance & Assets */}
          <div>
            <div className="font-display font-bold text-white text-xs mb-3 tracking-wide">
              {lang === 'ja' ? '技術・企業ガバナンス' : 'Technology & Governance'}
            </div>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => onBrandChange('qua')} className="hover:text-white text-left transition-colors cursor-pointer">{lang === 'ja' ? '量子ビット(Qubit) UI' : 'Online Qubit UI'}</button></li>
              <li><button onClick={onOpenCopilot} className="hover:text-white text-left transition-colors cursor-pointer">{lang === 'ja' ? '公式 Q&A AIボット' : 'Official Q&A AI Bot'}</button></li>
              <li><button onClick={() => onBrandChange('qua')} className="hover:text-white text-left transition-colors cursor-pointer">{lang === 'ja' ? '企業理念・開発ロードマップ' : 'Philosophy & Roadmap'}</button></li>
              <li><button onClick={() => onBrandChange('qua')} className="hover:text-white text-left transition-colors cursor-pointer">{lang === 'ja' ? '会社概要・登記情報' : 'Corporate Registry'}</button></li>
              <li><button onClick={() => onBrandChange('qua')} className="hover:text-white text-left transition-colors cursor-pointer">{lang === 'ja' ? 'ニュース・お知らせ' : 'News & Releases'}</button></li>
            </ul>
          </div>

          {/* Col 5: Direct Contact */}
          <div>
            <div className="font-display font-bold text-white text-xs mb-3 tracking-wide">
              {lang === 'ja' ? '総合窓口・相談' : 'Inquiries & Desk'}
            </div>
            <div className="space-y-3 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a href={`mailto:${OFFICIAL_CORPORATE_DATA.contactEmail}`} className="hover:text-white font-mono-tech break-all">
                  {OFFICIAL_CORPORATE_DATA.contactEmail}
                </a>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                {lang === 'ja'
                  ? '投資相談、Reach Today学校導入、Reanow協業、受託システム開発のお問い合わせを受け付けています。'
                  : 'Inquiries for investment, Reach Today education kits, Reanow partnerships, and custom engineering.'}
              </p>
              <div>
                <button
                  onClick={onOpenRFP}
                  className="w-full py-2.5 px-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors cursor-pointer whitespace-nowrap"
                >
                  {lang === 'ja' ? '総合お問い合わせ・相談' : 'Contact Qua Group'}
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-4">
          <div className="flex items-center gap-2">
            <span>© 2026 Qua合同会社 / Qua LLC. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span>Reach Today™ · Reanow™ · EitangoNihongo™</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>{lang === 'ja' ? 'ページ上部へ' : 'Back to top'}</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
