'use client';

import { useRef, useState } from 'react';
import { Column, RevealFx, useInViewport } from '@once-ui-system/core';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
}

// Reveals its children the first time they scroll into view, then stays revealed.
export default function Reveal({ children, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inViewport = useInViewport(ref);
  const [seen, setSeen] = useState(false);

  // Latch during render so leaving the viewport never hides it again.
  if (inViewport && !seen) setSeen(true);

  return (
    <Column ref={ref} fillWidth>
      <RevealFx revealed={seen} speed="fast" translateY="16" delay={delay} fillWidth>
        {children}
      </RevealFx>
    </Column>
  );
}
