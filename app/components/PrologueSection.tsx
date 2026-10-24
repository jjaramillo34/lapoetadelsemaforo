import { Avatar, Column, Icon, Row, Text } from '@once-ui-system/core';
import { proseStyle } from '../resources/content';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

// The book's typeset line breaks, rejoined into its six paragraphs.
const paragraphs = [
  'Es la búsqueda interior, una manera de comunicar vivencias pasadas o cuotidianas según vayan aflorando a su memoria, un grito desesperado a alguien que está en su interior y no responde llenándola de soledad, una soledad terrible que la va llenando con pedazos de recuerdos, buenos o malos, que a ella ya no le importan.',
  'Andrea Vaca es una poetisa a la cual las experiencias no le valen sino para evocar un pasado confuso, lleno de misterio y adversidades que fueron formando su personalidad en un mundo cruel, despiadado, sin noches ni días, sin tiempo, entre gente conocida que no reconoce en sitios desconocidos que si existen.',
  'Se podría decir de ella que es irreverente, pero así la formó nuestra sociedad, así entró en un mundo creado por su desgracia en el que se incorpora, permanece y sale sin querer salir sintiendo pánico de reencontrarse con el mundo real de sus sueños.',
  'Es el deseo de vivir muriendo, de morir viviendo de a poco hasta ver desde lo alto si su cadáver aún tiene vida.',
  'En sus páginas a veces irreverentes te encontrarás frente a una realidad delirante en la que sin proponerse desnuda su alma, es un auto retrato que quizá no quiso mostrar, lleno de pensamientos nostálgicos de un pasado presente, en busca de un amor que se fue sin apenas despedirse dejando cenizas en sus entrañas, para vivir rodeada de la nada, evocando fantasmas que realmente existen, aferrándose a la ilusión que los pude gritar en sus escritos.',
  'Así es Andrea, una mujer que lucha por vivir y ve en el semáforo de su vida, la oportunidad de ser ella misma.',
];

// The fourth paragraph is set as a pull quote, in place.
const PULL_QUOTE_INDEX = 3;

const readingStyle = { ...proseStyle, lineHeight: 1.8 } as const;
const dropCapStyle = { ...readingStyle, '--drop-cap-color': 'var(--warning-on-background-strong)' } as React.CSSProperties;

export default function PrologueSection() {
  return (
    <Column
      as="section"
      id="prologo"
      fillWidth
      horizontal="center"
      paddingY="64"
      paddingX="24"
      background="warning-alpha-weak"
      borderY="warning-alpha-weak"
      style={{ scrollMarginTop: '6rem' }}
    >
      <Column maxWidth="m" gap="32">
        <SectionHeading
          icon="book"
          scheme="warning"
          title="Prólogo"
          subtitle={
            <Text as="span" variant="heading-strong-xl" onBackground="warning-strong">
              &quot;La Luz Verde&quot;
            </Text>
          }
        />

        <Reveal>
          <Column fillWidth background="surface" border="warning-alpha-medium" radius="l" paddingX="48" paddingY="48" gap="32" s={{ paddingX: '24', paddingY: '32' }}>
            <Icon name="quote" size="xl" onBackground="warning-medium" />

            <Column gap="24" maxWidth={40}>
              {paragraphs.map((paragraph, index) =>
                index === PULL_QUOTE_INDEX ? (
                  <Column key={index} as="blockquote" margin="0" paddingY="8" paddingLeft="24" borderLeft="warning-strong">
                    <Text
                      variant="heading-default-xl"
                      onBackground="warning-strong"
                      style={{ ...readingStyle, lineHeight: 1.5, fontStyle: 'italic' }}
                    >
                      {paragraph}
                    </Text>
                  </Column>
                ) : (
                  <Text
                    key={index}
                    variant="body-default-l"
                    onBackground="neutral-medium"
                    className={index === 0 ? 'drop-cap' : undefined}
                    style={index === 0 ? dropCapStyle : readingStyle}
                  >
                    {paragraph}
                  </Text>
                ),
              )}
            </Column>

            {/* Author signature */}
            <Row gap="16" vertical="center" paddingTop="24" borderTop="warning-alpha-weak">
              <Avatar value="LM" size="l" />
              <Column gap="4">
                <Text variant="heading-strong-m">Dr. Luis Noé Mayorga</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  Prologuista · Ambato, 5 de noviembre de 2015
                </Text>
              </Column>
            </Row>
          </Column>
        </Reveal>
      </Column>
    </Column>
  );
}
