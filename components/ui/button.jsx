import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground border-color-gray-700 text-gray-600",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:bg-orange-600 hover:text-white text-gray-500",
        link: "text-primary underline-offset-4 hover:underline hover:text-orange-600 text-gray-500 px-7",
        outline_colored:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground border-color-gray-700 text-gray-600 hover:bg-orange-600 hover:text-white border-orange-600 text-orange-600"
        
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-xl px-6",
        md: "h-6 px-4 py-2 rounded-xl",
        xs: "h-6 px-2 rounded-xl",
        xxs: "h-6 w-20 rounded-xl",
        lg: "h-11 rounded-xl px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
