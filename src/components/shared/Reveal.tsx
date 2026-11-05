import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "cn";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

type RevealEntry = {
  element: HTMLElement;
  show: () => void;
};

// One shared scroll listener for every Reveal on the page. IntersectionObserver
// covers normal scrolling; this catches elements that are scrolled past between
// observer samples (fast wheel, keyboard paging, anchor jumps).
const entries = new Set<RevealEntry>();
let frame = 0;
let listening = false;

function checkPositions() {
  frame = 0;
  const fold = window.innerHeight * 0.92;
  for (const entry of entries) {
    if (entry.element.getBoundingClientRect().top < fold) entry.show();
  }
}

function onScroll() {
  if (frame) return;
  frame = requestAnimationFrame(checkPositions);
}

function subscribe(entry: RevealEntry) {
  entries.add(entry);
  if (!listening) {
    listening = true;
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
  }

  return () => {
    entries.delete(entry);
    if (entries.size > 0) return;
    listening = false;
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onScroll);
    if (frame) {
      cancelAnimationFrame(frame);
      frame = 0;
    }
  };
}

export default function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let revealed = false;
    const cleanups: Array<() => void> = [];

    const show = () => {
      if (revealed) return;
      revealed = true;
      setVisible(true);
      for (const cleanup of cleanups) cleanup();
      cleanups.length = 0;
    };

    const observer = new IntersectionObserver(
      (observed) => {
        if (observed.some((entry) => entry.isIntersecting)) show();
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(element);
    cleanups.push(() => observer.disconnect());
    cleanups.push(subscribe({ element, show }));

    if (element.getBoundingClientRect().top < window.innerHeight * 0.92) {
      show();
    }

    return () => {
      for (const cleanup of cleanups) cleanup();
      cleanups.length = 0;
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", visible && "is-visible", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
