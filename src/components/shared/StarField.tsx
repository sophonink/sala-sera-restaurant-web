import { cn } from "cn";

export default function StarField({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <div className="starfield animate-twinkle absolute inset-0 opacity-70" />
      <div className="starfield animate-twinkle absolute -inset-20 scale-125 opacity-40 [animation-delay:-3.5s]" />
    </div>
  );
}
