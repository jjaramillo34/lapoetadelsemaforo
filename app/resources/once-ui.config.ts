import type { OnceUIDataStyleConfig, OnceUIStyleConfig } from "@once-ui-system/core";

export const style: OnceUIStyleConfig = {
  // Forced dark: the site is designed black-only and there is no theme switch.
  theme: "dark",
  defaultTheme: "dark",
  neutral: "gray",
  brand: "red",
  accent: "red",
  solid: "color",
  solidStyle: "flat",
  border: "rounded",
  surface: "translucent",
  transition: "all",
  scaling: "100",
  pageBackground: "#000000",
};

export const dataStyle: OnceUIDataStyleConfig = {
  variant: "gradient",
  mode: "categorical",
  height: 24,
  axis: { stroke: "var(--neutral-alpha-weak)" },
  tick: { fill: "var(--neutral-on-background-weak)", fontSize: 11, line: false },
};
