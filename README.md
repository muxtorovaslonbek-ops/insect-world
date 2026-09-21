# O'zbek tili qo'shilishi — faqat o'zgargan/yangi fayllar

Bu papkada **faqat** asl `insect-world` loyihasida o'zgartirilgan yoki yangi
qo'shilgan fayllar bor, xuddi shu yo'l (path) tuzilishi bilan. Loyihangizning
GitHub repo'siga shu papka ichidagi fayllarni **xuddi shu joylarga** ko'chirib
qo'ysangiz, boshqa hech narsaga tegmasdan commit qilib yuborishingiz mumkin.

```
uzbek-changes/
├── en/index.html
├── functions/index.ts
├── index.html
├── public/
│   ├── _headers
│   └── edusat-academy-logo.svg      ← YANGI: EduSAT Academy logotipi
├── uz/index.html                     ← YANGI: o'zbekcha kirish sahifasi
├── vite.config.ts
└── src/
    ├── components/
    │   ├── TopBar.tsx
    │   ├── TopBar.module.css
    │   └── searchInsects.ts
    ├── data/
    │   ├── aliases.ts
    │   ├── insects.uz.ts             ← YANGI: o'zbekcha tur ma'lumotlari
    │   └── guides.uz.ts              ← YANGI: o'zbekcha darslar/viktorina
    ├── feedback/
    │   ├── edge.ts
    │   └── rules.ts
    ├── i18n/
    │   ├── types.ts
    │   ├── locales.ts
    │   ├── orders.ts
    │   ├── uz.ts                     ← YANGI: o'zbekcha interfeys lug'ati
    │   ├── hrefForLocale.ts
    │   ├── edgeLocale.ts
    │   ├── LanguageHint.tsx
    │   └── _parts/
    │       ├── common.ts, topbar.ts, cards.ts, panels.ts,
    │       ├── feedback.ts, discovery.ts, stage.ts, part.ts
    └── main.uz.tsx                   ← YANGI: o'zbekcha kirish nuqtasi
```

## Qanday joylashtirish kerak

1. O'z repo'ingizni klon qiling.
2. Yuqoridagi fayllarni xuddi shu nom va joy bilan ustiga yozing (yangilarini
   qo'shing).
3. `git add -A && git commit -m "feat: o'zbek tili (uz) qo'shildi"` va push
   qiling.
4. Cloudflare Pages (yoki qaysi hostingda bo'lsa) `npm run build` ni qayta
   ishga tushirsa, `dist/uz/index.html` avtomatik yaratiladi va sayt
   `/uz/` manzilida ochiladi.

## Nima ishlaydi (tayyor)

- **Butun interfeys** (menyu, tugmalar, qidiruv, izohlar, viktorina, sozlamalar
  va h.k.) to'liq o'zbekchaga o'girilgan.
- Tur turkumlari (Coleoptera, Lepidoptera va h.k.) va metamorfoz nomlari
  o'zbekchada.
- `/uz/` manzili ishlaydi, brauzer tili o'zbekcha bo'lsa, edge-server
  avtomatik shu yerga yo'naltiradi (`functions/index.ts`).
- Yuqori paneldagi til tugmalariga "UZ" qo'shildi, bosilganda `/uz/...`ga
  o'tadi.
- **EduSAT Academy logotipi** yuqori panelda, barcha uch tilda (zh/en/uz)
  ko'rinadi (`public/edusat-academy-logo.svg`). Bu oddiy SVG — agar sizda
  tayyor logotip fayli bo'lsa, shu faylni almashtirib qo'ysangiz kifoya
  (nomi bir xil qolishi kerak: `edusat-academy-logo.svg`, yoki
  `TopBar.tsx`dagi yo'lni o'zgartirasiz).
- Qidiruv, chet nomlar (aliases), fikr-mulohaza (feedback) tizimlari uch
  tilni ham qo'llab-quvvatlaydi.

## Nima hali tarjima qilinmagan (navbatdagi bosqichlar)

`src/data/insects.uz.ts` va `src/data/guides.uz.ts` — bu ikki fayl hozircha
**inglizcha nusxa** sifatida yaratilgan (sayt ishlab turishi uchun), faqat
quyidagi **3 ta tur to'liq o'zbekchaga o'girilgan** (namuna sifatida):

- `rhinoceros-beetle` (Yapon karkidon qo'ng'izi)
- `monarch-butterfly` (Monarx kapalagi)
- `honeybee` (G'arbiy asalari)

Qolgan **420 ta tur** hali inglizcha matn bilan turibdi (fayllarning
tuzilishi, ID'lari, turkumlari — hammasi to'g'ri, faqat matn qismi
tarjima qilinishi kerak). Buni keyingi xabarlarda bosqichma-bosqich davom
ettiramiz — har safar bir nechta turni tarjima qilib, ushbu ikki faylni
yangilab boraman.

Qolgan turlar ro'yxati `remaining-species.txt` faylida keltirilgan.
