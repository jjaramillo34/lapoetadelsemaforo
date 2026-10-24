import { Background } from '@once-ui-system/core';

// Fixed, decorative backdrop shared by every page: a red glow from the top and a faint grid.
export default function PageBackground() {
  return (
    <Background
      position="fixed"
      top="0"
      left="0"
      fill
      pointerEvents="none"
      aria-hidden="true"
      gradient={{
        display: true,
        colorStart: 'brand-alpha-medium',
        colorEnd: 'static-transparent',
        x: 50,
        y: 0,
        width: 150,
        height: 80,
        opacity: 60,
      }}
      grid={{
        display: true,
        color: 'brand-alpha-weak',
        width: '48px',
        height: '48px',
        opacity: 30,
      }}
    />
  );
}
