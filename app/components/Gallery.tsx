import { Column, Icon, MasonryGrid, Media, Row, Text } from '@once-ui-system/core';
import SectionHeading from './SectionHeading';

// Shown uncropped at their natural shape, so enlarging reveals the whole photo.
const photos = [
  {
    src: '/andre0.jpg',
    caption: 'Retrato',
    alt: 'Andrea Vaca con gafas oscuras, retrato de estudio',
  },
  {
    src: '/andre2.jpeg',
    caption: 'En escena',
    alt: 'Andrea Vaca cantando con micrófono bajo luces de colores',
  },
  {
    src: '/andre1.jpeg',
    caption: 'En escena',
    alt: 'Andrea Vaca de espaldas en el escenario, en blanco y negro',
  },
  {
    src: '/andre5.jpg',
    caption: 'De noche',
    alt: 'Andrea Vaca posando junto a una palmera de noche',
  },
  {
    src: '/andre3.jpeg',
    caption: 'Cultura Hip Hop',
    alt: 'Andrea Vaca con micrófono en un evento de cultura hip hop, en blanco y negro',
  },
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
        <SectionHeading
          icon="image"
          title="Galería"
          subtitle="Momentos y obras de la Poetisa del Semáforo"
        />

        {/* Not wrapped in RevealFx: its leftover transform would trap the enlarged image */}
        <MasonryGrid columns={3} m={{ columns: 2 }} s={{ columns: 1 }} gap="16">
          {photos.map((photo, index) => (
            <Media
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              aria-label={`Ampliar imagen: ${photo.alt}`}
              caption={photo.caption}
              radius="l"
              border="brand-alpha-weak"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={index === 0}
              enlarge
            />
          ))}
        </MasonryGrid>

        <Row gap="8" center>
          <Icon name="image" size="xs" onBackground="neutral-weak" />
          <Text variant="label-default-s" onBackground="neutral-weak">
            Toca una foto para ampliarla · Fotografías en escena: Protesta Audiovisual
          </Text>
        </Row>
      </Column>
    </Column>
  );
}
