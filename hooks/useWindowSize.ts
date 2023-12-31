'use client';
import { useState, useEffect } from 'react';

type windowSize = {
  width: number | undefined;
  height: number | undefined;
};
// Hook
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<windowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener('resize', handleResize);
      handleResize();

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return windowSize;
};

export default useWindowSize;
