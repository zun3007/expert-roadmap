import { FaGraduationCap } from 'react-icons/fa';

const difficultyConfig = {
  Beginner: {
    colors:
      'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300',
    icon: <FaGraduationCap className='w-3.5 h-3.5' />,
    label: 'Beginner friendly',
  },
  Intermediate: {
    colors: 'bg-sky-50 text-sky-700 dark:bg-sky-900/50 dark:text-sky-300',
    icon: <FaGraduationCap className='w-3.5 h-3.5' />,
    label: 'Intermediate level',
  },
  Advanced: {
    colors:
      'bg-amber-50 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300',
    icon: <FaGraduationCap className='w-3.5 h-3.5' />,
    label: 'Advanced concepts',
  },
  Expert: {
    colors: 'bg-rose-50 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300',
    icon: <FaGraduationCap className='w-3.5 h-3.5' />,
    label: 'Expert material',
  },
};

interface DifficultyBadgeProps {
  difficulty: string;
}

const DifficultyBadge = ({ difficulty }: DifficultyBadgeProps) => {
  const config =
    difficultyConfig[difficulty as keyof typeof difficultyConfig] ||
    difficultyConfig.Beginner;

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${config.colors}`}
      title={config.label}
    >
      {config.icon}
      {difficulty}
    </span>
  );
};

export default DifficultyBadge;
