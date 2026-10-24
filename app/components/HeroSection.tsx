import { Column, Heading, Text } from '@once-ui-system/core';

export default function HeroSection() {
  return (
    <Column as="section" fillWidth horizontal="center" paddingTop="64" paddingBottom="40" paddingX="24">
      <Column maxWidth="l" gap="20" horizontal="center" align="center">
        <Heading as="h2" variant="display-strong-xl" className="fade-in-up">
          La Poetisa
          <Text as="span" onBackground="brand-strong" style={{ display: 'block' }}>
            del Semáforo
          </Text>
        </Heading>
        <Text
          variant="heading-default-l"
          onBackground="neutral-medium"
          className="fade-in-up"
          style={{ fontStyle: 'italic', animationDelay: '300ms' }}
        >
          &quot;Tengo LUZ VERDE para pasearme a través de mis letras...&quot;
        </Text>
      </Column>
    </Column>
  );
}
