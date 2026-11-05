/* eslint-disable react-refresh/only-export-components */
import { Link } from "react-router";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  MoonStar,
  Quote,
  Star,
  UtensilsCrossed,
  Wine,
} from "lucide-react";
import type { Route } from "./+types/home";
import LinkButton from "@/components/common/LinkButton";
import Moon from "@/components/shared/Moon";
import Reveal from "@/components/shared/Reveal";
import RiversideScene from "@/components/shared/RiversideScene";
import SectionHeading from "@/components/shared/SectionHeading";
import StarField from "@/components/shared/StarField";
import { menuItems } from "@/constants/menu";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Sala Sera — Thai–Italian Riverside Dinner" },
    {
      name: "description",
      content:
        "ดินเนอร์ไทย–อิตาเลียนริมแม่น้ำเจ้าพระยา ภายใต้แสงจันทร์ บรรยากาศ Glass House ริมน้ำและมูนไลท์บาร์",
    },
  ];
};

const signatureIds = ["tom-yum", "massaman", "carbonara"];
const signatureDishes = menuItems.filter((item) =>
  signatureIds.includes(item.id),
);

const marqueeItems = [
  "Thai Kitchen",
  "Italian Kitchen",
  "Riverside Terrace",
  "Moonlight Bar",
  "Seasonal Tasting",
  "Bangkok",
];

const experiences = [
  {
    index: "01",
    title: "ระเบียงริมน้ำ",
    titleEn: "The River Terrace",
    description:
      "โต๊ะไม้สักใต้แสงเทียน ใกล้พอที่จะได้ยินเสียงน้ำและลมเย็นจากแม่น้ำเจ้าพระยา",
    image: "/images/table-setting.jpg",
    meta: "12 seats · Sunset view",
  },
  {
    index: "02",
    title: "ห้องอาหารกลาสเฮาส์",
    titleEn: "The Glass House",
    description:
      "เพดานกระจกใสที่เปิดให้แสงจันทร์ส่องลงมา พร้อมครัวเปิดสองครัวไทยและอิตาเลียน",
    image: "/images/interior-2.jpg",
    meta: "28 seats · Chef's counter",
  },
  {
    index: "03",
    title: "มูนไลท์บาร์",
    titleEn: "The Moonlight Bar",
    description:
      "ค็อกเทลสมุนไพรไทย ไวน์อิตาเลียน และบทสนทนาที่ดำเนินไปจนถึงเที่ยงคืน",
    image: "/images/bar.jpg",
    meta: "8 seats · Until late",
  },
];

