import { Avatar, Column, Heading, Icon, Row, Tag, Text } from '@once-ui-system/core';
import { proseStyle } from '../resources/content';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const review = {
  title: 'Reseña de La Luz Verde',
  subtitle: 'Por Verónica Chávez Gómez',
  subtitleRole: 'Periodista - Gestora Cultural, Ecuador',
  content: `La Luz Verde es un poemario que no pide permiso: avanza con una voz firme, contestataria y provocadora, decidida a incomodar los silencios impuestos.
Andrea Vaca construye una poesía que se atreve a decir lo que suele ocultarse, no por escándalo gratuito, sino como gesto de resistencia. La procacidad aquí funciona como estrategia poética: un lenguaje directo, a veces áspero, que desmonta hipocresías y expone las fisuras del orden social.
La fuerza del libro radica en su capacidad de convertir la irreverencia en lucidez.
Vaca no romantiza la rebeldía; la trabaja con imágenes tensas y un ritmo que empuja al lector a mantenerse alerta. Cada poema parece una señal en verde: avanzar, cruzar, no retroceder ante lo incómodo. Esa urgencia se traduce en versos que cuestionan normas, cuerpos vigilados y discursos moralizantes, siempre desde una conciencia crítica que privilegia la honestidad por encima del ornamento.
Además, La Luz Verde destaca por su coherencia estética. La provocación no es un adorno, sino el hilo que articula el libro y le da identidad. La voz poética se sostiene con convicción, logrando que la lectura sea intensa y memorable. No es un poemario para el consumo rápido: exige participación, diálogo y, sobre todo, valentia para dejarse interpelar.
Recomendado para lectores que buscan poesía viva, incómoda y necesaria, La Luz Verde confirma a Andrea Vaca como una autora que entiende la poesía como acto politico y como espacio de libertad. Un libro que enciende preguntas y nos invita a cruzar, sin miedo, hacia una mirada más crítica del mundo.`,
  author: 'Verónica Chávez Gómez',
  date: 'Ambato, diciembre 22 de 2025.'
};

const paragraphs = review.content.split('\n');

// Pull quote lifted from the fourth paragraph; the original sentence stays in the text.
const pullQuote = 'Cada poema parece una señal en verde: avanzar, cruzar, no retroceder ante lo incómodo.';

// Themes named in the review itself.
const themes = ['Voz contestataria', 'Resistencia', 'Lucidez', 'Libertad'];

const readingStyle = { ...proseStyle, lineHeight: 1.8 } as const;
const italic = { fontStyle: 'italic' } as const;

export default function BookReviewSection() {
  return (
    <Column
      as="section"
      id="resena"
      fillWidth
      horizontal="center"
      paddingY="64"
      paddingX="24"
      background="success-alpha-weak"
      borderY="success-alpha-weak"
      style={{ scrollMarginTop: '6rem' }}
    >
      <Column maxWidth="m" gap="32">
        <SectionHeading icon="pen" floatingIcon scheme="success" title="Reseña" />

        <Reveal>
          <Column
            fillWidth
            background="surface"
            border="success-alpha-medium"
            radius="l"
            paddingX="48"
            paddingY="48"
            gap="32"
            s={{ paddingX: '24', paddingY: '32' }}
          >
            {/* Title and byline */}
            <Column gap="20" paddingBottom="24" borderBottom="success-alpha-weak">
              <Row gap="12" vertical="center">
                <Icon name="book" size="l" onBackground="success-strong" />
                <Heading as="h3" variant="heading-strong-xl">
                  {review.title}
                </Heading>
              </Row>
              <Row gap="16" vertical="center">
                <Avatar value="VC" size="l" />
                <Column gap="4">
                  <Text variant="heading-strong-s">{review.author}</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {review.subtitleRole}
                  </Text>
                </Column>
              </Row>
            </Column>

            <Column gap="24" maxWidth={40}>
              {paragraphs.map((paragraph, index) => (
                <Column key={index} gap="24">
                  <Text
                    variant={index === 0 ? 'heading-default-l' : 'body-default-l'}
                    onBackground={index === 0 ? 'neutral-strong' : 'neutral-medium'}
                    style={readingStyle}
                  >
                    {paragraph}
                  </Text>
                  {index === 1 && (
                    <Column as="aside" aria-hidden="true" paddingY="8" paddingLeft="24" borderLeft="success-strong">
                      <Text
                        variant="heading-default-xl"
                        onBackground="success-strong"
                        style={{ ...readingStyle, lineHeight: 1.5, ...italic }}
                      >
                        &quot;{pullQuote}&quot;
                      </Text>
                    </Column>
                  )}
                </Column>
              ))}
            </Column>

            <Row gap="8" wrap>
              {themes.map((theme) => (
                <Tag key={theme} scheme="success" size="m" label={theme} />
              ))}
            </Row>

            {/* Sign-off */}
            <Column paddingTop="24" borderTop="success-alpha-weak" horizontal="end" align="right" gap="4">
              <Text variant="heading-strong-s" style={italic}>— {review.author}</Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {review.date}
              </Text>
            </Column>
          </Column>
        </Reveal>
      </Column>
    </Column>
  );
}
