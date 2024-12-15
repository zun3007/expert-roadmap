import { motion } from 'framer-motion';
import { RoadmapItem } from '../types/roadmap';
import { useTheme } from '../contexts/ThemeContext';
import { FaTrophy, FaTasks, FaLayerGroup, FaChartLine } from 'react-icons/fa';

interface ProgressStats {
  total: number;
  completed: number;
  byDifficulty: {
    Beginner: { total: number; completed: number };
    Intermediate: { total: number; completed: number };
    Advanced: { total: number; completed: number };
    Expert: { total: number; completed: number };
  };
  byCategory: Record<string, { total: number; completed: number }>;
}

interface Props {
  items: RoadmapItem[];
}

const difficultyColors = {
  Beginner: {
    bar: 'bg-emerald-500 dark:bg-emerald-400',
    text: 'text-emerald-700 dark:text-emerald-300',
    label: 'Beginner friendly',
  },
  Intermediate: {
    bar: 'bg-sky-500 dark:bg-sky-400',
    text: 'text-sky-700 dark:text-sky-300',
    label: 'Intermediate level',
  },
  Advanced: {
    bar: 'bg-amber-500 dark:bg-amber-400',
    text: 'text-amber-700 dark:text-amber-300',
    label: 'Advanced concepts',
  },
  Expert: {
    bar: 'bg-rose-500 dark:bg-rose-400',
    text: 'text-rose-700 dark:text-rose-300',
    label: 'Expert material',
  },
};

