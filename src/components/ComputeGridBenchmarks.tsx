import React, { useState } from 'react';
import { Language } from '../types';
import { 
  Activity, 
  RefreshCw, 
  Radio,
  Zap,
  Globe2,
  Sparkles
} from 'lucide-react';

interface ComputeNode {
  id: string;
  location: string;
  locationJa: string;
  region: string;
  status: 'optimal' | 'busy' | 'syncing';
  latency: string;
  concurrencyRate: string;
  activeSessions: number;
}

const NODES: ComputeNode[] = [
  {
    id: 'TYO-HQ-01',
    location: 'Tokyo Nihonbashi HQ Cryo-Matrix Lab',
    locationJa: '東京・日本橋室町 本部シャンデリア検証ラボ',
    region: 'Asia-East (Tokyo)',
    status: 'optimal',
    latency: '0.18 ms',
    concurrencyRate: '128,000 Parallel States/sec',
    activeSessions: 42800
  },
  {
    id: 'SFO-EDGE-02',
    location: 'Silicon Valley Social Mesh',
    locationJa: 'シリコンバレー ソーシャルエッジ',
    region: 'US-West (California)',
    status: 'optimal',
    latency: '1.2 ms',
    concurrencyRate: '96,000 Parallel States/sec',
    activeSessions: 38400
  },
  {
    id: 'FRA-CORE-03',
    location: 'Frankfurt Phase Node',
    locationJa: 'フランクフルト 位相同期ノード',
    region: 'EU-Central (Germany)',
    status: 'busy',
    latency: '1.8 ms',
    concurrencyRate: '84,000 Parallel States/sec',
    activeSessions: 29100
  },
  {
    id: 'SIN-COHERENCE-04',
    location: 'Singapore Global Hub',
    locationJa: 'シンガポール グローバルハブ',
    region: 'Asia-South (Singapore)',
    status: 'optimal',
    latency: '0.95 ms',
    concurrencyRate: '72,000 Parallel States/sec',
    activeSessions: 18500
  }
];

interface ComputeGridBenchmarksProps {
  lang: Language;
}

