import { motion, AnimatePresence } from 'framer-motion';
import { FaVideo, FaBook, FaFileAlt, FaLink } from 'react-icons/fa';
import { Resource } from '../types/roadmap';

interface ResourceListProps {
  resources?: Resource[];
  isVisible: boolean;
  itemId: string;
}

const ResourceList = ({
  resources = [],
  isVisible,
  itemId,
}: ResourceListProps) => {
  const getResourceTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <FaVideo className='w-4 h-4' aria-hidden='true' />;
      case 'book':
        return <FaBook className='w-4 h-4' aria-hidden='true' />;
      case 'documentation':
        return <FaFileAlt className='w-4 h-4' aria-hidden='true' />;
      default:
        return <FaLink className='w-4 h-4' aria-hidden='true' />;
    }
  };

  if (!resources || resources.length === 0) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id={`resources-${itemId}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className='mt-4 space-y-2.5'
        >
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.url}
              target='_blank'
              rel='noopener noreferrer'
              className='group flex items-center gap-2 text-sm text-gray-600 hover:text-sakura-600 dark:text-gray-300 dark:hover:text-sakura-400 transition-colors focus:outline-none focus:ring-2 focus:ring-sakura-400/50 focus:ring-offset-2 dark:focus:ring-offset-night-800 rounded-lg px-3 py-1.5 hover:bg-sakura-50 dark:hover:bg-night-700/50'
            >
              <span className='text-sakura-500 dark:text-sakura-400'>
                {getResourceTypeIcon(resource.type)}
              </span>
              <span className='border-b border-current group-hover:border-sakura-400'>
                {resource.title}
              </span>
            </a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResourceList;
