'use client';

import { useEffect, useState } from 'react';
import { Column, Row } from '@once-ui-system/core';

export type LightColor = 'red' | 'yellow' | 'green';

// Once UI color scheme for each light, so text can match the active one.
export const lightScheme = {
  red: 'danger',
  yellow: 'warning',
  green: 'success',
} as const;

const sequence: Array<{ color: LightColor; duration: number }> = [
  { color: 'red', duration: 3000 },
  { color: 'yellow', duration: 2000 },
  { color: 'green', duration: 3000 },
  { color: 'yellow', duration: 2000 },
];

export const lights: LightColor[] = ['red', 'yellow', 'green'];

/** Cycles red → yellow → green → yellow and returns the light that is on. */
export function useTrafficLight(): LightColor {
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

  return activeLight;
}

export default function TrafficLight({ activeLight }: { activeLight: LightColor }) {
  return (
    <Column horizontal="center" aria-hidden="true">
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
        {lights.map((color) => {
          const isActive = activeLight === color;
          const scheme = lightScheme[color];
          return (
            <Row
              key={color}
              width="64"
              height="64"
              s={{ width: '48', height: '48' }}
              radius="full"
              solid={isActive ? `${scheme}-strong` : 'neutral-weak'}
              transition="macro-medium"
              className={isActive ? 'light-pulse' : undefined}
              style={isActive ? { boxShadow: `0 0 32px var(--${scheme}-solid-strong)` } : undefined}
            />
          );
        })}
      </Column>
    </Column>
  );
}
