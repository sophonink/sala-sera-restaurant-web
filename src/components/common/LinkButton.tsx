import { Link } from "react-router";
import type { ComponentProps } from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { buttonVariants } from "./buttonVariants";

type LinkButtonProps = ComponentProps<typeof Link> &
  VariantProps<typeof buttonVariants>;

export default function LinkButton({
  className,
  variant,
  size,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
