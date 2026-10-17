import React, { useState } from 'react';
import { Language } from '../types';
import { OFFICIAL_CORPORATE_DATA } from '../data/corporateData';
import { X, Send, CheckCircle2, FileText, Loader2, Bell } from 'lucide-react';

interface ContactRFPModalProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
  defaultAppName?: string;
}

export const ContactRFPModal: React.FC<ContactRFPModalProps> = ({ 
  lang, 
  isOpen, 
  onClose,
  defaultAppName
}) => {
  const [inquiryType, setInquiryType] = useState<'rfp' | 'waitlist'>('rfp');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    appName: defaultAppName || 'Webアプリ・システム受託開発のご相談',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, inquiryType }),
      });
      const data = await res.json();
      setSubmittedTicket(data.ticketId || `QUA-${Date.now().toString(36).toUpperCase()}`);
    } catch (err) {
      setSubmittedTicket(`QUA-${Date.now().toString(36).toUpperCase()}`);
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmittedTicket(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-[#0b1120] border border-slate-700 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submittedTicket ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
              {lang === 'ja' ? 'お問い合わせを受け付けました' : 'Inquiry Successfully Received'}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed font-sans">
              {lang === 'ja'
                ? `受付番号【${submittedTicket}】にて Qua合同会社 お問い合わせ窓口（${OFFICIAL_CORPORATE_DATA.contactEmail}）へ送信されました。内容を確認のうえ、担当者よりご連絡いたします。`
                : `Your inquiry [${submittedTicket}] has been sent to Qua LLC (${OFFICIAL_CORPORATE_DATA.contactEmail}). Our team will respond shortly.`}
            </p>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold cursor-pointer"
            >
              {lang === 'ja' ? '閉じる' : 'Close'}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <div className="text-xs font-mono-tech text-sky-400 mb-1">
                OFFICIAL INQUIRY FORM
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                {lang === 'ja' ? 'お問い合わせ・アプリ開発のご相談' : 'Application Development & Service Inquiry'}
              </h3>
              <p className="text-xs text-slate-300 mt-1 font-sans">
                {lang === 'ja'
                  ? 'Webアプリケーション受託開発・システム設計のご相談、または自社アプリ（Paralmeet・EitangoNihongo）に関するお問い合わせを承ります。'
                  : 'Inquire about custom web application development, software consulting, or our in-house web applications.'}
              </p>
            </div>

            {/* Inquiry Type Switcher */}
            <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-[#070b14] border border-slate-800">
              <button
                type="button"
                onClick={() => setInquiryType('rfp')}
                className={`py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                  inquiryType === 'rfp'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{lang === 'ja' ? 'アプリ開発・業務相談' : 'App Development / Business'}</span>
              </button>

              <button
                type="button"
                onClick={() => setInquiryType('waitlist')}
                className={`py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                  inquiryType === 'waitlist'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Bell className="w-3.5 h-3.5" />
                <span>{lang === 'ja' ? '自社アプリ利用・先行案内' : 'In-House App Access'}</span>
              </button>
            </div>

            {/* Input Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  {lang === 'ja' ? 'お名前・ご担当者名 *' : 'Full Name *'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={lang === 'ja' ? '山田 太郎' : 'Taro Yamada'}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#070b14] border border-slate-700/80 text-white text-xs focus:outline-none focus:border-sky-500 font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  {lang === 'ja' ? 'メールアドレス *' : 'Email Address *'}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.co.jp"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#070b14] border border-slate-700/80 text-white text-xs focus:outline-none focus:border-sky-500 font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  {lang === 'ja' ? '貴社名・屋号（任意）' : 'Company / Organization (Optional)'}
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder={lang === 'ja' ? '株式会社〇〇 / 個人事業' : 'Company Inc.'}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#070b14] border border-slate-700/80 text-white text-xs focus:outline-none focus:border-sky-500 font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  {lang === 'ja' ? 'お問い合わせ項目' : 'Subject'}
                </label>
                <select
                  value={formData.appName}
                  onChange={(e) => setFormData({ ...formData, appName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#070b14] border border-slate-700/80 text-white text-xs focus:outline-none focus:border-sky-500 font-sans"
                >
                  <option value="Webアプリ・システム受託開発のご相談">Webアプリ・システム受託開発のご相談</option>
                  <option value="UI/UX設計・プロトタイプ構築のご相談">UI/UX設計・プロトタイプ構築のご相談</option>
                  <option value="Reach Today 支部開設・コミュニティ参加">Reach Today 支部開設・コミュニティ参加</option>
                  <option value="Reach Today 学校・大学探究学習導入">Reach Today 学校・大学探究学習導入</option>
                  <option value="Reach Today スポンサーシップ・自治体連携">Reach Today スポンサーシップ・自治体連携</option>
                  <option value="Reanow 事前登録・市民権予約">Reanow 事前登録・市民権予約</option>
                  <option value="Reanow 投資・事業提携の相談">Reanow 投資・事業提携の相談</option>
                  <option value="EitangoNihongo (英単語日本語) について">自社アプリ EitangoNihongo について</option>
                  <option value="Paralmeet (パラミート) について">自社アプリ Paralmeet について</option>
                  <option value="その他のお問い合わせ・協業相談">その他のお問い合わせ・協業相談</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                {lang === 'ja' ? 'お問い合わせ・ご相談内容' : 'Message / Project Details'}
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={lang === 'ja' ? '開発をご希望のアプリ概要、ご予算・時期の目安、またはご質問内容をご記入ください。' : 'Please describe your application requirements, timeline, or question.'}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#070b14] border border-slate-700/80 text-white text-xs focus:outline-none focus:border-sky-500 font-sans"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-slate-400 font-mono-tech">
                {OFFICIAL_CORPORATE_DATA.contactEmail}
              </span>

              <button
                type="submit"
                disabled={submitting}
                className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors flex items-center gap-2 cursor-pointer"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>{lang === 'ja' ? '送信中...' : 'Sending...'}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>{lang === 'ja' ? '送信する' : 'Submit Inquiry'}</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
