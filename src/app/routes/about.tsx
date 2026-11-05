/* eslint-disable react-refresh/only-export-components */
import { ArrowUpRight, HeartHandshake, Sparkles, Waves, Wheat } from "lucide-react";
import type { Route } from "./+types/about";
import LinkButton from "@/components/common/LinkButton";
import PageHeader from "@/components/shared/PageHeader";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import StarField from "@/components/shared/StarField";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "เกี่ยวกับเรา · Sala Sera" },
    {
      name: "description",
      content:
        "เรื่องราวของ Sala Sera ศาลาริมน้ำที่รวมครัวไทยและอิตาเลียนไว้ใต้หลังคาเดียวกัน พร้อมเชฟและปรัชญาการทำอาหารของเรา",
    },
  ];
};

const values = [
  {
    icon: Wheat,
    title: "วัตถุดิบตามฤดูกาล",
    description:
      "เราซื้อวัตถุดิบจากตลาดเช้าทุกวัน และปรับเมนูตามสิ่งที่ธรรมชาติมีให้ในแต่ละช่วงเวลา",
  },
  {
    icon: HeartHandshake,
    title: "สองครัว หนึ่งใจ",
    description:
      "เชฟไทยและเชฟอิตาเลียนทำงานข้างกัน แบ่งปันเทคนิคและวัตถุดิบ โดยไม่ต้องเลือกข้าง",
  },
  {
    icon: Waves,
    title: "ความช้าคือส่วนหนึ่ง",
    description:
      "เราเชื่อว่ามื้ออาหารที่ดีไม่ควรเร่ง ค่ำคืนจึงถูกออกแบบให้ค่อย ๆ ดำเนินไปพร้อมเสียงน้ำ",
  },
];

const chefs = [
  {
    initial: "อ",
    name: "อานงค์ ศรีสุวรรณ",
    nameEn: "Chef Anong Srisuwan",
    role: "หัวหน้าเชฟครัวไทย",
    bio: "เติบโตในครัวของยายที่อยุธยา เรียนรู้เครื่องแกงจากครกหินจริง ๆ ก่อนจะไปฝึกงานในครัวไฟน์ไดนิ่งที่สิงคโปร์และกลับมาเปิดครัวไทยของ Sala Sera",
    quote: "รสชาติที่ดีที่สุดคือรสชาติที่ทำให้คิดถึงบ้าน",
  },
  {
    initial: "M",
    name: "มาร์โค เบลลินี",
    nameEn: "Chef Marco Bellini",
    role: "เชฟครัวอิตาเลียน",
    bio: "มาจากโบโลญญา ที่ซึ่งเขาโตมากับซอสโบโลเนสของแม่ หลงรักพาสต้าทำมือและวัตถุดิบเรียบง่าย เขามองว่าอาหารไทยและอิตาเลียนมีหัวใจเดียวกัน คือการแบ่งปัน",
    quote: "A table is never just a table. It is where the evening begins.",
  },
];

const timeline = [
  {
    year: "2019",
    title: "จุดเริ่มต้น",
    text: "สองครอบครัวพบกันที่ตลาดริมน้ำเจ้าพระยา และเริ่มทำดินเนอร์ส่วนตัวให้เพื่อน ๆ ทุกวันศุกร์",
  },
  {
    year: "2021",
    title: "ศาลาหลังแรก",
    text: "เปิด Sala Sera อย่างเป็นทางการด้วย 24 ที่นั่ง ครัวไทยและครัวอิตาเลียนอยู่หลังเคาน์เตอร์เดียวกัน",
  },
  {
    year: "2023",
    title: "ระเบียงริมน้ำ",
    text: "ต่อเติมระเบียงไม้สัก 12 ที่นั่งและมูนไลท์บาร์เล็ก ๆ ที่กลายเป็นมุมโปรดของลูกค้าประจำ",
  },
  {
    year: "2026",
    title: "วันนี้",
    text: "48 ที่นั่ง สองเชฟ หนึ่งแม่น้ำ และเมนูทดลองแปดคอร์สที่เปลี่ยนไปตามฤดูกาล",
  },
];

