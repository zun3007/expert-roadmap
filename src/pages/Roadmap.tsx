import { useState, useEffect } from 'react';
import { initialRoadmap } from '../data/roadmapData';
import RoadmapHeader from '../components/RoadmapHeader';
import RoadmapList from '../components/RoadmapList';
import ProgressDashboard from '../components/ProgressDashboard';
import { RoadmapItem } from '../types/roadmap';
import { useRoadmapTranslation } from '../utils/roadmapUtils';

const Roadmap = () => {
  const { translateRoadmap } = useRoadmapTranslation();
  const [roadmapItems, setRoadmapItems] = useState<RoadmapItem[]>(() => {
    const saved = localStorage.getItem('roadmapProgress');
    return saved ? JSON.parse(saved) : initialRoadmap;
  });

  useEffect(() => {
    localStorage.setItem('roadmapProgress', JSON.stringify(roadmapItems));
  }, [roadmapItems]);

  const toggleComplete = (id: string) => {
    setRoadmapItems((items) =>
      items.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        if (item.subItems) {
          return {
            ...item,
            subItems: item.subItems.map((subItem) =>
              subItem.id === id
                ? { ...subItem, completed: !subItem.completed }
                : subItem.subItems
                ? {
                    ...subItem,
                    subItems: subItem.subItems.map((nestedItem) =>
                      nestedItem.id === id
                        ? { ...nestedItem, completed: !nestedItem.completed }
                        : nestedItem
                    ),
                  }
                : subItem
            ),
          };
        }
        return item;
      })
    );
  };

  const translatedItems = translateRoadmap(roadmapItems);

  return (
    <div className='min-h-screen py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto space-y-12'>
        <RoadmapHeader />
        <ProgressDashboard items={translatedItems} />
        <RoadmapList items={translatedItems} onToggle={toggleComplete} />
      </div>
    </div>
  );
};

export default Roadmap;
