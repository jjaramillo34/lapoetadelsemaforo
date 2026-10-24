export interface Poem {
  title: string;
  content: string;
  author: string;
}

export const poems: Poem[] = [
  {
    title: 'La muerte vive enamorada',
    content: `La muerte vive enamorada eróticamente sueña... poseerte,
amarte, retenerte, llevarte entre sus brazos encadenarte a su cadalso, ha provisto aprovechar el infortunio haz puesto un pie en el infierno te ha besado el pulgar izquierdo...
Mèndiga cobarde, no puede retenerte...
Orgasmo haz vencido a la malévola muerdele la vida muerdele las tetas!
Maldita seas... reina de los duendes.
Orgasmo sueño de los inconformes tu voz no se apagará entre los rebeldes todos estos locos que vibramos
al vibrar de tu guitarra en nuestras venas tu caminas
cierra los ojos
muérdele la vida,
muérdele las tetas a esa puta!!!`,
    author: 'Andrea Vaca Cifuentes',
  },
];

// Long-form text (poems, prologue, review) keeps its line breaks and uses a serif face.
export const proseStyle = {
  whiteSpace: 'pre-line',
  fontFamily: 'var(--font-poem)',
} as const;
