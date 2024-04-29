'use client';

// Create a context of aiTools
import { useGetDocuments } from '@/hooks/useGetDocuments';
import { AiToolData } from '@/types';
import { createContext, ReactElement, useEffect, useState } from 'react';

const AiToolContext = createContext<AiToolData[]>([]);

const AiToolProvider = ({ children }: { children: ReactElement[] }) => {
  const { getDoc } = useGetDocuments();
  const [aiTools, setAiTools] = useState<AiToolData[]>([]);

  useEffect(() => {
    getDoc('tools').then((data: unknown) => {
      setAiTools(data as AiToolData[]);
    });
  }, []);

  return (
    <AiToolContext.Provider value={aiTools}>{children}</AiToolContext.Provider>
  );
};

export { AiToolContext, AiToolProvider };
