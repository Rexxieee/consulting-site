import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-accent text-white shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:scale-[1.02] active:scale-[0.98]",
        secondary:
          "bg-muted text-foreground border border-border hover:bg-border/50 hover:border-border",
        ghost:
          "text-muted-foreground hover:text-foreground hover:bg-muted",
        outline:
          "border border-border text-foreground bg-transparent hover:bg-muted hover:border-accent/30",
        link: "text-accent underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-7 py-2",
        sm: "h-9 px-5 text-xs",
        lg: "h-14 px-10 text-base",
        icon: "h-10 w-10",
      },
      responsive: {
        true: "w-full md:w-auto",
        false: "",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      responsive: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, responsive, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, responsive, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
