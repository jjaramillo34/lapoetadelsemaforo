import { Column, Icon, Text } from '@once-ui-system/core';
import Reveal from './Reveal';

export default function MainTextSection() {
  return (
    <Column as="section" fillWidth horizontal="center" paddingY="40" paddingX="24">
      <Column maxWidth="m">
        <Reveal>
          <Column
            fillWidth
            background="surface"
            border
            radius="l"
            padding="32"
            gap="16"
            horizontal="center"
            align="center"
          >
            <Icon name="lightbulb" size="m" onBackground="brand-strong" />
            <Text variant="body-default-l">
              Servilletas, hojas de papel y mis propios párpados sirvieron de instrumento para que el trance aquel en el que me envuelvo cada vez que escribo, lleven lo que he sentido o siento ante la retina que en este momento entrará en mi mundo.
            </Text>
            <Text variant="heading-strong-l" onBackground="brand-strong">
              Un mundo repleto de realidades infinitas apiladas, una sobre otra.
            </Text>
          </Column>
        </Reveal>
      </Column>
    </Column>
  );
}
