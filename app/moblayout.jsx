import React from 'react';
import { isMobileDevice } from '@/utils/device';
import styles from '@/app/mobilepage.module.css';

const mobLayout = ({ children }) => {
  const isMobile = typeof window !== 'undefined' && isMobileDevice(window.navigator.userAgent);

  return (
    <div className={isMobile ? styles.mobileContainer : styles.desktopContainer}>
      {children}
    </div>
  );
};

export default mobLayout;
