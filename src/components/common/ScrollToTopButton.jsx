import React, { useState } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <button
      className="scroll-to-top-button"
      onClick={scrollToTop}
      style={{
        display: isVisible ? 'block' : 'none',
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        backgroundColor: 'white'
      }}
    >
      Scroll To Top
    </button>
  );
};

export default ScrollToTopButton;