const gallery = [
  {
    src: "/images/interior-3.jpg",
    alt: "บรรยากาศห้องอาหาร Sala Sera",
    className: "col-span-2 row-span-2",
  },
  {
    src: "/images/guests.jpg",
    alt: "แขกที่มาร่วมดินเนอร์",
    className: "",
  },
  {
    src: "/images/dinner-table.jpg",
    alt: "โต๊ะอาหารที่จัดเตรียมไว้",
    className: "",
  },
  {
    src: "/images/wine.jpg",
    alt: "ไวน์ที่เลือกสรรมาเสิร์ฟ",
    className: "",
  },
  {
    src: "/images/food-spread.jpg",
    alt: "อาหารหลากหลายจานบนโต๊ะ",
    className: "",
  },
];

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="Our story · Sala Sera"
        title={
          <>
            จากศาลาริมน้ำ
            <br />
            <span className="text-gold-gradient">ถึงโต๊ะของคุณ</span>
          </>
        }
        description="Sala Sera คือบ้านหลังเล็ก ๆ ริมแม่น้ำเจ้าพระยา ที่ซึ่งสองวัฒนธรรมพบกันบนโต๊ะอาหาร — ไทยและอิตาเลียน ไม่ได้แข่งกัน แต่เติมเต็มกัน"
      >
        <div className="flex flex-wrap gap-2 text-[0.62rem] tracking-[0.16em] text-foreground/55 uppercase">
          <span className="glass-soft rounded-full px-4 py-2">
            Est. 2021 · Bangkok
          </span>
          <span className="glass-soft rounded-full px-4 py-2">
            48 seats
          </span>
          <span className="glass-soft rounded-full px-4 py-2">
            Riverside
          </span>
        </div>
      </PageHeader>

      <section className="section-shell py-16 sm:py-20">
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="relative">
              <div className="glass overflow-hidden rounded-[2rem] p-2">
                <img
                  src="/images/dining-room.jpg"
                  alt="ห้องอาหาร Sala Sera ยามค่ำคืน"
                  loading="lazy"
                  className="aspect-[4/5] w-full rounded-[1.6rem] object-cover"
                />
              </div>
              <div className="glass absolute -right-3 -bottom-6 max-w-[230px] rounded-2xl p-5 sm:-right-6">
                <p className="font-display text-2xl leading-tight text-gold">
                  “Two kitchens,
                  <br />
                  one river.”
                </p>
                <p className="mt-2 text-[0.55rem] tracking-[0.2em] text-muted-foreground uppercase">
                  our little motto
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <SectionHeading
              eyebrow="How it began"
              title={
                <>
                  อาหารคือภาษากลาง
                  <br />
                  <span className="text-gold-gradient">ที่เราเลือกพูด</span>
                </>
              }
              description="ทุกอย่างเริ่มจากโต๊ะยาวหนึ่งตัวในบ้านริมน้ำ เพื่อนคนหนึ่งทำต้มยำ อีกคนทำพาสต้า ทุกคนนำจานมาแบ่งกัน ค่ำคืนนั้นยาวนานจนถึงเช้า และเรารู้ว่านี่คือสิ่งที่อยากทำต่อไป"
            />
            <div className="mt-7 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                Sala Sera จึงไม่ได้ถูกออกแบบให้เป็นร้านอาหารที่ต้องแต่งตัวเต็มยศ
                แต่เป็นศาลาที่คุณสามารถเดินเข้ามาในเสื้อเชิ้ตตัวโปรด
                นั่งลงข้างแม่น้ำ และปล่อยให้ค่ำคืนพาไป
              </p>
              <p>
                เรายังคงทำอาหารแบบเดียวกับคืนแรก — ใช้วัตถุดิบที่ดี
                ปรุงอย่างตั้งใจ และเสิร์ฟบนโต๊ะที่ทุกคนสามารถแบ่งปันได้
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 border-t border-white/10 pt-6 text-[0.6rem] tracking-[0.18em] text-foreground/50 uppercase">
              <span>Daily market</span>
              <span className="text-gold/50">✦</span>
              <span>Open kitchen</span>
              <span className="text-gold/50">✦</span>
              <span>Slow evenings</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative py-16 sm:py-24">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="What we believe"
              title={
                <>
                  ปรัชญาสามข้อ
                  <br />
                  <span className="text-gold-gradient">ของศาลาหลังนี้</span>
                </>
              }
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 100} className="h-full">
                <article className="glass lift h-full rounded-3xl p-6 hover:border-gold/25 sm:p-7">
                  <div className="flex size-11 items-center justify-center rounded-full border border-gold/25 bg-gold/10 text-gold">
                    <value.icon className="size-5" />
                  </div>
                  <h3 className="mt-5 text-2xl">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-16 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="The chefs"
            title={
              <>
                สองคน สองครัว
                <br />
                <span className="text-gold-gradient">หนึ่งความตั้งใจ</span>
              </>
            }
            description="เชฟของเรามาจากคนละซีกโลก แต่เชื่อในสิ่งเดียวกัน — อาหารที่ดีเริ่มจากการเคารพวัตถุดิบและคนที่นั่งอยู่ตรงข้าม"
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {chefs.map((chef, index) => (
            <Reveal key={chef.name} delay={index * 120} className="h-full">
              <article className="glass lift relative h-full overflow-hidden rounded-[2rem] p-7 hover:border-gold/25 sm:p-9">
                <StarField className="opacity-20" />
                <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
                  <div className="relative shrink-0">
                    <div className="absolute inset-0 rounded-full bg-gold/20 blur-xl" />
                    <div className="relative flex size-20 items-center justify-center rounded-full border border-gold/30 bg-night-soft font-display text-4xl text-gold">
                      {chef.initial}
                    </div>
                  </div>
                  <div>
                    <p className="text-[0.55rem] tracking-[0.26em] text-gold/75 uppercase">
                      {chef.role}
                    </p>
                    <h3 className="mt-2 text-2xl">{chef.name}</h3>
                    <p className="mt-0.5 text-[0.7rem] tracking-[0.12em] text-muted-foreground uppercase">
                      {chef.nameEn}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {chef.bio}
                    </p>
                    <p className="mt-5 border-l border-gold/30 pl-4 font-display text-lg leading-snug text-foreground/80 italic">
                      “{chef.quote}”
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Milestones"
              title={
                <>
                  เส้นทาง
                  <br />
                  <span className="text-gold-gradient">ของเรา</span>
                </>
              }
              description="จากดินเนอร์ส่วนตัวสำหรับเพื่อนฝูง สู่ศาลาริมน้ำที่เปิดประตูต้อนรับทุกค่ำคืน"
            />
          </Reveal>

          <div className="relative">
            <div className="absolute top-2 bottom-2 left-[0.4rem] w-px bg-gradient-to-b from-gold/50 via-gold/20 to-transparent sm:left-[5.4rem]" />
            <div className="flex flex-col gap-8">
              {timeline.map((entry, index) => (
                <Reveal key={entry.year} delay={index * 90}>
                  <div className="relative flex gap-6 sm:gap-10">
                    <div className="hidden w-16 shrink-0 text-right sm:block">
                      <span className="font-display text-xl text-gold/80">
                        {entry.year}
                      </span>
                    </div>
                    <span className="relative z-10 mt-2 size-3 shrink-0 rounded-full border border-gold/60 bg-night shadow-[0_0_16px_2px_color-mix(in_oklch,var(--gold)_35%,transparent)]" />
                    <div className="pb-1">
                      <p className="font-display text-xl text-gold/80 sm:hidden">
                        {entry.year}
                      </p>
                      <h3 className="text-xl sm:text-2xl">{entry.title}</h3>
                      <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-muted-foreground">
                        {entry.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-16 sm:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Gallery"
              title={
                <>
                  บรรยากาศ
                  <span className="text-gold-gradient">ในค่ำคืนหนึ่ง</span>
                </>
              }
            />
            <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
              ภาพบางส่วนจากศาลาของเรา — แสงเทียน เสียงน้ำ
              และโต๊ะที่รอคุณอยู่
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid auto-rows-[150px] grid-cols-2 gap-4 sm:auto-rows-[190px] md:grid-cols-4">
          {gallery.map((image, index) => (
            <Reveal
              key={image.src}
              delay={index * 70}
              className={image.className}
            >
              <div className="img-zoom group relative h-full overflow-hidden rounded-2xl border border-white/10">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night/60 via-transparent to-transparent opacity-70" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell pt-10 pb-4 sm:pt-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-gold/20 bg-night-soft/35 px-6 py-14 text-center sm:px-12 sm:py-20">
            <StarField className="opacity-50" />
            <div className="relative">
              <Sparkles className="mx-auto size-6 text-gold/70" />
              <h2 className="mt-5 text-3xl leading-tight sm:text-5xl">
                มาร่วมเป็นส่วนหนึ่ง
                <br />
                <span className="text-gold-gradient">ของค่ำคืนนี้</span>
              </h2>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                เรายินดีต้อนรับคุณที่โต๊ะริมน้ำ หรือที่มูนไลท์บาร์
                สำหรับค่ำคืนที่คุณจะจดจำ
              </p>
              <LinkButton
                to="/reservation"
                variant="gold"
                size="pill"
                className="mt-7"
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
