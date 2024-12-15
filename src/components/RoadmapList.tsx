import { motion } from 'framer-motion';
import { RoadmapItem as RoadmapItemType } from '../types/roadmap';
import RoadmapItem from './RoadmapItem';

interface RoadmapListProps {
  items: RoadmapItemType[];
  onToggle?: (id: string) => void;
}

const RoadmapList = ({ items, onToggle }: RoadmapListProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='space-y-8'
    >
      {items.map((item, index) => (
        <RoadmapItem
          key={item.id}
          item={item}
          index={index}
          onToggle={onToggle}
          depth={0}
        />
      ))}
    </motion.div>
  );
};

export default RoadmapList;
