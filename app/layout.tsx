import "@once-ui-system/core/css/styles.css";
import "@once-ui-system/core/css/tokens.css";
import "./globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Column, Row, ThemeInit } from "@once-ui-system/core";
import Providers from "./components/Providers";
import { dataStyle, style } from "./resources/once-ui.config";

// Once UI reads these four variables; one family for heading, body and label.
const heading = Geist({ variable: "--font-heading", subsets: ["latin"], display: "swap" });
const body = Geist({ variable: "--font-body", subsets: ["latin"], display: "swap" });
const label = Geist({ variable: "--font-label", subsets: ["latin"], display: "swap" });
const code = Geist_Mono({ variable: "--font-code", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Andrea Kristina Vaca Cifuentes - La Poetisa del Semáforo",
  description: "Portfolio de Andrea Cristina Vaca Cifuentes, poetisa pragmática de Ambato, Ecuador. La poetisa del semáforo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Row
      as="html"
      lang="es"
      suppressHydrationWarning
      className={[heading.variable, body.variable, label.variable, code.variable].join(" ")}
    >
      <head>
        {/* Sets data-theme and the scheme before first paint. */}
        <ThemeInit config={style} dataStyle={dataStyle} />
      </head>
      <Providers>
        <Column as="body" background="page" fillWidth margin="0" padding="0" minHeight="100vh">
          {children}
          <Analytics />
        </Column>
      </Providers>
    </Row>
  );
}
