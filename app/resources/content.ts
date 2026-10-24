export interface Poem {
  title: string;
  content: string;
  author: string;
  /** Where and when it was written, when known. */
  place?: string;
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
  {
    title: 'Andariegos',
    content: `Versos en la calle, versos en la acera, versos en el parque,
versos que dan guerra, versos en rojo, en amarillo y en
verde, versos hechos besos y no son para poetas.`,
    author: 'Andrea Vaca Cifuentes',
    place: 'Ambato, 2015',
  },
];

/** URL-safe id for a poem title: "La muerte vive enamorada" → "la-muerte-vive-enamorada". */
export function poemSlug(title: string): string {
  return title
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

// Long-form text (poems, prologue, review) keeps its line breaks and uses a serif face.
export const proseStyle = {
  whiteSpace: 'pre-line',
  fontFamily: 'var(--font-poem)',
} as const;
