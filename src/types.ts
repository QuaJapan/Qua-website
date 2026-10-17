export type Language = 'ja' | 'en';
export type ActiveBrand = 'qua' | 'reach-today' | 'reanow';

export type WebAppCategory = 
  | 'all'
  | 'active'
  | 'social_network'
  | 'education_ai'
  | 'creator_media'
  | 'deep_core'
  | 'spatial_social'
  | 'advertising'
  | 'pipeline';

export interface WebApplicationItem {
  id: string;
  name: string;
  nameJa: string;
  category: WebAppCategory;
  tagline: string;
  taglineJa: string;
  description: string;
  descriptionJa: string;
  launchStatus: 'Active Now' | 'Live Beta' | 'Active Flagship' | 'Upcoming / Developing' | 'Upcoming 2026 Q3' | 'Upcoming 2026 Q4' | 'In Pipeline / 順次更新' | 'Research & Design';
  launchStatusJa: '現在稼働中' | 'ライブベータ' | '主力公開アプリ' | 'Upcoming / Developing' | '2026年Q3 公開予定' | '2026年Q4 公開予定' | '順次更新・パイプライン' | '研究・設計フェーズ';
  version: string;
  iconName: string;
  tags: string[];
  metrics: {
    label: string;
    labelJa: string;
    value: string;
  }[];
  features: {
    title: string;
    titleJa: string;
    desc: string;
    descJa: string;
  }[];
  techStack: string[];
  accentGradient: string;
  hasInteractiveDemo?: boolean;
  isCurrentProduct?: boolean;
  appUrl?: string;
}

export interface CorporatePurpose {
  num: number;
  textJa: string;
  textEn: string;
  category: string;
}

export interface CorporateData {
  legalNameJa: string;
  legalNameEn: string;
  brandName: string;
  aliasJa: string;
  corporateNumber: string;
  headquartersJa: string;
  headquartersEn: string;
  buildingJa: string;
  buildingEn: string;
  establishedDateJa: string;
  establishedDateEn: string;
  capital: string;
  capitalEn: string;
  representativeJa: string;
  representativeEn: string;
  representativeRoleJa: string;
  representativeRoleEn: string;
  publicNoticeMethodJa: string;
  publicNoticeMethodEn: string;
  contactEmail: string;
  purposes: CorporatePurpose[];
}

export interface QuaBrandStory {
  originTitleJa: string;
  originTitleEn: string;
  originSummaryJa: string;
  originSummaryEn: string;
  etymologyJa: {
    root: string;
    meaningJa: string;
    meaningEn: string;
    descriptionJa: string;
    descriptionEn: string;
  }[];
  aiVisionTitleJa: string;
  aiVisionTitleEn: string;
  aiVisionSummaryJa: string;
  aiVisionSummaryEn: string;
}

export interface NewsItem {
  id: string;
  date: string;
  category: 'Press Release' | 'Upcoming App' | 'Research & Dev' | 'Corporate' | 'Product Update' | 'Product' | 'R&D' | 'Service';
  categoryJa: 'プレスリリース' | 'プロダクト速報' | '研究開発' | '企業情報' | 'アップデート' | 'プロダクト' | '技術・UI公開' | '事業案内';
  titleJa: string;
  titleEn: string;
  summaryJa: string;
  summaryEn: string;
  readTime: string;
  featured?: boolean;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  content: string;
  timestamp: string;
  modelUsed?: string;
  thinkingSteps?: string[];
  reasoningSummary?: string;
}

export interface DimensionalStateVector {
  id: number;
  theta: number; // orbital angle
  phi: number; // phase angle
  groundProbability: number;
  excitedProbability: number;
  coherenceIndex: number;
  entangledNode?: number;
}
