import type { ReactNode } from "react";
import Moon from "./Moon";
import StarField from "./StarField";

type PageHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
};

export default function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: PageHeaderProps) {
  return (
    <header className="relative overflow-hidden pt-32 pb-14 sm:pt-40 sm:pb-20">
      <StarField className="opacity-70" />
      <div className="pointer-events-none absolute -top-16 -right-24 h-[340px] w-[340px] opacity-50 sm:top-0 sm:right-[5%] sm:h-[400px] sm:w-[400px]">
        <Moon className="h-full w-full" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
      <div className="section-shell relative">
        <p className="eyebrow animate-fade-up">{eyebrow}</p>
        <h1 className="animate-fade-up mt-5 max-w-4xl text-4xl text-foreground [animation-delay:120ms] sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {description ? (
          <p className="animate-fade-up mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground [animation-delay:220ms] sm:text-base">
            {description}
          </p>
        ) : null}
        {children ? (
          <div className="animate-fade-up mt-8 [animation-delay:320ms]">
            {children}
          </div>
        ) : null}
      </div>
      <div className="section-shell relative mt-14">
        <div className="gold-rule" />
      </div>
    </header>
  );
}
