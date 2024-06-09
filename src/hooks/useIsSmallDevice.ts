import { useState, useEffect } from 'react';

function useIsSmallDevice() {
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsSmallDevice(mediaQuery.matches);

    function handleResize() {
      setIsSmallDevice(mediaQuery.matches);
    }

    mediaQuery.addListener(handleResize);
    return () => mediaQuery.removeListener(handleResize);
  }, []);

  return isSmallDevice;
}

export default useIsSmallDevice;
