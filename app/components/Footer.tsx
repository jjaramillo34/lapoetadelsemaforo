import { Column, Icon, Line, Row, Text } from '@once-ui-system/core';

const italic = { fontStyle: 'italic' } as const;

export default function Footer() {
  return (
    <Column
      as="footer"
      fillWidth
      horizontal="center"
      zIndex={1}
      marginTop="64"
      paddingY="40"
      paddingX="24"
      background="surface"
      borderTop="brand-alpha-weak"
    >
      <Column maxWidth="m" gap="24" horizontal="center">
        {/* Decorative element */}
        <Row gap="12" vertical="center">
          <Line width="48" background="brand-alpha-medium" />
          <Icon name="feather" size="s" onBackground="brand-strong" />
          <Line width="48" background="brand-alpha-medium" />
        </Row>

        {/* Main content */}
        <Column gap="8" horizontal="center" align="center">
          <Text variant="body-strong-m" onBackground="neutral-medium">
            © {new Date().getFullYear()}{' '}
            <Text as="span" onBackground="brand-strong">Andrea Kristina Vaca Cifuentes</Text>
          </Text>
          <Text variant="body-default-s" onBackground="neutral-weak">
            La Poetisa del Semáforo
          </Text>
          <Text variant="body-default-s" onBackground="neutral-weak" style={italic}>
            Nacida en Ambato, Ecuador - 4 de Enero de 1978
          </Text>
        </Column>

        {/* Quote */}
        <Column fillWidth paddingTop="16" borderTop="brand-alpha-weak" horizontal="center">
          <Text variant="body-default-s" onBackground="neutral-weak" align="center" style={italic}>
            &quot;Tengo LUZ VERDE para pasearme a través de mis letras...&quot;
          </Text>
        </Column>

        {/* Bottom decoration */}
        <Row gap="8" vertical="center">
          <Text variant="label-default-xs" onBackground="neutral-weak">Hecho con</Text>
          <Icon name="heart" size="xs" onBackground="brand-strong" />
          <Text variant="label-default-xs" onBackground="neutral-weak">por la Poetisa del Semáforo</Text>
        </Row>
      </Column>
    </Column>
  );
}
