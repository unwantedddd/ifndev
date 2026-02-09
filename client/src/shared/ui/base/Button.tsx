import { cn } from "@/shared";
import type { ButtonHTMLAttributes, FC, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "danger";
type Size = "small" | "medium" | "large";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children?: ReactNode;
}

const Button: FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  className = "",
  children,
  ...args
}) => {
  const variantStyles: Record<Variant, string> = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    danger:
      "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    ghost:
      "bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground",
  };

  const sizeStyles: Record<Size, string> = {
    small: "text-xs py-1.5 px-3.5",
    medium: "text-sm py-2 px-3.5",
    large: "text-base py-2.5 px-4.5",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-normal transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...args}
    >
      {children}
    </button>
  );
};

export default Button;
