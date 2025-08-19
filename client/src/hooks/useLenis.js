import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const useLenis = () => {
  useEffect(() => {
    // Lenis ko initialize karein
    const lenis = new Lenis({
      duration: 1.2, // Scroll ki speed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function for a smooth effect
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Ye "engine" hai jo har frame par scroll position ko update karta hai
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // Engine ko start karein
    requestAnimationFrame(raf);

    // Component unmount hone par Lenis ko destroy karein (memory leak se bachne ke liye)
    return () => {
      lenis.destroy();
    };
  }, []); // Empty dependency array, to ye sirf ek baar chalega
};

export default useLenis;