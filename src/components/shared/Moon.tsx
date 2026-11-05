import { cn } from "cn";

export default function Moon({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("relative", className)}>
      <div className="animate-glow absolute inset-[-22%] rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute inset-[-10%] rounded-full border border-gold/15" />
      <div className="absolute inset-[-24%] rounded-full border border-white/5" />
      <div className="moon-body relative h-full w-full overflow-hidden rounded-full">
        <span className="moon-crater top-[18%] left-[16%] h-[15%] w-[15%]" />
        <span className="moon-crater top-[46%] left-[8%] h-[9%] w-[9%]" />
        <span className="moon-crater top-[30%] left-[58%] h-[11%] w-[11%]" />
        <span className="moon-crater top-[62%] left-[42%] h-[18%] w-[18%]" />
        <span className="moon-crater top-[72%] left-[68%] h-[8%] w-[8%]" />
        <span className="moon-crater top-[12%] left-[44%] h-[7%] w-[7%]" />
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_72%_76%,transparent_38%,rgb(0_0_0/0.16)_100%)]" />
      </div>
    </div>
  );
}
