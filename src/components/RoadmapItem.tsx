import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronRight, FaCheck, FaClock } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import { RoadmapItem as RoadmapItemType } from '../types/roadmap';
import DifficultyBadge from './DifficultyBadge';
import ResourceList from './ResourceList';

interface RoadmapItemProps {
  item: RoadmapItemType;
  index: number;
  onToggle?: (id: string) => void;
  depth?: number;
}

const RoadmapItem = ({
  item,
  index,
  onToggle,
  depth = 0,
}: RoadmapItemProps) => {
  const { theme } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  const [showResources, setShowResources] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative p-6 rounded-2xl border ${
        theme === 'dark'
          ? 'bg-night-800 border-night-700 hover:border-night-600'
          : 'bg-white border-gray-200 hover:border-gray-300'
      } transition-colors group`}
    >
      <div className='flex items-start justify-between gap-4'>
        <div className='space-y-3'>
          <div className='flex items-center gap-3 flex-wrap'>
            <DifficultyBadge difficulty={item.difficulty} />
            {item.estimatedTime && (
              <span className='inline-flex items-center gap-1.5 px-3 py-1 bg-purple-50 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300 rounded-full text-sm font-medium'>
                <FaClock className='w-3.5 h-3.5' aria-hidden='true' />
                {item.estimatedTime}h
              </span>
            )}
            {onToggle && (
              <button
                onClick={() => onToggle(item.id)}
                className={`h-6 w-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  item.completed
                    ? 'bg-gradient-to-r from-sakura-400 to-sakura-500 border-sakura-400 hover:from-sakura-500 hover:to-sakura-600 dark:from-sakura-300 dark:to-sakura-400 dark:border-sakura-300 dark:hover:from-sakura-400 dark:hover:to-sakura-500 focus:ring-sakura-400/50 dark:focus:ring-offset-night-800'
                    : 'bg-white dark:bg-night-800 border-sakura-200 dark:border-sakura-300/30 hover:border-sakura-400 dark:hover:border-sakura-300 hover:bg-sakura-50 dark:hover:bg-night-700 focus:ring-sakura-400/50 dark:focus:ring-offset-night-800'
                }`}
                aria-label={
                  item.completed ? 'Mark as incomplete' : 'Mark as complete'
                }
              >
                {item.completed && (
                  <FaCheck
                    className='w-3.5 h-3.5 text-white dark:text-night-900'
                    aria-hidden='true'
                  />
                )}
              </button>
            )}
          </div>
          <h3
            className={`text-xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            {item.title}
          </h3>
          <p
            className={`text-base ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            {item.description}
          </p>
          {item.skills && item.skills.length > 0 && (
            <div className='flex flex-wrap gap-2 mt-2'>
              {item.skills.map((skill, index) => (
                <span
                  key={index}
                  className='text-xs px-2.5 py-1.5 bg-gray-50 dark:bg-night-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium'
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className='flex items-center gap-2'>
          {item.resources && item.resources.length > 0 && (
            <button
              onClick={() => setShowResources(!showResources)}
              className={`p-2 rounded-xl transition-colors ${
                theme === 'dark'
                  ? 'hover:bg-night-700 text-gray-400 hover:text-white'
                  : 'hover:bg-gray-100 text-gray-500 hover:text-gray-900'
              }`}
              aria-expanded={showResources}
              aria-controls={`resources-${item.id}`}
            >
              <FaChevronRight
                className={`w-5 h-5 transform transition-transform ${
                  showResources ? 'rotate-90' : ''
                }`}
              />
            </button>
          )}
          {item.subItems && item.subItems.length > 0 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`p-2 rounded-xl transition-colors ${
                theme === 'dark'
                  ? 'hover:bg-night-700 text-gray-400 hover:text-white'
                  : 'hover:bg-gray-100 text-gray-500 hover:text-gray-900'
              }`}
              aria-expanded={isExpanded}
              aria-controls={`subitems-${item.id}`}
            >
              <FaChevronRight
                className={`w-5 h-5 transform transition-transform ${
                  isExpanded ? 'rotate-90' : ''
                }`}
              />
            </button>
          )}
        </div>
      </div>

      <ResourceList
        resources={item.resources}
        isVisible={showResources}
        itemId={item.id}
      />

      {item.subItems && (
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className={`mt-6 space-y-4 ${
                depth < 2
                  ? 'ml-6 border-l-2 border-gray-100 dark:border-night-700 pl-6'
                  : ''
              }`}
            >
              {item.subItems.map((subItem, idx) => (
                <RoadmapItem
                  key={subItem.id}
                  item={subItem}
                  index={idx}
                  onToggle={onToggle}
                  depth={depth + 1}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </motion.div>
  );
};

export default RoadmapItem;
