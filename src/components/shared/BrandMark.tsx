import { cn } from "cn";

export default function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden
      className={cn("text-gold", className)}
      fill="none"
    >
      <circle
        cx="24"
        cy="24"
        r="21.5"
        stroke="currentColor"
        strokeOpacity="0.32"
        strokeWidth="0.8"
      />
      <circle
        cx="24"
        cy="24"
        r="17"
        stroke="currentColor"
        strokeOpacity="0.16"
        strokeWidth="0.6"
        strokeDasharray="1.5 4"
      />
      <path
        d="M30.5 10.5a14.5 14.5 0 1 0 0 27c-7.8-1.7-13-8-13-13.5s5.2-11.8 13-13.5Z"
        fill="currentColor"
        fillOpacity="0.92"
      />
      <path
        d="M35.5 10.8l.9 2.4 2.4.9-2.4.9-.9 2.4-.9-2.4-2.4-.9 2.4-.9.9-2.4Z"
        fill="currentColor"
      />
      <circle
        cx="34.2"
        cy="21.5"
        r="0.9"
        fill="currentColor"
        fillOpacity="0.8"
      />
      <circle
        cx="37.8"
        cy="18"
        r="0.55"
        fill="currentColor"
        fillOpacity="0.55"
      />
    </svg>
  );
}
