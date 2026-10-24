import { Column, Grid, Heading, Icon, Text, type IconName } from '@once-ui-system/core';

const features: { icon: IconName; title: string; description: string }[] = [
  {
    icon: 'pen',
    title: 'Poetisa Pragmática',
    description: 'De carácter nostálgico, amante del humor negro y autodidacta',
  },
  {
    icon: 'book',
    title: '30 Años de Escritura',
    description: 'Escribo desde los 17 años, inicialmente en forma anónima hasta hoy',
  },
  {
    icon: 'heart',
    title: 'Autodidacta',
    description: 'Aprendiendo y creando a través de la experiencia',
  },
];

export default function FeatureCards() {
  return (
    <Column as="section" fillWidth horizontal="center" paddingY="40" paddingX="24">
      <Grid maxWidth="l" columns="3" s={{ columns: '1' }} gap="16">
        {features.map((feature) => (
          <Column
            key={feature.title}
            background="surface"
            border="brand-alpha-weak"
            radius="l"
            padding="24"
            gap="12"
            horizontal="center"
            align="center"
          >
            <Icon name={feature.icon} size="xl" onBackground="brand-strong" />
            <Heading as="h3" variant="heading-strong-m">
              {feature.title}
            </Heading>
            <Text variant="body-default-m" onBackground="neutral-weak">
              {feature.description}
            </Text>
          </Column>
        ))}
      </Grid>
    </Column>
  );
}
