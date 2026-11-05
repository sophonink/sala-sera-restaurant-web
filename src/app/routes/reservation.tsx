/* eslint-disable react-refresh/only-export-components */
import { useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  Clock,
  Info,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Users,
} from "lucide-react";
import type { Route } from "./+types/reservation";
import Button from "@/components/common/Button";
import LinkButton from "@/components/common/LinkButton";
import PageHeader from "@/components/shared/PageHeader";
import Reveal from "@/components/shared/Reveal";
import StarField from "@/components/shared/StarField";
import { site } from "@/constants/site";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "จองโต๊ะ · Sala Sera" },
    {
      name: "description",
      content:
        "สำรองโต๊ะดินเนอร์ไทย–อิตาเลียนริมแม่น้ำเจ้าพระยาที่ Sala Sera เลือกที่นั่งริมน้ำ กลาสเฮาส์ หรือมูนไลท์บาร์",
    },
  ];
};

const timeSlots = [
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
];

const seatingOptions = [
  {
    value: "river",
    label: "ระเบียงริมน้ำ",
    detail: "12 ที่นั่ง · วิวพระจันทร์",
  },
  {
    value: "glass",
    label: "กลาสเฮาส์",
    detail: "28 ที่นั่ง · ครัวเปิด",
  },
  {
    value: "bar",
    label: "มูนไลท์บาร์",
    detail: "8 ที่นั่ง · ค็อกเทล",
  },
];

const seatingLabels: Record<string, string> = {
  river: "ระเบียงริมน้ำ",
  glass: "กลาสเฮาส์",
  bar: "มูนไลท์บาร์",
};

type ReservationSummary = {
  code: string;
  name: string;
  date: string;
  time: string;
  guests: string;
  seating: string;
  occasion: string;
};

const occasionLabels: Record<string, string> = {
  none: "ไม่มี",
  birthday: "วันเกิด",
  anniversary: "ครบรอบ",
  business: "มื้อธุรกิจ",
  proposal: "ขอแต่งงาน",
};

