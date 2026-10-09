import { useState, useEffect } from 'react';

/**
 * Hook to detect if the current view should render as mobile.
 * Works both with the studio forcedMobile prop (deviceSize === 'mobile')
 * and with real browser window width (< 768px).
 */
export function useIsMobile(forcedMobile = false) {
  const [isMobileScreen, setIsMobileScreen] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return forcedMobile || isMobileScreen;
}
