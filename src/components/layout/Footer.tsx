import { Link } from "react-router";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import BrandMark from "@/components/shared/BrandMark";
import StarField from "@/components/shared/StarField";
import { navLinks, site } from "@/constants/site";

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/10">
      <StarField className="opacity-30" />
      <div className="section-shell relative py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.7fr_1.1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <BrandMark className="h-11 w-11" />
              <span className="flex flex-col leading-none">
                <span className="font-display text-2xl tracking-[0.22em]">
                  SALA SERA
                </span>
                <span className="mt-1.5 text-[0.55rem] tracking-[0.32em] text-gold/70 uppercase">
                  Thai · Italian · Riverside
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {site.description}
            </p>
            <div className="mt-6 flex gap-3">
              {site.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-soft rounded-full px-4 py-2 text-[0.65rem] tracking-[0.16em] text-foreground/70 uppercase transition-colors hover:border-gold/40 hover:text-gold"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow">Explore</p>
            <ul className="mt-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group inline-flex items-center gap-1.5 text-sm text-foreground/65 transition-colors hover:text-gold"
                  >
                    {link.label}
                    <ArrowUpRight className="size-3 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Visit us</p>
            <ul className="mt-5 flex flex-col gap-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold/70" />
                <span className="leading-relaxed">{site.address}</span>
              </li>
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-3 transition-colors hover:text-gold"
                >
                  <Phone className="size-4 shrink-0 text-gold/70" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-gold"
                >
                  <Mail className="size-4 shrink-0 text-gold/70" />
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Opening hours</p>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              {site.hours.map((entry) => (
                <li
                  key={entry.day}
                  className="flex items-center justify-between gap-4 border-b border-white/5 pb-2.5 last:border-0"
                >
                  <span className="text-muted-foreground">{entry.day}</span>
                  <span className="flex items-center gap-2 text-foreground/80">
                    <Clock className="size-3.5 text-gold/60" />
                    {entry.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="gold-rule my-10" />

        <div className="flex flex-col gap-3 text-[0.7rem] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name} · {site.nameTh}. All rights
            reserved.
          </p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <span>ภาพประกอบ: TheMealDB · Unsplash</span>
            <span className="text-gold/50">Made for slow evenings.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
