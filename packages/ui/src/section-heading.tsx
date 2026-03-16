import * as React from "react";
import { cn } from "./utils";

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading = React.forwardRef<HTMLDivElement, SectionHeadingProps>(
  ({ className, title, subtitle, centered = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(centered ? "text-center" : "max-w-2xl", className)}
        {...props}
      >
        <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p
            className={cn(
              "mt-4 text-lg leading-8 text-navy-600",
              centered && "mx-auto max-w-2xl"
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
    );
  }
);
SectionHeading.displayName = "SectionHeading";

export { SectionHeading };