const testimonials = [
  {
    quote:
      "บรรยากาศเหมือนนั่งอยู่ในภาพยนตร์ ต้มยำกุ้งกับคาร์โบนาราอยู่บนโต๊ะเดียวกันได้อย่างลงตัว",
    name: "ปรียา ว.",
    detail: " anniversary dinner",
  },
  {
    quote:
      "แสงจันทร์สะท้อนบนแม่น้ำคือฉากหลังที่ดีที่สุดที่ร้านอาหารเคยมี และทีมงานดูแลละเอียดมาก",
    name: "Daniel M.",
    detail: "riverside table",
  },
  {
    quote:
      "เชฟเล่าเรื่องวัตถุดิบได้น่าสนใจทุกจาน ไวน์ที่แนะนำก็จับคู่ได้พอดี คำคืนนี้ผ่านไปเร็วเกินไป",
    name: "ณัฐ & มิน",
    detail: "chef's tasting",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-svh items-center overflow-hidden pt-28 pb-36 sm:pt-32 sm:pb-44">
        <StarField className="opacity-80" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-background/60" />
        <RiversideScene className="opacity-90" />

        <div className="section-shell relative z-10">
          <div className="grid items-center gap-16 lg:grid-cols-[1.04fr_0.96fr]">
            <div>
              <div className="relative mb-10 flex justify-center lg:hidden">
                <Moon className="h-36 w-36 opacity-90" />
              </div>

              <p className="eyebrow animate-fade-up">
                Riverside Dining · Bangkok
              </p>
              <h1 className="animate-fade-up mt-6 text-[2.9rem] leading-[1.2] tracking-tight text-foreground [animation-delay:100ms] sm:text-6xl lg:text-7xl xl:text-[5.2rem]">
                สองรสชาติ
                <br />
                หนึ่งค่ำคืน
                <span className="text-gold">.</span>
              </h1>
              <p className="animate-fade-up mt-4 font-display text-xl italic text-gold/75 [animation-delay:180ms] sm:text-2xl">
                two kitchens, one river
              </p>
              <p className="animate-fade-up mt-7 max-w-lg text-sm leading-relaxed text-muted-foreground [animation-delay:260ms] sm:text-[0.98rem]">
                ดินเนอร์ไทย–อิตาเลียนริมแม่น้ำเจ้าพระยา
                ภายใต้แสงจันทร์และบทสนทนาที่ไม่มีวันจบ
                ครัวสองแห่ง วัตถุดิบตามฤดูกาล และค่ำคืนที่ค่อย ๆ ดำเนินไปอย่างช้า ๆ
              </p>

              <div className="animate-fade-up mt-9 flex flex-wrap gap-3 [animation-delay:340ms]">
                <LinkButton to="/reservation" variant="gold" size="pill">
                  จองโต๊ะ
                  <ArrowUpRight className="size-4" />
                </LinkButton>
                <LinkButton to="/menu" variant="glass" size="pill">
                  สำรวจเมนู
                  <ArrowRight className="size-4" />
                </LinkButton>
              </div>

              <div className="animate-fade-up mt-12 flex flex-wrap gap-x-8 gap-y-4 text-[0.72rem] tracking-[0.08em] text-foreground/60 [animation-delay:420ms]">
                <span className="flex items-center gap-2">
                  <MoonStar className="size-3.5 text-gold/70" />
                  พุธ – อาทิตย์ · 17:00 – 23:00
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="size-3.5 text-gold/70" />
                  เจริญกรุง · ริมแม่น้ำเจ้าพระยา
                </span>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <Moon className="animate-float-slow mx-auto h-[400px] w-[400px] xl:h-[460px] xl:w-[460px]" />

              <div className="glass animate-float absolute top-8 -left-2 rounded-2xl px-5 py-4">
                <p className="text-[0.55rem] tracking-[0.28em] text-gold/75 uppercase">
                  Tonight
                </p>
                <p className="mt-1.5 font-display text-2xl leading-none">
                  Sunset seating
                </p>
                <p className="mt-1.5 text-[0.7rem] text-muted-foreground">
                  18:30 · River terrace
                </p>
              </div>

              <div className="glass animate-float-slow absolute -right-1 bottom-8 rounded-2xl px-5 py-4 [animation-delay:-4s]">
                <div className="flex items-center gap-2 text-gold">
                  <Wine className="size-4" />
                  <span className="text-[0.55rem] tracking-[0.28em] uppercase">
                    Chef&apos;s tasting
                  </span>
                </div>
                <p className="mt-2 font-display text-2xl leading-none">
                  8 courses
                </p>
                <p className="mt-1.5 text-[0.7rem] text-muted-foreground">
                  ฿2,400 · per guest
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-7 z-10 hidden justify-center sm:flex">
          <span className="flex flex-col items-center gap-2 text-[0.55rem] tracking-[0.3em] text-foreground/40 uppercase">
            Scroll
            <span className="h-10 w-px bg-gradient-to-b from-gold/60 to-transparent" />
          </span>
        </div>
      </section>

      <div className="relative overflow-hidden border-y border-white/10 bg-white/[0.02] py-4">
        <div className="animate-marquee flex w-max items-center gap-10">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="flex items-center gap-10 text-[0.62rem] tracking-[0.3em] text-foreground/45 uppercase"
            >
              {item}
              <span className="text-gold/70">✦</span>
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
      </div>

      <section className="section-shell py-20 sm:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionHeading
              eyebrow="Signature dishes"
              title={
                <>
                  จานที่ต้องลอง
                  <br />
                  <span className="text-gold-gradient">under the moon</span>
                </>
              }
              description="เมนูที่ผสานรสชาติจัดจ้านของไทยเข้ากับความเรียบหรูของอิตาเลียน เลือกวัตถุดิบจากตลาดเช้าและครัวของเราเอง"
            />
          </Reveal>
          <Reveal delay={120}>
            <LinkButton
              to="/menu"
              variant="outline-gold"
              size="pill-sm"
              className="mt-2"
            >
              ดูเมนูทั้งหมด
              <ArrowRight className="size-3.5" />
            </LinkButton>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {signatureDishes.map((item, index) => (
            <Reveal key={item.id} delay={index * 90}>
              <Link
                to="/menu"
                className="glass lift group block h-full overflow-hidden rounded-3xl hover:border-gold/30"
              >
                <div className="img-zoom relative aspect-[4/5] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night via-night/25 to-transparent" />
                  <span className="glass absolute top-4 left-4 rounded-full px-3 py-1 text-[0.5rem] tracking-[0.22em] text-gold uppercase">
                    Signature
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <p className="text-[0.55rem] tracking-[0.28em] text-gold/75 uppercase">
                      {item.nameEn}
                    </p>
                    <h3 className="mt-2 text-2xl leading-tight sm:text-[1.7rem]">
                      {item.name}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-foreground/60">
                      {item.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="font-display text-xl text-gold">
                        ฿{item.price}
                      </span>
                      <span className="flex items-center gap-1 text-[0.6rem] tracking-[0.18em] text-foreground/50 uppercase transition-colors group-hover:text-gold">
                        ดูรายละเอียด
                        <ArrowUpRight className="size-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell py-20 sm:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative mx-auto max-w-md lg:mx-0">
              <div className="glass overflow-hidden rounded-[2rem] p-2">
                <img
                  src="/images/dining-room.jpg"
                  alt="ห้องอาหาร Sala Sera ในบรรยากาศยามค่ำ"
                  loading="lazy"
                  className="aspect-[4/5] w-full rounded-[1.6rem] object-cover"
                />
              </div>
              <div className="glass absolute -right-3 -bottom-8 max-w-[210px] rounded-2xl p-5 sm:-right-6">
                <p className="font-display text-4xl leading-none text-gold">
                  2
                </p>
                <p className="mt-2 text-[0.6rem] leading-relaxed tracking-[0.2em] text-muted-foreground uppercase">
                  kitchens, one menu
                </p>
              </div>
              <div className="glass-soft absolute -top-5 -left-4 rounded-full px-4 py-2 text-[0.55rem] tracking-[0.24em] text-gold/80 uppercase sm:-left-6">
                Since 2021
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <SectionHeading
              eyebrow="Our story"
              title={
                <>
                  เรื่องเล่าจาก
                  <br />
                  <span className="text-gold-gradient">ริมฝั่งแม่น้ำ</span>
                </>
              }
              description="Sala Sera เกิดจากความรักในสองวัฒนธรรมที่โต๊ะอาหาร — ครอบครัวไทยที่ทำอาหารด้วยใจ กับเพื่อนชาวอิตาเลียนที่เชื่อว่ามื้ออาหารคือศิลปะ เราจึงเปิดศาลาเล็ก ๆ ริมน้ำให้ทั้งสองโลกได้มาพบกัน"
            />
            <div className="mt-8 grid grid-cols-3 gap-4 border-y border-white/10 py-6">
              {[
                { value: "48", label: "seats" },
                { value: "8", label: "course tasting" },
                { value: "1", label: "river" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl text-gold">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[0.58rem] tracking-[0.22em] text-muted-foreground uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <LinkButton
              to="/about"
              variant="outline-gold"
              size="pill-sm"
              className="mt-8"
            >
              เรื่องราวของเรา
              <ArrowRight className="size-3.5" />
            </LinkButton>
          </Reveal>
        </div>
      </section>

      <section className="relative py-20 sm:py-28">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="The evening"
              title={
                <>
                  เลือกมุมของคุณ
                  <br />
                  <span className="text-gold-gradient">สำหรับค่ำคืนนี้</span>
                </>
              }
              description="สามพื้นที่ สามบรรยากาศ แต่ทั้งหมดอยู่ภายใต้แสงจันทร์เดียวกัน"
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {experiences.map((experience, index) => (
              <Reveal key={experience.index} delay={index * 100}>
                <article className="group lift relative h-full overflow-hidden rounded-3xl border border-white/10">
                  <div className="img-zoom relative aspect-[3/4] overflow-hidden">
                    <img
                      src={experience.image}
                      alt={experience.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-night via-night/35 to-night/5" />
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />
                  </div>
                  <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
                    <span className="glass rounded-full px-3 py-1 text-[0.55rem] tracking-[0.2em] text-gold/80 uppercase">
                      {experience.index}
                    </span>
                    <span className="text-[0.5rem] tracking-[0.24em] text-foreground/50 uppercase">
                      {experience.meta}
                    </span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-[0.55rem] tracking-[0.28em] text-gold/70 uppercase">
                      {experience.titleEn}
                    </p>
                    <h3 className="mt-2 text-2xl">{experience.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-foreground/60">
                      {experience.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20 sm:py-24">
        <Reveal>
          <div className="glass-gold relative overflow-hidden rounded-[2.5rem] p-7 sm:p-12 lg:p-16">
            <StarField className="opacity-50" />
            <div className="pointer-events-none absolute -top-24 -right-16 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
            <div className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <p className="eyebrow">Chef&apos;s table</p>
                <h2 className="mt-4 text-3xl leading-[1.08] sm:text-5xl">
                  แปดคอร์ส
                  <br />
                  <span className="text-gold-gradient">
                    สองโลกบนโต๊ะเดียว
                  </span>
                </h2>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
                  เดินทางผ่านรสชาติจากกรุงเทพฯ สู่ทัสคานี ในเมนูทดลองประจำฤดูกาล
                  ที่เชฟทั้งสองครัวผลัดกันเล่าเรื่องผ่านวัตถุดิบท้องถิ่น
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <LinkButton to="/reservation" variant="gold" size="pill">
                    จองเซ็ตนี้
                    <ArrowUpRight className="size-4" />
                  </LinkButton>
                  <LinkButton to="/menu" variant="glass" size="pill">
                    ดูเมนู
                    <ArrowRight className="size-4" />
                  </LinkButton>
                </div>
              </div>

              <div className="glass rounded-3xl p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.55rem] tracking-[0.26em] text-gold/75 uppercase">
                      Seasonal tasting
                    </p>
                    <p className="mt-2 font-display text-5xl leading-none text-gold">
                      ฿2,400
                    </p>
                    <p className="mt-2 text-[0.7rem] text-muted-foreground">
                      ต่อท่าน · 8 คอร์ส
                    </p>
                  </div>
                  <UtensilsCrossed className="size-6 text-gold/60" />
                </div>
                <ul className="mt-6 space-y-3 text-[0.8rem]">
                  {[
                    ["Amuse-bouche", "Miang kham"],
                    ["Thai", "Tom yum · river prawn"],
                    ["Italian", "Handmade pasta"],
                    ["Main", "Massaman · osso buco"],
                    ["Dolce", "Tiramisù · mango"],
                  ].map(([course, detail]) => (
                    <li
                      key={course}
                      className="flex items-center justify-between gap-4 border-b border-white/10 pb-2.5 last:border-0 last:pb-0"
                    >
                      <span className="text-[0.6rem] tracking-[0.2em] text-muted-foreground uppercase">
                        {course}
                      </span>
                      <span className="text-foreground/75">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section-shell py-20 sm:py-24">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Guests"
            title={
              <>
                ค่ำคืนที่
                <span className="text-gold-gradient">พวกเขาจดจำ</span>
              </>
            }
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 100}>
              <figure className="glass-soft lift flex h-full flex-col rounded-3xl p-6 hover:border-gold/25">
                <Quote className="size-6 text-gold/50" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/75">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <div>
                    <p className="text-sm text-foreground/90">
                      {testimonial.name}
                    </p>
                    <p className="mt-0.5 text-[0.55rem] tracking-[0.2em] text-muted-foreground uppercase">
                      {testimonial.detail}
                    </p>
                  </div>
                  <div className="flex gap-0.5 text-gold">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        className="size-3 fill-current"
                        strokeWidth={0}
                      />
                    ))}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell pt-10 pb-2 sm:pt-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-gold/20 bg-night-soft/35 px-6 py-16 text-center sm:px-12 sm:py-24">
            <StarField className="opacity-60" />
            <Moon className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 opacity-25 blur-[1px]" />
            <div className="relative">
              <p className="eyebrow">Reserve your evening</p>
              <h2 className="mt-5 text-4xl leading-[1.3] sm:text-6xl">
                โต๊ะของคุณ
                <br />
                <span className="text-gold-gradient">ริมแม่น้ำคืนนี้</span>
              </h2>
              <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
                รับจำนวนจำกัดเพียง 48 ที่นั่งต่อคืน
                เราจะเก็บโต๊ะที่ดีที่สุดไว้รอคุณ
              </p>
              <LinkButton
                to="/reservation"
                variant="gold"
                size="pill"
                className="mt-8"
              >
                จองโต๊ะ
                <ArrowUpRight className="size-4" />
              </LinkButton>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
