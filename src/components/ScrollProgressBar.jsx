import React, { useState, useEffect } from 'react';

export default function ScrollProgressBar() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const totalScroll = documentHeight - windowHeight;

      if (totalScroll > 0) {
        setScrollPercentage((scrollTop / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-brand-dark pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-brand-orange via-amber-500 to-orange-400 transition-all duration-150"
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
}
