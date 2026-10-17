import React, { useState, useRef, useEffect } from 'react';
import { Language, ChatMessage } from '../types';
import { 
  Send, 
  Bot, 
  User, 
  Loader2, 
  Copy, 
  Check, 
  Trash2, 
  MessageSquare, 
  BookOpenCheck, 
  Code2, 
  Orbit, 
  Building2 
} from 'lucide-react';

interface DeepThinkingCopilotProps {
  lang: Language;
  initialPrompt?: string;
}

export const DeepThinkingCopilot: React.FC<DeepThinkingCopilotProps> = ({
  lang,
  initialPrompt = '',
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      content: lang === 'ja'
        ? `こんにちは。Qua合同会社（Qua LLC）の公式 Q&A AIボットです。

当社の革命的英単語・語学単語学習アプリ『EitangoNihongo』、開発中の次世代SNS『Paralmeet』（Upcoming / Developing）、受託アプリ開発のご相談、会社概要などについて自動でお答えします。

下の質問ボタンをクリックするか、メッセージ入力欄からお気軽にご質問ください。`
        : `Hello! This is the official Q&A AI Bot for Qua LLC.

I can answer questions regarding our revolutionary English & language vocabulary learning app (EitangoNihongo), our upcoming next-gen SNS (Paralmeet), custom software inquiries, and corporate profile.

Click one of the common questions below or type your question directly.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      modelUsed: 'Qua Q&A Bot'
    }
  ]);

  const [inputMessage, setInputMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  useEffect(() => {
    if (initialPrompt) {
      setInputMessage(initialPrompt);
    }
  }, [initialPrompt]);

  const presetQueries = [
    {
      icon: BookOpenCheck,
      categoryJa: '主力公開アプリ',
      categoryEn: 'Flagship App',
      labelJa: 'EitangoNihongo（語学単語学習）とは？',
      labelEn: 'About EitangoNihongo',
      promptJa: '革命的英単語・語学単語学習アプリ「EitangoNihongo」の特徴や、開発中の次世代SNS「Paralmeet」について教えてください。',
      promptEn: 'Tell me about EitangoNihongo (Revolutionary Vocabulary Learning App) and the upcoming Next-Gen SNS Paralmeet.'
    },
    {
      icon: Code2,
      categoryJa: 'アプリ受託開発',
      categoryEn: 'Custom App Dev',
      labelJa: 'Webアプリ開発の依頼・相談について',
      labelEn: 'Custom Web App Development',
      promptJa: '法人や個人事業主からWebアプリケーション開発やシステム構築を依頼する場合、どのような開発領域に対応していますか？',
      promptEn: 'What kind of custom web application development and software engineering services does Qua LLC provide?'
    },
    {
      icon: Orbit,
      categoryJa: 'サイト内デモ機能',
      categoryEn: 'Online Qubit UI',
      labelJa: '量子ビット(Qubit) UIの使い方',
      labelEn: 'How to use the Qubit UI',
      promptJa: 'このサイトにある「量子ビット(Qubit)モデル オンラインUI」はどのような機能で、どう操作すればよいですか？',
      promptEn: 'How does the Online Qubit Model Interactive UI on this website work?'
    },
    {
      icon: Building2,
      categoryJa: '企業情報・登記',
      categoryEn: 'Corporate Profile',
      labelJa: 'Qua合同会社の会社概要・事業目的',
      labelEn: 'Qua LLC Corporate Overview',
      promptJa: 'Qua合同会社の設立日、代表者、法人番号、および定款の事業目的について教えてください。',
      promptEn: 'Please provide the corporate registration details, representative name, and statutory business purposes of Qua LLC.'
    }
  ];

  const handleSendMessage = async (customText?: string) => {
    const textToSend = (customText || inputMessage).trim();
    if (!textToSend || loading) return;

    const userMsgId = `user-${Date.now()}`;
    const userMsg: ChatMessage = {
      id: userMsgId,
      sender: 'user',
      content: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputMessage('');
    setLoading(true);

    try {
      const response = await fetch('/api/copilot/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          thinkingLevel: 'HIGH',
          domain: 'corporate_qa'
        })
      });

      const data = await response.json();
      const assistantMsgId = `assistant-${Date.now()}`;

      const assistantMsg: ChatMessage = {
        id: assistantMsgId,
        sender: 'assistant',
        content: data.reply || (lang === 'ja' ? 'ご質問ありがとうございます。回答を生成いたしました。' : 'Thank you for your question.'),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        modelUsed: 'Qua Q&A Bot'
      };

      setMessages(prev => [...prev, assistantMsg]);
    } catch (error: any) {
      console.error('Error fetching Q&A response:', error);
      const errorMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        sender: 'assistant',
        content: lang === 'ja'
          ? `ただいま応答サーバーへの接続が混み合っております。お急ぎのご用件は公式メール（qua.headquarters@gmail.com）またはお問い合わせフォームよりご連絡ください。`
          : `Unable to reach the Q&A server right now. For urgent inquiries, please contact qua.headquarters@gmail.com.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        modelUsed: 'Qua Q&A Bot'
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const clearChat = () => {
    setMessages([
      {
        id: 'reset',
        sender: 'assistant',
        content: lang === 'ja'
          ? '会話履歴をリセットしました。Qua合同会社の事業やアプリについて、何でもお気軽にお尋ねください。'
          : 'Conversation history cleared. Feel free to ask any question about Qua LLC and our applications.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        modelUsed: 'Qua Q&A Bot'
      }
    ]);
  };

  return (
    <section id="copilot" className="py-20 sm:py-24 relative border-t border-slate-800/80 bg-[#070b14]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs font-mono-tech text-sky-400 mb-2">
            AUTOMATED Q&amp;A ASSISTANT
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-white">
            {lang === 'ja' ? 'Qua 公式 Q&A AIボット' : 'Qua Official Q&A AI Bot'}
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-2.5 leading-relaxed font-sans">
            {lang === 'ja'
              ? '当社のアプリケーション開発事業、革命的英単語・語学単語学習アプリ『EitangoNihongo』、開発中の次世代SNS『Paralmeet』、および会社情報について、AIボットがQ&A形式でわかりやすくお答えします。'
              : 'An automated Q&A AI bot that answers questions about our application development services, EitangoNihongo, Paralmeet, and company information.'}
          </p>
        </div>

        {/* Preset FAQ Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {presetQueries.map((query, idx) => {
            const IconComp = query.icon;
            return (
              <button
                key={idx}
                onClick={() => handleSendMessage(lang === 'ja' ? query.promptJa : query.promptEn)}
                className="text-left p-4 rounded-xl bg-[#0b1120] hover:bg-slate-900 border border-slate-800 hover:border-sky-500/50 transition-colors group flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-medium text-sky-400">
                      {lang === 'ja' ? query.categoryJa : query.categoryEn}
                    </span>
                    <IconComp className="w-4 h-4 text-slate-400 group-hover:text-sky-400 transition-colors" />
                  </div>
                  <div className="font-bold text-xs text-white mb-1 leading-snug">
                    {lang === 'ja' ? query.labelJa : query.labelEn}
                  </div>
                  <div className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed font-sans">
                    {lang === 'ja' ? query.promptJa : query.promptEn}
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-800/80 text-[11px] font-medium text-sky-400 flex items-center gap-1">
                  <span>{lang === 'ja' ? 'この質問を聞く →' : 'Ask Question →'}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Q&A Chat Window */}
        <div className="rounded-2xl bg-[#0b1120] border border-slate-800 shadow-xl overflow-hidden flex flex-col h-[520px]">
          
          {/* Top Bar */}
          <div className="px-5 py-3.5 bg-[#070b14] border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <MessageSquare className="w-4 h-4 text-sky-400" />
              <span className="text-xs font-semibold text-white">
                {lang === 'ja' ? 'Qua合同会社 自動応答Q&A窓口' : 'Qua LLC Automated Q&A Desk'}
              </span>
            </div>

            <button
              onClick={clearChat}
              className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors cursor-pointer text-xs flex items-center gap-1.5"
              title="Clear Chat"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>{lang === 'ja' ? '履歴クリア' : 'Clear'}</span>
            </button>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 overflow-y-auto p-5 space-y-5">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'assistant' && (
                  <div className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-800 flex items-center justify-center text-sky-400 flex-shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl p-4 ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-tr-none'
                      : 'bg-[#070b14] border border-slate-800 text-slate-100 rounded-tl-none'
                  }`}
                >
                  {msg.sender === 'assistant' && (
                    <div className="flex items-center justify-between gap-4 mb-2 pb-2 border-b border-slate-800/80">
                      <div className="flex items-center gap-2 text-[11px] text-slate-400">
                        <span className="font-semibold text-sky-400">{msg.modelUsed || 'Qua Q&A Bot'}</span>
                        <span>·</span>
                        <span className="font-mono-tech tabular-nums">{msg.timestamp}</span>
                      </div>
                      <button
                        onClick={() => copyToClipboard(msg.id, msg.content)}
                        className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                        title="Copy answer"
                      >
                        {copiedId === msg.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  )}

                  <div className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap font-sans">
                    {msg.content}
                  </div>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 flex-shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-800 flex items-center justify-center text-sky-400">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="rounded-2xl rounded-tl-none bg-[#070b14] border border-slate-800 p-4 text-xs text-slate-300 flex items-center gap-2.5">
                  <Loader2 className="w-4 h-4 animate-spin text-sky-400" />
                  <span>{lang === 'ja' ? '回答を作成しています...' : 'Generating answer...'}</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <div className="p-4 bg-[#070b14] border-t border-slate-800">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2.5"
            >
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder={
                  lang === 'ja'
                    ? '質問を入力してください（例：「EitangoNihongoの特徴は？」「アプリ開発の相談はできますか？」）'
                    : 'Type your question here (e.g., "What makes EitangoNihongo unique?")...'
                }
                className="flex-1 px-4 py-2.5 rounded-xl bg-[#0b1120] border border-slate-700/80 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-sky-500 font-sans"
              />

              <button
                type="submit"
                disabled={loading || !inputMessage.trim()}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>{lang === 'ja' ? '送信' : 'Send'}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};
