import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

export const DynamicTitle = () => {
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const getTitle = () => {
      const path = location.pathname;
      let title = 'Expert Roadmap';

      if (path === '/') {
        title = t('home.title.expert') + ' - Expert Roadmap';
      } else if (path === '/roadmap') {
        title = t('roadmap.header.title') + ' - Expert Roadmap';
      }

      document.title = title;
    };

    getTitle();
  }, [location, t]);

  return null;
};

export default DynamicTitle;
