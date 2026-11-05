/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { ArrowUpRight, Flame, Leaf, Sparkles, Wine } from "lucide-react";
import type { Route } from "./+types/menu";
import LinkButton from "@/components/common/LinkButton";
import PageHeader from "@/components/shared/PageHeader";
import Reveal from "@/components/shared/Reveal";
import { cn } from "cn";
import { menuCategories, menuItems, type MenuCategory } from "@/constants/menu";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "เมนู · Sala Sera" },
    {
      name: "description",
      content:
        "เมนูไทยและอิตาเลียนของ Sala Sera — ต้มยำกุ้ง ผัดไทย แกงมัสมั่น คาร์โบนารา พิซซ่ามาร์เกริต้า และของหวานหลากหลาย",
    },
  ];
};

const categoryCounts = (category: MenuCategory | "all") =>
  category === "all"
    ? menuItems.length
    : menuItems.filter((item) => item.category === category).length;

export default function Menu() {
  const [active, setActive] = useState<MenuCategory | "all">("all");

  const filteredItems =
    active === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === active);

  return (
    <>
      <PageHeader
        eyebrow="The menu · Sala Sera"
        title={
          <>
            เมนูของเรา
            <br />
            <span className="text-gold-gradient">from two kitchens</span>
          </>
        }
        description="ครัวไทยและครัวอิตาเลียนทำงานเคียงกันหลังเคาน์เตอร์เดียวกัน วัตถุดิบจากตลาดเช้าถูกแปลงเป็นจานที่เรียบง่ายแต่จริงใจ ในบรรยากาศที่ชวนให้มื้ออาหารยืดยาวออกไป"
      >
        <div className="flex flex-wrap gap-2 text-[0.62rem] tracking-[0.16em] text-foreground/55 uppercase">
          <span className="glass-soft rounded-full px-4 py-2">
            Seasonal · Daily market
          </span>
          <span className="glass-soft rounded-full px-4 py-2">
            Thai · Italian
          </span>
          <span className="glass-soft rounded-full px-4 py-2">ราคาเป็นบาท</span>
        </div>
      </PageHeader>

      <section className="section-shell pt-4 pb-20 sm:pb-28">
        <div className="glass flex items-center gap-1 overflow-x-auto rounded-full p-1.5 shadow-2xl">
          {menuCategories.map((category) => {
            const isActive = active === category.id;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActive(category.id)}
                className={cn(
                  "flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-[0.72rem] tracking-[0.08em] transition-all sm:px-5",
                  isActive
                    ? "bg-gold font-medium text-night shadow-[0_8px_28px_-10px_color-mix(in_oklch,var(--gold)_80%,transparent)]"
                    : "text-foreground/60 hover:bg-white/5 hover:text-foreground",
                )}
                aria-pressed={isActive}
              >
                {category.label}
                <span
                  className={cn(
                    "text-[0.55rem] tracking-normal",
                    isActive ? "text-night/60" : "text-foreground/35",
                  )}
                >
                  {categoryCounts(category.id)}
                </span>
              </button>
            );
          })}
        </div>

        <h2 className="sr-only">รายการเมนูทั้งหมด</h2>

        <div
          key={active}
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredItems.map((item, index) => (
            <Reveal key={item.id} delay={(index % 3) * 70} className="h-full">
              <article className="glass lift group flex h-full flex-col overflow-hidden rounded-3xl hover:border-gold/30">
                <div className="img-zoom relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/10 to-transparent" />
                  {item.signature ? (
                    <span className="glass absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.5rem] tracking-[0.2em] text-gold uppercase">
                      <Sparkles className="size-2.5" />
                      Signature
                    </span>
                  ) : null}
                  <span className="glass absolute bottom-4 right-4 rounded-full px-3 py-1 font-display text-[1.25rem] text-base text-gold">
                    ฿{item.price}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[0.55rem] tracking-[0.26em] text-gold/70 uppercase">
                    {item.nameEn}
                  </p>
                  <h3 className="mt-2 text-[1.35rem] leading-snug">
                    {item.name}
                  </h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-2.5 py-1 text-[0.55rem] tracking-[0.06em] text-foreground/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <div className="glass-gold relative overflow-hidden rounded-[2rem] p-7 sm:p-10">
            <div className="pointer-events-none absolute -top-24 -right-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <p className="eyebrow">Chef&apos;s tasting menu</p>
                <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">
                  ให้เราเลือกทั้งแปดคอร์ส
                  <br />
                  <span className="text-gold-gradient">ให้คุณเพียงนั่งลง</span>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  เมนูทดลองประจำฤดูกาล 8 คอร์ส สลับจานไทยและอิตาเลียน
                  พร้อมคำอธิบายจากเชฟ เหมาะสำหรับค่ำคืนพิเศษและการฉลอง
                </p>
              </div>
              <div className="flex shrink-0 flex-col items-start gap-4 sm:flex-row sm:items-center">
                <div className="glass rounded-2xl px-6 py-4 text-left">
                  <p className="font-display text-4xl leading-none text-gold">
                    ฿2,400
                  </p>
                  <p className="mt-1.5 text-[0.6rem] tracking-[0.18em] text-muted-foreground uppercase">
                    per guest · 8 courses
                  </p>
                </div>
                <LinkButton to="/reservation" variant="gold" size="pill">
                  จองเซ็ตนี้
                  <ArrowUpRight className="size-4" />
                </LinkButton>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: Flame,
              title: "ระดับความเผ็ด",
              text: "ทุกจานปรับความเผ็ดได้ตามต้องการ แจ้งทีมงานได้เลยเมื่อสั่งอาหาร",
            },
            {
              icon: Leaf,
              title: "มังสวิรัติ & แพ้อาหาร",
              text: "มีตัวเลือกมังสวิรัติและ gluten-free กรุณาแจ้งอาการแพ้ล่วงหน้า",
            },
            {
              icon: Wine,
              title: "ไวน์ & ค็อกเทล",
              text: "sommelier ของเรายินดีแนะนำไวน์ที่จับคู่กับเมนูของคุณ",
            },
          ].map((info, index) => (
            <Reveal key={info.title} delay={index * 80} className="h-full">
              <div className="glass-soft h-full rounded-2xl p-5">
                <info.icon className="size-5 text-gold/70" />
                <h3 className="mt-3 text-lg">{info.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  {info.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
