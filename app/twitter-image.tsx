import { renderOgImage } from './resources/og-image';

export const alt = 'La Poetisa del Semáforo — Andrea Vaca Cifuentes';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return renderOgImage({
    eyebrow: 'Andrea Vaca Cifuentes · Poesía',
    title: 'La Poetisa',
    accent: 'del Semáforo',
    quote: '"Tengo LUZ VERDE para pasearme a través de mis letras..."',
  });
}
