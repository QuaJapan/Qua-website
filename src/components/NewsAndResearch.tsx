import React, { useState } from 'react';
import { Language, NewsItem } from '../types';
import { CORPORATE_NEWS } from '../data/corporateData';
import { ArrowUpRight, X } from 'lucide-react';

interface NewsAndResearchProps {
  lang: Language;
}

export const NewsAndResearch: React.FC<NewsAndResearchProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const categories = [
    { id: 'all', labelJa: 'すべて', labelEn: 'All' },
    { id: 'corporate', labelJa: '企業情報', labelEn: 'Corporate' },
    { id: 'product', labelJa: 'プロダクト', labelEn: 'Product' },
    { id: 'service', labelJa: '事業案内', labelEn: 'Services' },
  ];

  const filteredNews = activeTab === 'all'
    ? CORPORATE_NEWS
    : CORPORATE_NEWS.filter(n => n.category.toLowerCase().includes(activeTab) || n.categoryJa.includes(activeTab));

  return (
    <section id="news" className="py-20 relative border-t border-slate-800/80 bg-[#070b14]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-6 border-b border-slate-800 gap-4">
          <div>
            <div className="text-xs font-mono-tech text-sky-400 mb-1.5">
              NEWS &amp; ANNOUNCEMENTS
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              {lang === 'ja' ? 'ニュース・お知らせ' : 'News & Announcements'}
            </h2>
          </div>

          {/* Interactive Segmented Tab Filter */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-[#0b1120] border border-slate-800 self-start sm:self-auto">
            {categories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {lang === 'ja' ? tab.labelJa : tab.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Clean News List */}
        <div className="divide-y divide-slate-800/80">
          {filteredNews.map((item) => (
            <article
              key={item.id}
              onClick={() => setSelectedNews(item)}
              className="py-5 px-3 sm:px-4 rounded-xl hover:bg-[#0b1120] transition-colors cursor-pointer group flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 justify-between"
            >
              {/* Unboxed Date & Category Metadata */}
              <div className="flex items-center gap-2 text-xs text-slate-400 shrink-0 min-w-[180px]">
                <span className="font-mono-tech tabular-nums text-slate-300">
                  {item.date}
                </span>
                <span aria-hidden="true">·</span>
                <span className="text-sky-400 font-medium">
                  {lang === 'ja' ? item.categoryJa : item.category}
                </span>
              </div>

              {/* Title & Summary */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-sky-400 transition-colors leading-snug">
                  {lang === 'ja' ? item.titleJa : item.titleEn}
                </h3>
                <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                  {lang === 'ja' ? item.summaryJa : item.summaryEn}
                </p>
              </div>

              <div className="hidden md:flex items-center text-slate-500 group-hover:text-sky-400 transition-colors shrink-0">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* News Detail Modal */}
      {selectedNews && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#0b1120] border border-slate-700 rounded-2xl max-w-xl w-full p-6 sm:p-7 shadow-2xl relative max-h-[85vh] overflow-y-auto space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="font-mono-tech tabular-nums text-slate-300">{selectedNews.date}</span>
                <span>·</span>
                <span className="text-sky-400 font-medium">
                  {lang === 'ja' ? selectedNews.categoryJa : selectedNews.category}
                </span>
              </div>
              <button
                onClick={() => setSelectedNews(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h3 className="text-lg sm:text-xl font-display font-bold text-white leading-snug">
              {lang === 'ja' ? selectedNews.titleJa : selectedNews.titleEn}
            </h3>

            <div className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans bg-[#070b14] p-4 rounded-xl border border-slate-800">
              {lang === 'ja' ? selectedNews.summaryJa : selectedNews.summaryEn}
            </div>

            <div className="text-xs text-slate-400 pt-2 flex items-center justify-between">
              <span>{lang === 'ja' ? 'Qua合同会社 広報・お知らせ窓口' : 'Qua LLC Public Relations'}</span>
              <button
                onClick={() => setSelectedNews(null)}
                className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium cursor-pointer"
              >
                {lang === 'ja' ? '閉じる' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
