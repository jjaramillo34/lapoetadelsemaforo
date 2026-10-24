import { Feather, Lightbulb, PenTool, Quote } from "lucide-react";
import type { IconComponent } from "@once-ui-system/core";

// Lucide icons the built-in Once UI set doesn't have.
export const icons = {
  feather: Feather as IconComponent,
  pen: PenTool as IconComponent,
  lightbulb: Lightbulb as IconComponent,
  quote: Quote as IconComponent,
};

declare module "@once-ui-system/core" {
  interface IconLibraryOverrides {
    feather: true;
    pen: true;
    lightbulb: true;
    quote: true;
  }
}
