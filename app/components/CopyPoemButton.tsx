'use client';

import { IconButton, useToast } from '@once-ui-system/core';
import type { Poem } from '../resources/content';

export default function CopyPoemButton({ poem }: { poem: Poem }) {
  const { addToast } = useToast();

  const copy = async () => {
    const signature = [poem.author, poem.place].filter(Boolean).join(', ');
    try {
      await navigator.clipboard.writeText(`${poem.title}\n\n${poem.content}\n\n— ${signature}`);
      addToast({ variant: 'success', message: `"${poem.title}" copiado` });
    } catch {
      addToast({ variant: 'danger', message: 'No se pudo copiar el poema' });
    }
  };

  return (
    <IconButton
      icon="copy"
      variant="secondary"
      tooltip="Copiar poema"
      tooltipPosition="left"
      ariaLabel={`Copiar poema: ${poem.title}`}
      onClick={copy}
    />
  );
}