const thaiDate = new Intl.DateTimeFormat("th-TH", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

function formatDate(value: string) {
  const date = new Date(`${value}T00:00:00`);
  return Number.isNaN(date.getTime()) ? value : thaiDate.format(date);
}

export default function Reservation() {
  const [summary, setSummary] = useState<ReservationSummary | null>(null);
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const date = String(data.get("date") ?? "");
    const time = String(data.get("time") ?? "");
    const guests = String(data.get("guests") ?? "");
    const seating = String(data.get("seating") ?? "river");
    const occasion = String(data.get("occasion") ?? "none");

    if (!name || !phone || !date || !time || !guests) {
      setError("กรุณากรอกชื่อ เบอร์โทร วันที่ เวลา และจำนวนท่านให้ครบถ้วน");
      return;
    }

    const chosenDate = new Date(`${date}T00:00:00`);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (Number.isNaN(chosenDate.getTime()) || chosenDate < today) {
      setError("กรุณาเลือกวันที่ที่ยังไม่ผ่านไป");
      return;
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("รูปแบบอีเมลไม่ถูกต้อง กรุณาตรวจสอบอีกครั้ง");
      return;
    }

    setError("");
    setSummary({
      code: `SS-${String(Math.floor(1000 + Math.random() * 9000))}`,
      name,
      date,
      time,
      guests,
      seating,
      occasion,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <PageHeader
        eyebrow="Reservations · Sala Sera"
        title={
          <>
            จองโต๊ะ
            <br />
            <span className="text-gold-gradient">under the moon</span>
          </>
        }
        description="เราเปิดรับเพียง 48 ที่นั่งต่อคืน เพื่อให้ทุกโต๊ะได้รับการดูแลอย่างเต็มที่ กรุณาแจ้งความต้องการพิเศษของคุณ ทีมงานจะติดต่อกลับเพื่อยืนยันการจองภายใน 2 ชั่วโมง"
      >
        <div className="flex flex-wrap gap-2 text-[0.62rem] tracking-[0.16em] text-foreground/55 uppercase">
          <span className="glass-soft rounded-full px-4 py-2">
            Wed – Sun · 17:00 – late
          </span>
          <span className="glass-soft rounded-full px-4 py-2">
            จำกัด 48 ที่นั่ง/คืน
          </span>
          <span className="glass-soft rounded-full px-4 py-2">
            ยืนยันภายใน 2 ชม.
          </span>
        </div>
      </PageHeader>

      <section className="section-shell pt-4 pb-20 sm:pb-28">
        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
          <Reveal>
            {summary ? (
              <div
                className="glass-gold relative overflow-hidden rounded-[2rem] p-7 sm:p-10"
                aria-live="polite"
              >
                <StarField className="opacity-40" />
                <div className="relative">
                  <div className="flex size-16 items-center justify-center rounded-full border border-gold/40 bg-gold/15 text-gold">
                    <Check className="size-7" />
                  </div>
                  <p className="eyebrow mt-6">Reservation received</p>
                  <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">
                    ได้รับคำขอจองแล้ว
                    <br />
                    <span className="text-gold-gradient">
                      แล้วพบกันริมน้ำนะคะ
                    </span>
                  </h2>
                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
                    ขอบคุณ {summary.name} ทีมงานจะติดต่อกลับทางโทรศัพท์หรืออีเมล
                    เพื่อยืนยันโต๊ะของคุณภายใน 2 ชั่วโมง
                    หากต้องการเปลี่ยนแปลงกรุณาแจ้งรหัสการจองด้านล่าง
                  </p>

                  <div className="glass mt-7 rounded-2xl p-5">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                      <span className="text-[0.6rem] tracking-[0.22em] text-muted-foreground uppercase">
                        Reservation code
                      </span>
                      <span className="font-display text-xl tracking-[0.14em] text-gold">
                        {summary.code}
                      </span>
                    </div>
                    <dl className="mt-4 grid gap-4 text-sm sm:grid-cols-2">
                      <div>
                        <dt className="text-[0.55rem] tracking-[0.2em] text-muted-foreground uppercase">
                          Date
                        </dt>
                        <dd className="mt-1 text-foreground/85">
                          {formatDate(summary.date)}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[0.55rem] tracking-[0.2em] text-muted-foreground uppercase">
                          Time
                        </dt>
                        <dd className="mt-1 text-foreground/85">
                          {summary.time} น.
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[0.55rem] tracking-[0.2em] text-muted-foreground uppercase">
                          Guests
                        </dt>
                        <dd className="mt-1 text-foreground/85">
                          {summary.guests} ท่าน
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[0.55rem] tracking-[0.2em] text-muted-foreground uppercase">
                          Seating
                        </dt>
                        <dd className="mt-1 text-foreground/85">
                          {seatingLabels[summary.seating] ?? summary.seating}
                        </dd>
                      </div>
                      <div className="sm:col-span-2">
                        <dt className="text-[0.55rem] tracking-[0.2em] text-muted-foreground uppercase">
                          Occasion
                        </dt>
                        <dd className="mt-1 text-foreground/85">
                          {occasionLabels[summary.occasion] ??
                            summary.occasion}
                        </dd>
                      </div>
                    </dl>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <Button
                      type="button"
                      variant="gold"
                      size="pill"
                      onClick={() => setSummary(null)}
                    >
                      จองอีกครั้ง
                      <Sparkles className="size-4" />
                    </Button>
                    <LinkButton to="/menu" variant="glass" size="pill">
                      ดูเมนูก่อนมา
                      <ArrowUpRight className="size-4" />
                    </LinkButton>
                  </div>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass rounded-[2rem] p-6 sm:p-9"
                noValidate
              >
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                  <div>
                    <p className="eyebrow">Booking details</p>
                    <h2 className="mt-2 text-2xl sm:text-3xl">
                      บอกเราเกี่ยวกับค่ำคืนของคุณ
                    </h2>
                  </div>
                  <CalendarDays className="hidden size-7 text-gold/50 sm:block" />
                </div>

                <fieldset className="mt-7">
                  <legend className="text-[0.6rem] tracking-[0.24em] text-gold/70 uppercase">
                    01 · ข้อมูลผู้จอง
                  </legend>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <label className="flex flex-col gap-2">
                      <span className="text-[0.62rem] tracking-[0.16em] text-muted-foreground uppercase">
                        ชื่อ–นามสกุล <span className="text-gold">*</span>
                      </span>
                      <input
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="เช่น ปรียา วัฒนกุล"
                        className="field"
                      />
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="text-[0.62rem] tracking-[0.16em] text-muted-foreground uppercase">
                        เบอร์โทรศัพท์ <span className="text-gold">*</span>
                      </span>
                      <input
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder="08x xxx xxxx"
                        className="field"
                      />
                    </label>
                    <label className="flex flex-col gap-2 sm:col-span-2">
                      <span className="text-[0.62rem] tracking-[0.16em] text-muted-foreground uppercase">
                        อีเมล
                      </span>
                      <input
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        className="field"
                      />
                    </label>
                  </div>
                </fieldset>

                <fieldset className="mt-8 border-t border-white/10 pt-7">
                  <legend className="text-[0.6rem] tracking-[0.24em] text-gold/70 uppercase">
                    02 · รายละเอียดการจอง
                  </legend>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <label className="flex flex-col gap-2">
                      <span className="text-[0.62rem] tracking-[0.16em] text-muted-foreground uppercase">
                        วันที่ <span className="text-gold">*</span>
                      </span>
                      <input
                        name="date"
                        type="date"
                        required
                        className="field"
                      />
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="text-[0.62rem] tracking-[0.16em] text-muted-foreground uppercase">
                        เวลา <span className="text-gold">*</span>
                      </span>
                      <select
                        name="time"
                        required
                        defaultValue="19:00"
                        className="field"
                      >
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot} น.
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="text-[0.62rem] tracking-[0.16em] text-muted-foreground uppercase">
                        จำนวนท่าน <span className="text-gold">*</span>
                      </span>
                      <select
                        name="guests"
                        required
                        defaultValue="2"
                        className="field"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((count) => (
                          <option key={count} value={count}>
                            {count} ท่าน
                          </option>
                        ))}
                        <option value="10+">มากกว่า 10 ท่าน</option>
                      </select>
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="text-[0.62rem] tracking-[0.16em] text-muted-foreground uppercase">
                        โอกาสพิเศษ
                      </span>
                      <select
                        name="occasion"
                        defaultValue="none"
                        className="field"
                      >
                        <option value="none">ไม่มี</option>
                        <option value="birthday">วันเกิด</option>
                        <option value="anniversary">ครบรอบ</option>
                        <option value="business">มื้อธุรกิจ</option>
                        <option value="proposal">ขอแต่งงาน</option>
                      </select>
                    </label>
                  </div>
                </fieldset>

                <fieldset className="mt-8 border-t border-white/10 pt-7">
                  <legend className="text-[0.6rem] tracking-[0.24em] text-gold/70 uppercase">
                    03 · ที่นั่งที่ต้องการ
                  </legend>
                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    {seatingOptions.map((option) => (
                      <label
                        key={option.value}
                        className="group relative cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="seating"
                          value={option.value}
                          defaultChecked={option.value === "river"}
                          className="peer sr-only"
                        />
                        <div className="glass-soft rounded-2xl p-4 transition-all peer-checked:border-gold/60 peer-checked:bg-gold/10 peer-checked:shadow-[0_0_30px_-15px_color-mix(in_oklch,var(--gold)_80%,transparent)] peer-checked:[&_svg]:opacity-100 group-hover:border-gold/30">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-sm text-foreground/90">
                              {option.label}
                            </span>
                            <span className="flex size-4 items-center justify-center rounded-full border border-white/20">
                              <Check className="size-2.5 text-gold opacity-0 transition-opacity" />
                            </span>
                          </div>
                          <p className="mt-1.5 text-[0.6rem] leading-relaxed text-muted-foreground">
                            {option.detail}
                          </p>
                        </div>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <fieldset className="mt-8 border-t border-white/10 pt-7">
                  <legend className="text-[0.6rem] tracking-[0.24em] text-gold/70 uppercase">
                    04 · หมายเหตุ
                  </legend>
                  <label className="mt-4 flex flex-col gap-2">
                    <span className="text-[0.62rem] tracking-[0.16em] text-muted-foreground uppercase">
                      ความต้องการพิเศษ / ข้อจำกัดด้านอาหาร
                    </span>
                    <textarea
                      name="notes"
                      rows={4}
                      placeholder="เช่น แพ้อาหารทะเล, ต้องการโต๊ะสำหรับฉลองครบรอบ, มีเด็กมาด้วย"
                      className="field resize-none"
                    />
                  </label>
                </fieldset>

                {error ? (
                  <p
                    role="alert"
                    className="mt-5 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-xs text-red-200"
                  >
                    {error}
                  </p>
                ) : null}

                <div className="mt-7 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="flex items-start gap-2 text-[0.65rem] leading-relaxed text-muted-foreground">
                    <Info className="mt-0.5 size-3.5 shrink-0 text-gold/60" />
                    การจองจะสมบูรณ์เมื่อทีมงานยืนยันกลับ
                    เราจะเก็บโต๊ะไว้ 15 นาทีหลังจากเวลาที่จอง
                  </p>
                  <Button
                    type="submit"
                    variant="gold"
                    size="pill"
                    className="w-full shrink-0 sm:w-auto"
                  >
                    ส่งคำขอจอง
                    <ArrowUpRight className="size-4" />
                  </Button>
                </div>
              </form>
            )}
          </Reveal>

          <div className="flex flex-col gap-5">
            <Reveal delay={100}>
              <div className="glass overflow-hidden rounded-[2rem]">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src="/images/table-setting.jpg"
                    alt="โต๊ะริมน้ำที่จัดเตรียมไว้สำหรับแขก"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night via-night/30 to-transparent" />
                  <p className="absolute bottom-4 left-5 font-display text-xl text-foreground">
                    “The best seat is by the river.”
                  </p>
                </div>
                <div className="p-5">
                  <p className="eyebrow">Find us</p>
                  <ul className="mt-4 flex flex-col gap-4 text-sm text-muted-foreground">
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
                  <a
                    href={site.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-[0.6rem] tracking-[0.18em] text-gold/80 uppercase transition-colors hover:text-gold"
                  >
                    เปิดใน Google Maps
                    <ArrowUpRight className="size-3" />
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="glass-soft rounded-[2rem] p-5">
                <p className="eyebrow flex items-center gap-2">
                  <Clock className="size-3.5" />
                  Opening hours
                </p>
                <ul className="mt-4 flex flex-col gap-2.5 text-sm">
                  {site.hours.map((entry) => (
                    <li
                      key={entry.day}
                      className="flex items-center justify-between gap-3 border-b border-white/10 pb-2.5 last:border-0 last:pb-0"
                    >
                      <span className="text-muted-foreground">{entry.day}</span>
                      <span className="text-foreground/80">{entry.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="glass-soft rounded-[2rem] p-5">
                <p className="eyebrow flex items-center gap-2">
                  <Users className="size-3.5" />
                  Good to know
                </p>
                <ul className="mt-4 flex flex-col gap-3 text-xs leading-relaxed text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-gold/60">✦</span>
                    กลุ่มตั้งแต่ 8 ท่านขึ้นไป กรุณาติดต่อทีมงานโดยตรง
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gold/60">✦</span>
                    ยกเลิกฟรีล่วงหน้า 24 ชั่วโมง ก่อนเวลาจอง
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gold/60">✦</span>
                    Smart casual · งดเสื้อผ้ากีฬาและรองเท้าแตะ
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gold/60">✦</span>
                    ที่จอดรถมีจำกัด แนะนำให้เดินทางด้วยรถไฟฟ้า BTS สถานีสะพานตากสิน
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
