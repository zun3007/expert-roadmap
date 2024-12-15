import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

const Home = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    // Start loading video after component mounts
    const timer = setTimeout(() => {
      setShouldLoadVideo(true);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div className='fixed inset-0 w-full h-full overflow-hidden'>
      {/* Video Background with Placeholder */}
      <div className='absolute inset-0'>
        <div
          className={`absolute inset-0 z-10 ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-night-950/95 via-night-950/85 to-night-900/95'
              : 'bg-gradient-to-br from-white/80 via-white/70 to-gray-50/80'
          }`}
        />

        {/* Placeholder Image (shown until video loads) */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            backgroundImage: 'url(./assets/images/coding-placeholder.svg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Video (lazy loaded) */}
        {shouldLoadVideo && (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload='metadata'
            poster='./assets/images/coding-placeholder.svg'
            onLoadedData={handleVideoLoad}
            className={`absolute inset-0 w-full h-full object-cover scale-105 transform transition-opacity duration-1000 ${
              isVideoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <source
              src='./assets/videos/coding-background.mp4'
              type='video/mp4'
            />
          </video>
        )}
      </div>

      {/* Content */}
      <div className='absolute inset-0 z-20 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center max-w-[280px] xs:max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8'
        >
          {/* Main Heading */}
          <div className='space-y-2 sm:space-y-3 lg:space-y-4'>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='flex flex-col items-center space-y-1 sm:space-y-2'
            >
              <span
                className={`text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                {t('home.title.become')}
              </span>
              <span className='text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sakura-400 via-sakura-500 to-sakura-600 whitespace-nowrap leading-[1.4] pb-5'>
                {t('home.title.expert')}
              </span>
            </motion.h1>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`text-base xs:text-lg sm:text-xl md:text-2xl font-medium leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            } text-center max-w-[260px] xs:max-w-sm sm:max-w-xl md:max-w-2xl mx-auto`}
          >
            {t('home.description.line1')}
            <br className='hidden xs:block' />
            {t('home.description.line2')}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='pt-2 sm:pt-3 lg:pt-4'
          >
            <Link
              to='/roadmap'
              className='cta-button hover-glow inline-block px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-4 lg:py-5 text-base sm:text-lg md:text-xl font-bold text-white rounded-lg sm:rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl'
            >
              {t('home.cta')}
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className='absolute inset-0 z-10 pointer-events-none'>
        <div className='absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent'></div>
        <div className='absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sakura-500/20 to-transparent'></div>
      </div>
    </div>
  );
};

export default Home;
