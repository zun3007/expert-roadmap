import { RoadmapItem } from '../types/roadmap';
import { useTranslation } from 'react-i18next';

export function useRoadmapTranslation() {
  const { t } = useTranslation('roadmap');

  const translateRoadmapItem = (
    item: RoadmapItem,
    path: string[] = []
  ): RoadmapItem => {
    const currentPath = [...path];

    const translatedItem = {
      ...item,
      title: t(`${currentPath.join('.')}.title`, item.title),
      description: t(`${currentPath.join('.')}.description`, item.description),
    };

    if (item.subItems) {
      translatedItem.subItems = item.subItems.map((subItem, index) =>
        translateRoadmapItem(subItem, [
          ...currentPath,
          'subItems',
          index.toString(),
        ])
      );
    }

    return translatedItem;
  };

  const translateRoadmap = (roadmap: RoadmapItem[]): RoadmapItem[] => {
    return roadmap.map((item, index) =>
      translateRoadmapItem(item, [index.toString()])
    );
  };

  return { translateRoadmap };
}
