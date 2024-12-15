import { Link, useLocation } from 'react-router-dom';
import { useState, useLayoutEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from 'react-i18next';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { FaGithub, FaMoon, FaSun, FaGlobe } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();
  const location = useLocation();
  const [mounted, setMounted] = useState(false);

  const languages = [
    { code: 'en', name: t('nav.language.en') },
    { code: 'vi', name: t('nav.language.vi') },
    { code: 'ja', name: t('nav.language.ja') },
  ];

  // Handle initial mounting
  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  // Handle scroll events
  useLayoutEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      const offset = window.scrollY;
      requestAnimationFrame(() => {
        setScrolled(offset > 10);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mounted]);

  // Handle route changes
  useLayoutEffect(() => {
    if (!mounted) return;
    setIsOpen(false);
  }, [location, mounted]);

  // Prevent flash of wrong theme
  if (!mounted) {
    return null;
  }

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-night-800/95 backdrop-blur-md shadow-lg'
          : 'bg-white dark:bg-night-800'
      }`}
      role='navigation'
      aria-label='Main navigation'
    >
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo and Brand */}
          <Link
            to='/'
            className='group flex items-center space-x-3 text-xl font-bold text-sakura-600 dark:text-sakura-400 hover:text-sakura-700 dark:hover:text-sakura-300 transition-colors'
            aria-label='Expert Roadmap Home'
          >
            <svg
              className='w-8 h-8 transform transition-transform group-hover:scale-110'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
              />
            </svg>
            <span className='relative'>
              Expert Roadmap
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-sakura-400 transition-all group-hover:w-full'></span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-6'>
            <Link
              to='/'
              className={`nav-link relative font-medium transition-colors ${
                isActivePath('/')
                  ? 'text-sakura-600 dark:text-sakura-400'
                  : 'text-gray-600 dark:text-gray-300 hover:text-sakura-600 dark:hover:text-sakura-400'
              }`}
              aria-current={isActivePath('/') ? 'page' : undefined}
            >
              <span className='relative'>
                {t('nav.home')}
                {isActivePath('/') && (
                  <span className='absolute -bottom-1 left-0 w-full h-0.5 bg-sakura-400'></span>
                )}
              </span>
            </Link>
            <Link
              to='/roadmap'
              className={`nav-link relative font-medium transition-colors ${
                isActivePath('/roadmap')
                  ? 'text-sakura-600 dark:text-sakura-400'
                  : 'text-gray-600 dark:text-gray-300 hover:text-sakura-600 dark:hover:text-sakura-400'
              }`}
              aria-current={isActivePath('/roadmap') ? 'page' : undefined}
            >
              <span className='relative'>
                {t('nav.roadmap')}
                {isActivePath('/roadmap') && (
                  <span className='absolute -bottom-1 left-0 w-full h-0.5 bg-sakura-400'></span>
                )}
              </span>
            </Link>

            {/* Language Selector */}
            <Menu as='div' className='relative'>
              <Menu.Button
                className='p-2.5 rounded-lg bg-gray-100 dark:bg-night-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-night-600 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sakura-400 focus:ring-offset-2 dark:focus:ring-offset-night-800'
                aria-label={t('nav.language.select')}
              >
                <FaGlobe className='w-5 h-5' aria-hidden='true' />
              </Menu.Button>

              <Transition
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <Menu.Items className='absolute right-0 mt-2 w-48 rounded-lg bg-white dark:bg-night-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none py-1'>
                  {languages.map((lang) => (
                    <Menu.Item key={lang.code}>
                      {({ active }) => (
                        <button
                          onClick={() =>
                            setLanguage(lang.code as 'en' | 'vi' | 'ja')
                          }
                          className={`${
                            active ? 'bg-gray-100 dark:bg-night-600' : ''
                          } ${
                            language === lang.code
                              ? 'text-sakura-600 dark:text-sakura-400'
                              : 'text-gray-700 dark:text-gray-300'
                          } group flex w-full items-center px-4 py-2 text-sm`}
                        >
                          {lang.name}
                          {language === lang.code && (
                            <span className='ml-2 text-sakura-500'>✓</span>
                          )}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className='p-2.5 rounded-lg bg-gray-100 dark:bg-night-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-night-600 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sakura-400 focus:ring-offset-2 dark:focus:ring-offset-night-800'
              aria-label={
                theme === 'dark' ? t('nav.theme.light') : t('nav.theme.dark')
              }
            >
              {theme === 'dark' ? (
                <FaSun className='w-5 h-5 text-sakura-400' aria-hidden='true' />
              ) : (
                <FaMoon
                  className='w-5 h-5 text-sakura-600'
                  aria-hidden='true'
                />
              )}
            </button>

            <a
              href='https://github.com/zun3007/expert-roadmap'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center space-x-2 px-4 py-2 rounded-lg bg-sakura-500 dark:bg-sakura-600 text-white hover:bg-sakura-600 dark:hover:bg-sakura-700 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sakura-400 focus:ring-offset-2 dark:focus:ring-offset-night-800'
              aria-label='View project on GitHub'
            >
              <FaGithub className='w-5 h-5' aria-hidden='true' />
              <span>GitHub</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className='flex items-center space-x-4 md:hidden'>
            {/* Language Selector for Mobile */}
            <Menu as='div' className='relative'>
              <Menu.Button
                className='p-2.5 rounded-lg bg-gray-100 dark:bg-night-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-night-600 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sakura-400 focus:ring-offset-2 dark:focus:ring-offset-night-800'
                aria-label={t('nav.language.select')}
              >
                <FaGlobe className='w-5 h-5' aria-hidden='true' />
              </Menu.Button>

              <Transition
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <Menu.Items className='absolute right-0 mt-2 w-48 rounded-lg bg-white dark:bg-night-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none py-1'>
                  {languages.map((lang) => (
                    <Menu.Item key={lang.code}>
                      {({ active }) => (
                        <button
                          onClick={() =>
                            setLanguage(lang.code as 'en' | 'vi' | 'ja')
                          }
                          className={`${
                            active ? 'bg-gray-100 dark:bg-night-600' : ''
                          } ${
                            language === lang.code
                              ? 'text-sakura-600 dark:text-sakura-400'
                              : 'text-gray-700 dark:text-gray-300'
                          } group flex w-full items-center px-4 py-2 text-sm`}
                        >
                          {lang.name}
                          {language === lang.code && (
                            <span className='ml-2 text-sakura-500'>✓</span>
                          )}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>

            <button
              onClick={toggleTheme}
              className='p-2.5 rounded-lg bg-gray-100 dark:bg-night-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-night-600 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sakura-400 focus:ring-offset-2 dark:focus:ring-offset-night-800'
              aria-label={
                theme === 'dark' ? t('nav.theme.light') : t('nav.theme.dark')
              }
            >
              {theme === 'dark' ? (
                <FaSun className='w-5 h-5 text-sakura-400' aria-hidden='true' />
              ) : (
                <FaMoon
                  className='w-5 h-5 text-sakura-600'
                  aria-hidden='true'
                />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className='p-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-night-700 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sakura-400 focus:ring-offset-2 dark:focus:ring-offset-night-800'
              aria-label='Toggle menu'
              aria-expanded={isOpen}
              aria-controls='mobile-menu'
            >
              <svg
                className='w-6 h-6 text-gray-600 dark:text-gray-300'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                {isOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          id='mobile-menu'
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? 'max-h-64 opacity-100'
              : 'max-h-0 opacity-0 pointer-events-none'
          }`}
          aria-hidden={!isOpen}
        >
          <div className='py-4 space-y-4'>
            <Link
              to='/'
              className={`block px-4 py-2.5 rounded-lg transition-colors ${
                isActivePath('/')
                  ? 'bg-sakura-50 dark:bg-night-700 text-sakura-600 dark:text-sakura-400'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-night-700 hover:text-sakura-600 dark:hover:text-sakura-400'
              }`}
              onClick={() => setIsOpen(false)}
              aria-current={isActivePath('/') ? 'page' : undefined}
            >
              {t('nav.home')}
            </Link>
            <Link
              to='/roadmap'
              className={`block px-4 py-2.5 rounded-lg transition-colors ${
                isActivePath('/roadmap')
                  ? 'bg-sakura-50 dark:bg-night-700 text-sakura-600 dark:text-sakura-400'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-night-700 hover:text-sakura-600 dark:hover:text-sakura-400'
              }`}
              onClick={() => setIsOpen(false)}
              aria-current={isActivePath('/roadmap') ? 'page' : undefined}
            >
              {t('nav.roadmap')}
            </Link>
            <a
              href='https://github.com/zun3007/expert-roadmap'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-sakura-500 dark:bg-sakura-600 text-white hover:bg-sakura-600 dark:hover:bg-sakura-700 transition-colors mx-4'
              onClick={() => setIsOpen(false)}
              aria-label='View project on GitHub'
            >
              <FaGithub className='w-5 h-5' aria-hidden='true' />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
