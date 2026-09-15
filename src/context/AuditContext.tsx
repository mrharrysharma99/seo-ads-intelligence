import { createContext, useContext, useState, ReactNode } from 'react';

interface AuditContextType {
  targetUrl: string;
  setTargetUrl: (url: string) => void;
  isAuditing: boolean;
  setIsAuditing: (auditing: boolean) => void;
  auditScore: number;
  setAuditScore: (score: number) => void;
  websiteType: string;
  setWebsiteType: (type: string) => void;
  triggerAudit: () => void;
}

const AuditContext = createContext<AuditContextType | undefined>(undefined);

export function AuditProvider({ children }: { children: ReactNode }) {
  const [targetUrl, setTargetUrl] = useState('https://renthouse.co.in');
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditScore, setAuditScore] = useState(78);
  const [websiteType, setWebsiteType] = useState('real-estate');

  const triggerAudit = () => {
    setIsAuditing(true);
    
    // Simulate audit process
    setTimeout(() => {
      // Generate scores based on URL
      const urlHash = targetUrl.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
      const baseScore = 60 + (urlHash % 30);
      
      setAuditScore(baseScore);
      
      // Detect website type from URL
      const domain = targetUrl.toLowerCase();
      if (domain.includes('real') || domain.includes('property') || domain.includes('home') || domain.includes('house')) {
        setWebsiteType('real-estate');
      } else if (domain.includes('tech') || domain.includes('software') || domain.includes('digital')) {
        setWebsiteType('technology');
      } else if (domain.includes('shop') || domain.includes('store') || domain.includes('buy')) {
        setWebsiteType('ecommerce');
      } else if (domain.includes('food') || domain.includes('restaurant') || domain.includes('cafe')) {
        setWebsiteType('food');
      } else {
        setWebsiteType('general');
      }
      
      setIsAuditing(false);
    }, 2000);
  };

  return (
    <AuditContext.Provider
      value={{
        targetUrl,
        setTargetUrl,
        isAuditing,
        setIsAuditing,
        auditScore,
        setAuditScore,
        websiteType,
        setWebsiteType,
        triggerAudit,
      }}
    >
      {children}
    </AuditContext.Provider>
  );
}

export function useAudit() {
  const context = useContext(AuditContext);
  if (context === undefined) {
    throw new Error('useAudit must be used within an AuditProvider');
  }
  return context;
}
