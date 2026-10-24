import { Column, Icon, Row, Text } from '@once-ui-system/core';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const prologue = `Es la búsqueda interior, una manera de comunicar
vivencias pasadas o cuotidianas según vayan aflorando
a su memoria, un grito desesperado a alguien que está
en su interior y no responde llenándola de soledad,
una soledad terrible que la va llenando con pedazos de
recuerdos, buenos o malos, que a ella ya no le importan.
Andrea Vaca es una poetisa a la cual las experiencias
no le valen sino para evocar un pasado confuso, lleno
de misterio y adversidades que fueron formando su
personalidad en un mundo cruel, despiadado, sin noches
ni días, sin tiempo, entre gente conocida que no reconoce
en sitios desconocidos que si existen.
Se podría decir de ella que es irreverente, pero así la
formó nuestra sociedad, así entró en un mundo creado
por su desgracia en el que se incorpora, permanece y sale
sin querer salir sintiendo pánico de reencontrarse con el
mundo real de sus sueños.
Es el deseo de vivir muriendo, de morir viviendo de a
poco hasta ver desde lo alto si su cadáver aún tiene vida.
En sus páginas a veces irreverentes te encontrarás
frente a una realidad delirante en la que sin proponerse
desnuda su alma, es un auto retrato que quizá no quiso
mostrar, lleno de pensamientos nostálgicos de un pasado
presente, en busca de un amor que se fue sin apenas
despedirse dejando cenizas en sus entrañas, para vivir
rodeada de la nada, evocando fantasmas que realmente
existen, aferrándose a la ilusión que los pude gritar en
sus escritos.
Así es Andrea, una mujer que lucha por vivir y ve en
el semáforo de su vida, la oportunidad de ser ella misma.`;

export default function PrologueSection() {
  return (
    <Column as="section" fillWidth horizontal="center" paddingY="40" paddingX="24">
      <Column maxWidth="m" gap="32">
        <SectionHeading
          icon="book"
          title="Prólogo"
          subtitle={
            <Text as="span" variant="heading-strong-xl" onBackground="brand-strong">
              &quot;La Luz Verde&quot;
            </Text>
          }
        />

        <Reveal>
          <Column fillWidth background="surface" border radius="l" padding="40" gap="32">
            <Row gap="16" vertical="start">
              <Icon name="quote" size="l" onBackground="brand-strong" s={{ hide: true }} />
              <Text
                variant="body-default-l"
                onBackground="neutral-medium"
                align="justify"
                style={{ whiteSpace: 'pre-line' }}
              >
                {prologue}
              </Text>
              <Icon
                name="quote"
                size="l"
                onBackground="brand-strong"
                s={{ hide: true }}
                style={{ transform: 'rotate(180deg)' }}
              />
            </Row>

            {/* Author signature */}
            <Column paddingTop="24" borderTop="brand-alpha-weak" horizontal="end" align="right" gap="4">
              <Text variant="heading-strong-l">Dr. Luis Noé Mayorga</Text>
              <Text variant="body-default-m" onBackground="neutral-weak">
                Ambato, 5 de Noviembre 2015
              </Text>
            </Column>
          </Column>
        </Reveal>
      </Column>
    </Column>
  );
}