const ProgressDashboard: React.FC<Props> = ({ items }) => {
  const { theme } = useTheme();

  const calculateProgress = (items: RoadmapItem[]): ProgressStats => {
    const stats: ProgressStats = {
      total: 0,
      completed: 0,
      byDifficulty: {
        Beginner: { total: 0, completed: 0 },
        Intermediate: { total: 0, completed: 0 },
        Advanced: { total: 0, completed: 0 },
        Expert: { total: 0, completed: 0 },
      },
      byCategory: {},
    };

    const processItem = (item: RoadmapItem) => {
      stats.total++;
      if (item.completed) stats.completed++;

      // Track by difficulty
      stats.byDifficulty[item.difficulty].total++;
      if (item.completed) stats.byDifficulty[item.difficulty].completed++;

      // Track by category
      if (!stats.byCategory[item.category]) {
        stats.byCategory[item.category] = { total: 0, completed: 0 };
      }
      stats.byCategory[item.category].total++;
      if (item.completed) stats.byCategory[item.category].completed++;

      // Process subitems
      if (item.subItems) {
        item.subItems.forEach(processItem);
      }
    };

    items.forEach(processItem);
    return stats;
  };

  const stats = calculateProgress(items);
  const overallProgress = (stats.completed / stats.total) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className='bg-white dark:bg-night-800 rounded-xl shadow-lg p-6 mb-8'
      role='region'
      aria-label='Progress Dashboard'
    >
      <h2 className='text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2'>
        <FaChartLine className='text-sakura-500' aria-hidden='true' />
        Progress Dashboard
      </h2>

      {/* Overall Progress */}
      <div className='mb-8 bg-gray-50 dark:bg-night-700/50 p-4 rounded-lg'>
        <div className='flex justify-between mb-2'>
          <span className='text-gray-700 dark:text-gray-200 font-medium'>
            Overall Progress
          </span>
          <span
            className='font-bold text-sakura-600 dark:text-sakura-400'
            aria-label={`${Math.round(overallProgress)}% complete`}
          >
            {Math.round(overallProgress)}%
          </span>
        </div>
        <div
          className='w-full bg-gray-200 dark:bg-night-600 rounded-full h-3'
          role='progressbar'
          aria-valuenow={Math.round(overallProgress)}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className='bg-sakura-500 dark:bg-sakura-400 h-3 rounded-full transition-all duration-500'
            style={{ width: `${overallProgress}%` }}
          ></div>
        </div>
      </div>

      {/* Progress by Difficulty */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
        <div className='bg-gray-50 dark:bg-night-700/50 p-4 rounded-lg'>
          <h3 className='text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2'>
            <FaTrophy className='text-sakura-500' aria-hidden='true' />
            Progress by Difficulty
          </h3>
          <div className='space-y-4'>
            {Object.entries(stats.byDifficulty).map(
              ([difficulty, { total, completed }]) => {
                const progress = (completed / total) * 100;
                const colors =
                  difficultyColors[difficulty as keyof typeof difficultyColors];

                return (
                  <div key={difficulty}>
                    <div className='flex justify-between mb-1'>
                      <span
                        className={`text-sm font-medium ${colors.text}`}
                        title={colors.label}
                      >
                        {difficulty}
                      </span>
                      <span className='text-sm font-medium text-gray-700 dark:text-gray-300'>
                        {completed}/{total}
                      </span>
                    </div>
                    <div
                      className='w-full bg-gray-200 dark:bg-night-600 rounded-full h-2.5'
                      role='progressbar'
                      aria-valuenow={Math.round(progress)}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${difficulty} progress: ${Math.round(
                        progress
                      )}%`}
                    >
                      <div
                        className={`h-2.5 rounded-full transition-all duration-500 ${colors.bar}`}
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>

        {/* Progress by Category */}
        <div className='bg-gray-50 dark:bg-night-700/50 p-4 rounded-lg'>
          <h3 className='text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2'>
            <FaLayerGroup className='text-sakura-500' aria-hidden='true' />
            Progress by Category
          </h3>
          <div className='space-y-4'>
            {Object.entries(stats.byCategory)
              .sort((a, b) => b[1].total - a[1].total)
              .slice(0, 5)
              .map(([category, { total, completed }]) => {
                const progress = (completed / total) * 100;
                return (
                  <div key={category}>
                    <div className='flex justify-between mb-1'>
                      <span className='text-sm font-medium text-gray-700 dark:text-gray-300'>
                        {category}
                      </span>
                      <span className='text-sm font-medium text-gray-700 dark:text-gray-300'>
                        {completed}/{total}
                      </span>
                    </div>
                    <div
                      className='w-full bg-gray-200 dark:bg-night-600 rounded-full h-2.5'
                      role='progressbar'
                      aria-valuenow={Math.round(progress)}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${category} progress: ${Math.round(
                        progress
                      )}%`}
                    >
                      <div
                        className='bg-sakura-500 dark:bg-sakura-400 h-2.5 rounded-full transition-all duration-500'
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        <div className='bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/50 dark:to-emerald-800/50 p-4 rounded-lg shadow-sm'>
          <div className='flex items-center justify-between mb-2'>
            <FaTasks
              className='text-emerald-500 dark:text-emerald-400'
              aria-hidden='true'
            />
            <div
              className='text-2xl font-bold text-emerald-700 dark:text-emerald-300'
              aria-label={`${stats.completed} completed tasks`}
            >
              {stats.completed}
            </div>
          </div>
          <div className='text-sm font-medium text-emerald-600 dark:text-emerald-400'>
            Completed Tasks
          </div>
        </div>
        <div className='bg-gradient-to-br from-sky-50 to-sky-100 dark:from-sky-900/50 dark:to-sky-800/50 p-4 rounded-lg shadow-sm'>
          <div className='flex items-center justify-between mb-2'>
            <FaTasks
              className='text-sky-500 dark:text-sky-400'
              aria-hidden='true'
            />
            <div
              className='text-2xl font-bold text-sky-700 dark:text-sky-300'
              aria-label={`${stats.total - stats.completed} remaining tasks`}
            >
              {stats.total - stats.completed}
            </div>
          </div>
          <div className='text-sm font-medium text-sky-600 dark:text-sky-400'>
            Remaining Tasks
          </div>
        </div>
        <div className='bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/50 dark:to-amber-800/50 p-4 rounded-lg shadow-sm'>
          <div className='flex items-center justify-between mb-2'>
            <FaTasks
              className='text-amber-500 dark:text-amber-400'
              aria-hidden='true'
            />
            <div
              className='text-2xl font-bold text-amber-700 dark:text-amber-300'
              aria-label={`${stats.total} total tasks`}
            >
              {stats.total}
            </div>
          </div>
          <div className='text-sm font-medium text-amber-600 dark:text-amber-400'>
            Total Tasks
          </div>
        </div>
        <div className='bg-gradient-to-br from-rose-50 to-rose-100 dark:from-rose-900/50 dark:to-rose-800/50 p-4 rounded-lg shadow-sm'>
          <div className='flex items-center justify-between mb-2'>
            <FaTasks
              className='text-rose-500 dark:text-rose-400'
              aria-hidden='true'
            />
            <div
              className='text-2xl font-bold text-rose-700 dark:text-rose-300'
              aria-label={`${Math.round(overallProgress)}% overall progress`}
            >
              {Math.round(overallProgress)}%
            </div>
          </div>
          <div className='text-sm font-medium text-rose-600 dark:text-rose-400'>
            Overall Progress
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProgressDashboard;
