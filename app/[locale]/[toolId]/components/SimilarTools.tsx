'use client';

import Card from '@/components/ui/Card/Card';
import { useGetDocumentsFromCategory } from '@/hooks/useGetDocuments';
import { AiToolData } from '@/types';
import React, { useEffect } from 'react';

const SimilarTools = ({
  toolCategory,
  toolDocumentId,
}: {
  toolCategory: string | undefined;
  toolDocumentId: string | undefined;
}) => {
  const { getDoc } = useGetDocumentsFromCategory();
  const [similarTools, setSimilarTools] = React.useState<AiToolData[]>([]);

  useEffect(() => {
    getDoc('tools', toolCategory).then((data: unknown) => {
      const resultData = data as AiToolData[];
      const finalData = resultData.filter(
        (tool) => tool.docID !== toolDocumentId,
      );
      return setSimilarTools(finalData);
    });
  }, [toolCategory, toolDocumentId]);

  return (
    !!similarTools.length &&
    similarTools.map((tool) => <Card key={tool.docID} {...tool} />)
  );
};

export default SimilarTools;
