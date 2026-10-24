import { Column, Text } from '@once-ui-system/core';
import Reveal from './Reveal';

export default function BiographySection() {
  return (
    <Column as="section" fillWidth horizontal="center" paddingY="40" paddingX="24">
      <Column maxWidth="m">
        <Reveal>
          <Column
            fillWidth
            background="brand-alpha-weak"
            border="brand-alpha-medium"
            radius="l"
            padding="32"
            horizontal="center"
          >
            <Text variant="body-default-l" align="center">
              Mi nombre es{' '}
              <Text as="span" variant="body-strong-l" onBackground="brand-strong">
                Andrea Cristina Vaca Cifuentes
              </Text>
              , nací en la ciudad de{' '}
              <Text as="span" onBackground="brand-strong">Ambato, Ecuador</Text>, el{' '}
              <Text as="span" onBackground="brand-strong">4 de enero de 1978</Text>.
            </Text>
          </Column>
        </Reveal>
      </Column>
    </Column>
  );
}
