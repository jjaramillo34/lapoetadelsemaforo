'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Column,
  Heading,
  Icon,
  Row,
  Text,
  VisuallyHidden,
  useInViewport,
  useReducedMotion,
} from '@once-ui-system/core';

const fullText = `ANDARIEGOS
Versos en la calle, versos en la acera, versos en el parque,
versos que dan guerra, versos en rojo, en amarillo y en
verde, versos hechos besos y no son para poetas.
Andrea Vaca Cifuentes.
Ambato 2015`;

export default function TypewriterQuote() {
  const ref = useRef<HTMLDivElement>(null);
  const inViewport = useInViewport(ref);
  const { prefersReducedMotion } = useReducedMotion();
  const [started, setStarted] = useState(false);
  const [typedLength, setTypedLength] = useState(0);

  // Start typing the first time the section scrolls into view.
  if (inViewport && !started) setStarted(true);

  useEffect(() => {
    if (!started || prefersReducedMotion) return;

    let currentIndex = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const typeWriter = () => {
      currentIndex++;
      setTypedLength(currentIndex);
      if (currentIndex < fullText.length) {
        timeoutId = setTimeout(typeWriter, 50); // Speed of typing
      }
    };

    timeoutId = setTimeout(typeWriter, 500);
    return () => clearTimeout(timeoutId);
  }, [started, prefersReducedMotion]);

  const visibleLength = prefersReducedMotion ? fullText.length : typedLength;
  const displayedText = fullText.substring(0, visibleLength);
  const isComplete = visibleLength >= fullText.length;
  const [title, ...lines] = displayedText.split('\n');

  return (
    <Column as="section" id="poesia" fillWidth horizontal="center" paddingY="40" paddingX="24" style={{ scrollMarginTop: '6rem' }}>
      <Column
        ref={ref}
        maxWidth="m"
        background="surface"
        border="brand-alpha-medium"
        radius="l"
        padding="40"
        gap="32"
        horizontal="center"
      >
        <Row gap="12" vertical="center">
          <Icon name="pen" size="l" onBackground="brand-strong" />
          <Heading as="h2" variant="display-strong-xs">
            Poesía
          </Heading>
        </Row>

        {/* Screen readers get the whole poem at once instead of letter by letter */}
        <VisuallyHidden>{fullText}</VisuallyHidden>
        <Column aria-hidden="true" fillWidth gap="16" horizontal="center" align="center" minHeight={14}>
          <Text variant="display-strong-xs" onBackground="brand-strong">
            {title}
            {lines.length === 0 && !isComplete && <span className="typing-cursor">|</span>}
          </Text>
          {lines.length > 0 && (
            <Text variant="heading-default-l" onBackground="neutral-medium" style={{ whiteSpace: 'pre-line' }}>
              {lines.join('\n')}
              {!isComplete && <span className="typing-cursor">|</span>}
            </Text>
          )}
        </Column>

        {isComplete && (
          <Column fillWidth paddingTop="16" borderTop="brand-alpha-weak" gap="8" horizontal="center" align="center" className="fade-in-up">
            <Text variant="body-default-m" onBackground="neutral-weak" style={{ fontStyle: 'italic' }}>
              — Andrea Vaca Cifuentes
            </Text>
            <Text variant="body-default-s" onBackground="neutral-weak">
              Ambato, 2015
            </Text>
          </Column>
        )}
      </Column>
    </Column>
  );
}
