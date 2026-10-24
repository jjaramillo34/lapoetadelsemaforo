import { Column, Heading, Icon, Row, Text, type IconName } from '@once-ui-system/core';

interface SectionHeadingProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  icon?: IconName;
  /** Gently bob the icon up and down. */
  floatingIcon?: boolean;
  as?: 'h1' | 'h2';
}

export default function SectionHeading({ title, subtitle, icon, floatingIcon = false, as = 'h2' }: SectionHeadingProps) {
  return (
    <Column gap="12" horizontal="center" align="center">
      <Row gap="12" vertical="center">
        {icon && (
          <Icon
            name={icon}
            size="l"
            onBackground="brand-strong"
            className={floatingIcon ? 'floating-icon' : undefined}
          />
        )}
        <Heading as={as} variant="display-strong-s">
          {title}
        </Heading>
      </Row>
      {subtitle && (
        <Text variant="body-default-l" onBackground="neutral-weak">
          {subtitle}
        </Text>
      )}
    </Column>
  );
}
