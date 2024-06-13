'use client'
import { nprogress } from '@mantine/nprogress';
import { useEffect } from 'react';

export default function useScrollProgress() {
  useEffect(() => {
    // Assicurati che window sia definito
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        const progress = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        nprogress.set(progress);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);
}
