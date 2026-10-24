'use client';

import { useEffect, useState } from 'react';
import { Column, Row } from '@once-ui-system/core';

type LightColor = 'red' | 'yellow' | 'green';

const sequence: Array<{ color: LightColor; duration: number }> = [
  { color: 'red', duration: 3000 },
  { color: 'yellow', duration: 2000 },
  { color: 'green', duration: 3000 },
  { color: 'yellow', duration: 2000 },
];

const lights = [
  { color: 'red', solid: 'danger-strong', glow: 'var(--danger-solid-strong)' },
  { color: 'yellow', solid: 'warning-strong', glow: 'var(--warning-solid-strong)' },
  { color: 'green', solid: 'success-strong', glow: 'var(--success-solid-strong)' },
] as const;

export default function TrafficLight() {
  const [activeLight, setActiveLight] = useState<LightColor>('red');

  useEffect(() => {
    let currentIndex = 0;
    let timeout: ReturnType<typeof setTimeout>;

    const animate = () => {
      setActiveLight(sequence[currentIndex].color);

      // Track the latest timeout so cleanup cancels whichever step is pending.
      timeout = setTimeout(() => {
        currentIndex = (currentIndex + 1) % sequence.length;
        animate();
      }, sequence[currentIndex].duration);
    };

    animate();

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Column as="section" fillWidth horizontal="center" paddingY="40" paddingX="24" aria-hidden="true">
      {/* Top cap */}
      <Row width="128" s={{ width: '104' }} height="16" background="neutral-weak" topRadius="m" />
      <Column
        background="neutral-alpha-weak"
        border="neutral-medium"
        borderWidth={4}
        radius="l"
        paddingX="16"
        paddingY="24"
        gap="20"
        s={{ paddingX: '12', paddingY: '16', gap: '16' }}
      >
        {lights.map((light) => {
          const isActive = activeLight === light.color;
          return (
            <Row
              key={light.color}
              width="64"
              height="64"
              s={{ width: '48', height: '48' }}
              radius="full"
              solid={isActive ? light.solid : 'neutral-weak'}
              transition="macro-medium"
              className={isActive ? 'light-pulse' : undefined}
              style={isActive ? { boxShadow: `0 0 32px ${light.glow}` } : undefined}
            />
          );
        })}
      </Column>
    </Column>
  );
}
