import { Fragment } from 'react';
import type { Metadata } from 'next';
import { Button, Column, Heading, Icon, Line, Row, Text } from '@once-ui-system/core';
import PageBackground from '../components/PageBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import CopyPoemButton from '../components/CopyPoemButton';
import { poems, poemSlug, proseStyle } from '../resources/content';

export const metadata: Metadata = {
  title: 'Poemas - La Poetisa del Semáforo',
  description: 'Poemas de Andrea Vaca Cifuentes, la Poetisa del Semáforo. Versos que dan guerra, versos en rojo, en amarillo y en verde.',
};

// Each poem takes the next traffic-light color: red, amber, green.
const schemes = ['brand', 'warning', 'success'] as const;

const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
const roman = (n: number) => romanNumerals[n - 1] ?? String(n);

// Verses keep the author's line breaks and are never justified.
const verseStyle = { ...proseStyle, lineHeight: 1.9 } as const;
const italic = { fontStyle: 'italic' } as const;

function Ornament() {
  return (
    <Row gap="12" center aria-hidden="true">
      <Line width="48" background="brand-alpha-medium" />
      <Icon name="feather" size="s" onBackground="brand-strong" />
      <Line width="48" background="brand-alpha-medium" />
    </Row>
  );
}

export default function PoemasPage() {
  return (
    <Column fillWidth flex={1}>
      <PageBackground />
      <Header showBack />

      <Column as="main" fillWidth flex={1} horizontal="center" paddingY="64" paddingX="24">
        <Column maxWidth="m" gap="48">
          {/* Page header with an index of the poems */}
          <Column gap="20" horizontal="center" align="center">
            <Text variant="label-default-s" onBackground="brand-medium">
              Antología · {poems.length} poemas
            </Text>
            <Row gap="12" vertical="center">
              <Icon name="feather" size="l" onBackground="brand-strong" className="floating-icon" />
              <Heading as="h1" variant="display-strong-l">
                Poemas
              </Heading>
            </Row>
            <Text variant="heading-default-l" onBackground="neutral-weak" style={italic}>
              Versos que dan guerra, versos en rojo, en amarillo y en verde
            </Text>
            <Row as="nav" aria-label="Índice de poemas" gap="8" wrap horizontal="center" paddingTop="8">
              {poems.map((poem, index) => (
                <Button
                  key={poem.title}
                  href={`#${poemSlug(poem.title)}`}
                  variant="tertiary"
                  size="s"
                  label={`${roman(index + 1)}. ${poem.title}`}
                />
              ))}
            </Row>
          </Column>

          {poems.map((poem, index) => {
            const scheme = schemes[index % schemes.length];
            return (
              <Fragment key={poem.title}>
                {index > 0 && <Ornament />}
                <Column
                  as="article"
                  id={poemSlug(poem.title)}
                  fillWidth
                  background="surface"
                  border={`${scheme}-alpha-medium`}
                  radius="l"
                  paddingX="48"
                  paddingY="48"
                  gap="32"
                  s={{ paddingX: '24', paddingY: '32' }}
                  style={{ scrollMarginTop: '6rem' }}
                >
                  <Row horizontal="between" vertical="start" gap="16" paddingBottom="24" borderBottom={`${scheme}-alpha-weak`}>
                    <Column gap="8">
                      <Text variant="label-strong-s" onBackground={`${scheme}-strong`}>
                        Poema {roman(index + 1)}
                      </Text>
                      <Heading as="h2" variant="display-strong-xs">
                        {poem.title}
                      </Heading>
                      <Text variant="body-default-m" onBackground="neutral-weak" style={italic}>
                        — {[poem.author, poem.place].filter(Boolean).join(' · ')}
                      </Text>
                    </Column>
                    <CopyPoemButton poem={poem} />
                  </Row>

                  <Column maxWidth={40}>
                    <Text variant="heading-default-m" onBackground="neutral-strong" style={verseStyle}>
                      {poem.content}
                    </Text>
                  </Column>
                </Column>
              </Fragment>
            );
          })}

          {/* Closing call to action */}
          <Column
            background="brand-alpha-weak"
            border="brand-alpha-medium"
            radius="l"
            padding="40"
            gap="16"
            horizontal="center"
            align="center"
          >
            <Heading as="h2" variant="heading-strong-xl">
              ¿Quieres leer más?
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-medium">
              Descubre &quot;La Luz Verde&quot;, su prólogo y su reseña.
            </Text>
            <Row gap="12" paddingTop="8" s={{ direction: 'column' }}>
              <Button href="/#libro" prefixIcon="book" label="Conocer el libro" />
              <Button href="/" variant="secondary" prefixIcon="arrowLeft" label="Volver al inicio" />
            </Row>
          </Column>
        </Column>
      </Column>

      <Footer />
      <ScrollToTop />
    </Column>
  );
}
