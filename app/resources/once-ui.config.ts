import type { OnceUIDataStyleConfig, OnceUIStyleConfig } from "@once-ui-system/core";

export const style: OnceUIStyleConfig = {
  // "system" keeps the header's theme switch working; first visits start dark.
  theme: "system",
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
  // Pure black in dark mode; light mode keeps Once UI's default page color.
  pageBackground: { dark: "#000000" },
};

export const dataStyle: OnceUIDataStyleConfig = {
  variant: "gradient",
  mode: "categorical",
  height: 24,
  axis: { stroke: "var(--neutral-alpha-weak)" },
  tick: { fill: "var(--neutral-on-background-weak)", fontSize: 11, line: false },
};
