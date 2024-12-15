import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { FaRoute } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const RoadmapHeader = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <div className='relative'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='text-center space-y-6'
      >
        {/* Decorative Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='flex justify-center'
        >
          <div
            className={`p-4 rounded-2xl bg-gradient-to-br ${
              theme === 'dark'
                ? 'from-night-700 to-night-800 shadow-night-700/30'
                : 'from-gray-50 to-gray-100 shadow-gray-200/50'
            } shadow-lg`}
          >
            <FaRoute
              className={`w-8 h-8 ${
                theme === 'dark' ? 'text-sakura-400' : 'text-sakura-500'
              }`}
            />
          </div>
        </motion.div>

        {/* Title Section */}
        <div className='space-y-4'>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            {t('roadmap.header.title')}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={`max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl font-medium leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            {t('roadmap.header.description.part1')}{' '}
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-sakura-400 via-sakura-500 to-sakura-600 font-semibold'>
              {t('roadmap.header.description.part2')}
            </span>
          </motion.p>
        </div>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className='w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-sakura-400 via-sakura-500 to-sakura-600'
        />
      </motion.div>
    </div>
  );
};

export default RoadmapHeader;
