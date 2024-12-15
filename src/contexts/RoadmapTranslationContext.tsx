import React, { createContext, useContext } from 'react';
import { RoadmapItem } from '../types/roadmap';
import { useTranslation } from 'react-i18next';
import { initialRoadmap } from '../data/roadmapData';

interface RoadmapTranslationContextType {
  translatedRoadmap: RoadmapItem[];
}

const RoadmapTranslationContext = createContext<
  RoadmapTranslationContextType | undefined
>(undefined);

export const useRoadmapTranslation = () => {
  const context = useContext(RoadmapTranslationContext);
  if (!context) {
    throw new Error(
      'useRoadmapTranslation must be used within a RoadmapTranslationProvider'
    );
  }
  return context;
};

export const RoadmapTranslationProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { t } = useTranslation();

  const translateRoadmapItem = (item: RoadmapItem): RoadmapItem => {
    return {
      ...item,
      title: t(item.title),
      description: t(item.description),
      subItems: item.subItems?.map(translateRoadmapItem),
    };
  };

  const translatedRoadmap = initialRoadmap.map(translateRoadmapItem);

  return (
    <RoadmapTranslationContext.Provider value={{ translatedRoadmap }}>
      {children}
    </RoadmapTranslationContext.Provider>
  );
};
