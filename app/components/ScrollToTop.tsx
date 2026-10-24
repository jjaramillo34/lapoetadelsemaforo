'use client';

import { useState, useEffect } from 'react';
import { IconButton, Row } from '@once-ui-system/core';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button when page is scrolled down 300px
    const toggleVisibility = () => setIsVisible(window.scrollY > 300);

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <Row position="fixed" bottom="32" right="32" zIndex={9}>
      <IconButton
        icon="arrowUp"
        size="l"
        rounded
        tooltip="Volver arriba"
        tooltipPosition="left"
        ariaLabel="Volver arriba"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />
    </Row>
  );
}
