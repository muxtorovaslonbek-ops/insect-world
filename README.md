# Barcha 63 tur to'liq o'zbekchaga tarjima qilindi

Bu papkada faqat 2 ta fayl bor — ikkalasi ham to'liq qayta yozilgan:

- `src/data/insects.uz.ts` — barcha 63 turning nomi, tavsifi, faktlari,
  "hotspot" izohlari, ekologiyasi, qiziqarli ma'lumoti va hayot davri
  to'liq o'zbekcha.
- `src/data/guides.uz.ts` — barcha 63 tur uchun darslar (lesson),
  harakat namoyishi (motion), viktorina (quiz) va yashash muhiti
  (habitat) matnlari to'liq o'zbekcha.

## Joylashtirish

Bu ikkala faylni repo'ingizdagi **xuddi shu joyga** qo'yib, ustiga yozing:

```
src/data/insects.uz.ts
src/data/guides.uz.ts
```

GitHub'ga avvalgidek yuklang (veb orqali drag-and-drop yoki
`git add -A && git commit && git push`), commit xabari masalan:
`feat: barcha 63 tur uchun to'liq o'zbekcha tarjima`.

## Tekshirilgan narsalar

- Ikkala fayl ham haqiqiy Node.js sintaksis tekshiruvidan (`node --check`)
  muvaffaqiyatli o'tdi.
- `insects.uz.ts`dagi barcha 63 ta ID inglizcha versiya bilan aynan bir xil
  tartibda va soni bilan mos keladi.
- `guides.uz.ts`dagi barcha 63 ta kalit ham xuddi shunday mos keladi.
- Butun build zanjiri (`scripts/make-species-pages.mjs`) soxta build bilan
  qayta ishga tushirilib sinaldi: 63 tur × 3 til = 189 ta sahifa,
  3 ta bosh sahifa va 192 ta yozuvli sitemap xatosiz yaratildi.

Boshqa hech qanday fayl o'zgartirilmagan — bu ikkitasi avvalgi
`uzbek-changes.zip` va `uzbek-fix-species-pages.zip`dagi fayllarning
ustiga to'g'ridan-to'g'ri yoziladi.
