import { Column, Grid, Media } from '@once-ui-system/core';
import SectionHeading from './SectionHeading';

const images = [
  '/andre0.jpg',
  '/andre1.jpeg',
  '/andre2.jpeg',
  '/andre3.jpeg',
  '/andre4.jpeg',
  '/andre5.jpg',
];

export default function Gallery() {
  return (
    <Column
      as="section"
      id="galeria"
      fillWidth
      horizontal="center"
      paddingY="40"
      paddingX="24"
      style={{ scrollMarginTop: '6rem' }}
    >
      <Column maxWidth="l" gap="32">
        <SectionHeading title="Galería" subtitle="Momentos y obras de la Poetisa del Semáforo" />

        {/* Each image enlarges on click, Enter or Space; Escape closes it */}
        <Grid columns="2" s={{ columns: '1' }} gap="16">
          {images.map((image, index) => (
            <Media
              key={image}
              src={image}
              alt={`Andrea Vaca, fotografía ${index + 1}`}
              aria-label={`Ampliar imagen: Andrea Vaca, fotografía ${index + 1}`}
              aspectRatio="1/1"
              radius="l"
              border="brand-alpha-weak"
              sizes="(max-width: 768px) 100vw, 50vw"
              enlarge
            />
          ))}
        </Grid>
      </Column>
    </Column>
  );
}
