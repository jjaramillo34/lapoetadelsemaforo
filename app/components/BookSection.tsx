import { Column, Flex, Line, Media, Row, Text } from '@once-ui-system/core';
import SectionHeading from './SectionHeading';

const bookImages = [
  { src: '/portada.jpg', alt: 'Portada del libro - La Luz Verde', caption: 'Portada' },
  { src: '/trasera.jpg', alt: 'Contraportada del libro - La Luz Verde', caption: 'Contraportada' },
];

export default function BookSection() {
  return (
    <Column
      as="section"
      id="libro"
      fillWidth
      horizontal="center"
      paddingY="40"
      paddingX="24"
      style={{ scrollMarginTop: '6rem' }}
    >
      <Column maxWidth="l" gap="32" horizontal="center">
        <SectionHeading icon="book" title="Mi Libro" subtitle={<>&quot;La Luz Verde&quot; - Una colección de poemas</>} />

        <Flex gap="32" center s={{ direction: 'column' }}>
          {bookImages.map((image, index) => (
            <Row key={image.src} gap="32" vertical="center" s={{ direction: 'column' }}>
              {/* Divider between the covers - desktop only */}
              {index > 0 && (
                <Line vert height="128" background="brand-alpha-medium" s={{ hide: true }} />
              )}
              <Column width={25} s={{ width: 20 }}>
                <Media
                  src={image.src}
                  alt={image.alt}
                  aria-label={`Ampliar imagen: ${image.alt}`}
                  caption={image.caption}
                  aspectRatio="3/4"
                  radius="l"
                  border="brand-alpha-weak"
                  sizes="(max-width: 768px) 320px, 400px"
                  priority
                  enlarge
                />
              </Column>
            </Row>
          ))}
        </Flex>

        {/* Book info */}
        <Column gap="16" horizontal="center" align="center">
          <Text variant="body-default-l" onBackground="neutral-medium">
            Descubre las obras y pensamientos de la Poetisa del Semáforo
          </Text>
          <Row background="surface" border="brand-alpha-weak" radius="l" paddingX="24" paddingY="12">
            <Text variant="body-default-s" onBackground="neutral-weak">
              Colección disponible en formato físico y digital
            </Text>
          </Row>
        </Column>
      </Column>
    </Column>
  );
}
