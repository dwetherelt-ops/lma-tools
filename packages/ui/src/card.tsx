import * as React from "react";
import { cn } from "./utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  href?: string;
}

const CardRoot = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, title, description, icon, href, children, ...props }, ref) => {
    const content = (
      <>
        {icon && <div className="mb-3">{icon}</div>}
        {title && (
          <h3 className="text-lg font-semibold text-navy-900 group-hover/card:text-teal-600 transition-colors">
            {title}
          </h3>
        )}
        {description && (
          <p className="mt-2 text-sm leading-6 text-navy-600">{description}</p>
        )}
        {children}
      </>
    );

    const baseClasses = cn(
      "group/card rounded-2xl border border-navy-100 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md",
      className
    );

    if (href) {
      return (
        <a href={href} className={baseClasses} ref={ref as any} {...(props as any)}>
          {content}
        </a>
      );
    }

    return (
      <div className={baseClasses} ref={ref} {...props}>
        {content}
      </div>
    );
  }
);
CardRoot.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col space-y-1.5", className)} {...props} />
));
CardHeader.displayName = "CardHeader";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("pt-4", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center pt-4", className)} {...props} />
));
CardFooter.displayName = "CardFooter";

export { CardRoot as Card, CardHeader, CardContent, CardFooter };
