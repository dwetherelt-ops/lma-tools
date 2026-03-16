import * as React from "react";
import { cn } from "./utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: "div" | "section" | "article" | "main";
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, as: Component = "div", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn("mx-auto max-w-7xl px-6 lg:px-8", className)}
        {...props}
      />
    );
  }
);
Container.displayName = "Container";

export { Container };
