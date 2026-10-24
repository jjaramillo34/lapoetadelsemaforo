import { Column, Text } from '@once-ui-system/core';
import Reveal from './Reveal';

export default function QuoteSection() {
  return (
    <Column as="section" fillWidth horizontal="center" paddingY="40" paddingX="24">
      <Column maxWidth="m">
        <Reveal>
          <Column
            fillWidth
            background="brand-alpha-weak"
            border="brand-strong"
            borderWidth={2}
            radius="l"
            padding="40"
            gap="16"
            horizontal="center"
            align="center"
          >
            <Text variant="display-strong-xs" onBackground="brand-strong">
              &quot;Tengo LUZ VERDE para pasearme a través de mis letras...&quot;
            </Text>
            <Text variant="heading-default-l" onBackground="neutral-medium">
              GRACIAS!!!
            </Text>
          </Column>
        </Reveal>
      </Column>
    </Column>
  );
}
