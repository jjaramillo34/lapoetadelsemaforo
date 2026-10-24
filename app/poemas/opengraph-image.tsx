import { renderOgImage } from '../resources/og-image';

export const alt = 'Poemas de Andrea Vaca Cifuentes, la Poetisa del Semáforo';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return renderOgImage({
    eyebrow: 'Poemas · Andrea Vaca Cifuentes',
    title: 'Versos',
    accent: 'que dan guerra',
    quote: 'Versos en rojo, en amarillo y en verde',
  });
}
