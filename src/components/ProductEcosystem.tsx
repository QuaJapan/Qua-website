import React from 'react';
import { Language } from '../types';
import { WebApplicationsPipeline } from './WebApplicationsPipeline';

interface ProductEcosystemProps {
  lang: Language;
  onSelectProductForCopilot: (productName: string) => void;
  onOpenRFP: () => void;
  onOpenNotifyModal?: (appName: string) => void;
}

export const ProductEcosystem: React.FC<ProductEcosystemProps> = ({
  lang,
  onSelectProductForCopilot,
  onOpenRFP,
  onOpenNotifyModal
}) => {
  return (
    <WebApplicationsPipeline
      lang={lang}
      onOpenNotifyModal={(appName) => {
        if (onOpenNotifyModal) {
          onOpenNotifyModal(appName);
        } else {
          onOpenRFP();
        }
      }}
      onAskCopilotAboutApp={(appName) => {
        onSelectProductForCopilot(appName);
      }}
    />
  );
};
