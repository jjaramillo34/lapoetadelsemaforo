import { Button, Column, Heading, Icon, IconButton, Row, SmartLink, Text } from '@once-ui-system/core';

const navItems = [
  { href: '/#poesia', icon: 'pen', label: 'Poesía' },
  { href: '/#libro', icon: 'book', label: 'Mi libro' },
  { href: '/#galeria', icon: 'image', label: 'Galería' },
] as const;

interface HeaderProps {
  /** Show a "back to home" link instead of the section nav. */
  showBack?: boolean;
}

export default function Header({ showBack = false }: HeaderProps) {
  const brand = (
    <SmartLink href="/" unstyled>
      <Row gap="12" vertical="center">
        <Icon name="feather" size="l" onBackground="brand-strong" className="floating-icon" />
        <Column>
          <Heading as="h1" variant="heading-strong-m">
            Andrea Kristina Vaca Cifuentes
          </Heading>
          <Text variant="label-default-s" onBackground="neutral-weak" s={{ hide: true }}>
            La Poetisa del Semáforo
          </Text>
        </Column>
      </Row>
    </SmartLink>
  );

  return (
    <Row
      as="header"
      position="sticky"
      top="0"
      zIndex={9}
      fillWidth
      horizontal="center"
      background="surface"
      backdropBlur="m"
      borderBottom="brand-alpha-weak"
    >
      <Row maxWidth="l" paddingX="24" paddingY="16" gap="16" vertical="center" horizontal="between">
        {showBack ? (
          <>
            <Button href="/" variant="tertiary" size="s" prefixIcon="arrowLeft" label="Volver al inicio" />
            {brand}
          </>
        ) : (
          <>
            {brand}
            <Row as="nav" gap="8" vertical="center" aria-label="Secciones">
              {navItems.map((item) => (
                <IconButton
                  key={item.href}
                  href={item.href}
                  icon={item.icon}
                  variant="ghost"
                  tooltip={item.label}
                  tooltipPosition="bottom"
                  ariaLabel={item.label}
                />
              ))}
              <Button href="/poemas" variant="secondary" size="s" label="Poemas" />
            </Row>
          </>
        )}
      </Row>
    </Row>
  );
}
