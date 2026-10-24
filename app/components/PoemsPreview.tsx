import { Card, Column, Heading, Icon, Row, Text } from '@once-ui-system/core';
import { poems, proseStyle } from '../resources/content';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const poem = poems[0];

const excerptStyle = {
  ...proseStyle,
  display: '-webkit-box',
  WebkitLineClamp: 4,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
} as const;

export default function PoemsPreview() {
  return (
    <Column as="section" fillWidth horizontal="center" paddingY="40" paddingX="24">
      <Column maxWidth="l" gap="32">
        <SectionHeading
          icon="pen"
          floatingIcon
          title="Poemas"
          subtitle="Versos que dan guerra, versos en rojo, en amarillo y en verde"
        />

        <Reveal>
          <Card
            href="/poemas"
            fillWidth
            direction="column"
            background="surface"
            border="brand-alpha-medium"
            radius="l"
            padding="40"
            gap="24"
          >
            <Row horizontal="between" vertical="start" gap="16">
              <Column gap="8">
                <Row gap="12" vertical="center">
                  <Icon name="book" size="m" onBackground="brand-strong" />
                  <Heading as="h3" variant="heading-strong-xl" onBackground="brand-strong">
                    {poem.title}
                  </Heading>
                </Row>
                <Text variant="body-default-s" onBackground="neutral-weak" style={{ fontStyle: 'italic' }}>
                  — {poem.author}
                </Text>
              </Column>
              <Row gap="8" vertical="center">
                <Text variant="label-strong-m" onBackground="brand-strong" s={{ hide: true }}>
                  Leer más
                </Text>
                <Icon name="arrowRight" size="m" onBackground="brand-strong" />
              </Row>
            </Row>

            {/* Poem excerpt */}
            <Text variant="body-default-l" onBackground="neutral-medium" style={excerptStyle}>
              {poem.content}
            </Text>

            {/* Click to read more hint */}
            <Column paddingTop="24" borderTop="brand-alpha-weak">
              <Text variant="body-default-s" onBackground="neutral-weak" align="center">
                Haz clic para leer el poema completo y más versos →
              </Text>
            </Column>
          </Card>
        </Reveal>
      </Column>
    </Column>
  );
}
