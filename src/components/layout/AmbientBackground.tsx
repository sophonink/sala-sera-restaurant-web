import StarField from "@/components/shared/StarField";

export default function AmbientBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_50%_-10%,oklch(0.4_0.05_85/0.14),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.1_0.012_265/0.3)_0%,transparent_30%,transparent_75%,oklch(0.1_0.012_265/0.55)_100%)]" />
      <StarField className="opacity-30" />
      <div className="animate-glow absolute -top-56 right-[-12%] h-[640px] w-[640px] rounded-full bg-gold/10 blur-[160px]" />
      <div className="absolute top-1/3 -left-48 h-[460px] w-[460px] rounded-full bg-[oklch(0.5_0.06_255/0.1)] blur-[150px]" />
      <div className="grain absolute inset-0" />
    </div>
  );
}
