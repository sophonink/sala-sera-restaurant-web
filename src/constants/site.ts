export const site = {
  name: "Sala Sera",
  nameTh: "ศาลาเสรา",
  tagline: "Thai–Italian Riverside Dinner",
  description:
    "ดินเนอร์ไทย–อิตาเลียนริมแม่น้ำเจ้าพระยา ภายใต้แสงจันทร์และบทสนทนาที่ไม่มีวันจบ",
  phone: "02 123 4567",
  phoneHref: "tel:+6621234567",
  email: "hello@salasera.co",
  address:
    "88/9 ซอยเจริญกรุง 30 ถนนเจริญกรุง แขวงบางรัก เขตบางรัก กรุงเทพฯ 10500",
  mapsUrl: "https://maps.google.com/?q=Charoen+Krung+Bangkok",
  hours: [
    { day: "พุธ – พฤหัสบดี", time: "17:00 – 23:00" },
    { day: "ศุกร์ – เสาร์", time: "17:00 – 00:00" },
    { day: "อาทิตย์", time: "16:30 – 23:00" },
    { day: "จันทร์ – อังคาร", time: "ปิดทำการ" },
  ],
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "LINE", href: "https://line.me" },
  ],
} as const;

export const navLinks = [
  { to: "/", label: "หน้าแรก", labelEn: "Home" },
  { to: "/menu", label: "เมนู", labelEn: "Menu" },
  { to: "/about", label: "เกี่ยวกับเรา", labelEn: "Our Story" },
  { to: "/reservation", label: "จองโต๊ะ", labelEn: "Reserve" },
] as const;
