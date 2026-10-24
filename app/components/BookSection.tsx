import { Button, Column, Flex, Heading, Line, Media, Row, Text } from '@once-ui-system/core';
import SectionHeading from './SectionHeading';

// Details as printed in the book's credits page.
const details = [
  { label: 'Prólogo', value: 'Dr. Luis Noé Mayorga' },
  { label: 'Ilustraciones', value: 'Miguel Ángel Cifuentes' },
  { label: 'Derecho de autor', value: 'GYE-006755' },
  { label: 'Impreso en Ecuador', value: 'El Telégrafo E.P.' },
  { label: 'Formatos', value: 'Físico y digital' },
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
      <Column maxWidth="l" gap="40">
        <SectionHeading icon="book" title="Mi Libro" subtitle="Descubre las obras y pensamientos de la Poetisa del Semáforo" />

        <Flex gap="48" vertical="center" s={{ direction: 'column', gap: '32' }}>
          {/* Covers: front leads, back sits beside it. No transforms here, so enlarge works. */}
          <Row gap="16" vertical="end" flex={1} horizontal="center">
            <Column width={18} s={{ width: 10 }}>
              <Media
                src="/portada.jpg"
                alt="Portada del libro - La Luz Verde"
                aria-label="Ampliar imagen: Portada del libro - La Luz Verde"
                caption="Portada"
                aspectRatio="918/1306"
                radius="l"
                border="brand-alpha-medium"
                shadow="xl"
                sizes="(max-width: 768px) 160px, 288px"
                priority
                enlarge
              />
            </Column>
            <Column width={12} s={{ width: 7 }}>
              <Media
                src="/trasera.jpg"
                alt="Contraportada del libro - La Luz Verde"
                aria-label="Ampliar imagen: Contraportada del libro - La Luz Verde"
                caption="Contraportada"
                aspectRatio="918/1304"
                radius="l"
                border="brand-alpha-weak"
                sizes="(max-width: 768px) 112px, 192px"
                enlarge
              />
            </Column>
          </Row>

          {/* Book details */}
          <Column flex={1} gap="24" background="surface" border="brand-alpha-weak" radius="l" padding="32">
            <Column gap="8">
              <Text variant="label-default-s" onBackground="brand-medium">
                Poemario
              </Text>
              <Heading as="h3" variant="display-strong-s">
                La Luz Verde
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">
                por Andrea Vaca Cifuentes
              </Text>
            </Column>

            <Column as="blockquote" gap="8" margin="0" paddingLeft="16" borderLeft="brand-strong">
              <Text variant="body-default-l" onBackground="neutral-medium" style={{ fontStyle: 'italic' }}>
                &quot;Un poemario que no pide permiso: avanza con una voz firme, contestataria y provocadora,
                decidida a incomodar los silencios impuestos.&quot;
              </Text>
              <Text variant="label-default-s" onBackground="neutral-weak">
                — Verónica Chávez Gómez, periodista y gestora cultural
              </Text>
            </Column>

            <Line background="brand-alpha-weak" />

            <Column as="dl" gap="12" margin="0">
              {details.map((detail) => (
                <Row key={detail.label} gap="16" horizontal="between" s={{ direction: 'column', gap: '4' }}>
                  <Text as="dt" variant="label-default-s" onBackground="neutral-weak">
                    {detail.label}
                  </Text>
                  <Text as="dd" variant="body-strong-s" margin="0">
                    {detail.value}
                  </Text>
                </Row>
              ))}
            </Column>

            <Row gap="12" paddingTop="8" s={{ direction: 'column' }}>
              <Button href="#prologo" prefixIcon="quote" label="Leer el prólogo" />
              <Button href="#resena" variant="secondary" prefixIcon="pen" label="Ver la reseña" />
            </Row>
          </Column>
        </Flex>
      </Column>
    </Column>
  );
}
