import * as React from "react";
import { cn } from "./utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** HTML id for anchor linking */
  id?: string;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("py-8 sm:py-10 md:py-12", className)}
        {...props}
      >
        {children}
      </section>
    );
  }
);
Section.displayName = "Section";

export { Section };
