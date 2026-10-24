'use client';

import { Background, Button, Column, Flex, Heading, Row, Text, TypeFx } from '@once-ui-system/core';
import TrafficLight, { lightScheme, lights, useTrafficLight } from './TrafficLight';

// Staggered CSS entrance; the headline never waits on JavaScript to appear.
const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

// From her poem "Andariegos": "Versos en la calle, versos en la acera, versos en el parque…"
const verses = ['en la calle', 'en la acera', 'en el parque', 'que dan guerra', 'hechos besos'];

export default function HeroSection() {
  const activeLight = useTrafficLight();
  const activeScheme = lightScheme[activeLight];

  return (
    <Column
      as="section"
      fillWidth
      center
      minHeight="calc(100svh - 80px)"
      paddingY="80"
      paddingX="24"
      s={{ paddingY: '48' }}
    >
      <Flex maxWidth="l" gap="64" vertical="center" horizontal="between" s={{ direction: 'column', gap: '48' }}>
        <Column gap="24" flex={1}>
          <Text variant="label-default-s" onBackground="brand-medium" className="fade-in-up">
            Ambato, Ecuador · Poesía · La Luz Verde
          </Text>
          <Heading as="h1" variant="display-strong-xl" className="fade-in-up" style={delay(100)}>
            La Poetisa
            {/* Changes color with the traffic light */}
            <Text
              as="span"
              onBackground={`${activeScheme}-strong`}
              style={{ display: 'block', transition: 'color 0.6s ease' }}
            >
              del Semáforo
            </Text>
          </Heading>
          <Text variant="heading-strong-l" onBackground="neutral-strong" className="fade-in-up" style={delay(200)}>
            Versos{' '}
            <TypeFx
              as="span"
              words={verses}
              speed={60}
              hold={1800}
              delay={800}
              onBackground={`${activeScheme}-strong`}
              style={{ transition: 'color 0.6s ease' }}
            />
          </Text>
          <Text
            variant="heading-default-l"
            onBackground="neutral-medium"
            className="fade-in-up"
            style={{ ...delay(300), fontStyle: 'italic' }}
          >
            &quot;Tengo LUZ VERDE para pasearme a través de mis letras...&quot;
          </Text>
          <Row gap="12" paddingTop="8" className="fade-in-up" style={delay(400)} s={{ direction: 'column' }}>
            <Button href="/poemas" size="l" arrowIcon label="Leer poemas" />
            <Button href="#libro" size="l" variant="secondary" prefixIcon="book" label="Conocer el libro" />
          </Row>
        </Column>

        <Row className="fade-in-up" style={delay(200)}>
          {/* The light spills its color around it: one glow per light, cross-faded */}
          <Column
            position="absolute"
            top="-50%"
            left="-100%"
            width="300%"
            height="200%"
            pointerEvents="none"
            aria-hidden="true"
          >
            {lights.map((color) => (
              <Background
                key={color}
                position="absolute"
                top="0"
                left="0"
                gradient={{
                  display: true,
                  colorStart: `${lightScheme[color]}-alpha-medium`,
                  colorEnd: 'static-transparent',
                  x: 50,
                  y: 50,
                  width: 40,
                  height: 40,
                  opacity: 100,
                }}
                style={{ opacity: activeLight === color ? 1 : 0, transition: 'opacity 0.8s ease' }}
              />
            ))}
          </Column>
          <Row zIndex={1}>
            <TrafficLight activeLight={activeLight} />
          </Row>
        </Row>
      </Flex>
    </Column>
  );
}