export const ComputeGridBenchmarks: React.FC<ComputeGridBenchmarksProps> = ({ lang }) => {
  const [selectedNode, setSelectedNode] = useState<ComputeNode>(NODES[0]);
  const [pingTimes, setPingTimes] = useState<number[]>([0.18, 0.19, 0.17, 0.18, 0.20, 0.18, 0.17]);
  const [isPinging, setIsPinging] = useState<boolean>(false);

  const triggerPing = () => {
    setIsPinging(true);
    setTimeout(() => {
      const base = parseFloat(selectedNode.latency);
      const newPings = Array.from({ length: 7 }, () => +(base + (Math.random() - 0.5) * 0.04).toFixed(3));
      setPingTimes(newPings);
      setIsPinging(false);
    }, 500);
  };

  return (
    <section id="benchmarks" className="py-24 relative border-t border-white/10 bg-[#030611]/90 overflow-hidden">
      {/* Indirect Golden & Cosmic Glow */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/40 border border-amber-400/30 text-xs font-mono-tech text-amber-300 mb-3 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
              <Activity className="w-3.5 h-3.5 text-amber-400" />
              <span>GLOBAL STATE SYNCHRONIZATION &amp; LATENCY TELEMETRY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
              {lang === 'ja' ? 'リアルタイム同期テレメトリ' : 'Real-Time State Telemetry'}
            </h2>
          </div>

          <p className="text-slate-300 text-xs sm:text-sm max-w-md mt-4 md:mt-0 font-sans">
            {lang === 'ja'
              ? 'ParalmeetなどのWebアプリ群を全世界で支える、東京・日本橋室町起点の分散ステート同期テレメトリ。'
              : "Live telemetry monitoring across Qua Japan's Tokyo Nihonbashi state synchronization matrix."}
          </p>
        </div>

        {/* Telemetry Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Node Selector (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono-tech text-slate-400 uppercase mb-2">
              ACTIVE MATRIX NODES
            </div>

            {NODES.map((node) => (
              <button
                key={node.id}
                onClick={() => setSelectedNode(node)}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                  selectedNode.id === node.id
                    ? 'bg-slate-800/90 border-amber-400/60 shadow-[0_0_25px_rgba(245,158,11,0.2)]'
                    : 'bg-slate-900/60 border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${node.status === 'optimal' ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                    <span className="text-xs font-mono-tech font-bold text-white">{node.id}</span>
                  </div>
                  <div className="text-xs text-slate-300 mt-1 font-medium">
                    {lang === 'ja' ? node.locationJa : node.location}
                  </div>
                  <div className="text-[10px] font-mono-tech text-slate-400 mt-0.5">
                    {node.region}
                  </div>
                </div>

                <div className="text-right font-mono-tech">
                  <div className="text-xs font-bold text-amber-300">{node.latency}</div>
                  <div className="text-[10px] text-slate-400">RTT Sync</div>
                </div>
              </button>
            ))}
          </div>

          {/* Real-time Telemetry Monitor (8 cols) */}
          <div className="lg:col-span-8 rounded-3xl bg-[#070b1b] border border-amber-400/20 p-6 sm:p-8 flex flex-col justify-between shadow-2xl card-glass">
            
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
              <div>
                <span className="text-[10px] font-mono-tech uppercase text-amber-400 bg-amber-950/60 px-2.5 py-0.5 rounded border border-amber-400/30">
                  CURRENT MONITORING NODE
                </span>
                <h3 className="text-xl font-display font-bold text-white mt-1.5">
                  {lang === 'ja' ? selectedNode.locationJa : selectedNode.location}
                </h3>
                <span className="text-xs font-mono-tech text-slate-400">{selectedNode.region}</span>
              </div>

              <button
                onClick={triggerPing}
                disabled={isPinging}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-950/40 hover:bg-amber-900/40 text-amber-300 border border-amber-400/30 text-xs font-mono-tech transition-colors cursor-pointer"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isPinging ? 'animate-spin' : ''}`} />
                <span>{lang === 'ja' ? '同期パルス計測' : 'Trigger Sync Pulse'}</span>
              </button>
            </div>

            {/* Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 mb-6 text-xs font-mono-tech">
              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <div className="text-slate-400 text-[10px]">AVG LATENCY</div>
                <div className="text-xl font-bold text-emerald-400">{selectedNode.latency}</div>
              </div>
              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <div className="text-slate-400 text-[10px]">THROUGHPUT</div>
                <div className="text-sm font-bold text-white truncate">{selectedNode.concurrencyRate}</div>
              </div>
              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <div className="text-slate-400 text-[10px]">ACTIVE CONCURRENT</div>
                <div className="text-xl font-bold text-amber-300">{selectedNode.activeSessions.toLocaleString()}</div>
              </div>
            </div>

            {/* Simulated Sparkline / Frequency Wave */}
            <div>
              <div className="flex items-center justify-between text-[11px] font-mono-tech text-slate-400 mb-2">
                <span>RECENT LATENCY VECTOR (ms)</span>
                <span className="text-amber-400 flex items-center gap-1">
                  <Radio className="w-3 h-3 animate-pulse" />
                  SUB-MS HIGH FIDELITY
                </span>
              </div>

              <div className="h-24 flex items-end gap-2 p-3 bg-black/50 rounded-xl border border-white/5">
                {pingTimes.map((val, idx) => {
                  const heightPercent = Math.min(100, Math.max(20, (val / 2.0) * 100));
                  return (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-1 group">
                      <span className="text-[9px] font-mono-tech text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        {val}
                      </span>
                      <div
                        className="w-full rounded-t bg-gradient-to-t from-amber-500 to-cyan-400 transition-all duration-300 shadow-[0_0_10px_rgba(245,158,11,0.3)]"
                        style={{ height: `${heightPercent}%` }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
