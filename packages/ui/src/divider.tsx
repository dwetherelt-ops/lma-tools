import * as React from "react";
import { cn } from "./utils";

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  spacing?: "sm" | "default" | "lg";
}

const spacingClasses = {
  sm: "my-4",
  default: "my-8",
  lg: "my-12",
};

const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
  ({ className, spacing = "default", ...props }, ref) => {
    return (
      <hr
        ref={ref}
        className={cn(
          "border-0 border-t border-navy-100",
          spacingClasses[spacing],
          className
        )}
        {...props}
      />
    );
  }
);
Divider.displayName = "Divider";

export { Divider };
