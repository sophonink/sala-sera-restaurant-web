import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "cn";
import LinkButton from "@/components/common/LinkButton";
import BrandMark from "@/components/shared/BrandMark";
import { navLinks, site } from "@/constants/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "section-shell relative z-10 transition-all duration-500",
          scrolled ? "pt-2" : "pt-4 sm:pt-6",
        )}
      >
        <nav
          className={cn(
            "relative flex items-center justify-between gap-4 rounded-full px-4 py-2.5 transition-all duration-500 sm:px-6",
            scrolled ? "glass shadow-2xl" : "glass-soft",
          )}
          aria-label="เมนูหลัก"
        >
          <Link to="/" className="group flex items-center gap-3">
            <BrandMark className="h-9 w-9 transition-transform duration-500 group-hover:rotate-12" />
            <span className="flex flex-col leading-none">
              <span className="font-display text-[1.15rem] tracking-[0.24em] text-foreground">
                SALA SERA
              </span>
              <span className="mt-1 text-[0.5rem] tracking-[0.32em] text-gold/70 uppercase">
                Riverside Dining
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "nav-link text-[0.78rem] tracking-[0.12em] uppercase transition-colors",
                    isActive
                      ? "text-gold"
                      : "text-foreground/65 hover:text-foreground",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <LinkButton
              to="/reservation"
              variant="gold"
              size="pill-sm"
              className="hidden sm:inline-flex"
            >
              จองโต๊ะ
              <ArrowUpRight className="size-3.5" />
            </LinkButton>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="glass-soft inline-flex size-10 items-center justify-center rounded-full text-foreground transition-colors hover:text-gold lg:hidden"
              aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
              aria-expanded={open}
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </nav>
      </div>

      <div
        className={cn(
          "fixed inset-0 flex flex-col bg-night/90 backdrop-blur-2xl transition-all duration-500 lg:hidden",
          open
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
      >
        <div className="flex flex-1 flex-col justify-center px-7 pt-24 pb-10">
          <p className="eyebrow mb-8">Sala Sera · Bangkok</p>
          <div className="flex flex-col gap-1">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "group flex items-baseline justify-between border-b border-white/10 py-4 transition-colors",
                    isActive ? "text-gold" : "text-foreground/80",
                  )
                }
                style={{ transitionDelay: open ? `${index * 40}ms` : "0ms" }}
              >
                <span className="font-display text-3xl sm:text-4xl">
                  {link.label}
                </span>
                <span className="text-[0.6rem] tracking-[0.28em] text-muted-foreground uppercase">
                  {link.labelEn}
                </span>
              </NavLink>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4">
            <LinkButton
              to="/reservation"
              variant="gold"
              size="pill"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              จองโต๊ะ
              <ArrowUpRight className="size-4" />
            </LinkButton>
            <div className="flex flex-col gap-1 text-xs text-muted-foreground">
              <a
                href={site.phoneHref}
                className="transition-colors hover:text-gold"
              >
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="transition-colors hover:text-gold"
              >
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
