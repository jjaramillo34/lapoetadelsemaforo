import { Column, Heading, Icon, Row, Text } from '@once-ui-system/core';
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

const italic = { fontStyle: 'italic' } as const;

export default function BookReviewSection() {
  return (
    <Column as="section" fillWidth horizontal="center" paddingY="40" paddingX="24">
      <Column maxWidth="m" gap="32">
        <SectionHeading icon="pen" floatingIcon title="Reseña" />

        <Reveal>
          <Column fillWidth background="surface" border="brand-alpha-medium" radius="l" padding="40" gap="24">
            {/* Review title and author */}
            <Column gap="16" paddingBottom="24" borderBottom="brand-alpha-weak">
              <Row gap="12" vertical="center">
                <Icon name="book" size="l" onBackground="brand-strong" />
                <Heading as="h3" variant="heading-strong-xl" onBackground="brand-strong">
                  {review.title}
                </Heading>
              </Row>
              <Column gap="4">
                <Text variant="heading-strong-s">{review.subtitle}</Text>
                <Text variant="body-default-s" onBackground="neutral-weak" style={italic}>
                  {review.subtitleRole}
                </Text>
              </Column>
            </Column>

            {/* Review content */}
            <Icon name="quote" size="l" onBackground="brand-medium" />
            <Text variant="body-default-l" onBackground="neutral-medium" align="justify" style={proseStyle}>
              {review.content}
            </Text>

            {/* Review footer */}
            <Column paddingTop="24" borderTop="brand-alpha-weak" horizontal="end" align="right" gap="4">
              <Text variant="heading-strong-s">— {review.author}</Text>
              <Text variant="body-default-s" onBackground="neutral-weak" style={italic}>
                {review.date}
              </Text>
            </Column>
          </Column>
        </Reveal>
      </Column>
    </Column>
  );
}
