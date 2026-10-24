import { Button, Column, Heading, Text } from '@once-ui-system/core';
import AnimatedBackground from '../components/AnimatedBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import SectionHeading from '../components/SectionHeading';
import { poems, proseStyle } from '../resources/content';

export default function PoemasPage() {
  return (
    <Column fillWidth flex={1}>
      <AnimatedBackground />
      <Header showBack />

      <Column as="main" fillWidth flex={1} zIndex={1} horizontal="center" paddingY="64" paddingX="24">
        <Column maxWidth="m" gap="48">
          <SectionHeading
            icon="book"
            title="Poemas"
            subtitle="Versos que dan guerra, versos en rojo, en amarillo y en verde"
          />

          {poems.map((poem) => (
            <Column
              as="article"
              key={poem.title}
              fillWidth
              background="surface"
              border="brand-alpha-medium"
              radius="l"
              padding="40"
              gap="32"
            >
              <Column gap="8" paddingBottom="24" borderBottom="brand-alpha-weak">
                <Heading as="h3" variant="display-strong-xs" onBackground="brand-strong">
                  {poem.title}
                </Heading>
                <Text variant="body-default-m" onBackground="neutral-weak" style={{ fontStyle: 'italic' }}>
                  — {poem.author}
                </Text>
              </Column>
              <Text variant="heading-default-l" onBackground="neutral-medium" align="justify" style={proseStyle}>
                {poem.content}
              </Text>
            </Column>
          ))}

          <Column horizontal="center">
            <Button href="/" variant="secondary" prefixIcon="arrowLeft" label="Volver al inicio" />
          </Column>
        </Column>
      </Column>

      <Footer />
      <ScrollToTop />
    </Column>
  );
}
