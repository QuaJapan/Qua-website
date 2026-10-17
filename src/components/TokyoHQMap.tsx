import React from 'react';
import { Language } from '../types';
import { OFFICIAL_CORPORATE_DATA } from '../data/corporateData';
import { Mail, MessageSquareText } from 'lucide-react';

interface TokyoHQMapProps {
  lang: Language;
  onOpenRFP: () => void;
}

export const TokyoHQMap: React.FC<TokyoHQMapProps> = ({ lang, onOpenRFP }) => {
  return (
    <section id="hq" className="py-16 relative border-t border-slate-800/80 bg-[#060a12]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="rounded-2xl bg-[#0b1120] border border-slate-800 p-6 sm:p-8 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            <div className="space-y-2.5">
              <div className="text-xs font-mono-tech text-sky-400">
                CONTACT &amp; INQUIRY DESK
              </div>

              <h3 className="text-lg sm:text-2xl font-display font-bold text-white">
                {lang === 'ja' ? 'アプリケーション開発・事業に関するお問い合わせ' : 'Inquiries Regarding Application Development & Services'}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                {lang === 'ja'
                  ? '自社Webアプリケーション（Paralmeet・EitangoNihongo）に関するご質問、法人・事業者様からのWebアプリ・システム受託開発のご相談、お見積り依頼はオンライン窓口またはメールにて承っております。'
                  : 'For inquiries regarding our active web applications, custom software development estimates, or business partnerships, please contact us via our online form or official email.'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 shrink-0">
              <button
                onClick={onOpenRFP}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <MessageSquareText className="w-3.5 h-3.5" />
                <span>{lang === 'ja' ? 'お問い合わせフォームを開く' : 'Open Inquiry Form'}</span>
              </button>

              <a
                href={`mailto:${OFFICIAL_CORPORATE_DATA.contactEmail}`}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white text-xs font-mono-tech transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                <span>{OFFICIAL_CORPORATE_DATA.contactEmail}</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
