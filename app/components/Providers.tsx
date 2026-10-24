'use client';

import {
  DataThemeProvider,
  IconProvider,
  ThemeProvider,
  ToastProvider,
} from '@once-ui-system/core';
import { LayoutProvider } from '@once-ui-system/core/next';
import { dataStyle, style } from '../resources/once-ui.config';
import { icons } from '../resources/icons';

// LayoutProvider from /next so links and images go through next/link and next/image.
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LayoutProvider>
      <ThemeProvider {...style}>
        <DataThemeProvider {...dataStyle}>
          <ToastProvider>
            <IconProvider icons={icons}>{children}</IconProvider>
          </ToastProvider>
        </DataThemeProvider>
      </ThemeProvider>
    </LayoutProvider>
  );
}
