import type { Guide } from './types'

/**
 * O'zbekcha darslar va viktorinalar — guides.zh.ts / guides.en.ts bilan
 * bir-biriga mos keladi.
 *
 * quiz'dagi answer — options massividagi indeks: tarjima paytida variantlar
 * tartibini almashtirsangiz, javob indeksini ham albatta yangilang.
 *
 * ✅ TARJIMA HOLATI: barcha 63 turning darsi, harakat namoyishi, viktorinasi
 * va yashash muhiti matnlari to'liq o'zbekchaga o'girilgan.
 */
export const GUIDES: Record<string, Guide> = {
  'rhinoceros-beetle': {
    lesson: [
      {
        title: "Bosh shoxi qanday jang qiladi",
        body: "Erkakning ikkiga ayrilgan bosh shoxi (sefalik shox) — sanchuvchi qurol emas, richagdir: u uchini raqibning qorni ostiga tiqib, yuqoriga ko'taradi va raqibni po'stloqdan uloqtirib yuboradi. Kurashlar ko'pincha bir necha soniyada tugaydi.",
        anchor: 'horn',
      },
      {
        title: "Ko'krak shoxining vazifasi",
        body: "Bosh shoxi ko'tarish ishini bajaradi, qisqa ko'krak shoxi esa pastdan tirgak berib, raqibning tanasiga bosilib, qisqichga o'xshash ushlab turishni hosil qiladi. Ular birgalikda harakatni barqarorroq va sirg'anib ketmaydigan qiladi.",
        anchor: 'thoraxHorn',
      },
      {
        title: "Mo'ylovlar sharbatni qanday izlaydi",
        body: "Shamsimon uchli mo'ylovlar (lamellali mo'ylovlar) yupqa plastinkalar bilan tugaydi — ular yopiq holatda turadi, hid manbai yaqinida esa yoyilib, ko'proq hid molekulasini tutadi va uni kechasi bijg'igan eman sharbatiga yo'llaydi.",
        anchor: 'antenna',
      },
      {
        title: "Qisqa voyaga yetgan umr",
        body: "Tuxumdan voyaga yetgungacha sakkiz-o'n oy ketadi, bu davrda lichinka chirindida jimgina oziqlanadi; keyin keladigan shoxli voyaga yetgan bosqich ko'pincha faqat bir-ikki oy davom etadi — shox esa umrining qisqa yakuniy pardasi uchun taqiladigan anjom.",
      },
    ],
    motion: {
      title: "Shoxlar to'qnashuvi",
      body: "Ikki erkak bosh-boshga shoxlarini ilashtiradi, har biri uchini raqibning qorni ostiga tiqishga harakat qiladi; muvaffaqiyatga erishgach, yuqoriga ko'tarib, raqibini po'stloqdan uloqtiradi. Bu harakat ko'pincha bir soniyadan kamroq vaqt oladi, mag'lub bo'lgani chekinadi.",
    },
    quiz: [
      {
        question: "Erkak karkidon qo'ng'izining ikkiga ayrilgan bosh shoxi jangda asosan nima uchun ishlatiladi?",
        options: ["Raqibning elitrasini teshib o'ldirish uchun", "Raqibni ko'tarib ag'darish uchun richag sifatida", "Uchish paytida rul vazifasini bajarish uchun"],
        answer: 1,
        explain: "Karkidon qo'ng'izlari richag kuchi bilan jang qiladi — shox uchi bilan raqibni po'stloqdan ko'taradi; u sanchuvchi qurol emas va uchishda hech qanday rol o'ynamaydi.",
      },
      {
        question: "Karkidon qo'ng'izining hayoti haqida qaysi fikr to'g'ri?",
        options: [
          "Shoxli voyaga yetgan bosqich faqat bir-ikki oy davom etadi, lichinka bosqichi esa ancha uzoqroq",
          "Voyaga yetgan va lichinka umri taxminan bir xil, ikkalasi ham bir necha oy",
          "Lichinka bosqichi qisqa, umrining aksariyati shoxli voyaga yetgan holatda o'tadi",
        ],
        answer: 0,
        explain: "Lichinka bosqichi sakkiz-o'n oy davom etib, bu vaqtda chirindida oziqlanadi; shoxli voyaga yetgan bosqich kelgach, umrining faqat bir-ikki oyi qoladi.",
      },
    ],
    habitat: {
      title: "Chirindida va sharbat yaralarida",
      body: "Kunduzi chirindi yoki po'stloq yoriqlarida yashirinib, nam soyada yirtqichlardan qochadi; qorong'i tushgach, hid bo'yicha eman va bargli daraxt tanalariga yo'l oladi, sharbat yaralarini bug'usimon qo'ng'izlar va kuyalar bilan o'rmonning tungi ovqatlanish sahnasida bo'lishadi.",
    },
  },

  'monarch-butterfly': {
    lesson: [
      {
        title: "To'q sariq va qora — ogohlantirish rangi",
        body: "Old qanotning qora tomirli to'q sariq rangi — ogohlantiruvchi rang: tirqish (lichinka) oq zamburadan to'plagan zaharlar voyaga yetgan davrga ham o'tib qoladi, qush bir marta uning achchiqligini tatib ko'rgach, bu naqshni yodda saqlab, undan qochadi.",
        anchor: 'forewing',
      },
      {
        title: "Erkak va urg'ochini farqlash",
        body: "Har bir orqa qanotning asosida kichik qora dog' bo'lib, faqat erkaklarda uchraydigan bu hidli belgi sevgi-mehr feromonlarini chiqaradi; urg'ochilarda bu dog' yo'q, ularning tomirlari esa qalinroq va to'qroq — jinslarni farqlashning eng aniq usuli shu.",
        anchor: 'hindwing',
      },
      {
        title: "Hech qachon uchmagan yo'ldan yo'l topish",
        body: "Janubga muhojirlik qiladigan avlod hech qachon Meksikani ko'rmagan, shunga qaramay ota-bobolari qishlagan xuddi o'sha archazor o'rmoniga yetib boradi — bunga mo'ylovdagi ichki soat va quyosh burchagi, bulutli kunlarda esa Yerning magnit maydoni yo'l ko'rsatadi.",
        anchor: 'antenna',
      },
      {
        title: "Xartum nektarni qanday so'radi",
        body: "Xartum soat prujinasi kabi o'ralib turadi, gul kosachasidagi nektarni so'rish uchun yoziladi; bu tuzilma barcha Lepidoptera (kapalak va kuyalar) vakillarida umumiy bo'lib, ajdodlardagi chaynovchi og'iz a'zolari o'rnini bosgan.",
        anchor: 'proboscis',
      },
    ],
    motion: {
      title: "Quyosh kompasi bo'yicha yo'l topish",
      body: "Muhojir monarxlar quyosh holatini ichki soat bilan birga kuzatib, barqaror yo'nalishni ushlab turadi; bir necha hafta davomida quyoshning kunlik siljishiga qaramay, janub tomon yo'nalishni saqlab, Meksikadagi bitta archazor vodiyga to'planadi.",
    },
    quiz: [
      {
        question: "Monarx kapalagining yorqin to'q sariq-qora qanot naqshi asosan nima uchun xizmat qiladi?",
        options: ["Uzoq masofadan o'z turini tanish uchun boshqalarni jalb qilish", "Tanasida saqlangan zaharlar haqida yirtqichlarni ogohlantirish", "Uzoq parvozlarda tana haroratini boshqarishga yordam berish"],
        answer: 1,
        explain: "Tirqish oq zamburadan to'plagan zaharlar voyaga yetgan tanasida ham qoladi; to'q sariq-qora naqsh qushlarga uning ta'mi yomon va kasallik keltirishi haqida ogohlantiradi.",
      },
      {
        question: "Kuzgi muhojirlikni yakunlaydigan monarxlar Meksikadagi qishlash joyiga qanday yetib boradi?",
        options: [
          "Yo'lni biladigan tajribali kattalarga ergashib",
          "Ichki quyosh kompasi va biologik soat orqali, bulutli kunlarda magnit sezishga o'tib",
          "Yo'l bo'ylab qoldirilgan feromon hidi izidan borib",
        ],
        answer: 1,
        explain: "Janubga uchadigan avlod hech qachon Meksikani ko'rmagan; u quyosh burchagi va ichki soat bo'yicha yo'nalish oladi, bulutli bo'lsa Yer maydoniga o'tadi.",
      },
    ],
    habitat: {
      title: "Oq zamburdan archazor o'rmongacha",
      body: "Naslchilik davrida monarxlar o'tloq va dalalarga tarqaladi, tirqishlar faqat zaharli oq zamburga bog'liq bo'ladi; kuz kelganda voyaga yetganlar Meksikadagi bir nechta archazor o'rmonga ommaviy ko'chib o'tib, juda kichik bir qishlov hududiga to'planadi.",
    },
  },

  honeybee: {
    lesson: [
      {
        title: "Titroq raqsi yo'nalishni qanday ko'rsatadi",
        body: "Oziq izlab kelgan asalari uyaga qaytib, katak ustida sakkizlik shaklida yuguradi, qornini titratadi va ko'krak mushaklaridan chiqadigan tovush impulslaridan foydalanadi; raqs yo'nalishi quyosh burchagiga mos keladi, titroq davomiyligi esa masofani bildiradi.",
        anchor: 'thorax',
      },
      {
        title: "Gulchangni uyga tashish",
        body: "Orqa oyoq boldiri kichik gulchang savatchasiga (korbikula) botiq shaklda aylangan; ishchi oyoqlari bilan tanasidan gulchangni artib, uni savatchaga siqilgan holda joylashtiradi va uyga — lichinkalarni boqish uchun — olib boradi.",
        anchor: 'pollenBasket',
      },
      {
        title: "Nima uchun nishi o'limga olib keladi",
        body: "Ishchi asalarining nishi tishli bo'lib, qalin sut emizuvchi terisiga sanchilgach, chiqib ketolmaydi; tortishish natijasida uning zahar bezi va ichki a'zolari yirtilib, o'zi halok bo'ladi. Malikaning silliq, tishsiz nishi esa uni qayta-qayta nishlashga imkon beradi.",
        anchor: 'stinger',
      },
      {
        title: "Murakkab ko'zlar gullarni qanday topadi",
        body: "Murakkab ko'zlar odam ko'zi ilg'amaydigan ultrabinafsha nurni sezadi; ko'pgina toj barglarda faqat ultrabinafsha nurda ko'rinadigan to'qroq nektar yo'l-yo'riq belgilari yashiringan bo'lib, ular asalarini gul ichidagi nektariylarga to'g'ridan-to'g'ri yo'llovchi «qo'nish chiroqlari» kabidir.",
        anchor: 'eye',
      },
    ],
    motion: {
      title: "Qishda titrab omon qolish",
      body: "Harorat keskin pasayganda ishchilar qishki uyquga ketmaydi; ular malika atrofida to'planib, qanotlarini qimirlatmasdan uchish mushaklarini qisqartirib issiqlik ishlab chiqaradi. Tashqaridagi asalilar ichkaridagilar bilan almashinib turadi, markaz harorati 35°C atrofida saqlanadi.",
    },
    quiz: [
      {
        question: "Asalarining titroq raqsi davomiyligi asosan qanday ma'lumotni bildiradi?",
        options: ["Nektar manbaidagi gul turini", "Nektar manbai bilan uya orasidagi masofani", "Kunning ob-havo sharoitini"],
        answer: 1,
        explain: "Titroq raqsida yo'nalish nektar manbaiga qarab quyosh burchagiga mos keladi, davomiyligi esa uyadan qanchalik uzoqligini bildiradi.",
      },
      {
        question: "Asalarining nishi haqida qaysi fikr to'g'ri?",
        options: [
          "Ishchi va malikaning nishlari ikkalasi ham tishli, ikkalasi ham bir marta nishlagach nobud bo'ladi",
          "Faqat ishchining nishi tishli va u nishlagach ichki a'zolari yirtilib halok bo'ladi; malikaning nishi silliq va qayta ishlatiladi",
          "Asalarining nishi umuman zahar tashimaydi, faqat jismoniy og'riq beradi",
        ],
        answer: 1,
        explain: "Ishchining tishli nishi teriga sanchilgach chiqib ketolmaydi; tortishish uning ichki a'zolarini yirtib, o'limiga sabab bo'ladi. Malikaning silliq nishi esa qayta nishlay oladi.",
      },
    ],
    habitat: {
      title: "Uya ichidagi issiq jamiyat",
      body: "Yovvoyi oilalar daraxt kovaklari yoki tosh yoriqlarida, boqiladiganlari esa uyalarda joylashadi; uya yil bo'yi taxminan 35°C haroratni saqlaydi va qishki uyquga ketmaydi. Ishchilar 2–3 kilometr radiusda oziq izlaydi, ularning salomatligi atrofdagi gullash holatini aks ettiradi.",
    },
  },

  dragonfly: {
    lesson: [
      {
        title: "Murakkab ko'zlar dunyoni qanday ko'radi",
        body: "Murakkab ko'zlar boshning deyarli hammasini egallaydi, taxminan 30 000 ta donachadan (ommatidiydan) tashkil topgan, deyarli 360 daraja ko'rish maydonini beradi, kur nuqta yo'q; har bir donacha harakatlanuvchi yorug'likni sezadi, bu havoda o'ljani tutishning kaliti.",
        anchor: 'eye',
      },
      {
        title: "Ikki juft qanot mustaqil uchadi",
        body: "Old va orqa qanotlar, har biri o'z mushaklari bilan boshqarilib, mos kelmagan holda qoqilishi mumkin: ninachi vertolyot kabi havoda muallaq turadi, keskin buriladi yoki zumda orqaga uchib ketadi — hasharotlar orasida kamdan-kam uchraydigan boshqaruv darajasi.",
        anchor: 'forewing',
      },
      {
        title: "O'lja savatchasini hosil qiluvchi oyoqlar",
        body: "Barcha oltita oyoqni tukcha qatorlari qoplaydi; uchishda ular voronkasimon savatchaga yig'iladi, chivin kabi mayda hasharotlar u yerga kirib qolsa, kamdan-kam qutulib qoladi. Ninachiga tishlash yoki quvish shart emas — faqat oyoqlari bilan o'lja tutadi.",
        anchor: 'leg',
      },
      {
        title: "Suv ostidan osmongacha",
        body: "Nimfa, ya'ni naiada, suv ostida bir necha oydan bir yilgacha pistirmada turadi, hovuz tubining shafqatsiz ovchisi; oxirgi po'st tashlashda suv o'simliklari bo'ylab tirmashib chiqib, qanot va ko'zlarga ega bo'lib, havodagi ovchiga aylanadi.",
      },
    ],
    motion: {
      title: "Havoda o'ljani to'sib ushlash",
      body: "Ov paytida ninachi shunchaki o'ljaga ko'z tikib qolmaydi; ko'rish neyronlari uning tezligi va yo'nalishini hisoblab, to'sib ushlash nuqtasini oldindan aytadi va o'sha tomonga uchadi. Quvish emas, to'sib ushlash taktikasi muvaffaqiyat darajasini to'qson foizdan yuqoriga ko'taradi.",
    },
    quiz: [
      {
        question: "Ninachilarning ov muvaffaqiyati nima uchun bunchalik yuqori?",
        options: ["Murakkab ko'zlari kur nuqtasiz deyarli 360 daraja ko'rish maydonini beradi", "Neyronlari o'lja yo'lini oldindan bashorat qilib, uni quvish o'rniga to'sib ushlaydi", "Uchish tezligi har qanday o'ljanikidan ancha yuqori"],
        answer: 1,
        explain: "Ko'rish neyronlari o'lja yo'lidan to'sib ushlash nuqtasini bashorat qiladi, shuning uchun ninachi o'lja qayerda bo'lishini biladi va o'sha yerga uchadi — bu uning yuqori muvaffaqiyatining kaliti.",
      },
      {
        question: "Ninachining rivojlanishi haqida qaysi fikr to'g'ri?",
        options: [
          "U tuxum, lichinka, g'umbak va voyaga yetgan bosqichlaridan o'tadi, bu to'liq metamorfoz",
          "Naiada g'umbaklik bosqichisiz to'g'ridan-to'g'ri voyaga yetganga aylanadi, bu to'liqsiz metamorfoz",
          "Naiada quruqlikda rivojlanadi, faqat voyaga yetgani suvga kiradi",
        ],
        answer: 1,
        explain: "Ninachilar to'liqsiz metamorfozdan o'tadi: nimfa (naiada) suv ostida qayta-qayta po'st tashlab, g'umbaklik bosqichisiz to'g'ridan-to'g'ri voyaga yetganga aylanadi.",
      },
    ],
    habitat: {
      title: "O'z hududini kuzatuvchi ovchi",
      body: "Voyaga yetgan erkak qirg'oq bo'yidagi havo hududini egallab, tuxum qo'yish uchun urg'ochilarga kerak bo'lgan suvni himoya qilib, bostirib kiruvchi erkaklarni quvib chiqaradi; nimfa esa loyda yashirinib, pistirmada o'lja kutadi. Bitta hovuz shu tariqa ikki butunlay farqli hayot shaklini o'z ichiga oladi.",
    },
  },

  mantis: {
    lesson: [
      {
        title: "Ov qiluvchi oyoqlar o'ljani qanday qulflaydi",
        body: "Old oyoqlar o'tkir tikanlar bilan qoplangan o'roqsimon tuzilma (ov qiluvchi oyoqlar); tinch holatda ko'krakka yaqin bukilib turadi. Yaqinlashgan o'lja zumda yopilishni keltirib chiqaradi, tikanlar bir-biriga kirishib uni mahkamlaydi.",
        anchor: 'raptorialLeg',
      },
      {
        title: "Old ko'krak zarbaga qanday yordam beradi",
        body: "Ko'krakning old qismi — cho'zilgan protoraks — teleskopik tayoq kabi to'satdan uzayib, ov qiluvchi oyoqlarni o'lja kutmagan masofadan zarba berish uchun olib boradi — bu duofosning yuqori aniqlik darajasining kaliti.",
        anchor: 'prothorax',
      },
      {
        title: "Bosh qancha aylanishi mumkin",
        body: "Bosh deyarli 180 darajaga aylanadi, tanasini qimirlatmasdan atrofni kuzatadi — bu hasharotlar orasida kamdan-kam uchraydigan xususiyat. Ko'z ichidagi qorong'i «soxta qorachiq» siljiyotgandek tuyuladi — bu ko'z aylanishi emas, optik illyuziya.",
        anchor: 'head',
      },
      {
        title: "Niqoblangan yashil pistirmachi",
        body: "Uning tanasi odatda yashil yoki jigarrang, buta yoki o't orasida qimirlamay o'tiradi, atrofga singib, tezlik bilan emas, kamuflyaj bilan g'alaba qozonadi. U hech qachon o'ljani quvmaydi, nishon yaqinlashguncha kutadi — pistirmachi yirtqichning darslikdagi namunasi.",
      },
    ],
    motion: {
      title: "Bitta zarba hal qiladi",
      body: "Duofos o'lja masofaga kirguncha qimirlamay kutadi, so'ng protoraks uzayib, ov qiluvchi oyoqlar otiladi — zarbadan qulflashgacha soniyaning o'ndan bir qismidan kamroq vaqt ketadi, ko'rish uchun juda tez. Zarba qaytarilmasligi mumkin, shuning uchun u xavf ostida qolgandan ko'ra kutishni afzal ko'radi.",
    },
    quiz: [
      {
        question: "Duofos ov qilganda, oyoqlarining yopilishi asosan nima uchun?",
        options: ["O'ljani falajlash uchun zahar yuborish", "Tikanlar qatori bilan o'ljani qochib qutula olmaydigan darajada qulflash", "O'ljani qaychi kabi kesib tashlash"],
        answer: 1,
        explain: "Duofosning oyoqlari tikanli ov qiluvchi oyoqlar bo'lib, zarba o'ljani joyida mahkamlaydi. Unda zahar yo'q va u o'ljani kesib tashlamaydi.",
      },
      {
        question: "Bu duofos turining Shimoliy Amerikadagi holati haqida qaysi fikr to'g'ri?",
        options: [
          "Mahalliy iqlimga moslasha olmay, olib kelinganidan ko'p o'tmay yo'qolib ketgan",
          "Zararkunanda dushmani sifatida olib kelingan va keng tarqalgan, yovvoyi holatda kolibrilarni pistirmada tutgan holatlar qayd etilgan",
          "Faqat sun'iy issiqxona sharoitida omon qoladi va yovvoyi tabiatda hech qachon o'rnashmagan",
        ],
        answer: 1,
        explain: "1896-yilda zararkunanda dushmani sifatida Shimoliy Amerikaga olib kelingan va tezda tarqalgan; yovvoyi kuzatuvlar uning o'zidan ancha yirik kolibrilarni ham vaqti-vaqti bilan pistirmada tutishini ko'rsatadi.",
      },
    ],
    habitat: {
      title: "Butazordagi pistirma nuqtasi",
      body: "U buta, baland o't yoki dala chekkasidagi chalkash o'simliklarni afzal ko'radi, u yerda uning yashil-jigarrang rangi atrofga singadi. Bu joylar unga changlatuvchilar, chigirtkalar va boshqa o'ljalar o'tib turgan tabiiy pistirma nuqtalarida yashirinib kutish imkonini beradi.",
    },
  },

  ladybird: {
    lesson: [
      {
        title: "Qizil va qora — ogohlantirish",
        body: "Qattiqlashgan old qanotlar (elitra) qora dog'li yorqin qizil rangda, tabiatda «bu oziq emas» degan yuqori kontrastli signal; bir marta achchiqligini tatib ko'rgan qush bu ko'rinishni yodda saqlab, undan qochadi.",
        anchor: 'elytra',
      },
      {
        title: "Cho'chitilganda o'zini himoya qilishi",
        body: "Haqiqiy himoya oyoq bo'g'imlarida yashiringan: cho'chitilganda qalqondor qo'ng'iz achchiq, tirnovchi qon (gemolimfa) oqizadi — qizil-qora naqsh reklama qiladigan kimyoviy qurol, rang esa faqat erta ogohlantirish.",
        anchor: 'leg',
      },
      {
        title: "Dog'larni sanab turni aniqlash",
        body: "Etti nuqtali qalqondor qo'ng'iz nomini elitrasidagi yetti qora dog'dan olgan, ammo yaqin qarindoshlarida dog'lar soni ikkitadan yigirmadan ortiqgacha farq qiladi; dog' naqshi qalqondor qo'ng'iz turlarini farqlashning asosiy usuli.",
        anchor: 'spot',
      },
      {
        title: "Butun umr shira yeyish",
        body: "Lichinkadan voyaga yetganga qadar, etti nuqtali qalqondor qo'ng'iz deyarli faqat shira bilan oziqlanadi; bitta lichinka rivojlanish davomida bir necha yuzta shira yeyishi mumkin, bu uni dala va bog'larda tayangan tabiiy zararkunanda kurashchisiga aylantiradi.",
      },
    ],
    motion: {
      title: "Refleks sifatida o'lik taqlid qilish",
      body: "Yirtqich tegib ko'rgan yoki yaqinlashganda, qalqondor qo'ng'iz oyoq va boshini tortib, bargdan tushib, o'lik taqlid qiladi; faqat yana bezovta qilinsa, oyoqlaridan achchiq gemolimfa oqadi. Avval yashirinish, keyin himoyalanish — bu energiya tejaydigan reaksiya.",
    },
    quiz: [
      {
        question: "Etti nuqtali qalqondor qo'ng'izning qora dog'li qizil rangining asosiy maqsadi nima?",
        options: ["Gullar orasida kamuflyaj qilishga yordam berish", "Yirtqichlarni uning ta'mi yomon va achchiq moddalar borligi haqida ogohlantirish", "Qishlash uchun bir joyga to'planishda o'z turini jalb qilish"],
        answer: 1,
        explain: "Qizil-qora naqsh cho'chitilganda ajraladigan achchiq gemolimfaga mos ogohlantiruvchi rang; yirtqichlar buni eslab, undan qochadi — bu kamuflyaj emas.",
      },
      {
        question: "Qalqondor qo'ng'izning elitrasidagi qora dog'lar haqida qaysi fikr to'g'ri?",
        options: [
          "Har bir qalqondor qo'ng'iz turida aynan yettita qora dog' bo'ladi",
          "Dog'larning soni va joylashuvi turga qarab farq qilib, qalqondor qo'ng'iz turlarini farqlashga yordam beradi",
          "Dog'lar soni qo'ng'iz yoshi ulg'aygan sari yildan-yilga ortib boradi",
        ],
        answer: 1,
        explain: "Faqat etti nuqtali qalqondor qo'ng'izda aynan yettita dog' bor; yaqin qarindoshlarida soni va joylashuvi farq qiladi, shuning uchun dog' naqshi turlarni farqlashga yordam beradi.",
      },
    ],
    habitat: {
      title: "Shira to'plangan har qanday joyda",
      body: "Shira qayerda zich to'plansa, etti nuqtali qalqondor qo'ng'izlar ham o'sha yerga to'planadi, dala, bog' va o'rmon chekkasidagi yosh novdalarni afzal ko'radi. Kuz kelganda, voyaga yetganlari tosh yoriqlari yoki to'kilgan barglarga ko'chib, har bahorda yangi koloniyalar uchun tarqaladi.",
    },
  },

  ant: {
    lesson: [
      {
        title: "Nega bel bunchalik ingichka",
        body: "Ko'krak va qorin orasida tana torayib, mayda segmentga — petiolga aylanadi, bu moslashuvchan bo'g'im orqa qorinning (gasterning) nishlash uchun burilib, egilishiga imkon beradi; bu ingichka bel chumolilarni boshqa hasharotlardan ajratib turadi.",
        anchor: 'petiole',
      },
      {
        title: "Jag'lar nima qila oladi",
        body: "Katta ishchining jag'lari (mandibulalari) qisqich kabi mustahkam, har kuni oziq kesish, chiqindi tashish va himoya uchun ishlatiladi; kichikroq uyadoshlarining jag'lari ingichkaroq bo'lib, ko'proq oziq izlash va lichinkalarga g'amxo'rlik qilishga mos.",
        anchor: 'mandible',
      },
      {
        title: "Asal shudringini uyga tashish",
        body: "Orqa qorin (gaster) ichida kengayuvchi jig'ildon bor, nektar yoki shira asal shudringini olib qaytish uchun saqlaydi; to'lgach, ishchi buni og'izdan og'izga uyadoshlari bilan bo'lishadi, bu «ijtimoiy oshqozon» oziqni butun oila bo'ylab tarqatadi.",
        anchor: 'gaster',
      },
      {
        title: "Ko'rmasdan mehnatni taqsimlash",
        body: "Chumolilarning ko'rish qobiliyati odatda cheklangan, shuning uchun muvofiqlashtirish mo'ylov aloqasi va feromon hidiga tayanadi: oziq topgan ishchi uyaga hid izi qoldiradi, uyadoshlari esa faqat hid orqali unga ergashadi.",
      },
    ],
    motion: {
      title: "Shira uchun asal shudringi boqishi",
      body: "Duradgor chumoli mo'ylovi bilan shiraning qornini urib, uni asal shudringi ajratishga undaydi, so'ng darhol uni yalab oladi. Buning evaziga u yirtqichlarni haydaydi, ba'zan koloniyani yumshoqroq shoxga ko'chiradi; bu «boqish» bir avlod davom etishi mumkin.",
    },
    quiz: [
      {
        question: "Chumolining ko'krak va qorin orasidagi sezilarli darajada ingichka belining asosiy vazifasi nima?",
        options: ["Uchishni osonlashtirish uchun tana og'irligini kamaytirish", "Og'ir orqa qorinning erkin burilishi va egilishiga imkon berish", "Nafas olish teshiklari to'plami vazifasini bajarish"],
        answer: 1,
        explain: "Bu ingichka bel — petiol — moslashuvchan bo'g'in bo'lib, gasterning aniq nishlash yoki kislota purkashi uchun burilishiga imkon beradi, og'irlik yoki nafas olish uchun emas.",
      },
      {
        question: "Bu duradgor chumolining umri haqida qaysi fikr to'g'ri?",
        options: [
          "Malika o'n yildan ortiq yashashi mumkin, ko'pchilik ishchilari esa ikki yildan kam yashaydi",
          "Ishchi va malika ikkalasi ham taxminan bir-ikki yil yashaydi, farq unchalik katta emas",
          "Ishchilari malikadan ko'proq yashaydi, chunki tuxum qo'yish malikaga og'ir yuk soladi",
        ],
        answer: 0,
        explain: "Malika juftlashgandan keyin qanotlarini tashlab, butun umrga uya asos soladi, o'n yildan ortiq yashaydi; tashqaridagi ishchilar odatda bir necha oydan ikki yilgacha yashaydi.",
      },
    ],
    habitat: {
      title: "Bo'lmalarga bo'lingan yer osti shahri",
      body: "Uya odatda tuproq chuqurida, toshlar ostida yoki chirigan yog'ochda quriladi, bolalar xonalari, oziq saqlash xonalari va boshqa bo'shliqlarga bo'linib, tunnellar bilan bog'langan; malika eng ichkarida yashaydi, ishchilar esa o'z vazifalariga qarab harakatlanadi.",
    },
  },

  cicada: {
    lesson: [
      {
        title: "Qo'shiq qanday hosil bo'ladi",
        body: "Erkakning qornining ikki yonida yupqa, qirrali parda (timbal) bor; mushaklar soniyasiga yuzlab marta qisqarib, uni vizillashga majbur qiladi. Sirralar chaqirig'i 90 detsibeldan oshishi mumkin — bu eng baland ovozli hasharotlardan biri.",
        anchor: 'tymbal',
      },
      {
        title: "Qorin karnay vazifasini bajaradi",
        body: "Erkakning qorni deyarli bo'sh, cholg'u asbobining rezonans kamerasiga o'xshab, timbalning xom tovushini kuchaytirib, uzoqroqqa yetkazadigan baland chaqiriqqa aylantiradi; urg'ochilarida bu yo'q, ularning qorni to'liq, shuning uchun ular hech qachon qo'shiq aytmaydi.",
        anchor: 'abdomen',
      },
      {
        title: "Og'iz a'zolari sharbatni qanday so'radi",
        body: "Og'iz a'zolari igna kabi ingichka sanchuvchi-so'ruvchi tuzilma (rostrum) hosil qiladi, tinch holatda bosh ostiga yig'ilib turadi; ovqatlanish daraxt ksilemasiga sanchilib sharbat olishdan iborat, hech qachon barg tishlab yoki chaynab emas — ko'pincha noto'g'ri barg yeyuvchi zararkunanda deb o'ylanadi.",
        anchor: 'rostrum',
      },
      {
        title: "Yer ostida yillar, tepada haftalar",
        body: "Nimfa yer ostida uch-besh yil yashab, ildiz sharbati bilan oziqlanadi va voyaga yetgunga qadar po'st tashlaydi; chiqqandan so'ng, tanaga tirmashib oxirgi marta po'st tashlab, qanot chiqaradi, ammo voyaga yetgani faqat bir necha hafta qo'shiq aytadi va uchadi.",
      },
    ],
    motion: {
      title: "Chiqish uchun kechasi po'st tashlash",
      body: "Yetuk nimfa alacakaranlikda chiqib, daraxt tanasiga tirmashib, po'stloqni mahkam ushlaydi; orqasi yorilib, sut-oq voyaga yetgani qobiqdan chiqib, burishgan qanotlarini yozadi. Bu bir-ikki soat davom etadi, qanotlar qattiqlashguncha u himoyasiz qoladi.",
    },
    quiz: [
      {
        question: "Sirraning og'iz a'zolari asosan nima uchun ishlatiladi?",
        options: ["Oziq moddalar uchun barglarni chaynash va tishlash", "Daraxt ksilemasiga sanchilib sharbat bilan oziqlanish", "Boshqa mayda hasharotlarni ovlash"],
        answer: 1,
        explain: "Sirraning og'iz a'zolari daraxt tanasi ksilemasiga sanchilib sharbat oladi; u na barg chaynaydi, na hasharot ovlaydi, garchi ko'pincha barg yeyuvchi zararkunanda deb noto'g'ri o'ylansa ham.",
      },
      {
        question: "Sirra Shimoliy Amerikaning «17 yillik sirralari» kabi faqat ko'p yillarda bir marta ommaviy chiqadimi?",
        options: [
          "Ha, u ham ma'lum yillar kutib, hammasi birdan paydo bo'ladi",
          "Yo'q, nimfalar yer ostida sinxronlashmagan, shuning uchun ularni deyarli har yozi ko'rish mumkin",
          "Yo'q, aslida u har yili faqat bir necha hafta yer ostida yashaydi",
        ],
        answer: 1,
        explain: "Sirra nimfalari yer ostida uch-besh yil yashaydi, sinxronlashmagan holda, shuning uchun ba'zilari har yili chiqadi — ko'p yillarda bir marta ommaviy chiqadigan davriy sirradan farqli o'laroq.",
      },
    ],
    habitat: {
      title: "Ildiz va tana orasida",
      body: "Nimfa daraxt ildizlari atrofidagi tuproqda yashiringan holda, ildiz sharbati bilan rivojlanadi; voyaga yetgani esa tana va tojga ko'chib, kunduzi ovqatlanadi, qo'shiq aytadi va sevgi-mehr izhor qiladi. Shu tariqa bitta tur yer osti va daraxt tojini egallaydi, ular kamdan-kam ustma-ust tushadi.",
    },
  },

  locust: {
    lesson: [
      {
        title: "Orqa oyoqlar qanday uzoqqa sakraydi",
        body: "Orqa oyoqning soni g'ayrioddiy qalin, sakrash mushaklariga to'la; sakrashdan oldin prujina kabi buraladi, so'ng zumda bo'shaydi, chigirtkani o'n tana uzunligidan ortiq masofaga otib yuboradi — bu uning yirtqichlardan eng tez qochish usuli.",
        anchor: 'hindleg',
      },
      {
        title: "Izdihom o'zgarishni qanday keltirib chiqaradi",
        body: "Boshqa chigirtkalarning mo'ylov va orqa oyoqlarga takroriy tegishi tanadagi serotoninni oshiradi; muayyan zichlik chegarasidan o'tgach, chigirtkalar yakka holatdan yorqin, to'da shakliga o'tadi — bu fiziologik o'zgarish, genetik emas.",
        anchor: 'antenna',
      },
      {
        title: "Uzoq ko'chish uchun qurilgan qanotlar",
        body: "To'da shaklida qanotlar tanadan uzunroq o'sadi, uchish mushaklari kuchayadi, bu esa to'daga qo'nmasdan yuzlab kilometr uchishga imkon beradi; yakka shakl qisqaroq qanotga ega va sakrashga tayanadi.",
        anchor: 'wing',
      },
      {
        title: "Qo'shnilarini qanday eshitadi",
        body: "Birinchi qorin segmentining har ikki yonida yupqa parda — eshitish a'zosi (timpanum) — bor, chigirtkalar qanot ishqalaganda chiqargan tovushni tutadi. Bu quloq qorinda, boshda emas — bu barcha chigirtkalar uchun umumiy.",
        anchor: 'tympanum',
      },
    ],
    motion: {
      title: "Shamolda ko'chuvchi to'dalar",
      body: "To'da havoga ko'tarilgach, individlar tasodifiy uchmaydi; ular qanot ishqalanishi tovushi va bir-birlarining joylashuvini kuzatib, formatsiyani saqlaydi, shamoldan foydalanib energiyani tejaydi, kuniga o'nlab kilometrni bosib o'tadi.",
    },
    quiz: [
      {
        question: "Chigirtkaning yakka shakldan to'da shakliga o'tishining eng to'g'ridan-to'g'ri sababi nima?",
        options: ["Populyatsiyada yangi genetik mutatsiya paydo bo'lishi", "Yuqori zichlikda takroriy aloqa serotonin darajasi o'zgarishini keltirib chiqarishi", "Haroratning keskin pasayishi rang o'zgarishiga sabab bo'lishi"],
        answer: 1,
        explain: "Yakka va to'da shakllari bir xil genlarni turlicha ifodalaydi: izdihom serotoninni oshirib, rang va xulqni o'zgartiradi — bu mutatsiya emas.",
      },
      {
        question: "Chigirtkaning eshitish a'zosi (timpanum) tanasining qaysi qismida joylashgan?",
        options: ["Old oyoq boldirida", "Birinchi qorin segmentining ikki yonida", "Mo'ylov asosida"],
        answer: 1,
        explain: "Chigirtkaning timpanumi birinchi qorin segmentining ikki yonida joylashgan, chirildoq chigirtka va chirildoqlarniki esa old oyoq boldirida joylashgan quloqdan farqli.",
      },
    ],
    habitat: {
      title: "O'tloq va dala orasida",
      body: "Yakka shakl daryo bo'yi va tashlandiq yerlarga tarqoq holda yashab, yovvoyi o'tlar bilan oziqlanadi, uni sezish qiyin; o'simlik so'lib, populyatsiya cheklangan yashillikka to'planganda, to'da ko'chib, dala ekinlariga qarab yo'naladi.",
    },
  },

  firefly: {
    lesson: [
      {
        title: "Sovuq yorug'lik qanday hosil bo'ladi",
        body: "Yorug'lik a'zosi (chirog') ichida lyutsiferin kislorod bilan reaksiyaga kirib, lyutsiferaza fermenti tomonidan katalizlanib, energiyani deyarli to'liq yorug'likka, issiqlikka emas, aylantiradi — lampaning o'ndan bir foizidan farqli o'laroq, deyarli to'qson foiz samaradorlik.",
        anchor: 'lantern',
      },
      {
        title: "Chaqnoq ritmi signal sifatida",
        body: "Turli yulduzcha turlari chaqnoq chastotasi, davomiyligi va oralig'ida farq qiladi, har biri o'z maxfiy kodiga ega; erkakning murakkab ko'zlari uchayotganda qorong'i o'tni kuzatib, o'z turining aniq ritmini qulflashga moslashgan.",
        anchor: 'eye',
      },
      {
        title: "Mo'ylovlar juftni qanday topadi",
        body: "Chaqnoq ritmini farqlashdan tashqari, arrasimon yoki ipsimon mo'ylovlar havodagi mayda feromon izlarini ham sezadi; hid chiroq kodini qo'llab-quvvatlaydi, bu esa qanotlari kichraygan va uzoqqa ucholmaydigan urg'ochilar uchun hayotiy muhim.",
        anchor: 'antenna',
      },
      {
        title: "Lichinkalari ham yaltiraydi",
        body: "Yaltirash qobiliyati lichinkalarda ham uchraydi, ular kunduzi to'kilgan barglar orasida yashirinib, kechasi shilliqqurt va chig'anoqli shilliqqurtlarni ovlaydi. Tadqiqotlar shuni ko'rsatadiki, lichinkaning xira yorug'ligi yirtqichlarni yomon ta'm haqida ogohlantiradi, voyaga yetganning sevgi-mehr signalidan farqli o'laroq.",
      },
    ],
    motion: {
      title: "Yorug'likda savol-javob",
      body: "Erkak o't ustida past uchib, o'z turining qat'iy ritmida qayta-qayta chaqnaydi; signalni tanigan urg'ochi har bir chaqnoqqa belgilangan kechikish bilan bitta chaqnoq bilan javob beradi. Erkak uning yorug'ligiga ergashib, qidiruvni yakunlash uchun yaqinlashadi.",
    },
    quiz: [
      {
        question: "Cho'g'lanma lampa bilan solishtirganda, yulduzcha chirog'i chiqargan sovuq yorug'likning o'ziga xosligi nimada?",
        options: [
          "Kimyoviy energiyani lampadan ancha samaraliroq yorug'likka aylantiradi, deyarli issiqliksiz",
          "Lampa bilan bir xil prinsipda ishlaydi, faqat xiraroq",
          "Avval quyosh nurini yutib saqlaydi, kechasi uni qayta chiqaradi",
        ],
        answer: 0,
        explain: "Yulduzcha chirog'i lyutsiferaza reaksiyasi orqali yonadi, energiyani deyarli to'qson foiz samaradorlik bilan, deyarli issiqliksiz aylantiradi — bu lampadan ancha yuqori.",
      },
      {
        question: "Bir nechta yulduzcha turi bir o'tloqda yashaganda, urg'ochi chaqnoq o'z turidagi erkakdan kelganini qanday biladi?",
        options: [
          "Chaqnoq rangi bo'yicha, chunki har bir tur boshqa rangda yaltiraydi",
          "Chaqnoq chastotasi va ritmi bo'yicha, chunki har bir turning o'z maxfiy yorug'lik kodi bor",
          "Yaqinlashayotgan erkakning qanot tebranishi tovushi bo'yicha",
        ],
        answer: 1,
        explain: "Yulduzcha turlari chaqnoq chastotasi, davomiyligi va oralig'ida farq qiladi, xuddi maxfiy kod kabi; urg'ochi juft topish uchun rangdan emas, shu farqlardan foydalanadi.",
      },
    ],
    habitat: {
      title: "Nam barglar orasidagi tungi patrul",
      body: "Lichinka ham, voyaga yetgani ham namlikka bog'liq, kunduzi soy yaqinidagi to'kilgan barglar yoki mox ostida yashiradi; faqat qorong'i tushgach voyaga yetganlari uchadi. Toshlangan, quritilgan yoki chiroqlar bilan yoritilgan yashash muhiti bu qorong'ilikka bog'liq hayotni saqlab qolishni qiyinlashtiradi.",
    },
  },
  'longhorn-beetle': {
    lesson: [
      {
        title: "Mo'ylovlar qanchalik uzun",
        body: "Qora-oq halqali mo'ylovlar erkaklarda tana uzunligidan deyarli ikki barobar uzunroq — bu qo'ng'izni eng oson ajratadigan belgi. Mo'ylov yuzasidagi sezgi retseptorlari egalik daraxti hidini va juftlarning feromonlarini sezadi.",
        anchor: 'antenna',
      },
      {
        title: "Jag'lar nima uchun kerak",
        body: "Mustahkam jag'lar ko'p vazifa bajaradi: voyaga yetganlari oziq uchun po'stloqni kemiradi, tuxum qo'yishdan oldin esa urg'ochilari kertik o'yib, ichiga tuxum qo'yadi va uni ajratma bilan muhrlab, chiqqan lichinkalar tanaga kirib olishini ta'minlaydi.",
        anchor: 'mandible',
      },
      {
        title: "Oq dog'li elitrani o'qish",
        body: "Tartibsiz oq dog'lar qora elitra bo'ylab sochilgan, har bir qo'ng'izda farq qiladi, shuning uchun ikkitasi bir xil ko'rinmaydi. Bu jasoratli naqsh uni daraxt tanasida topishni osonlashtiradi — kamuflyaj qiluvchi qo'ng'izlarning teskarisi strategiya.",
        anchor: 'elytra',
      },
      {
        title: "Tana ichida qishlash",
        body: "Chiqqandan so'ng, lichinka kertikdan yog'och qatlamiga kirib, tana va ildizlar bo'ylab bir-ikki yil oziqlanib yo'l ochadi, kamdan-kam tashqariga chiqadi. Bu yashirin odat aniqlash va nazorat qilishni ayniqsa qiyinlashtiradi.",
      },
    ],
    motion: {
      title: "Tana ichida tunnel qazish",
      body: "Chiqqan lichinka tuxum kertigidan yog'och qatlamiga kirib, jag'lari bilan ilgarilab, orqasidan chiqindi chiqarib boradi. Tunnel don yo'nalishi bo'ylab o'nlab santimetrga cho'zilib, bir-ikki yildan keyin uning oxirida lichinka g'umbaklashadi.",
    },
    quiz: [
      {
        question: "Sitrus uzun mo'ylovli qo'ng'izining urg'ochisi tuxum qo'yishdan oldin nima uchun po'stloqqa jag'lari bilan kertik o'yadi?",
        options: [
          "Kertik boshqa urg'ochilarni haydash uchun hudud belgisi",
          "Tuxumlar kertik ichiga qo'yilib muhrlanadi, shunda chiqqan lichinkalar yog'och qatlamiga osongina kirib oladi",
          "Kertikdan oqayotgan sharbat urg'ochining o'zi uchun oziq manbaiga aylanadi",
        ],
        answer: 1,
        explain: "Kertik ajratma bilan muhrlanib, ichidagi tuxumlarni himoya qiladi, chiqqan lichinkalar esa to'g'ridan-to'g'ri tanaga kirib oziqlanadi.",
      },
      {
        question: "Sitrus uzun mo'ylovli qo'ng'izi Sharqiy Osiyoga xos — u nima uchun bir nechta Yevropa davlatida yovvoyi populyatsiya hosil qilgan?",
        options: [
          "U ochiq dengiz ustidan uzoq masofaga o'z-o'zidan ucha oladi",
          "U ko'chatzor mahsulotlari va yog'och qadoqlash materiallari orqali savdo yo'li bilan sezilmasdan tashiladi",
          "Ko'chib yuruvchi qushlar uning lichinkalarini Yevropaga olib borgan",
        ],
        answer: 1,
        explain: "Lichinkalar tana ichida sezilmasdan yashirinib, ko'pincha ko'chatzor mahsulotlari yoki yog'och qadoqlash materiallari orqali Yevropa va Shimoliy Amerikaga yetib boradi — dengiz ustidan uchib emas.",
      },
    ],
    habitat: {
      title: "Butun umr tana ichida yashirin",
      body: "Lichinka bosqichida ular tirik daraxtning yog'och qatlami chuqurida, tana asosidan ildizlargacha tunnel qazib yashaydi, kamdan-kam kun yorug'ini ko'radi. Faqat voyaga yetganlari po'stloqni teshib chiqib, o'rmon, bog' va shahar daraxtlari bo'ylab kezib, po'stloq kemirib, juft izlaydi.",
    },
  },

  'stick-insect': {
    lesson: [
      {
        title: "Tana shoxchaga qanday taqlid qiladi",
        body: "Ingichka, segmentlangan tana har bir po'st tashlashda rang va teksturasini o'zgartirib, tayangan o'simlikka moslashadi, oxir-oqibat shoxchadan deyarli ajratib bo'lmay qoladi. Bu kamuflyaj bir marta emas, har bir po'st tashlashda nozik sozlanadi.",
        anchor: 'body',
      },
      {
        title: "Yirtqich changalidan qutulish",
        body: "Oltita oyog'i ayrilgan shoxcha kabi ingichka; ushlansa, tayoqcha hasharoti muayyan bo'g'imda oyog'ini tashlab, hayotini saqlab qolish uchun uni qurbon qiladi. Nimfalar yo'qolgan oyoq-qo'lni keyinchalik qisman qayta o'stira oladi; voyaga yetganlari esa yo'q.",
        anchor: 'leg',
      },
      {
        title: "Shamol bilan birga tebranish",
        body: "Faqat qimirlamaslikning o'zi yetarli emas — haqiqiy shoxlar ham shabadada tebranadi. Bezovta qilinganda yoki shamol esganda, tayoqcha hasharoti tanasini tebratib, xuddi shu tebranishga taqlid qiladi, niqobni shakl bilan emas, xulq bilan mustahkamlaydi.",
        anchor: 'camouflage',
      },
      {
        title: "Kichik bosh, kuchsiz ko'rish",
        body: "Niqoblangan tanasiga solishtirganda, boshi kichik, murakkab ko'zlari kuchsiz; ko'rish ustunlik qilmaydi. U mo'ylovlari orqali hid va teginish bilan yo'l topadi va oziq izlaydi, ko'rishga tayanadigan hasharotlardan farqli o'laroq.",
        anchor: 'head',
      },
    ],
    motion: {
      title: "Urug'ga taqlid qiluvchi tuxumlar",
      body: "Tuxumlar shakli va hidi bo'yicha o'simlik urug'iga taqlid qiladi, chumolilar uchun jozibali oziq moddaga boy o'simtaga ega. Chumolilar tuxumni urug' deb uyaga olib boradi, o'simtani yeydi, qobig'ini esa chiqindixonaga qoldiradi, u yerda xavfsiz chiqadi.",
    },
    quiz: [
      {
        question: "Qimirlamaslikdan tashqari, tayoqcha hasharoti cho'chitilganda yoki shamol esganda nima uchun tanasini ham sekin tebratadi?",
        options: [
          "Tebranish juftni jalb qilish uchun sevgi-mehr namoyishi",
          "U shamolda tebranuvchi shoxlarning tabiiy harakatiga taqlid qilib, qimirlamaslik niqobini ishonarliroq qiladi",
          "Tebranish yaqinda yegan barglarni hazm qilishga yordam beradi",
        ],
        answer: 1,
        explain: "Shabadada mutlaqo qimirlamaslik tabiiy ko'rinmaydi, shuning uchun u shamoldagi shoxlarga taqlid qilib, niqobini mustahkamlaydi — bu sevgi-mehr yoki hazm bilan bog'liq emas.",
      },
      {
        question: "Chumolilar nima uchun ba'zi tayoqcha hasharotlarining tuxumlarini o'z uyasiga olib boradi?",
        options: [
          "Chumolilar tuxumlarni o'z lichinkalari deb adashib, ularga g'amxo'rlik qiladi",
          "Tuxumlar shakli va hidi bo'yicha urug'ga taqlid qiladi va chumolilar uchun jozibali, oziq moddaga boy o'simtaga ega",
          "Voyaga yetgan tayoqcha hasharotlari tuxumlarini himoya uchun ataylab chumoli uyalariga qo'yadi",
        ],
        answer: 1,
        explain: "Bu tuxumlar urug'ga taqlid qiladi va chumolilarni jalb qiladigan o'simtaga ega; chumolilar ularni uyaga olib borib, o'simtani yeydi, tuxumlar esa chiqquniga qadar himoyalangan holda qoladi.",
      },
    ],
    habitat: {
      title: "Barglar qa'rida yashiringan",
      body: "Kunduzi u buta, bambuk yoki bargli o'rmonning zich shoxlari orasida qimirlamay turadi, shu qadar yaxshi singadiki, uni kamdan-kam topish mumkin. Faqat tun tushgach oziqlanish uchun harakatga keladi, so'ng tong otishidan oldin yashirinadi.",
    },
  },

  swallowtail: {
    lesson: [
      {
        title: "Oq chiziq — erkakning imzosi",
        body: "Nefritsimon oq chiziq orqa qanotni kesib o'tadi; erkaklarda bu barqaror va deyarli o'zgarmaydi, dalada erkakni aniqlashning eng to'g'ridan-to'g'ri usuli. Urg'ochilarning naqshi ancha o'zgaruvchan, bir necha keskin farqli shaklga ega.",
        anchor: 'hindwing',
      },
      {
        title: "Dumchalar bilan qush tumshug'ini aldash",
        body: "Orqa qanot uchidan chiquvchi ingichka dumcha, yaqinidagi belgilar bilan birga, soxta mo'ylov hosil qilib, yirtqichlarni boshga emas, qanot chetiga zarba berishga aldaydi. O'sha burchakni yo'qotish qochishga imkon beradi — boshni yo'qotishdan yaxshiroq.",
        anchor: 'tail',
      },
      {
        title: "Urg'ochilar nima uchun zaharli turga taqlid qiladi",
        body: "Ba'zi urg'ochilarning old qanot naqshi zaharli Qizil atirgul kapalagiga taqlid qiladi; zararsiz bo'lsa-da, zaharli qarindoshiga taqlid qilish Beyts taqlidchiligi deb ataladi. Haqiqiy Qizil atirgul kapalagidan qochishni o'rgangan qush o'xshashlaridan ham qochadi.",
        anchor: 'forewing',
      },
      {
        title: "Aka-uka tug'ishganlar boshqa shaklda chiqishi mumkin",
        body: "Urg'ochining taqlidchi shakli bitta gen bo'lagi tomonidan yaxlit boshqariladi; bitta tuxum to'plamida taqlidchi va taqlidchi bo'lmagan urg'ochilar yonma-yon chiqishi mumkin, bu turni taqlidchilik genetikasini o'rganishning klassik namunasiga aylantiradi.",
      },
    ],
    motion: {
      title: "Old oyoqlar bilan egalik o'simligini sinash",
      body: "Tuxum qo'yishdan oldin, urg'ochi old oyoqlari bilan bargni chertadi; oyoqlaridagi ximoretseptorlar sitrus, sichuan qalampiri yoki boshqa rutasimon o'simlikni tatib ko'radi. Tasdiqlangach, u barg ostiga tuxum qo'yadi, shunda lichinkalar to'g'ri oziqni topadi.",
    },
    quiz: [
      {
        question: "Ba'zi urg'ochi Mormon kapalaklari qanot naqshida kuchli zaharli Qizil atirgul kapalagiga taqlid qiladi — bu qanday taqlidchilik turi?",
        options: [
          "Ikkala tur ham zaharli bo'lib, birgalikda yirtqichlarni ogohlantiradi",
          "O'zi zararsiz bo'lib, zaharli qarindoshiga taqlid qilib yirtqichlarni aldaydi",
          "Sof tasodif, ikki tur orasida hech qanday evolyutsion aloqa yo'q",
        ],
        answer: 1,
        explain: "Bu Beyts taqlidchiligi: zararsiz urg'ochi zaharli Qizil atirgul kapalagiga taqlid qilib, undan qochishni o'rgangan yirtqichlarni ham chetlab o'tishga majbur qiladi.",
      },
      {
        question: "Mormon kapalagining orqa qanot dumchasi va uni o'rab turgan belgilar yirtqichlardan himoyalanishda qanday rol o'ynaydi?",
        options: [
          "Ular soxta mo'ylov va boshga taqlid qilib, hujumni hayotiy nuqta o'rniga qanot chetiga tortadi",
          "Ular uchishda ishlatiladigan qo'shimcha yog' zaxirasini saqlaydi",
          "Ular keskin burilishlarda aerodinamik muvozanatni saqlashga yordam beradi",
        ],
        answer: 0,
        explain: "Dumcha va belgilar soxta bosh hosil qilib, yirtqichlarni qanot chetini tishlashga aldaydi; o'sha burchakni yo'qotish uchib ketishga imkon beradi, boshga tishlanish emas.",
      },
    ],
    habitat: {
      title: "Bog'lar va shahar hovlilari",
      body: "Lichinkalari sitrus, sichuan qalampiri va boshqa rutasimon o'simliklarga bog'liq, shuning uchun bu kapalak bog', ko'cha daraxtlari va mevazorlarda uchraydi, aholi punktlariga yaxshi moslashgan. Voyaga yetganlari gullar uchun kengroq masofaga uchadi, ko'pincha gulzor va meva daraxtlarida.",
    },
  },

  'silk-moth': {
    lesson: [
      {
        title: "Yirtqichni cho'chitadigan ko'zsimon dog'lar",
        body: "Har bir old va orqa qanotda bittadan shaffof ko'zsimon dog' bor, odatda yashiringan. Bezovta qilinsa, kuya qanotlarini keskin ochib, ularni keng ochilgan ko'zlardek namoyish qiladi — bu tajovuzkorni bir lahzaga to'xtatib, urishdan chalg'itish uchun yetarli.",
        anchor: 'eyespot',
      },
      {
        title: "Juft topish uchun patsimon mo'ylovlar",
        body: "Erkak kuyalarning keng, patga o'xshash mo'ylovlari hid retseptorlari bilan zich qoplangan, urg'ochilar bir necha yuz metr uzoqlikdan chiqargan feromonlarni sezadi — bu ko'zlaridan ancha o'tkirroq va juft topishning asosiy usuli.",
        anchor: 'antenna',
      },
      {
        title: "Uchishdan oldin isinish",
        body: "Ko'krak zich tukli bo'lib, yaxshi rivojlangan uchish mushaklarini o'rab turadi; uchishdan oldin kuya ularni titratib, ko'krak belgilangan haroratga yetguncha isitishi kerak — bu yirik tanali kuyalar orasida keng tarqalgan xususiyat.",
        anchor: 'thorax',
      },
      {
        title: "Voyaga yetganlari boshqa hech qachon ovqatlanmaydi",
        body: "Chiqqan paytga kelib, uning og'iz a'zolari ovqatlanish qobiliyatidan mahrum bo'lib, u boshqa hech qachon yemaydi. Taxminan bir hafta davom etadigan qisqa voyaga yetgan hayotida, uning butun energiyasi bitta vazifaga — juftlashish va tuxum qo'yishga sarflanadi.",
      },
    ],
    motion: {
      title: "Panoh uchun pilla to'qish",
      body: "G'umbaklashdan oldin, lichinka bezlaridan chiqqan ipak bilan o'zini o'rab, tayanch nuqta qo'yadi, so'ng boshini sakkizlik shaklida aylantirib pillani to'qiydi. Uzluksiz ip bir kilometrdan oshadi, g'umbakni metamorfoz davomida himoya qiladi.",
    },
    quiz: [
      {
        question: "Voyaga yetgan Xitoy eman ipak kapalagi chiqqandan keyin nima uchun boshqa hech qachon ovqatlanmaydi?",
        options: [
          "Og'iz a'zolari kuchsizlanib, ovqatlanish qobiliyatini yo'qotgan",
          "Atrofda oziq kamligi uni ochlik qilishga majbur qiladi",
          "Ovqatlanish feromon chiqarishga xalaqit beradi",
        ],
        answer: 0,
        explain: "Voyaga yetganning og'iz a'zolari kuchsizlanib, ovqatlanolmaydi; u lichinka davrida to'plangan oziq moddalar hisobiga yashaydi, shuning uchun voyaga yetgan hayoti faqat bir hafta davom etadi.",
      },
      {
        question: "Xitoy eman ipak kapalagining old va orqa qanotlaridagi shaffof ko'zsimon dog'larining asosiy vazifasi nima?",
        options: [
          "Juftni jalb qilish uchun kechasi yorug' chiqarish",
          "Cho'chitilganda to'satdan ochilib, yirtqich hujumini to'xtatish yoki kechiktirish",
          "Quyosh nurini yutib, tana haroratini boshqarish",
        ],
        answer: 1,
        explain: "Ko'zsimon dog'lar cho'chitilguncha yashiringan holda qoladi, kuya qanotlarini ochganda ular ko'zga o'xshab qoladi; bu yirtqichni bir lahzaga to'xtatib, qochishga vaqt beradi.",
      },
    ],
    habitat: {
      title: "Eman o'rmonida ikki avlod",
      body: "Lichinkalar o'sish davomida eman va qayinsimon barglari bilan oziqlanib, egalik daraxtidan uzoqqa kamdan-kam ketadi. Pilla to'qigandan so'ng, ular qishni kutib chiqadi; voyaga yetgan hayoti qisqa bo'lsa-da, kuyalar juftlashish uchun o'sha o'rmonga qaytadi.",
    },
  },

  hornet: {
    lesson: [
      {
        title: "O'ldirish uchun qurilgan jag'lar",
        body: "Uning qalin, o'roqsimon jag'lari asalarilarni o'ldirishning asosiy quroli; uyaga bostirib kirganda, u ishchi arining boshi va ko'kragini bir zumda kesib tashlashi mumkin. O'nlab shirshin birgalikda hujum qilib, oilani bir necha soat ichida yo'q qilishi mumkin.",
        anchor: 'mandible',
      },
      {
        title: "Qayta ishlatiladigan nish",
        body: "Uning nishi silliq va tishsiz, shuning uchun uni chiqarib qayta ishlatish mumkin, faqat bir marta ishlatilgandan keyin nobud bo'ladigan asalari nishidan farqli. Har bir nishlash ancha ko'p zahar yuboradi, yirik yirtqichlar va odamlar uchun xavfli.",
        anchor: 'sting',
      },
      {
        title: "Havodagi jang uchun ingichka bel",
        body: "Ingichka bel (petiol) ko'krak va qorinni bog'lab, tanani osongina egiluvchan qiladi; kuchli uchish mushaklari bilan u zumda yo'nalishini o'zgartiradi va soatiga 40 km tezlikda yaqin masofada tortishadi.",
        anchor: 'waist',
      },
      {
        title: "Faqat bir mavsum yashaydigan oila",
        body: "Shirshin oilasi, asalarinikidan farqli o'laroq, har bahorda qishlab chiqqan bitta malikadan qayta boshlanadi va yoz-kuz davomida o'sadi. Yangi malikalar qishdan oldin qishlash uchun uchib ketadi, eski uya esa nobud bo'ladi.",
      },
    ],
    motion: {
      title: "Bosqinchini pishirib qo'yuvchi ari to'pi",
      body: "Yapon asalarilari razvedka qiluvchi shirshinni sezganda, yuzlab ari uni to'p ichiga olib, uchish mushaklarini titratib issiqlik chiqaradi. Harorat 45 gradusga yaqinlashadi — shirshin chekigidan yuqori, ammo arilarnikidan past — bu uni tirik holda pishirishga yetarli.",
    },
    quiz: [
      {
        question: "Osiyo ulkan arisining nishi bilan asalarining nishi orasidagi eng katta farq nima?",
        options: [
          "Ari nishida umuman zahar yo'q, faqat jismoniy og'riq beradi",
          "Ari nishi silliq va tishsiz, shuning uchun uni chiqarib qayta ishlatish mumkin",
          "Ari umuman nishga ega emas, faqat jag'lari bilan hujum qiladi",
        ],
        answer: 1,
        explain: "Ari nishi silliq va tishsiz, har safar ko'proq zahar bilan qayta ishlatiladi; asalarining tishli nishi esa bir marta ishlatilgandan keyin yirtilib, asalarini o'limiga sabab bo'ladi.",
      },
      {
        question: "Yapon asalarilari Osiyo ulkan arisining razvedka bosqiniga qanday javob beradi?",
        options: [
          "Butun oila uchib ketib, uyani tashlab qo'yadi",
          "Ishchilari bosqinchini o'rab, to'p hosil qilib, issiqlik chiqarish uchun titrab, uni qizdirib o'ldiradi",
          "Ular bosqinchini birgalikda birdaniga nishlab o'ldiradi",
        ],
        answer: 1,
        explain: "Ishchilari shirshinni o'rab, titrab issiqlik chiqaradi; to'pning markazi 45 gradusga yaqinlashadi, bu ularga zarar yetkazmasdan uni o'ldirishga yetarli.",
      },
    ],
    habitat: {
      title: "Yer osti va daraxt kovaklaridagi uyalar",
      body: "Uyalar odatda past tepalik o'rmonlaridagi yer osti bo'shliqlarida yoki daraxt kovaklarida quriladi, yashiringan va topish qiyin. Ishchilari kilometrlab uzoqlikka borib, protein uchun asalari va hasharotlarni ovlaydi, shakar uchun daraxt sharbati va tushgan mevani yeydi.",
    },
  },

  'tiger-beetle': {
    lesson: [
      {
        title: "Ov qilish uchun qaychisimon jag'lar",
        body: "O'roqsimon jag'lar qaychi kabi kesishadi, tinch holatda markazdan siljigan holda yopiladi; u otilib chiqib zumda yopiladi, chumoli va boshqa o'ljaning tashqi qobig'ini ezib tashlaydi — juda tez, o'rmon yo'lkalarining eng yuqori yirtqichi.",
        anchor: 'mandible',
      },
      {
        title: "Ko'rish uchun juda tez",
        body: "Uning katta murakkab ko'zlari o'ljaga qulflanadi, ammo yuqori tezlikda ular o'zgaruvchi tasvirga ulgurmay, qisqa vaqtga ko'rlikka olib keladi. Shuning uchun yo'lbars qo'ng'izlari bir necha qadam otilib, to'xtaydi, so'ng yana otiladi — bo'lak-bo'lak harakat.",
        anchor: 'eye',
      },
      {
        title: "Hasharotlar sprint rekordi ortidagi oyoqlar",
        body: "Uning uch juft ingichka oyog'i juda tez yugurishni ta'minlaydi; soniyasiga tana uzunligiga nisbatan o'lchansa, u hasharotlar orasida yuqori o'rinlardan birini egallaydi. Bu tezlik ham o'ljani quvish, ham yirtqichdan qochish uchun xizmat qiladi.",
        anchor: 'leg',
      },
      {
        title: "Lichinkalari o'z inidan pistirma quradi",
        body: "Lichinkalari yugurmaydi; ular o'zi qazigan inda yashiringan, qorin ilgaklari bilan mahkamlangan holda, boshi bilan kirish teshigini tiqib, yerga o'xshab niqoblanadi. Yaqin o'tgan hasharot bir otilishda tutiladi — voyaga yetganning quvishidan farqli.",
      },
    ],
    motion: {
      title: "Indan pistirma zarbasi",
      body: "Lichinkaning boshi va old tanasi qo'shilib, in kirishini tiqib turuvchi qopqoqqa aylanadi. O'lja yaqinlashganda, u qorin ilgaklariga tayanib otilib chiqadi, jag'lari bilan nishonni ushlab, oziqlanish uchun uni inga tortadi.",
    },
    quiz: [
      {
        question: "Xitoy yo'lbars qo'ng'izi nima uchun ko'pincha bir necha qadam yugurib, keyin to'satdan to'xtaydi?",
        options: [
          "U energiyani juda tez sarflab, tez-tez dam olishi kerak",
          "Uning tezligi murakkab ko'zlari qayta ishlay oladigan tezlikdan oshib ketib, qisqa vaqtga aniq ko'rolmay qoladi",
          "U o'ljaning o'zi yaqinlashishini kutib to'xtaydi",
        ],
        answer: 1,
        explain: "Yuqori tezlikda qo'ng'izning ko'zlari o'zgaruvchi tasvirga ulgurmay, qisqa vaqtga ko'r bo'lib qoladi, shuning uchun u o'ljasini qayta topish uchun to'xtaydi — charchoqdan emas.",
      },
      {
        question: "Xitoy yo'lbars qo'ng'izi lichinkalarining ov qilish usulini qaysi fikr to'g'ri tasvirlaydi?",
        options: [
          "Voyaga yetganlari kabi, ular yerda tez yugurib o'ljani quvadi",
          "Ular vertikal inda yashiringan holda, kirishini niqoblab, o'tayotgan o'ljaga pistirma quradi",
          "Ular to'r to'qib kutadi, o'ljani yopishqoq ip bilan tutadi",
        ],
        answer: 1,
        explain: "Lichinkalar hech qachon o'ljani quvmaydi; ular inda yashiringan, qorin ilgaklari bilan mahkamlangan, boshi bilan kirishni niqoblab, o'lja yaqinlashganda zarba beradi.",
      },
    ],
    habitat: {
      title: "Ochiq yer va yo'lkalardagi hudud",
      body: "Voyaga yetganlari quyoshli, siyrak qumli yo'lkalar va daryo bo'yidagi ochiq joylarni afzal ko'radi; ochiq maydon yuqori tezlikdagi ovga mos keladi va yirtqichlarni erta payqashga imkon beradi. Lichinkalari esa o'z iniga bog'liq qolib, undan uzoqda o'zini himoya qila olmaydi.",
    },
  },

  'stag-beetle': {
    lesson: [
      {
        title: "Jag'lar qanday jang qiladi",
        body: "Ichki qirrasida o'tkir tishlari bo'lgan jag'lar erkakning sharbat joyi va juft uchun asosiy quroli. Raqiblar jag'larini tutashtiradi, tanalarini qisib, ko'tarib, mag'lubni tanadan ag'daradi; g'olib esa sharbat yarasini egallaydi.",
        anchor: 'mandible',
      },
      {
        title: "Kuchli tishlash uchun keng bosh",
        body: "Keng, tekislangan bosh jag'larga kuch beradigan mustahkam mushaklarni yashiradi. Bosh qanchalik keng va kuchli bo'lsa, erkak shunchalik uzoq ushlab turishi mumkin, uzoq davom etadigan tortishuvda ustunlik beradi.",
        anchor: 'head',
      },
      {
        title: "Bosimga chidamli tirnoqlar",
        body: "Oyoq uchlaridagi o'tkir tirnoqlar dag'al po'stloq g'ovaklariga mahkam ilashadi. Raqib tanasini qisib tortganda, aynan shu mayda tirnoqlarning ushlab turishi uning o'z joyida qolishi yoki ag'darilishini hal qiladi.",
        anchor: 'leg',
      },
      {
        title: "Aka-uka tug'ishganlar butunlay boshqacha bo'lib chiqishi mumkin",
        body: "Lichinka ovqatlanishi voyaga yetgan jag' uzunligini belgilaydi; bir tuxumdan chiqqan aka-ukalar turlicha oziqlansa, jag'lari ikki barobardan ortiq farq qilishi mumkin. Kichikroq jag'li erkaklar ko'pincha sharbat joyi uchun pistirma taktikasiga murojaat qiladi.",
      },
    ],
    motion: {
      title: "Ko'tarib ag'darish uchun tortishuv",
      body: "Ikki erkak jag'larini tutashtirib, birgalikda yuqoriga ko'taradi; tanadan uloqtirilgani mag'lub bo'ladi. Ko'pchilik jangovar uchrashuvlar marosim tusidagi kuch sinovlari bo'lib, kamdan-kam raqibning elitrasini teshadi, mag'lub esa boshqa joyda yangi sharbat yarasini topadi.",
    },
    quiz: [
      {
        question: "Bir tuxumdan chiqqan Xitoy bug'usimon qo'ng'iz erkaklarining jag' uzunligi nima uchun voyaga yetgach shu qadar farq qilishi mumkin?",
        options: [
          "Bu to'liq genlar bilan belgilanadi; ovqatlanish jag' shakliga ta'sir qilmaydi",
          "Lichinka bosqichidagi turli ovqatlanish darajasi voyaga yetgan jag'larning rivojlanishiga bevosita ta'sir qiladi",
          "Bu shunchaki o'lchash xatosi; haqiqiy farq kichik",
        ],
        answer: 1,
        explain: "Jag' uzunligi lichinka ovqatlanishi bilan shakllanadi; bir tuxumdan chiqqanlar orasida oziqlanish farq qilsa, jag'lar ikki barobardan ortiq farqlanishi mumkin, bu shunchaki genetika emas.",
      },
      {
        question: "Jag'lari kichikroq bo'lgan Xitoy bug'usimon qo'ng'iz erkagi mustahkam jag'li raqib bilan uchrashganda odatda qanday xulq tutadi?",
        options: [
          "U raqibning elitrasini teshib o'ldirguncha jang qiladi",
          "U pistirma yoki qulay fursatdan foydalanish taktikasiga o'tib, imkon tug'ilganda sharbat joyini egallaydi",
          "U o'sha sharbat joyini butunlay tark etib, boshqa hech qachon kurashmaydi",
        ],
        answer: 1,
        explain: "Kichik jag'li erkak yuzma-yuz jangda kamchilikka ega, shuning uchun raqib chalg'igan paytda sharbat joyini egallash uchun pistirma taktikasiga o'tadi.",
      },
    ],
    habitat: {
      title: "Chirigan yog'och va sharbat yaralari",
      body: "Lichinkalari chirigan tana yoki kovaklar ichida yashab, parchalanuvchi yog'och bilan oziqlanadi, kamdan-kam yorug'lik ko'radi. Voyaga yetganlari kechasi faol bo'lib, boshqa bug'usimon yoki karkidon qo'ng'izlari bilan bo'lishilgan tana yaralaridan sharbat yalab, kunduzi po'stloq yoki to'kilgan barglar orasida dam oladi.",
    },
  },

  'jewel-beetle': {
    lesson: [
      {
        title: "Bo'yalmagan rang",
        body: "Elitra tovlanuvchi oltin-yashil va qizil sirlangandek ko'rinadi, ammo kutikula ostida o'nlab nanometrli qatlamlar joylashgan; ular orasidagi yorug'lik interferensiyasi rang hosil qiladi, bu pigmentdan farqli. Uni og'dirsangiz, rang o'zgaradi.",
        anchor: 'elytra',
      },
      {
        title: "Ko'zga tashlanuvchi ikkita chiziq",
        body: "Ikkita qizil-siyohrang chiziq elitra bo'ylab, tuzilma rangi eng zich joylashgan yerda o'tadi, atrofdan yorqinroq yorug'lik qaytaradi — bu uni qarindoshlaridan ajratishning eng aniq belgisi.",
        anchor: 'stripe',
      },
      {
        title: "Kichik ko'zlar, baribir daraxtni topadi",
        body: "Uning murakkab ko'zlari ayniqsa katta emas, ammo egalik daraxti tojini topishning asosiy vositasi bo'lib qoladi. Voyaga yetganlari quyoshli daraxt tojida qolib, zaiflashgan daraxtni yoki boshqa qo'ng'izni uzoqdan ko'radi.",
        anchor: 'eye',
      },
      {
        title: "Namunalar nima uchun hech qachon xiralashmaydi",
        body: "Pigment ranglari oksidlanib xiralashadi, ammo tuzilma rangi faqat qatlam qalinligi va joylashuviga bog'liq, shuning uchun butun bo'lib qolsa, hech qachon eskirmaydi. Horyuji ibodatxonasidagi Tamamushi ziyoratgohiga qadalgan elitralar bugun ham tovlanadi.",
      },
    ],
    motion: {
      title: "Uchishda rangini o'zgartiruvchi elitra",
      body: "U uchib ketayotganda, elitra tana burchagi va yorug'lik burchagiga qarab o'zgarib, yashil, qizil va siyohrang tuslar xuddi hasharot havoda rangini o'zgartirayotgandek chaqnaydi. Bu faqat tuzilma rangiga xos — pigment esa har qanday burchakdan bir xil ko'rinadi.",
    },
    quiz: [
      {
        question: "Yapon zargarlik qo'ng'izi elitrasining metall tovlanishi qanday hosil bo'ladi?",
        options: [
          "Kutikula ajratgan pigment elitra yuzasiga cho'kadi",
          "Kutikula ostidagi bir necha qatlam orasida yorug'lik interferensiyasi, pigmentga aloqasi yo'q",
          "Uzoq quyosh nuriga chidashdan kelib chiqadigan sirt zanglashi",
        ],
        answer: 1,
        explain: "Bu tuzilma rangi: kutikula ostidagi nanometrli qatlamlar yorug'lik bilan interferensiyaga kirib rang hosil qiladi, ko'rish burchagiga qarab o'zgaradi — pigmentdan farqli.",
      },
      {
        question: "Yapon zargarlik qo'ng'izi elitrasi namunalari nima uchun asrdan keyin ham yorqin qoladi?",
        options: [
          "Qadimgi hunarmandlar namunalarni maxsus konservant lak bilan qoplagan",
          "Rang pigmentdan emas, qatlamlangan tuzilmadan kelib chiqadi, shuning uchun qobiq butun turgan ekan oksidlanib xiralashmaydi",
          "Elitra materiyasining o'zi vaqt o'tishi bilan yanada yorqinroq bo'lib boradi",
        ],
        answer: 1,
        explain: "Pigment vaqt o'tishi bilan oksidlanib xiralashadi, ammo tuzilma rangi faqat qatlam qalinligiga bog'liq, shuning uchun qobiq butun bo'lsa, pigment kabi eskirmaydi.",
      },
    ],
    habitat: {
      title: "Quyoshni sevuvchi toj mehmonlari",
      body: "Voyaga yetganlari vaqtining ko'p qismini xurmosimon, kamfora va boshqa egalik daraxtlarining quyoshli tojida o'tkazadi, kamdan-kam pastga tushadi. Lichinkalari esa aksincha, zaiflashgan yoki o'lgan yog'och ichida yashirinib, yog'och qatlamini kovlaydi — ikkalasi ham bir xil egalik daraxtiga bog'liq qoladi.",
    },
  },

  katydid: {
    lesson: [
      {
        title: "Old oyoqlarda joylashgan quloqlar",
        body: "Chirildoq chigirtkasining eshitish a'zosi (timpanum) qorinda emas, old oyoq boldirida joylashgan; yupqa pardalar boshqa chirildoqlarning qanot chaqirig'ini sezadi. Chigirtkalar esa qorin orqali eshitadi — ularni farqlashning aniq usuli.",
        anchor: 'tympanum',
      },
      {
        title: "Tanasidan uzunroq mo'ylovlar",
        body: "Uning ipsimon mo'ylovlari ko'pincha tana uzunligidan ikki-uch barobar uzun bo'lib, oldinga osilib, paypaslab turadi. Chigirtkaning mo'ylovlari ancha qisqa va yo'g'on, shuning uchun uzunligi ko'pincha ikkalasini ajratishning yagona belgisi.",
        anchor: 'antenna',
      },
      {
        title: "Old qanotlar tovushni qanday hosil qiladi",
        body: "Erkakning chap old qanoti asosida tishli fayl, o'ng qirrasida esa qirg'ich bor; qanotlar ishqalanib, faylni qirg'ichga sudrab, baland chaqiriq hosil qiladi, urg'ochilarga sevgi-mehr izhor qiladi va hududni belgilaydi.",
        anchor: 'wing',
      },
      {
        title: "Sakrashda yaxshi, uchishda unchalik",
        body: "Orqa oyoq soni kuchli bo'lib, xavfga birinchi javob sifatida uzoqqa sakrashga imkon beradi. Uning qanotlari sakrashidan kuchsizroq, shuning uchun u masofani asosan sakrash va emaklab bosib o'tadi, chigirtkalar kabi uzoq uchishi kamdan-kam.",
        anchor: 'hindleg',
      },
    ],
    motion: {
      title: "Raqib hudud chaqiriqlari to'lqini",
      body: "Qorong'i tushgach, o'tdagi bir nechta erkak navbatma-navbat chaqiradi: biri boshlaydi, boshqalari javob beradi, ba'zan balandroq ovoz bilan javob qaytaradi, tovush to'lqinini hosil qiladi — bu ham sevgi-mehr namoyishi, ham to'g'ridan-to'g'ri jangsiz hududni belgilovchi ovozli musobaqa.",
    },
    quiz: [
      {
        question: "Xitoy chirildoq chigirtkasining eshitish a'zosi (timpanum) tanasining qaysi qismida joylashgan?",
        options: [
          "Birinchi qorin segmentining ikki yonida, chigirtkadagidek",
          "Old oyoq boldirida, chigirtkadan farqli joyda",
          "Boshda, mo'ylov asosiga yaqin",
        ],
        answer: 1,
        explain: "Chirildoq chigirtkasining eshitish a'zosi old oyoq boldirida joylashgan, chigirtkanikidan farqli — chigirtkaning a'zosi qorinda — bu ularni ishonchli farqlash usuli.",
      },
      {
        question: "Faqat mo'ylov uzunligiga qarab, chirildoq chigirtkasini chigirtkadan qanday taxminan farqlash mumkin?",
        options: [
          "Chirildoq chigirtkasining mo'ylovlari tanasidan ancha uzun, chigirtkaniki esa sezilarli darajada qisqa va yo'g'on",
          "Ularning mo'ylov uzunligi aslida deyarli bir xil, shuning uchun bu bilan farqlab bo'lmaydi",
          "Chigirtkaning mo'ylovlari uzunroq, chirildoq chigirtkaniki qisqaroq",
        ],
        answer: 0,
        explain: "Chirildoq chigirtkasining mo'ylovlari ko'pincha tana uzunligidan ikki-uch barobar uzun, chigirtkaniki esa ancha qisqa — bu tezkor farqlash usuli.",
      },
    ],
    habitat: {
      title: "Loviya pechaklari va o't qo'shiqchisi",
      body: "Kunduzi u dukkakli va g'alla o'tlarining poya va barglari orasida yashirinib, barg, gul va meva bilan oziqlanadi, rangi atrofga singadi. Qorong'i tushgach, u yaqin atrofda baland chaqiradi — bir xil joydan yildan-yilga qo'shiq eshitilishi keng tarqalgan holat.",
    },
  },

  'mole-cricket': {
    lesson: [
      {
        title: "Old oyoqlar belkurak, prujina emas",
        body: "Uning old oyoqlari tekis, belkurakka o'xshash asboblar bo'lib, boldirida tuproqni bo'shatib oldinga suradigan qattiq tishlari bor. Butun kuchi qazishga sarflanadi, shuning uchun sakrashi zaif; xavf tug'ilganda u sakramay, kovlab kiradi.",
        anchor: 'foreleg',
      },
      {
        title: "Itarish uchun qalqonsimon plastinka",
        body: "Bosh ortidagi plastinka (pronotum) shishib, bo'yin va old oyoq asosini qoplaydigan yumaloq qalqonga aylanadi; tunnel bo'ylab u qopqoq kabi ishlab, bo'shatilgan tuproqni chetga suradi va devor bilan ishqalanishni kamaytiradi.",
        anchor: 'pronotum',
      },
      {
        title: "Serklar bilan tebranishni sezish",
        body: "Qorin uchidagi bir juft sezuvchi o'simta (serklar) tuproq va tunnel devori orqali kelayotgan mayda tebranishlarga juda sezgir. Butunlay qorong'ilikda ham, u ulardan foydalanib, yirtqich yoki o'ljani oldindan seza oladi.",
        anchor: 'abdomen',
      },
      {
        title: "Ba'zan havoga ham ko'tariladi",
        body: "Ko'pincha u yer ostida yashab, kamdan-kam sirtga chiqadi. Tungi tarqalish paytida esa qisqa old qanotlar ostidagi orqa qanotlarini yoyib, qisqa parvoz qiladi va yorug'likka tortiladi — shu sababli chiroqlar yaqinida paydo bo'ladi.",
        anchor: 'wing',
      },
    ],
    motion: {
      title: "Suzuvchi kabi qazish",
      body: "Yumshoq, nam tuproqda u old oyoqlarini navbatma-navbat harakatlantirib, ko'krak bilan suzuvchi kabi qazadi: bir oyoq tuproqni tashqariga supursa, ikkinchisi keyingi zarba uchun orqaga tortiladi, pronotum esa tuproqni chetga suradi. Yangi tunnel bir necha daqiqada hosil bo'ladi.",
    },
    quiz: [
      {
        question: "Yirtqich bilan yuzma-yuz kelganda, Sharqiy tuproq chirildog'i odatda xavfdan qanday qochadi?",
        options: [
          "Chigirtka kabi, kuchli orqa oyoqlari bilan uzoqqa sakrab qochadi",
          "Old oyoqlari sakrash uchun mo'ljallanmagan, shuning uchun u tezda bo'sh tuproqqa kovlab kirib qochadi",
          "U qanotlarini yozib, zumda uchib ketadi",
        ],
        answer: 1,
        explain: "Tuproq chirildog'ining old oyoqlari qazish uchun, sakrash uchun emas, shuning uchun xavf tug'ilganda u bo'sh tuproqqa kovlab kiradi, chigirtka yoki chirildoqdan farqli.",
      },
      {
        question: "Sharqiy tuproq chirildog'i dala tuprog'ida yil bo'yi kovlab oziqlanadi — bu tuproqning o'ziga qanday ob'ektiv ta'sir qiladi?",
        options: [
          "Uning qazishi tuproqni zichlashtirib, ildiz o'sishiga xalaqit beradi",
          "Uning qazishi tuproqni bo'shatib, havo va suv o'tishiga yordam beradi",
          "Uning qazishi tuproq tuzilishiga umuman ta'sir qilmaydi",
        ],
        answer: 1,
        explain: "Ildiz va nihollarni yeb, u dala zararkunandasiga aylanadi, ammo qazishi tuproqni bo'shatib, suv o'tishiga yordam beradi — bu ko'pincha e'tibordan chetda qoladigan foyda.",
      },
    ],
    habitat: {
      title: "Yumshoq tuproq qatlamlaridagi tunnellar",
      body: "U qazish oson bo'lgan yumshoq, nam tuproqni — dala, sabzavot maydoni va daryo bo'ylarini — afzal ko'radi, kunduzi tunnel chuqurida qolib, kechasi ovqatlanish uchun sirtga yaqinlashadi. U zichlashgan yoki quruq yerdan qochadi, u yerda qazish qiyin.",
    },
  },
  'water-strider': {
    lesson: [
      {
        title: "Suv ustida turish og'irlikka bog'liq emas",
        body: "O'rta va orqa oyoqlardagi mumsimon qatlam va zich suv itaruvchi tuklar sirtqi tarangni uning og'irligini ko'tara oladigan darajada kuchaytiradi. Tuklarni olib tashlasangiz, u zumda cho'kadi.",
        anchor: 'body',
      },
      {
        title: "O'rta oyoqlar eshkak kabi ishlaydi",
        body: "Uchta juftdan eng uzuni bo'lgan o'rta oyoqlar eshkak kabi yon tomonga eshkak eshib, asosiy itarish kuchini beradi — bu unga suv ostida pistirmada turgan baliqdan zumda qochib ketish imkonini beradi.",
        anchor: 'midleg',
      },
      {
        title: "Suvga tushgan o'ljani topish",
        body: "Murakkab ko'zlari keng ko'rish uchun tashqariga bo'rtib chiqqan, tipirchilayotgan o'ljaning to'lqinlarini sezadi. U tezda sirg'anib borib, qisqa va kuchli old oyoqlari bilan o'ljani mahkamlaydi.",
        anchor: 'eye',
      },
      {
        title: "Orqa oyoqlar tormoz va burilishni boshqaradi",
        body: "O'rta oyoqlar itarish kuchini beradi; orqa oyoqlar esa yo'nalishni boshqaradi va tormozlaydi. Ikkalasi birgalikda ochiq suvda keskin burilish yoki to'satdan to'xtashga imkon beradi — ko'pchilik suv hasharotlaridan ancha chaqqonroq.",
        anchor: 'hindleg',
      },
    ],
    motion: {
      title: "Suvdan to'g'ridan-to'g'ri tikka sakrash",
      body: "Baliq hujumidan qochib, u suv yuzasidan to'g'ridan-to'g'ri tikka sakraydi. Barcha oltita oyoq asta-sekin kuchaytirilgan bosim bilan bosishi kerak — juda kuchli bosilsa, sirtqi parda yorilib, u ichiga tushib ketadi.",
    },
    quiz: [
      {
        question: "Suv tirmashuvchisini suvda turganda cho'kishdan asosan nima saqlaydi?",
        options: [
          "U juda yengil bo'lgani uchun sirtga deyarli bosim tushirmaydi",
          "Oyoqlaridagi zich suv itaruvchi tuklar sirtqi tarangni uning og'irligini ko'tara oladigan darajada kuchaytiradi",
          "U butun tanasini suvdan himoya qiladigan moy ajratadi",
        ],
        answer: 1,
        explain: "Oyoqlaridagi zich suv itaruvchi tuklar sirtqi tarangni uning og'irligini ko'tarishga yetarli darajada kuchaytiradi. Tuklarni olib tashlasangiz, u zumda cho'kadi — bu og'irlik masalasi emas.",
      },
      {
        question: "Suv tirmashuvchisining uchta juft oyog'i o'rtasidagi mehnat taqsimoti haqida qaysi fikr to'g'ri?",
        options: [
          "Old oyoqlar itarish uchun eshkak eshadi, o'rta va orqa oyoqlar esa o'ljani ushlaydi",
          "O'rta oyoqlar asosiy itarish kuchini beradi, old oyoqlar o'ljani ushlaydi, orqa oyoqlar esa yo'nalish va tormozni boshqaradi",
          "Uchala juft oyoq ham bir xil vazifani bajaradi va bir-birining o'rnini bosa oladi",
        ],
        answer: 1,
        explain: "Eng uzun o'rta oyoqlar asosiy itarish kuchini beradi; qisqa old oyoqlar o'ljani ushlaydi; orqa oyoqlar esa yo'nalish va tormozni boshqaradi — har bir juftning o'z vazifasi bor, ular bir-birining o'rnini bosa olmaydi.",
      },
    ],
    habitat: {
      title: "Turg'un suvdagi suzuvchi dunyo",
      body: "U tinch hovuz va sekin oquvchi soylarni afzal ko'rib, sirtqi tarang ustida sirg'anib ov qiladi. Ifloslanish bu tarangni zaiflashtirgani sababli, uning populyatsiya zichligi ko'pincha suv tozaligini baholash uchun ishlatiladi.",
    },
  },

  hoverfly: {
    lesson: [
      {
        title: "Faqat bitta juft qanot, baribir havoda muallaq turadi",
        body: "Haqiqiy pashshalar (Diptera) orqa qanotlarini ixtisoslashtirib qo'ygan, shuning uchun u faqat bitta juft old qanot bilan uchadi — baribir u havoda muallaq turadi, orqaga uchadi va zumda buriladi, ko'plab to'rt qanotli arilarni ortda qoldiradi.",
        anchor: 'wing',
      },
      {
        title: "Galter uni qanday barqaror ushlaydi",
        body: "Orqa qanotlari gurzisimon galterga aylanib qisqargan, ular uchishda tez tebranib, tananing aylanishi va og'ishini sezib, bu ma'lumotni muvozanat uchun qaytarib beradi.",
        anchor: 'haltere',
      },
      {
        title: "Qora-sariq chiziqlar — blef",
        body: "Qorindagi qora-sariq chiziqlar asalari va arilarning ogohlantiruvchi rangini ko'chiradi, yirtqichlarni ikkilanishga majbur qiladi. Aslida unda nish umuman yo'q — naqsh sof blef.",
        anchor: 'abdomen',
      },
      {
        title: "Ko'zlar orqali erkak va urg'ochini farqlash",
        body: "Erkaklarning murakkab ko'zlari boshning ustida deyarli chiziq bo'ylab tutashadi; urg'ochilarida esa ular orasida aniq bo'shliq qoladi — dalada gulqurt pashshasining jinsini aniqlashning eng tezkor usuli.",
        anchor: 'eye',
      },
    ],
    motion: {
      title: "Lichinkalari kechasi shira koloniyalarini ovlaydi",
      body: "Qurtga o'xshash lichinka tezkor ovlaydi: og'iz ilmoqlari shirani ilib, sanchib, quritib qo'yadi, bir kechada o'nlab shirani yeb tugatadi. Koloniya qanchalik zich bo'lsa, uning ov muvaffaqiyati shunchalik oshadi.",
    },
    quiz: [
      {
        question: "Gulqurt pashshasi qora-sariq rangda bo'lib, asalari yoki ariga juda o'xshaydi, ammo aslida u —",
        options: [
          "Asalarilar kabi nishga ega, ammo kamdan-kam ishlatadi",
          "Umuman nishga ega emas va chaqa olmaydi — rang faqat niqob",
          "Kuchsizlashgan, ignaga o'xshash og'iz a'zosiga aylangan nishga ega",
        ],
        answer: 1,
        explain: "Haqiqiy pashsha sifatida, unda umuman nish yo'q va u chaqa olmaydi. Naqsh faqat asalarining ogohlantiruvchi rangini taqlid qilib, yirtqichlarni cho'chitadi — sof blef.",
      },
      {
        question: "Gulqurt pashshasiga ari kabi chaqqon uchishga, hatto havoda oson muallaq turishga nima imkon beradi?",
        options: [
          "Ari kabi birgalikda ishlaydigan ikki juft qanot",
          "Faqat bitta juft qanot, tana holatini sezuvchi gurzisimon galterlar bilan birga",
          "Faqat bitta juft qanot, ammo arinikidan ancha kattaroq",
        ],
        answer: 1,
        explain: "U bitta juft old qanot bilan uchadi; orqa qanotlari esa tana holatini sezib, barqarorlikka yordam beradigan gurzisimon galterlarga aylangan, ikkinchi juft qanot emas.",
      },
    ],
    habitat: {
      title: "Gulzor va shiralar orasida",
      body: "Voyaga yetganlari bog', dala va o'rmon chekkasidagi gullarga tashrif buyurib, nektar va gulchang oladi, yo'l-yo'lakay changlatadi. Urg'ochilari esa lichinkalar darhol ovlay olishi uchun shira zich bo'lgan shoxlar yaqiniga tuxum qo'yadi.",
    },
  },

  lacewing: {
    lesson: [
      {
        title: "Oltin-bronza ko'zlar eng oson belgi",
        body: "Murakkab ko'zlari oltin-bronza tusda yaltiraydi, bu to'rqanotni aniqlashning eng tezkor dala belgisi. Bunday hashamatli ko'rinishiga qaramay, ular unchalik o'tkir emas — asosan yorug'lik va harakatni sezadi.",
        anchor: 'eye',
      },
      {
        title: "To'rsimon tomirlar nozik qanotni mustahkamlaydi",
        body: "Ikkala ingichka qanot jufti ham o'zaro kesishuvchi qanot tomirlari to'ri bilan mustahkamlangan, bu nozik qanotni qo'llab-quvvatlaydi va unga xira tovlanish beradi — bu Neuroptera («tor qanot») nomining kelib chiqishi.",
        anchor: 'wing',
      },
      {
        title: "Lichinka o'zini chiqindi sifatida qanday niqoblaydi",
        body: "Lichinkaning uzun, tukli oyoqlari tez shira quvishga mos. Qurbonini so'rib bo'shatgach, u qobiqni orqasiga to'plab, o'lja qoldiqlari orasida sezilmasdan keyingi nishoniga yaqinlashadi.",
        anchor: 'leg',
      },
      {
        title: "Tuxumlari ipak poyachalarda osilib turadi",
        body: "Tuxum qo'yishdan oldin, urg'ochi ipak ip to'qib, tuxumini uning uchiga barg ustida osilgan holda qo'yadi. Bu kannibal chaqqan bolalarning to'plamning qolganini yeb qo'yishining oldini oladi.",
      },
    ],
    motion: {
      title: "Tebranish kodidagi sevgi-mehr izhori",
      body: "Sevgi-mehr izhor qiluvchi to'rqanotlar ovoz chiqarmaydi; ular qorinlarini ritmik titratib, o'rindiq orqali tebranish yuboradi. Sherigi bu «kod»ni sezib, qo'shilishdan oldin javoban titraydi.",
    },
    quiz: [
      {
        question: "To'rqanot lichinkasi nima uchun so'rib bo'shatgan shira qobiqlarini orqasiga to'playdi?",
        options: [
          "Qobiqlardagi qolgan suyuqlik zaxira oziq bo'lib xizmat qiladi",
          "U o'lja qoldiqlari orasida yashirinib, keyingi nishoniga yashirincha yaqinlashadi va yirtqichlardan qochadi",
          "Qobiqlar quyosh nurini qaytarib, tana haroratini boshqarishga yordam beradi",
        ],
        answer: 1,
        explain: "Lichinka bo'sh qobiqlarni kamuflyaj sifatida olib yuradi, bu unga shiraga yashirincha yaqinlashish va yirtqichlardan qochish imkonini beradi — oziq saqlash yoki issiqlikni boshqarish uchun emas.",
      },
      {
        question: "Yashil to'rqanot mansub bo'lgan Neuroptera turkumi asosan qaysi xususiyati bilan nomlangan?",
        options: [
          "Barg tomirlariga o'xshab, jasoratli to'rsimon tomirlar bilan qoplangan qanotlar",
          "Butunlay kichraygan qanotlar, faqat tomirga o'xshash izlar qolgan",
          "Lichinka va voyaga yetganda g'ayrioddiy rivojlangan qon tomir tizimi",
        ],
        answer: 0,
        explain: "Neuroptera nozik, o'zaro kesishuvchi to'rsimon qanot tomirlari bilan nomlangan, bu tomirlar yupqa qanotni mustahkamlaydi va guruhni aniqlashga yordam beradi.",
      },
    ],
    habitat: {
      title: "Barglar orasidagi ov bazasi",
      body: "Voyaga yetganlari dala, bog' va o'rmon chekkasining shox-barglari orasida yashaydi, kunduzi qimirlamay, kechasi faol ovqatlanadi, yorug'likka tortiladi. Urg'ochilari shira zich bo'lgan shoxchalar yaqiniga tuxum qo'yadi.",
    },
  },

  earwig: {
    lesson: [
      {
        title: "Qisqich aslida nima uchun ishlatiladi",
        body: "Qorin uchidagi bir juft egri qisqich uning asosiy quroli — erkaklarda egri va assimetrik, urg'ochilarda tekisroq — yirtqichlarga qarshi ishlatiladi, inson qulog'iga emas.",
        anchor: 'forceps',
      },
      {
        title: "Qanot qoplamalari nima uchun bunchalik qisqa",
        body: "Old qanotlar faqat birinchi bir necha segmentga yetadigan juda qisqa, charmsimon elitra hosil qiladi, qorinning qolgan qismini ochiq qoldiradi — qo'ng'izlarning to'liq uzunlikdagi elitrasidan farqli.",
        anchor: 'elytra',
      },
      {
        title: "Tekis bosh qanchalik tor teshikka kirishi mumkin",
        body: "Tekislangan bosh yerga yaqin bosiladi, bu unga toshlar va sohil yog'ochlari orasidagi tor bo'shliqlarga kirishga imkon beradi, u yerda kunduzi quyosh va yirtqichlardan qorong'i tushguncha yashiradi.",
        anchor: 'head',
      },
      {
        title: "Qorin nima uchun orqaga egilishi mumkin",
        body: "Oxirgi qorin segmentlari keskin yuqoriga, hatto bosh tepasigacha egiladi, shunda qisqich yuqoridan yoki orqadan zarba berishi mumkin — bu uning sekin, uchmaydigan himoyasini qoplaydi.",
        anchor: 'abdomen',
      },
    ],
    motion: {
      title: "Ona chiqquncha tuxumlarni qo'riqlaydi",
      body: "Tuxum qo'ygandan so'ng, urg'ochi tuxum to'plami yonida qolib, mog'or bo'lmasligi uchun tuxumlarni yalaydi va tarqoq qolganlarini to'playdi. Bezovta qilingan tuxumlar birma-bir qaytarib qo'yiladi — hasharotlar orasida kamdan-kam uchraydigan g'amxo'rlik.",
    },
    quiz: [
      {
        question: "Xalq afsonasiga ko'ra qulog'ichqurtlar inson qulog'iga kirib oladi — haqiqatda nima to'g'ri?",
        options: [
          "Bu haqiqatan ham sodir bo'ladi — qulog'ichqurtlar odamlar uxlaganda ko'pincha quloq kanaliga kiradi",
          "Bu mif; qulog'ichqurtlarda quloq kanaliga kirish odati yo'q va ular odamlarga deyarli hech qanday xavf tug'dirmaydi",
          "Faqat bir nechta yirik qulog'ichqurt turlari haqiqatan ham shunday qiladi",
        ],
        answer: 1,
        explain: "Bu uzoq davom etgan mif. Qulog'ichqurtlar hech qachon quloq kanaliga kirmaydi; ularning qisqichlari faqat himoya va ov uchun xizmat qiladi, odamlarga deyarli xavf tug'dirmaydi.",
      },
      {
        question: "Qirg'oq qulog'ichqurtining qisqa elitrasini oddiy qo'ng'izlar elitrasidan eng ko'p nima ajratib turadi?",
        options: [
          "Ular ham butun qorinni qoplaydi, faqat rangi to'qroq",
          "Ular faqat qorinning old qismini qoplaydi, qolgan segmentlar butunlay ochiq qoladi",
          "Ular umuman qanot emas, balki qalinlashgan, ixtisoslashgan mo'ylovlar",
        ],
        answer: 1,
        explain: "Uning old qanotlari faqat qorinning old qismini qoplaydigan qisqa qoplamalar bo'lib, qolgani ochiq qoladi — bu qulog'ichqurtlarni to'liq elitrali qo'ng'izlardan ajratadi.",
      },
    ],
    habitat: {
      title: "Suv-quruqlik zonasidagi tosh yoriqlaridagi uy",
      body: "U qirg'oq toshlari ostida, sohil yog'ochi yoriqlarida va nam organik chiqindilar orasida yashab, yuqori suv chizig'iga yaqin nam joylarni boshpana uchun afzal ko'radi va suv qaytgandan keyin ham paydo bo'ladi.",
    },
  },

  'dung-beetle': {
    lesson: [
      {
        title: "Belkurak shaklidagi klipeus",
        body: "Boshning old chetida yarim doira shaklidagi qoshiq — klipeus — tekislanadi, uning qattiq, tekis chetlari bor — go'ngni kesish va tuproqqa qazish uchun ishlatiladi, bu uning kundalik ishidagi birinchi asbob.",
        anchor: 'clypeus',
      },
      {
        title: "Qazish uchun tishli old oyoqlar",
        body: "Har bir old oyoq boldirida uch-to'rtta mustahkam tish bor, xuddi tishli ketmonga o'xshab. Tuproqni qazish yoki go'ngni ag'darish shu tish qatoriga bog'liq, u klipeus bilan birgalikda tezda yig'ib oladi.",
        anchor: 'foreleg',
      },
      {
        title: "Jang uchun qurilgan bosh shoxi",
        body: "Erkaklari yuqoriga qayrilgan bosh shoxi (sefalik shox) olib yuradi, urg'ochilarida bu hech qachon o'smaydi. Raqiblar yaxshi go'ng manbai ustida shoxlarini tutashtiradi, g'olib esa to'pni saqlab qoladi.",
        anchor: 'horn',
      },
      {
        title: "Go'ng to'pi ham bolalar xonasi",
        body: "U go'ng to'pidan to'g'ridan-to'g'ri pastga chuqur qazib, bo'laklarni tubiga tashiydi va ularni to'pga aylantiradi. Urg'ochi uning markaziga tuxum qo'yadi — bir vaqtning o'zida ham bolalar xonasi, ham oziq.",
      },
    ],
    motion: {
      title: "Go'ngni o'sha joyning o'zida qazib ko'mish",
      body: "Mashhur «to'p dumalatuvchi» boshqa guruhga tegishli. Bu qo'ng'iz esa tunnel qazadi: yangi go'ngga qo'nib, to'g'ridan-to'g'ri pastga qazib, tishli old oyoqlari bilan bo'laklarni tubiga tortadi.",
    },
    quiz: [
      {
        question: "Bu go'ng qo'ng'izi go'ngni nima uchun yer osti inigacha tortib boradi?",
        options: [
          "Faqat atrof-muhitni tozalash uchun, boshqa maqsadsiz",
          "Asosan tuxum qo'yish va bolalarini boqish uchun, uni lichinkalar uchun oziq sifatida saqlash uchun",
          "Juft uchun raqobatlashuvchi erkaklar orasidagi namoyish xulqi sifatida",
        ],
        answer: 1,
        explain: "Go'ngni ko'mish va to'pga aylantirish urg'ochiga uning markaziga tuxum qo'yish imkonini beradi, bu oziq zaxirasi bo'lib xizmat qiladi; lichinka to'p bilan oziqlanadi — bu ham bolalar xonasi, ham oziq.",
      },
      {
        question: "Bu go'ng qo'ng'izi o'tloq ekotizimida asosan qanday rol o'ynaydi?",
        options: [
          "O'simliklar bilan oziq moddalar uchun raqobatlashuvchi iste'molchi",
          "Go'ngning parchalanishini tezlashtiruvchi va oziq moddalarni tuproqqa qaytaruvchi parchalovchi",
          "Asosan o'simlik gulchangini tarqatuvchi changlatuvchi",
        ],
        answer: 1,
        explain: "Go'ngni yeb va ko'mib, u parchalanishni tezlashtiradi va oziq moddalarni tuproqqa tezroq qaytaradi — bu o'tloq va yaylovlarning asosiy parchalovchisi.",
      },
    ],
    habitat: {
      title: "Yaylov va go'ng to'plari",
      body: "U o't yeyuvchi hayvonlar go'ngi ko'p bo'lgan yaylov va o'rmon chekkasidagi o'tloqlarda keng tarqalgan, yangi manbani o'nlab metr uzoqlikdan hidi orqali topadi. Qazish uchun yumshoq, nam tuproq ham muhim.",
    },
  },

  weevil: {
    lesson: [
      {
        title: "Uzun, ingichka tumshuq",
        body: "Tumshuq, ya'ni rostrum, uzun, ingichka va tekis bo'lib, tana uzunligining uchdan biriga yetadi. Faqat uchida haqiqiy chaynovchi og'iz a'zolari bor, u novdaga kirib kemiradi.",
        anchor: 'rostrum',
      },
      {
        title: "Tumshuqqa o'rnatilgan mo'ylovlar",
        body: "Ko'pchilik hasharotlar mo'ylovlarini boshida olib yuradi, ammo bu paypaslagich qo'ng'izining tirsaksimon mo'ylovlari tumshuqning o'rtasidan o'sadi — bu paypaslagich qo'ng'izlarini boshqa qo'ng'izlardan ajratadigan eng aniq belgi.",
        anchor: 'antenna',
      },
      {
        title: "Ulkan paypaslagich qo'ng'izlar oilasi",
        body: "Paypaslagich qo'ng'izlar oilasi butun hayvonot dunyosidagi eng ko'p turli oila bo'lib, o'n minglab qayd etilgan turga ega. Bu paypaslagich qo'ng'izi bambuk novdalari bilan oziqlanishga ixtisoslashgan.",
      },
      {
        title: "Lichinkalari novdalarni kovlab, zarar yetkazadi",
        body: "Urg'ochi tuxumlarini novda po'stiga qo'yadi, chiqqan lichinkalar esa uning kemirilgan yo'lidan ergashib, chuqurroq to'qimalarga kiradi — hosil terish vaqtiga kelib, ichi ko'pincha allaqachon bo'shab qolgan bo'ladi.",
      },
    ],
    motion: {
      title: "Tuxum qo'yish uchun po'stni teshish",
      body: "Urg'ochi ingichka tumshug'ini burg'i kabi tiqib, aylantirib po'stni teshib, to'qimaga kiradi. Yetarlicha chuqur bo'lgach, u ovipozitorini kiritib, bitta tuxum qo'yadi.",
    },
    quiz: [
      {
        question: "Oddiy hasharotlar bilan solishtirganda, bu paypaslagich qo'ng'izining mo'ylovlarida eng g'ayrioddiy narsa nima?",
        options: [
          "Ular boshning tepasidan emas, ingichka tumshug'ning o'rtasidan o'sadi",
          "Ular butunlay kichrayib, deyarli ko'rinmaydi",
          "Ular butun tanadan bir necha barobar uzunroq",
        ],
        answer: 0,
        explain: "Ko'pchilik hasharotlar mo'ylovlarini boshida olib yuradi, ammo bu paypaslagich qo'ng'izinikilari tumshuqning o'rtasidan o'sadi — bu paypaslagich qo'ng'izlarini ajratadigan eng aniq xususiyat.",
      },
      {
        question: "Bambuk paypaslagich qo'ng'izi mansub bo'lgan paypaslagich qo'ng'izlar oilasining butun hayvonot dunyosidagi o'rni qanday?",
        options: [
          "U hasharotlar sinfi ichida eng yirik tanali oila",
          "U butun hayvonot dunyosidagi yagona eng ko'p turli oila",
          "U juda kam ma'lum turlarga ega kichik oila",
        ],
        answer: 1,
        explain: "Paypaslagich qo'ng'izlar oilasi hayvonot dunyosidagi boshqa har qanday oiladan ko'proq turga ega, o'n minglab tur qayd etilgan; bu tur esa bambuk novdalariga zarar yetkazadi.",
      },
    ],
    habitat: {
      title: "Bambukzorda novda mavsumi mehmoni",
      body: "Voyaga yetganlari yangi novda chiqqan paytda faol bo'lib, yumshoq novda va daraxt tepalari atrofida oziqlanadi. Lichinkalari esa butunlay bitta novda ichida yashab, novda qattiqlashganda qopqonda qoladi yoki erta chiqib ketadi.",
    },
  },

  'click-beetle': {
    lesson: [
      {
        title: "Orqa burchaklardagi ikkita o'tkir tikan",
        body: "Pronotumning orqa burchaklari o'tkir tikanlarga cho'zilgan, ingichka, qayiqsimon tana bilan birga bu unga ko'pchilik tinch turgan qo'ng'izlarning yumaloq tuzilishidan farqli siluet beradi.",
        anchor: 'pronotum',
      },
      {
        title: "Oyoqlarsiz sakrash",
        body: "Ostki tomonidagi tikan o'rta segmentdagi egatga to'satdan shiqillab tushadi, chiqarilgan kuch tanani havoga otadi — bu ag'darilganda o'zini tuzatadigan xuddi shu «shiqillash».",
        anchor: 'clickSpine',
      },
      {
        title: "Tanaga zich yig'ilgan mo'ylovlar",
        body: "Arrasimon mo'ylovlar pronotum ostidagi egatlarga tekis yig'ilib, deyarli ko'rinmaydi, faqat emaklaganda yoki hidni sinab ko'rganda bir oz cho'ziladi — bu harakat paytida qarshilikni kamaytiradi.",
        anchor: 'antenna',
      },
      {
        title: "Lichinkasi «sim qurt» deb ataladi",
        body: "Lichinkasi ingichka, qattiq tanali va oltin rangda bo'lib, odatda sim qurt deb ataladi. U yil bo'yi tuproqda yashirinib, ekin urug'i va ildizlarini kemirib, doimiy yer osti zararkunandasi bo'lib qoladi.",
      },
    ],
    motion: {
      title: "Orqasiga ag'darilgandan keyingi sakrash",
      body: "Orqasiga ag'darilganda, u boshi va ko'kragini biroz ko'tarib, ostki tikanini o'rta segment egatiga to'g'rilaydi, so'ng keskin qisqarib, tikan uni tik holatga otib yuboradi.",
    },
    quiz: [
      {
        question: "Sakrovchi qo'ng'iz orqasiga ag'darilganda o'zini tuzatishga asosan nima imkon beradi?",
        options: [
          "Barcha oltita oyoq bilan yerga kuchli tirgash",
          "Ostki tikan egatga tushganda chiqadigan mexanik kuch",
          "Qanot qoplamalarini tez titratishdan kelib chiqadigan aks kuch",
        ],
        answer: 1,
        explain: "Sakrovchi qo'ng'iz o'zini o'rta segment egatiga tikan tushganda chiqadigan kuch orqali tuzatadi; oyoqlar deyarli hech qanday hissa qo'shmaydi.",
      },
      {
        question: "Sakrovchi qo'ng'izning lichinkasi odatda qanday nom bilan ataladi va uning odati qanday?",
        options: [
          "Qurt deb ataladi, chirigan organik modda bilan oziqlanadi",
          "Sim qurt deb ataladi, tuproqda yashirinib, urug' va yosh ildizlar bilan oziqlanadi",
          "Suzuvchi qurt deb ataladi, suvda yashaydi",
        ],
        answer: 1,
        explain: "Lichinkasi ingichka, qattiq va oltin rangda bo'lib, sim qurt deb ataladi. U yil bo'yi tuproqda yashirinib, ekin urug'i va ildizlarini kemiradi — keng tarqalgan yer osti zararkunandasi.",
      },
    ],
    habitat: {
      title: "O't orasida va ekin ildizlari atrofida",
      body: "Voyaga yetganlari kechasi o'tloq va dala chekkasidagi past o'simliklar orasida kezib yuradi, kunduzi to'kilgan barglar yoki begona o't ostida yashiradi. Lichinkalari esa yil bo'yi ekin ildizlari yaqinidagi tuproqda yashaydi.",
    },
  },

  'diving-beetle': {
    lesson: [
      {
        title: "Suv uchun qurilgan oqim shaklidagi tana",
        body: "Silliq, tuxumsimon tana elitra chetlarida tikan yoki do'nglik olib yurmaydi, shuning uchun uning butun konturi oqim shaklida qoladi, suzishda deyarli qo'shimcha qarshilik hosil qilmaydi.",
        anchor: 'body',
      },
      {
        title: "Eshkakka o'xshagan orqa oyoqlar",
        body: "Orqa oyoqlar kuchli tekislangan va qattiq tuklar bilan chegaralangan, eshkak kabi tananing ilgarilashi uchun harakatlanadi. Old va o'rta oyoqlar ushlaydi; faqat orqa oyoqlar suzadi.",
        anchor: 'hindleg',
      },
      {
        title: "Jabra o'rniga traxeyalar",
        body: "Bu qo'ng'iz jabra bilan emas, ichki havo naylari (traxeyalar) bilan nafas oladi. Sho'ng'ishdan oldin qorin uchini suv yuzasidan chiqarib, elitrasi ostiga havo pufakchasini ushlab oladi.",
        anchor: 'airStore',
      },
      {
        title: "Lichinkasi ham shafqatsiz ovchi",
        body: "Voyaga yetgani ham, lichinkasi ham suv ostida shafqatsiz ovlaydi. Lichinkaning o'roqsimon jag'lari (mandibulalari) shprisga o'xshab ichi bo'sh bo'lib, hazm suyuqligini yuborib, so'ng o'ljani so'rib quritadi.",
      },
    ],
    motion: {
      title: "Qorin uchida havoni to'ldirish",
      body: "Sirtga chiqqanda, u avval qorin uchini chiqaradi; burmalangan elitra cheti bir oz ko'tarilib, ostidagi bo'shliqqa yangi havo oqib kirishiga imkon beradi. To'ldirilgach, u yana ov qilish uchun sho'ng'iydi.",
    },
    quiz: [
      {
        question: "Butun umrini suvda o'tkazadigan bu suzuvchi qo'ng'iz qanday nafas oladi?",
        options: [
          "Jabralar bilan, suvdagi erigan kislorodni to'g'ridan-to'g'ri oladi",
          "Traxeyalar bilan, o'zi bilan olib yurgan havo pufakchasidan kislorod oladi",
          "Suvdan kislorodni to'g'ridan-to'g'ri terisi orqali so'radi",
        ],
        answer: 1,
        explain: "Bu qo'ng'iz jabra bilan emas, traxeyalar bilan nafas oladi. Sho'ng'ishdan oldin elitra va qorin orasiga havo pufakchasini ushlab oladi, bu uni suv ostida ushlab turadi.",
      },
      {
        question: "Bu suzuvchi qo'ng'iz suzganda orqa oyoqlar qanday rol o'ynaydi?",
        options: [
          "Asosan old va o'rta oyoqlar kabi o'ljani ushlaydi",
          "Eshkak kabi tekislangan va suzuvchi tuklar bilan chegaralangan, asosiy suzish kuchini beradi",
          "Elitra ostiga yig'ilib, suzishda deyarli ishtirok etmaydi",
        ],
        answer: 1,
        explain: "Orqa oyoqlar eshkak kabi tekislangan va suzuvchi tuklar bilan chegaralangan, simmetrik harakat qiladi — bu suzish kuchiga bag'ishlangan yagona oyoq jufti.",
      },
    ],
    habitat: {
      title: "Turg'un hovuzdagi ovchi",
      body: "U o'simlikka boy va oqimi sekin hovuz, sholi maydoni va ariqlarda yashaydi, u yerda voyaga yetganlari va lichinkalari qurbaqa lichinkasi, baliq va hasharotlarga pistirma quradi. Toza, kislorodga boy suv unga eng mos keladi.",
    },
  },

  'rove-beetle': {
    lesson: [
      {
        title: "Keskin qisqartirilgan qanot qoplamalari",
        body: "Elitra faqat ko'krakdan sal narigacha yetadi, tana uzunligining yarmidan ancha kam bo'lib, burmalangan orqa qanotlar va qorinning ko'p qismini ochiq qoldiradi — bu uning oilasi nomining manbasi.",
        anchor: 'elytra',
      },
      {
        title: "Qorin yuqoriga egilishi mumkin",
        body: "Ochiq qorin, aniq segmentlangan va moslashuvchan bo'lib, bezovta qilinganda chayonning dumiga o'xshab orqaga egiladi. Bu faqat blef — uchida haqiqiy nish yo'q.",
        anchor: 'abdomen',
      },
      {
        title: "Haqiqiy zarar boshqa joydan keladi",
        body: "Uning kichik jag'lari (mandibulalari) o'ljani ezishi mumkin, ammo odamlarga yetkaziladigan zarar ular bilan bog'liq emas. Uning tana suyuqligida pederin deb ataladigan toksin bor, u faqat teriga ezilganda chiqadi.",
        anchor: 'mandible',
      },
      {
        title: "Aslida sholi maydonining qorovuli",
        body: "Qizil-qora naqsh faqat ogohlantiruvchi rang; u aslida chirildoq va boshqa zararkunandalar bilan oziqlanadi. U hech qachon odamga hujum qilmaydi, sholi zararkunandalari sonini jimgina pasaytirib turadi.",
      },
    ],
    motion: {
      title: "Cho'chitilganda dumini yuqoriga egish",
      body: "Tegilganda yoki bezovta qilinganda, u qotib qoladi, so'ng ochiq qorin uchini chayonga o'xshash ogohlantiruvchi holatda orqasi ustiga baland ko'taradi. Yana bezovta qilinsa, u qochib ketadi — hech qachon tishlamaydi yoki nishlamaydi.",
    },
    quiz: [
      {
        question: "Agar qisqichqanot tasodifan terangizga qo'nsa, u bilan muomala qilishning to'g'ri yo'li qanday?",
        options: [
          "Tishlanmaslik uchun zumda urib o'ldirish",
          "Uni ehtiyotkorlik bilan puflab yoki qoqib tushirish, teriga ezib yubormaslik",
          "Uni bosib ezib, so'ng terini yuvish",
        ],
        answer: 1,
        explain: "Bu qo'ng'iz tishlamaydi; dermatit uning suyuqligidagi pederinning teriga tegishidan kelib chiqadi. Uni urish toksinni chiqarib yuboradi — o'rniga puflang yoki qoqib tushiring.",
      },
      {
        question: "Uning dermatiti odamlarni ehtiyot bo'lishga majbur qilsa-da, bu qisqichqanotning haqiqiy ekologik roli qanday?",
        options: [
          "Chirildoq va boshqa zararkunandalarni ovlaydigan yirtqich",
          "Kasallik tarqatuvchi, jamoat salomatligiga tahdid soluvchi zararkunanda",
          "Sholi barglarini yeydigan o'simlikxo'r zararkunanda",
        ],
        answer: 0,
        explain: "Bu yerdagi zarar faqat teri bilan aloqadagi dermatit; uning o'zi yirtqich bo'lib, chirildoq va zararkunandalar bilan oziqlanadi — sholi yetishtiruvchilar uchun haqiqatan ham foydali.",
      },
    ],
    habitat: {
      title: "Sholi maydoni va qirg'oqning tungi sayohatchisi",
      body: "U sholi va ariq bo'ylaridagi nam o't va loyda yashaydi, kechasi yorug'lik bilan uy ichiga tortiladi. Kunduzi to'kilgan barglar ostida yashirinib, shira va chirildoqlarni ovlaydi.",
    },
  },

  'flower-chafer': {
    lesson: [
      {
        title: "Tekis, gumbazsimon emas",
        body: "Elitra deyarli tekis yotadi, karkidon qo'ng'izining baland gumbazsimon orqasiga teskari. Bronza-yashil fonda sochilgan oq dog'lar dalada birinchi ko'zga tashlanadi.",
        anchor: 'elytra',
      },
      {
        title: "Yon chetda qoldirilgan kertik",
        body: "Har bir elitraning yelka yaqinida kertik bor, bu orqa qanotning elitrani to'liq ko'tarmasdan to'g'ridan-to'g'ri chiqib qoqilishiga imkon beradi — bu uchishni ancha tezlashtiradi.",
        anchor: 'notch',
      },
      {
        title: "Zich o'tirgan pronotum",
        body: "Bosh ortidagi plastinka (pronotum) keng va bir oz gumbazsimon bo'lib, chetlari elitraga zich o'tiradi. Ular birgalikda tinch holatda deyarli chok-tikuvsiz zirh hosil qiladi.",
        anchor: 'pronotum',
      },
      {
        title: "Pastda qurtlar, tepada pishgan meva ovqatlanuvchilari",
        body: "Lichinkasi keng tarqalgan qurt bo'lib, chirindida burishib, chirigan o'simlik moddasi bilan oziqlanadi. Voyaga yetganlari esa sharbat oqayotgan yaralar va ortiqcha pishgan tushgan mevalar atrofida to'planib, shakarga boy suyuqlikni yalaydi.",
      },
    ],
    motion: {
      title: "Qanot qoplamasini ko'tarmasdan uchib ketish",
      body: "Uchishdan oldin, u ko'pchilik gul qo'ng'izlariga zarur bo'lgan to'liq elitra ko'tarishni chetlab o'tadi — orqa qanotlar elitra yon chetidagi kertiklar orqali to'g'ridan-to'g'ri chiqib qoqiladi.",
    },
    quiz: [
      {
        question: "Bu gul qo'ng'izining uchib ketishi ko'pchilik gul qo'ng'izlarinikidan qanday farq qiladi?",
        options: [
          "U elitrani ko'tarishni chetlab o'tadi — orqa qanotlar yon chetidagi kertiklar orqali chiqib uchib ketadi",
          "Uchishdan oldin unga biroz masofa yugurish kerak",
          "U uchishdan oldin elitrasini butunlay tashlab yuborishi kerak",
        ],
        answer: 0,
        explain: "Bu gul qo'ng'izining har bir elitrasida yelka yaqinida kertik bor, orqa qanot shu orqali chiqib, elitrani avval ko'tarmasdan qoqiladi.",
      },
      {
        question: "Bu gul qo'ng'izining tana shakli karkidon qo'ng'izinikidan qanday aniq farq qiladi?",
        options: [
          "Uning ham baland gumbazsimon orqasi bor",
          "Uning tanasi tekis, umuman gumbazsimon orqasi yo'q",
          "Unda umuman elitra yo'q",
        ],
        answer: 1,
        explain: "Uning tekis tanasi karkidon qo'ng'izining baland gumbazsimon orqasiga zid keladi; bronza-yashil elitradagi oq dog'lar yana bir dala belgisi.",
      },
    ],
    habitat: {
      title: "Daraxt sharbati va chirindi tuprog'i orasida",
      body: "Voyaga yetganlari bargli o'rmon va bog'lardagi sharbat oqayotgan daraxt yaralarida va tushgan mevalar atrofida to'planib, shakarga boy suyuqlik bilan oziqlanadi. Qurt lichinkalari esa chirindi va kompostdagi chirindi bilan oziqlanadi.",
    },
  },
  'burying-beetle': {
    lesson: [
      {
        title: "Kesilgan elitra",
        body: "Qanot qoplamalari (elitra) qorindan qisqaroq, tekis kesilgan va segmentlarni ochiq qoldiradi; ikkita to'lqinsimon to'q sariq-qizil chiziq qora elitrani kesib o'tadi — bu qo'ng'izning eng aniq dala belgisi.",
        anchor: 'elytra',
      },
      {
        title: "Hid uchun gurzisimon mo'ylovlar",
        body: "Har bir mo'ylov hid retseptorlariga to'la shishgan, gurzisimon uchi bilan tugaydi, bu qo'ng'izga chiriyotgan lashni uzoqdan sezish va ko'tarilayotgan hid izini kuzatib borish imkonini beradi.",
        anchor: 'antenna',
      },
      {
        title: "Lashni birgalikda ko'mish",
        body: "Er-xotin birgalikda ishlab, jag'lari (mandibulalari) bilan mayda lash atrofidagi tuproqni tozalab, uni to'liq ko'milib, yumaloq bolalar xonasiga aylanguncha pastga tortadi.",
        anchor: 'mandible',
      },
      {
        title: "Lichinkalarga oziq qusib berish",
        body: "Chiqqan lichinkalar lash to'pi atrofida to'planib, oziq so'raydi, ota-onalar esa oldindan hazm qilingan taomni qusib, ularni to'g'ridan-to'g'ri boqadi — hasharotlar orasida kamdan-kam uchraydigan uzoq davomli ota-onalik g'amxo'rligi.",
      },
    ],
    motion: {
      title: "Er-xotin birgalikda to'liq ko'mish",
      body: "Er-xotin lash atrofidagi chiqindilarni tozalab, ostidagi tuproqni bo'shatadi, so'ng tanalari bilan itarib, uni cho'kayotgan chuquriga tushiradi; bir kechada tana ko'milib, yumaloq bolalar xonasiga aylanadi.",
    },
    quiz: [
      {
        question: "Dafn qo'ng'izining eng o'ziga xos xulqi nima va u hasharotlar orasida keng tarqalganmi?",
        options: [
          "Ota-onalar lashni birgalikda ko'mib, lichinkalarga oziq qusib beradi — bu hasharotlar orasida kamdan-kam uchraydi",
          "Guruh bo'lib yirtqichlarga hujum qilish, keng tarqalgan ijtimoiy xulq",
          "Suvga tuxum qo'yish, ko'pchilik qo'ng'izlarda keng tarqalgan",
        ],
        answer: 0,
        explain: "Er-xotin lashni ko'mib, bolalar to'pini quradi va lichinkalarga oziq qusib beradi — bu hasharotlar orasida ancha kam uchraydigan uzoq davomli ota-onalik g'amxo'rligi.",
      },
      {
        question: "Dafn qo'ng'izining mo'ylovlaridagi gurzisimon uchning asosiy vazifasi nima?",
        options: [
          "Zaxira oziq moddalarni saqlash",
          "Hid retseptorlariga zich to'la bo'lib, uzoqdan lash hidini sezish uchun ishlatiladi",
          "Juftni topish uchun tovush tebranishlarini sezish",
        ],
        answer: 1,
        explain: "Gurzisimon uchlar hid retseptorlariga to'la bo'lib, uzoqdan lashni sezadi — oziq va uyalash joyini topishning asosiy sezgi a'zosi.",
      },
    ],
    habitat: {
      title: "O'rmon to'shamasining chiritkichisi",
      body: "O'rmon va butazorlardagi to'kilgan barglar va yumshoq tuproqda keng tarqalgan, u hid orqali qush yoki kemiruvchining mayda lashini topadi, so'ng uni o'sha joyning o'zida ko'mib, urchiydi — o'rmon parchalanishini tezlashtiruvchi chiritkichi.",
    },
  },

  'tortoise-beetle': {
    lesson: [
      {
        title: "Shaffof zirh etagi",
        body: "Qanot qoplamalari (elitra) va ko'krak qalqonchasi (pronotum) deyarli shaffof chetga kengayib, bosh va oyoqlarni ostiga yashiradi; yuqoridan qaralganda qo'ng'iz kichkina shisha gumbaz bilan qoplangandek ko'rinadi.",
        anchor: 'margin',
      },
      {
        title: "Gumbaz ostiga yashiringan bosh",
        body: "Bosh kengaygan chet ostiga tortiladi va yuqoridan deyarli ko'rinmaydi, faqat yon tomondan ko'rinadi; bu yirtqichlarga tishlab olish uchun aniq chekka qoldirmaydi.",
        anchor: 'head',
      },
      {
        title: "Markazdagi metall tovlanish",
        body: "Elitraning gumbazsimon markazi kuchli metall tovlanishni saqlaydi, quyosh nurida oltin-yashil yaltiraydi, bu mat, yarim shaffof chekka bilan keskin tafovutli — muzlagan oyna chegarasi kabi.",
        anchor: 'elytra',
      },
      {
        title: "Lichinka najas soyabonini ko'taradi",
        body: "Lichinka tashlangan po'stlog'i va najasini orqasiga to'plab, o'zi uchun panoh bo'ladigan «najas soyaboni»ni ko'taradi va yaqinlashayotgan yirtqichlarga uni tebratib, ularni haydab yuboradi.",
      },
    ],
    motion: {
      title: "Lichinka najas soyabonini ishlatadi",
      body: "Po'st tashlagandan so'ng, lichinka eski po'stlog'ini o'z najasi bilan birga orqasidagi ayrilgan tikanlar ustiga to'plab, qatlamlangan «najas soyaboni»ni hosil qiladi; yirtqich yaqinlashsa, u tanasini tebratib soyabonni silkitib, tajovuzkorni haydaydi.",
    },
    quiz: [
      {
        question: "Toshbaqa qo'ng'izining kengaygan elitra va pronotumi hosil qilgan shaffof chet nima uchun kerak?",
        options: [
          "Sof bezak, haqiqiy vazifasi yo'q",
          "Bosh va barcha oltita oyoqni kamuflyaj uchun yashiradi",
          "Uchish masofasini oshirish uchun havoda sirg'anish",
        ],
        answer: 1,
        explain: "Chet bosh va oyoqlarni to'liq yashirib, yuqoridan hasharotning konturini yo'qotadi — u sirg'anishda hech qanday rol o'ynamaydi va faqat bezak emas.",
      },
      {
        question: "Toshbaqa qo'ng'izi lichinkasining orqasidagi «najas soyaboni» qanday materialdan tashkil topgan?",
        options: [
          "Ipak bilan yopishtirilgan o'simlik chiqindilari",
          "O'zining tashlangan po'stlog'i va najasi",
          "Bargdan tishlab olingan bo'laklar",
        ],
        answer: 1,
        explain: "Lichinka tashlangan po'stlog'i va najasini orqadagi tikanlarga to'plab, soyabon shakliga keltiradi, u o'zini himoya qiladi va yirtqichlarga silkitilganda ularni haydaydi.",
      },
    ],
    habitat: {
      title: "Shirin kartoshka barglaridagi kamuflyaj aholi",
      body: "Voyaga yetgan va lichinkalari shirin kartoshka va boshqa sarpechak barglarida yil bo'yi yashab, barg to'qimasi bilan oziqlanadi va shaffof izlar qoldiradi; uning tekis, deyarli shaffof tanasi barg tomirlariga deyarli qo'shilib ketadi.",
    },
  },

  'hercules-beetle': {
    lesson: [
      {
        title: "Qisqich raqiblarni qanday bo'ysundiradi",
        body: "Uzun ko'krak shoxi va qisqaroq bosh shoxi qisqichga o'xshab yopiladi, raqibning butun tanasini ko'tarib, tanadan uloqtirib yuboradi; ko'krak shoxining ichki qirrasidagi tuklari ushlashning sirg'anib ketishiga yo'l qo'ymaydi.",
        anchor: 'thoracicHorn',
      },
      {
        title: "Bosh shoxi qanday yordam beradi",
        body: "Ko'krak shoxidan ancha qisqaroq bo'lgan bosh shoxi (sefalik shox) jangda raqibning ostki qismini pastdan tirab turadi, u bilan birga ko'tarish ushlashi uchun yagona tayanch nuqtasini hosil qiladi.",
        anchor: 'headHorn',
      },
      {
        title: "Elitra nima uchun rangini o'zgartiradi",
        body: "Elitra quruq bo'lganda sarg'ish-yashil, nam bo'lganda to'q jigarrang yoki deyarli qora rangga aylanadi, chunki g'ovaksimon qanot qoplamalari namlanganda ostidagi qora tana devorining ko'rinishiga imkon beradi.",
        anchor: 'elytra',
      },
      {
        title: "Dunyodagi eng uzun qo'ng'iz",
        body: "Ikkala shox bilan birga, erkaklari taxminan 17 santimetrga yetadi — bu ma'lum bo'lgan eng uzun qo'ng'iz tana uzunligi, Markaziy va Janubiy Amerika yomg'ir o'rmonlariga xos — garchi u ko'plab yiriqroq karkidon qo'ng'izlaridan yengilroq bo'lsa ham.",
      },
    ],
    motion: {
      title: "Qisqich va ag'darish tortishuvi",
      body: "Ikki erkak bosh shoxlarini bir-biriga bosib, bo'shliq izlaydi; biri imkoniyat topgach, ikkala shoxni yopib, raqibni ko'tarib, tanadan uloqtiradi, ko'krak shoxining ichki tuklari esa mahkam ushlab turadi.",
    },
    quiz: [
      {
        question: "Erkak Gerkules qo'ng'izlari jang qilganda, ko'krak shoxi va bosh shoxining asosiy vazifasi nima?",
        options: [
          "Raqibning elitrasini xanjar kabi teshib o'tish",
          "Qisqich kabi yopilib, raqibni ko'tarib, tanadan uloqtirib yuborish",
          "Bir-biriga ishqalanib tovush chiqarib, raqibni cho'chitish",
        ],
        answer: 1,
        explain: "Ikkala shox qisqich kabi birgalikda ishlab, raqibning butun tanasini richag kuchi bilan ko'tarib, tanadan uloqtiradi — elitrani teshish orqali emas.",
      },
      {
        question: "Gerkules qo'ng'izining elitrasi rangini o'zgartirishiga nima sabab bo'ladi?",
        options: [
          "Atrof-muhit namligi — suv yutgandan keyin rang to'qlashadi",
          "Kunduzi-kechasi harorat o'zgarishi — kunduzi ochroq, kechasi to'qroq",
          "Qancha ko'p yeganiga qarab — ko'p yesa, rang yorqinlashadi",
        ],
        answer: 0,
        explain: "G'ovaksimon elitra namlanganda ostidagi qora tana devorining ko'rinishiga imkon berib, rangni to'qlashtiradi, quriganda esa sarg'ish-yashilga qaytadi — harorat yoki ovqatga bog'liq emas.",
      },
    ],
    habitat: {
      title: "Yomg'ir o'rmoni tojining yakka aholisi",
      body: "Voyaga yetganlari sharbat oqayotgan yoki tushgan meva yaqinidagi yomg'ir o'rmoni tojida yashab, kechasi faol bo'ladi; lichinkalari esa chirindi yoki chirigan yog'ochda bir yildan ortiq kovlab yashaydi — bu hayot voyaga yetganlarnikidan deyarli ustma-ust tushmaydi.",
    },
  },

  'whirligig-beetle': {
    lesson: [
      {
        title: "Ikkiga bo'lingan murakkab ko'zlar",
        body: "Murakkab ko'zlar suv sathida yuqori va pastki juftlarga to'liq bo'linadi, yuqorisi havoni, pastkisi esa ostidagi suvni kuzatadi, ikkala tomondagi xavf va o'ljani bir vaqtda kuzatib boradi.",
        anchor: 'upperEye',
      },
      {
        title: "Suv ostidagi ikkinchi juft ko'z",
        body: "Pastki murakkab ko'zlar suv ichiga qarab, sirt ostidagi mayda baliq yoki yirtqichlarni topadi; ular yuqori juftdan mustaqil ravishda tasvir hosil qiladi, bir vaqtning o'zida ikki dunyoni ko'radi.",
        anchor: 'lowerEye',
      },
      {
        title: "Tez eshkakka aylangan o'rta oyoqlar",
        body: "O'rta va orqa oyoqlar qisqa, tekis eshkaklar bo'lib, qattiq tuklar bilan chegaralangan, juda yuqori chastotada eshkak eshadi; suzuvchi qo'ng'izning ingichka oyoqlaridan farqli, bular chuqur ta'qib emas, tez aylanishga mos.",
        anchor: 'midleg',
      },
      {
        title: "Yo'l topish uchun to'lqinlarni sezish",
        body: "Suzayotganda u mayda to'lqin halqalarini qo'zg'atadi, mo'ylov asosidagi retseptorlar esa to'siq yoki o'ljadan aks etgan to'lqinlarni o'qib, aylanish paytida to'qnashuvni oldini oluvchi sonar kabi ishlaydi.",
        anchor: 'antenna',
      },
    ],
    motion: {
      title: "Sirtda aylanish uchun sonar",
      body: "Guruhlar tinch suv yuzasida tez aylanadi, tartibsiz ko'rinsa-da, kamdan-kam to'qnashadi: oyoqlar tez eshkak kabi harakatlanadi, mo'ylov retseptorlari esa aks etgan to'lqinlarni real vaqtda o'qib, qo'shnilar va to'siqlardan chetlanadi.",
    },
    quiz: [
      {
        question: "Girdob qo'ng'izining murakkab ko'zlari yuqori va pastki juftlarga bo'linadi — bu nima uchun kerak?",
        options: [
          "Yuqori va pastki juftlar kunduzgi va tungi ko'rishni alohida boshqaradi",
          "Suv ustidagi va ostidagi faoliyatni bir vaqtda kuzatish",
          "Bir juft ko'rish uchun, ikkinchisi faqat tana haroratini boshqaradi",
        ],
        answer: 1,
        explain: "Ko'zlar suv sathida bo'linadi, yuqori juft havoni, pastki juft esa suvni kuzatadi, bu unga o'sha joyda turganda ikkala tomonni ham kuzatish imkonini beradi.",
      },
      {
        question: "Girdob qo'ng'izi guruh bo'lib aylanganda to'qnashuvlardan qanday qochadi?",
        options: [
          "Oldindan har biri o'z yo'nalishini kelishib oladi",
          "Mo'ylovlari bilan to'siq va qo'shnilardan aks etgan to'lqinlarni sezib",
          "Yuqori murakkab ko'zlarini har bir qo'shniga bir vaqtda qadab",
        ],
        answer: 1,
        explain: "U suzayotganda mayda to'lqinlar qo'zg'atadi, mo'ylov retseptorlari esa qo'shnilardan aks etgan signallarni o'qib, real vaqtda yo'nalishni tuzatadi — bu sirtqi sonar.",
      },
    ],
    habitat: {
      title: "Turg'un suvdagi jamoa",
      body: "Hovuz va ariqlarning turg'un sirtida guruh bo'lib topiladi, asosan kunduzi faol, suv to'lqinlanib qolsa yoki ifloslansa boshqa joyga ko'chadi; mayda, ammo son jihatidan ko'p bo'lib, baliq va suv qushlari uchun keng tarqalgan o'ljadir.",
    },
  },

  'ground-beetle': {
    lesson: [
      {
        title: "Elitraga o'yilgan qirralar",
        body: "Qanot qoplamalari (elitra) bo'rtib chiqqan uzunasiga qirralarga ega, ular orasida mayda chuqurchalar qatori bor, xuddi nozik o'yilgandek — bu yer qo'ng'izlarini aniqlashning eng aniq dala belgisi.",
        anchor: 'elytra',
      },
      {
        title: "Nima uchun ucha olmaydi",
        body: "Ko'pchilik yirik yer qo'ng'izlarida orqa qanotlar kichrayib, elitra o'rta chiziq bo'ylab qo'shilib ketgan, shuning uchun ular ucha olmaydi; uzun, kuchli oyoqlari esa buning o'rniga tez yugurishga imkon beradi.",
        anchor: 'leg',
      },
      {
        title: "Jag'lar o'ljani qanday bo'ysundiradi",
        body: "O'roqsimon jag'lar (mandibulalar) shilliqqurt qobig'ining og'zini yoki tirqishning tanasini ushlab, qobiq yoki terini to'g'ridan-to'g'ri tishlaydi; voyaga yetgani ham, lichinkasi ham shu tariqa faol ovlaydi.",
        anchor: 'mandible',
      },
      {
        title: "Mo'ylovlar o'ljani qanday topadi",
        body: "Asosan kechasi faol bo'lgan bu qo'ng'iz ko'rishdan ko'ra uzun, ipsimon mo'ylovlaridagi hid va tuproq tebranishiga ko'proq tayanadi, shilliqqurtning shilliq izini kuzatib, yashirin o'ljani topadi.",
        anchor: 'antenna',
      },
    ],
    motion: {
      title: "Shilliqqurtni pistirmaga olish uchun tez sprint",
      body: "O'ljani ko'rgach, qo'ng'iz uzun oyoqlari bilan tezda masofani qisqartiradi, shilliqqurt ichkariga tortilishga ulgurmasdan, uning o'roqsimon jag'lari yumshoq bosh va oyog'ini ushlab, ovqatlanish uchun sudrab ketadi.",
    },
    quiz: [
      {
        question: "Bu turni ham o'z ichiga olgan ko'pchilik yirik yer qo'ng'izlari nima uchun ucha olmaydi?",
        options: [
          "Qanotlari elitradagi tuklarga chalinib, yoyilolmaydi",
          "Orqa qanotlari kichraygan va elitra o'rta chiziq bo'ylab qo'shilib ketgan, tabiiy ravishda uchish qobiliyatini yo'qotgan",
          "Tanasi uchish mushaklari ko'tara olmaydigan darajada og'ir",
        ],
        answer: 1,
        explain: "Ularning orqa qanotlari kichraygan va elitra o'rta chiziq bo'ylab qo'shilib ketgan, shuning uchun ular uchish qobiliyatini yo'qotib, tez yugurish uchun kuchli oyoqlariga tayanadi.",
      },
      {
        question: "Bu yer qo'ng'izi shilliqqurt va tirqish kabi o'ljalar bilan asosan qanday muomala qiladi?",
        options: [
          "Oziqlanishdan oldin o'ljani tashqarida eritish uchun hazm suyuqligi ajratadi",
          "O'roqsimon jag'lari bilan o'ljaning tanasi yoki qobiq og'zini ushlab tishlaydi",
          "To'r to'qib, o'ljani chirmab, so'ng sekin ovqatlanadi",
        ],
        answer: 1,
        explain: "Uning o'roqsimon jag'lari to'g'ridan-to'g'ri o'ljaning qobiq og'zi yoki tanasini tishlaydi; voyaga yetgani ham, lichinkasi ham faol yirtqich, to'r to'quvchi emas.",
      },
    ],
    habitat: {
      title: "To'kilgan barg ostidagi tungi sayohatchi",
      body: "Kunduzi u dala va o'rmon chekkasidagi nam to'kilgan barglar, toshlar yoki tuproq yoriqlari ostida yashiradi, kechasi ovga chiqadi; shilliqqurt va tirqishga boy dalalar uning sevimli ov maydoni.",
    },
  },

  'blister-beetle': {
    lesson: [
      {
        title: "Tor bo'yindagi keng bosh",
        body: "Bosh ko'krak qalqonchasidan (pronotumdan) sezilarli darajada kengroq, ular orasida ingichka bo'yinga torayadi, pronotumning o'zi esa uzun va ingichka — bu oilaning aniq dala belgisi.",
        anchor: 'head',
      },
      {
        title: "Elitra nima uchun yumshoq osiladi",
        body: "Qanot qoplamalari (elitra) yumshoq qolib, hech qachon qattiqlashmaydi, uchlari esa qorinni to'liq yopa olmaydi — ko'pchilik qo'ng'izlarning qattiq, zich yopiladigan elitrasidan farqli.",
        anchor: 'elytra',
      },
      {
        title: "Himoya sifatida zaharli sariq suyuqlik",
        body: "Bezovta qilinganda, bu qo'ng'iz oyoq bo'g'imlaridan sariq suyuqlik tomchisini oqizadi — refleks qonash; suyuqlikda kantaridin bor, u teriga tegsa pufak hosil qiladi, bu ingliz nomining manbai.",
        anchor: 'leg',
      },
      {
        title: "Bir necha marta shaklini o'zgartiruvchi lichinka",
        body: "Lichinka bir necha keskin farqli bosqichdan o'tadi (gipermetamorfoz): faol birinchi bosqich chigirtka tuxumlarini izlab yuradi, so'ng shishgan, harakatsiz oziqlanuvchi shaklga o'tadi.",
      },
    ],
    motion: {
      title: "Cho'chitilganda refleks qonash",
      body: "Cho'chitilganda, oyoq bo'g'imlaridagi suyuqlik bosimi keskin ko'tarilib, sariq suyuqlik tomchisini chiqarib yuboradi — refleks qonash; undagi kantaridin qizarish va pufak keltirib chiqaradi, bu uning eng samarali himoyasi.",
    },
    quiz: [
      {
        question: "Bu pufak qo'ng'izining bezovta qilinganda odatiy himoya reaksiyasi qanday?",
        options: [
          "Jag'lari bilan tajovuzkorning terisini qattiq tishlash",
          "Oyoq bo'g'imlaridan kantaridinga boy sariq suyuqlik oqizish",
          "Qorin uchidan kislotali gaz purkash",
        ],
        answer: 1,
        explain: "U oyoq bo'g'imlaridan kantaridinga boy sariq suyuqlik oqizadi, bu refleks qonash bo'lib, teriga tegsa pufak hosil qiladi — tishlash yoki kislota purkash emas.",
      },
      {
        question: "Bu qo'ng'iz lichinkasining rivojlanish davomida shaklini o'zgartirishida nima o'ziga xos?",
        options: [
          "Har bir bosqich deyarli bir xil ko'rinadi, faqat kattalashadi",
          "U gipermetamorfozdan o'tadi, har bosqichda keskin farqli shakl va odatlarga ega bo'ladi",
          "Lichinka bosqichi umuman ovqatlanmaydi, sariqlik zaxirasi hisobiga yashaydi",
        ],
        answer: 1,
        explain: "U gipermetamorfozdan o'tadi: faol birinchi bosqich chigirtka tuxumlarini izlaydi, so'ng shishgan, harakatsiz oziqlanuvchi shaklga o'tadi — bu keskin o'zgarish.",
      },
    ],
    habitat: {
      title: "Dala va o'tloqning mavsumiy mehmoni",
      body: "Dala, tashlandiq yer va yo'l bo'yidagi o'tda keng tarqalgan, voyaga yetganlari dukkakli o'simlik guli va bargida to'planib, ba'zan barglarni butunlay yeb qo'yishi mumkin; uning zaharli suyuqligi teriga pufak keltirib chiqarishi mumkin, shuning uchun to'plangan holda qo'l bilan ezmaslik kerak.",
    },
  },

  'hister-beetle': {
    lesson: [
      {
        title: "To'rtburchaksimon, kesilgan elitra",
        body: "Tanasi ixcham va deyarli kvadrat shaklda, lak bilan qoplangandek yaltiraydi; qanot qoplamalari (elitra) kesilgan bo'lib, oxirgi qorin segmentini ochiq qoldiradi — ko'pchilik yumaloq, semiz qo'ng'izlardan farqli.",
        anchor: 'elytra',
      },
      {
        title: "Hammasini yig'ib o'lik taqlid qilish",
        body: "Bezovta qilinganda, bu qo'ng'iz oyoq va mo'ylovlarini ostki tomonidagi egatlarga tortib, deyarli tirik ko'rinmaydigan ixcham qora blokga aylanadi — bu yirtqichlarga tishlab olishga hech qanday bo'shliq qoldirmaydi.",
        anchor: 'tuckedLeg',
      },
      {
        title: "O'ljasi lash emas, qurtlar",
        body: "Lash va go'ng atrofida doimiy uchrasa-da, u chirigan modda bilan qiziqmaydi — uning haqiqiy o'ljasi u yerda to'plangan pashsha lichinkalari (qurtlar), bu esa uni chiritkich emas, yirtqich qiladi.",
        anchor: 'head',
      },
      {
        title: "Sud-tibbiyot ishlarida doimiy ipucha",
        body: "Parchalanish bosqichlari bo'ylab taxminan bashorat qilinadigan tartibda paydo bo'lgani sababli, bu qo'ng'iz sud-tibbiyot entomologiyasining asosiy manbai bo'lib, o'lim vaqtini taxmin qilishga yordam beradi.",
      },
    ],
    motion: {
      title: "Hammasini yig'ib o'lik taqlid qilish",
      body: "Xavf tug'ilganda, bu qo'ng'iz oyoq va mo'ylovlarini ostki egatlarga tortib, silliq, qattiq blokga aylanadi; elitrani teshib o'tolmagan yirtqichlar odatda taslim bo'lib, boshqa joyga o'tadi.",
    },
    quiz: [
      {
        question: "Bu qo'ng'iz lash va go'ng atrofida keng tarqalgan — uning haqiqiy oziqi nima?",
        options: [
          "Parchalanayotgan lash to'qimasining o'zi",
          "Lash yoki go'ngda to'plangan pashsha lichinkalari (qurtlar)",
          "Go'ngdagi hazm bo'lmagan o'simlik tolasi",
        ],
        answer: 1,
        explain: "U chirigan go'sht yoki go'ngning o'zi bilan qiziqmaydi; uning haqiqiy o'ljasi u yerda to'plangan pashsha lichinkalari, bu esa uni chiritkich emas, yirtqich qiladi.",
      },
      {
        question: "Bu qo'ng'izning bezovta qilinganda odatiy reaksiyasi qanday?",
        options: [
          "Qanotlarini yozib, zumda uchib ketish",
          "Oyoq va mo'ylovlarini ostki egatlarga tortib, ixcham blok sifatida o'lik taqlid qilish",
          "Elitradagi bo'shliqdan tirnovchi gaz purkash",
        ],
        answer: 1,
        explain: "U oyoq va mo'ylovlarini ostki egatlarga tortib, harakatsiz qora blokga aylanadi — bu o'lik taqlid qilish hiylasi, uchish emas.",
      },
    ],
    habitat: {
      title: "Lash va go'ngning doimiy aholisi",
      body: "Hayvon lashlari, go'ng to'plari va chirigan o'simlik moddasida topiladi, bu joylarni hid orqali topadi; parchalanish bosqichlari o'zgargan sayin, u yerda uchraydigan qo'ng'iz turlari ham taxminan bashorat qilinadigan tartibda almashadi.",
    },
  },

  treehopper: {
    lesson: [
      {
        title: "«Dubulg'a» aslida ko'krak",
        body: "Bu jasoratli «dubulg'a» na bosh, na qanot — bu orqaga va yuqoriga cho'zilgan ko'krak qalqonchasi (pronotum); shakllari juda xilma-xil bo'lib, ko'pincha tikanga taqlid qilib yirtqichlarni chalg'itadi.",
        anchor: 'helmet',
      },
      {
        title: "Xartum sharbatni qanday tortib oladi",
        body: "Bosh ostidan ingichka sanchuvchi xartum (rostrum) chiqib, poyaning tashqi qatlamini teshib, to'g'ridan-to'g'ri sharbatni tortib oladi; shoxbargak butun umr shu tariqa oziqlanadi va o'simlik to'qimasini chaynay olmaydi.",
        anchor: 'rostrum',
      },
      {
        title: "Qo'riqchilar evaziga asal shudringi",
        body: "Ko'pchilik shoxbargaklar qorin uchidan shakarga boy asal shudringi ajratadi, chumolilar esa manbani qo'riqlab, evaziga qalqondor qo'ng'iz va parazit arilarni haydab yuboradi — hasharotlar orasida keng tarqalgan o'zaro foydali munosabat.",
        anchor: 'abdomen',
      },
      {
        title: "Cho'chitilganda tezda otilib qochish",
        body: "Odatda shoxchada qimirlamay, kamuflyajga tayanib turadi, ammo haqiqiy teginish yoki yaqin yondashuvga shoxbargak orqa oyog'ini keskin tepib, o'zini otib yuboradi, so'ng qisqa parvoz qiladi.",
        anchor: 'hindleg',
      },
    ],
    motion: {
      title: "Chumolilar rejim bo'yicha kelib «sog'adi»",
      body: "Chumolilar shoxbargak zich shoxchalarni patrul qilib, qorin uchini mo'ylovlari bilan urib, asal shudringi chiqarishga undaydi, shoxbargak esa tomchi bilan javob beradi; evaziga chumolilar butun nimfa bosqichi davomida yirtqichlarni haydab yuboradi.",
    },
    quiz: [
      {
        question: "Shoxbargakning boshi ustidagi jasoratli «dubulg'a» aslida tanasining qaysi qismi?",
        options: [
          "Kattalashgan, ixtisoslashgan bosh",
          "Pronotumning orqaga cho'zilishidan hosil bo'lgan tuzilma",
          "Yig'ilgan va yashiringan bir juft old qanot",
        ],
        answer: 1,
        explain: "Bu «dubulg'a» na bosh, na qanot, balki haddan tashqari cho'zilgan pronotum bo'lib, tikanga taqlid qilib yirtqichlarni chalg'itadi va ko'pincha boshga o'xshatib xato qilinadi.",
      },
      {
        question: "Shoxbargak va chumolilar orasidagi keng tarqalgan munosabat qanday?",
        options: [
          "Chumolilar shoxbargaklarni tabiiy dushmani sifatida ovlaydi",
          "Shoxbargak asal shudringi ajratib chumolilarni boqadi, chumolilar esa evaziga yirtqichlarni haydashga yordam beradi",
          "Ikkalasi shunchaki bir shoxchani baham ko'radi, haqiqiy o'zaro ta'sir yo'q",
        ],
        answer: 1,
        explain: "Shoxbargak chumolilar uchun asal shudringi ajratadi, chumolilar esa qalqondor qo'ng'iz va parazit arilarni haydab, qo'riqlaydi — bu ov emas, o'zaro foydali munosabat.",
      },
    ],
    habitat: {
      title: "Yumshoq shoxchalardagi niqob ustasi",
      body: "Butalar yoki yosh daraxtlarning yumshoq po'stli shoxchalarida topiladi, uning rangi va dubulg'a shakli egalik o'simligining tikanlari yoki kurtaklariga mos kelib, qimirlamay turganda deyarli to'liq singib ketadi.",
    },
  },

  'ichneumon-wasp': {
    lesson: [
      {
        title: "Haddan tashqari uzun tuxum qo'yish nayi",
        body: "Urg'ochining tuxum qo'yish nayi (ovipozitor) tana uzunligidan bir necha barobar uzun bo'lib, tola kabi ingichka, ammo mustahkam, markaziy tuxum naychasi va uni o'rab turgan ikkita qobiqdan tashkil topgan — tanaga egilib kirishga yetarli darajada moslashuvchan.",
        anchor: 'ovipositor',
      },
      {
        title: "Mo'ylovlar aks sadoni qanday «eshitadi»",
        body: "Urg'ochi mo'ylov uchlari bilan po'stloq yuzasini uradi, qaytgan tebranishga qarab ichkarida tunnel va lichinka bor-yo'qligini baholaydi, egani hech qachon ko'rmasdan aniq topadi.",
        anchor: 'antenna',
      },
      {
        title: "Ingichka bel uzun nayni mustahkamlaydi",
        body: "Ko'krak va qorin orasidagi tor bel keng yoy bo'ylab egiladi, bu esa tananing tik holatda egilib, uzun ovipozitorni aniq nishonga olishiga imkon beradi — busiz u o'zidan bir necha barobar katta nayni boshqara olmasdi.",
        anchor: 'waist',
      },
      {
        title: "Aslida u nishlamaydi",
        body: "Arining diqqatga sazovor uzun ipi ko'pincha ulkan nish deb noto'g'ri o'ylanadi, ammo bu aslida daraxt tanasidagi eganing chuqurligiga tuxum qo'yish uchun ovipozitor; ari umuman nishlay olmaydi.",
      },
    ],
    motion: {
      title: "Tuxum qo'yish uchun yog'ochni teshish",
      body: "Eganing joyini aniqlagach, urg'ochi ovipozitorini po'stloqqa tirab, biroz aylantirib, tana og'irligi bilan bosib, bir necha santimetrli yog'ochni teshib o'tadi, so'ng tuxumni ega lichinkasi ustiga joylashtiradi.",
    },
    quiz: [
      {
        question: "Qadamchi arining diqqatga sazovor uzun «ipi» ko'pincha ulkan nish deb noto'g'ri o'ylanadi — u aslida nima?",
        options: [
          "Yirtqichlarga hujum qilish uchun cho'zilgan nish",
          "Daraxt tanasidagi eganing chuqurligiga tuxum qo'yish uchun ovipozitor",
          "Hid va tebranishni sezish uchun cho'zilgan mo'ylov",
        ],
        answer: 1,
        explain: "Bu ip — markaziy tuxum naychasi va ikkita qobiqdan tashkil topgan ovipozitor bo'lib, daraxt tanasidagi eganing chuqurligiga tuxum qo'yish uchun ishlatiladi; arining nishi yo'q.",
      },
      {
        question: "Qadamchi ari daraxt tanasi ichida yashiringan eganini qanday topadi?",
        options: [
          "Mo'ylovlari bilan po'stloqni urib, qaytgan tebranishlarni o'qib",
          "Faqat ovipozitor bilan butun tanani qayta-qayta sanchib",
          "Murakkab ko'zlari bilan po'stloq ichini ko'rib",
        ],
        answer: 0,
        explain: "Urg'ochi mo'ylovlari bilan po'stloqni uradi, qaytgan tebranishlarga qarab ichkarida tunnel va lichinka bor-yo'qligini baholaydi — eganini ko'rmasdan topadi.",
      },
    ],
    habitat: {
      title: "Eski daraxt tanalaridagi ega zaxirasi",
      body: "Yog'ochkovlovchi lichinkalarni boqadigan qarigan bargli daraxt tanalari atrofida topiladi, urg'ochi tebranish signallarini o'qish uchun po'stloqni skanerlab, tuxum qo'yish joyini belgilaydi; bir xil o'lik tana ko'pincha bir nechta ari jalb qiladi.",
    },
  },

  dobsonfly: {
    lesson: [
      {
        title: "Uzun jag'lar aslida nima uchun",
        body: "Erkak boshining har ikki yonida ingichka, o'roqsimon jag' (mandibula) o'stiradi, tinch holatda uzoqqa kesishib turadi; asosan namoyish va juft uchun tortishuvda ushlash uchun ishlatiladi, haqiqiy tishlash kuchi ancha zaif.",
        anchor: 'mandible',
      },
      {
        title: "Urg'ochining jag'lari ko'proq narsa qiladi",
        body: "Urg'ochining jag'lari erkaknikidan qisqaroq va kam ko'zga tashlanadi, ammo kuchliroq tishlaydi; erkakning uzun jufti ko'proq ko'z-ko'z qilish vositasi, urg'ochining oddiyroq jag'lari esa haqiqiy himoya yoki ov bilan shug'ullanadi.",
        anchor: 'mandible',
      },
      {
        title: "Lichinka suv sifati qorovuli sifatida",
        body: "«Qum emaklovchisi» deb ataladigan lichinka soy tubidagi toshlar orasida yashab, mayda suv hayvonlarini ovlaydi va faqat toza, kislorodga boy soylarda omon qoladi — uning mavjudligi ifloslanmagan suvdan darak beradi.",
      },
      {
        title: "Murakkab ko'zlar boshqalarni qanday topadi",
        body: "Voyaga yetganning murakkab ko'zlari yaxshi rivojlangan, kechasi boshqalarni va juftni topishning asosiy vositasi; voyaga yetganlari deyarli ovqatlanmasdan qisqa yashagani sababli, ko'zlar va jag'lar oziq izlashga emas, sevgi-mehrga xizmat qiladi.",
        anchor: 'eye',
      },
    ],
    motion: {
      title: "Jag'larni tutashtirib sevgi-mehr izhori",
      body: "Sevgi-mehr izhor qiluvchi erkak o'roqsimon jag'larini urg'ochining qanot asosi yoki ko'kragiga ilib, kesishtiradi va o'raydi, ammo kamdan-kam qattiq tishlaydi — ushlashni noto'g'ri hisoblash niyat qilingan sherigini jarohatlashi mumkin.",
    },
    quiz: [
      {
        question: "Erkak dobsonpashshasining haddan tashqari uzun jag'lari haqida qaysi fikr to'g'ri?",
        options: [
          "Ular juda kuchli tishlaydi va uning asosiy ov quroli",
          "Ular asosan sevgi-mehr namoyishi va ushlash uchun ishlatiladi, haqiqiy tishlash kuchi ancha zaif",
          "Ular faqat lichinka bosqichida bo'lib, voyaga yetganda tashlanadi",
        ],
        answer: 1,
        explain: "Erkakning uzun jag'lari qo'rqinchli ko'rinsa-da, ancha zaif tishlaydi, asosan sevgi-mehr namoyishi uchun xizmat qiladi; urg'ochining qisqa jag'lari esa aslida kuchliroq tishlaydi.",
      },
      {
        question: "«Qum emaklovchisi» deb ataladigan dobsonpashsha lichinkasi ko'pincha nimani baholash uchun ishlatiladi?",
        options: [
          "Yaqin atrofdagi o'rmonning daraxt turlari tarkibi",
          "U yashayotgan soyning toza va erigan kislorodga boyligi",
          "Mahalliy hududning mavsumiy harorat oralig'i",
        ],
        answer: 1,
        explain: "Lichinka faqat toza, kislorodga boy soylarda omon qoladi va ifloslanishga sezgir, shuning uchun uni topish nisbatan toza suv qismini bildiradi.",
      },
    ],
    habitat: {
      title: "Soy tubidagi toshlar orasidagi yoshlik",
      body: "Lichinkasi tog' soyi tubidagi toshlar orasida yashab, kechasi boshqa umurtqasizlarni ovlaydi, tez oquvchi, kislorodga boy suvga muhtoj; qisqa umr ko'radigan voyaga yetgani esa suvni tark etib, soy bo'yidagi o'rmonzorga o'tadi.",
    },
  },
  'goliath-beetle': {
    lesson: [
      {
        title: "Og'ir vazn tanasi",
        body: "Erkaklari 11 sm uzunlikka yetishi mumkin, eng og'irlari esa 80 grammdan oshadi, bu uni dunyodagi eng og'ir hasharotlardan biriga aylantiradi; lichinkasi (qurti) hatto voyaga yetganidan ham og'irroq bo'lishi mumkin — hasharotlar dunyosining haqiqiy og'ir vazndagi vakili.",
        anchor: 'elytra',
      },
      {
        title: "Naqshdagi kamuflyaj",
        body: "Qanot qoplamalari (elitra) va orqa plastinka (pronotum) po'stloqdagi lishaynikiga o'xshash baxmalsimon, dog'li naqsh bilan qoplangan; shoxda tinch turganda bu tananing konturini buzib, yirtqichlarga topishni qiyinlashtiradi.",
        anchor: 'elytra',
      },
      {
        title: "Boshdagi ayrilgan shox",
        body: "Erkaklari qarindosh karkidon qo'ng'izlariga o'xshab, ayrilgan, Y-shaklidagi bosh shoxi (sefalik shox) o'stiradi: oziqqa boy sharbat yaralari kam bo'lgani sababli, erkaklar oziqlanish joyidan raqiblarini surib chiqarish uchun shoxlarini tutashtiradi.",
        anchor: 'headHorn',
      },
      {
        title: "Lichinkaning yashirin kurashi",
        body: "Lichinka chirindi va chirigan yog'och chiqindilarida yashaydi, ammo ko'pchilik skarabey qurtlaridan ancha ko'proq protein talab qiladi; yetarli bo'lmasa, o'sish to'xtaydi yoki lichinka o'ladi — bu asirlikda boqishni ayniqsa qiyinlashtiradi.",
      },
    ],
    motion: {
      title: "Og'ir, baribir ucha oladi",
      body: "U og'irligi bo'yicha eng og'ir qo'ng'izlar qatorida, ammo har bir elitraning yelkasidagi yon kertik pardasimon orqa qanotning elitrani ko'tarmasdan yoyilib qoqilishiga imkon beradi — uchib ketishi tanasining hajmiga qaraganda ancha tezroq.",
    },
    quiz: [
      {
        question: "Goliaf qo'ng'izining lichinkasini asirlikda boqishda muammolar ko'pincha qayerdan kelib chiqadi?",
        options: [
          "Namlik juda past bo'lib, lichinka suvsizlanadi",
          "Uning protein ehtiyoji ko'pchilik skarabey qurtlarinikidan ancha yuqori, shuning uchun yetarli oziqlantirilmasa, u osongina to'xtab qoladi",
          "Lichinka yorug'likka sezgir bo'lib, uni to'liq qorong'ilikda saqlash kerak",
        ],
        answer: 1,
        explain: "Lichinkaning protein ehtiyoji ko'pchilik skarabey qurtlarinikidan ancha yuqori; yetarli bo'lmasa, o'sish to'xtaydi yoki u o'ladi, bu esa asirlikda boqishni ayniqsa qiyinlashtiradi.",
      },
      {
        question: "Voyaga yetgan Goliaf qo'ng'izi asosan nima bilan oziqlanadi?",
        options: [
          "Protein uchun boshqa hasharotlarni ovlaydi",
          "Daraxt sharbati va ortiqcha pishgan mevani yalaydi",
          "Faqat o'simlik ildizlari bilan oziqlanadi",
        ],
        answer: 1,
        explain: "Voyaga yetgani hasharot ovlash o'rniga sharbat va mevadan shakar oladi; faqat lichinka yuqori proteinli oziqqa muhtoj, shuning uchun ikki bosqich butunlay boshqacha oziqlanadi.",
      },
    ],
    habitat: {
      title: "Yomg'ir o'rmoni toji lageri",
      body: "Ekvatorial Afrikaning yomg'ir o'rmonlarida topiladi, voyaga yetganlari baland daraxtlardagi sharbat yaralari va tushgan mevalar atrofida to'planadi, yomg'irli mavsum isishi bilan ayniqsa faollashadi; ochiqlik chetidagi eski, sharbat oqayotgan tana kuzatish uchun eng yaxshi belgi.",
    },
  },

  'bombardier-beetle': {
    lesson: [
      {
        title: "To'q sariq va qora",
        body: "Bosh va orqa plastinka (pronotum) to'q sariq-qizil, qanot qoplamalari (elitra) esa qorong'i; ingichka va tez yuguruvchi, yer qo'ng'izlari orasidagi eng mashhur kimyoviy qurol mutaxassisi, xavf tug'ilganda zumda zarba beradi.",
        anchor: 'elytra',
      },
      {
        title: "Ikkita reaksiya kamerasi",
        body: "Qorin uchida ikkita mayda kamera yashiringan: tashqisida vodorod peroksid va gidroxinon, ichkisida esa katalitik fermentlar qoplangan; xavf tug'ilguncha ular alohida-alohida muhrlangan, mushak ularni aralashtirganda reaksiya boshlanadi.",
        anchor: 'sprayTip',
      },
      {
        title: "Nishonga oladigan naycha",
        body: "Purkash teshigi qorinning oxirgi segmentida joylashgan va deyarli har qanday yo'nalishga burilishi mumkin; yirtqich oyoqdan yoki tanadan tishlab kirishidan qat'i nazar, u naychani to'g'ridan-to'g'ri o'sha tomonga burib otishi mumkin.",
        anchor: 'sprayTip',
      },
      {
        title: "Tungi ovchi",
        body: "Ko'pchilik yer qo'ng'izlari (Carabidae) kechasi mayda umurtqasizlarni ovlaydi, bombardimonchi qo'ng'iz ham bundan mustasno emas; uning kuchli kimyoviy quroli tufayli yaqin masofadagi pistirmadan qo'rqishga deyarli o'rin qolmaydi.",
      },
    ],
    motion: {
      title: "Portlovchi zarba",
      body: "Saqlangan peroksid va gidroxinon reaksiya kamerasiga yuborilib, fermentlar taxminan 100°C li benzoxinon bug'ining zumdagi portlashini keltirib chiqaradi, u uzluksiz oqim emas, tez impulslar bilan otiladi va aylanuvchi naycha orqali nishonga olinadi.",
    },
    quiz: [
      {
        question: "Bombardimonchi qo'ng'iz o'zini kuydirmasdan qanday qilib zumda qaynoq gaz otishi mumkin?",
        options: [
          "Tana yuzasi issiqlikka chidamli mum qatlami bilan qoplangan",
          "Ikkita kimyoviy modda alohida saqlanadi va faqat hujum qilinganda aralashtirilib katalizlanadi",
          "U avval qorinni shilliq bilan qoplab, so'ng purkaydi",
        ],
        answer: 1,
        explain: "Kimyoviy moddalar xavf tug'ilguncha alohida kameralarda saqlanadi, fermentlar ular orasida zumdagi reaksiyani katalizlaydi, shuning uchun qo'ng'izning o'zi zarar ko'rmaydi.",
      },
      {
        question: "Bombardimonchi qo'ng'izning qaynoq gazi aslida qanday chiqariladi?",
        options: [
          "Shlangdan suv kabi uzluksiz oqim sifatida",
          "Uzluksiz oqim emas, juda tez impulslar shaklida",
          "Faqat bir marta, butun zaxirasini sarflab, keyin faqat blefga tayanadi",
        ],
        answer: 1,
        explain: "Yuqori tezlikdagi suratga olish soniyasiga yuzlab impulslarni ko'rsatadi, bitta uzluksiz oqim emas; impulslash qaynoq gazning tana ichida qolib ketishining ham oldini oladi.",
      },
    ],
    habitat: {
      title: "To'kilgan barglar ostidagi baza",
      body: "Kunduzi u to'kilgan barglar, toshlar yoki chirigan yog'och ostidagi nam joylarda yashiradi, kechasi oziq izlab chiqadi; yozgi yomg'irdan keyin, barglarni yoki toshni ag'darsangiz, u ko'pincha otilib qochadi yoki himoya tutunini purkaydi.",
    },
  },

  'darkling-beetle': {
    lesson: [
      {
        title: "Yumaloq, gumbazsimon qobiq",
        body: "Zim-ziyo qora, orqasi ag'darilgan kosaga o'xshab baland gumbazlangan, qanot qoplamalarida (elitrasida) ko'pincha mayda do'mboqlar yoki qirralar bor — cho'l qorong'ilik qo'ng'izlari (Tenebrionidae) oilasining bақuvvat tanali a'zosi.",
        anchor: 'pronotum',
      },
      {
        title: "Qo'shilib bekilgan elitra",
        body: "Ikkala elitra o'rta chiziq bo'ylab qattiq qo'shilib, yagona qattiq qobiqqa aylanadi, ostidagi orqa qanotlar esa so'lib qolgan — bu uning hech qachon ucha olmasligini va qumda oltita oyog'i bilan sekin yurishga majbur bo'lishini bildiradi.",
        anchor: 'fusedElytra',
      },
      {
        title: "Qobiq ostidagi havo cho'ntagi",
        body: "Qo'shilgan elitra va orqasi orasida muhrlangan havo qatlami bor, xuddi zich kamzul kabi — bu cho'lning haddan tashqari kunduzi-kechasi harorat farqidan himoya qiladi va quruq havoga namlik yo'qotilishini kamaytiradi.",
        anchor: 'abdomen',
      },
      {
        title: "Kechasi faol, kunduzi yashirin",
        body: "Kunduzi cho'l sathi harorati juda yuqori bo'ladi, shuning uchun u bo'sh qumga ko'milib yoki toshlar soyasida yashiradi; faqat qorong'i tusha boshlaganda quruq o'simlik chiqindilari va boshqa organik modda bilan oziqlanish uchun chiqadi.",
      },
    ],
    motion: {
      title: "Salqinlash uchun uzun oyoqlar ustida yurish",
      body: "Peshinda, cho'l qumi juda qiziydi, shuning uchun u tanasini oltita ingichka oyog'i ustiga baland ko'tarib, kuygan yuza bilan to'g'ridan-to'g'ri aloqani kamaytiradi; bu tayoq ustidagi holat yerdan ko'tarilgan issiqlikni sezilarli darajada kamaytiradi.",
    },
    quiz: [
      {
        question: "Gansu qorong'ilik qo'ng'izining elitrasi orqasi bo'ylab to'liq qo'shilib ketgani nimani bildiradi?",
        options: [
          "U butun umri davomida uchish qobiliyatini yo'qotgan",
          "Uning elitrasi aslida qanotlardan qattiqroq va og'irroq",
          "U faqat lichinka bosqichida qisqa vaqt ucha oladi",
        ],
        answer: 0,
        explain: "Elitra qo'shilib, orqa qanotlar kichraygach, bu o'zgarish doimiy bo'lib qoladi; voyaga yetgandan boshlab, bu qo'ng'iz umrbod yerga bog'lanib, piyoda harakatlanadi va oziq izlaydi.",
      },
      {
        question: "Gansu qorong'ilik qo'ng'izining elitrasi ostidagi muhrlangan havo qatlamining asosiy vazifasi nima?",
        options: [
          "Kunduzi-kechasi harorat farqini yumshatish va suv yo'qotilishini kamaytirish — namlikni saqlashning cho'lga moslashuvi",
          "Ertalabki tumandan kondensatsiyalangan shudringni ichish uchun to'plash",
          "Havo saqlab, qumga qisqa vaqt ko'mila olishi va nafas ola olishi uchun",
        ],
        answer: 0,
        explain: "Bu havo qatlami harorat farqini yumshatadi va suv yo'qotilishini kamaytiradi — bu cho'lga moslashuv; tumandan suv yig'ish esa boshqa bir Namib qo'ng'izining hiylasi.",
      },
    ],
    habitat: {
      title: "Gobi qumlari qa'rida",
      body: "Shimoli-g'arbiy Xitoyning Gansu viloyatidagi gobi cho'l relefida topiladi, kunduzi soyali qum tepaliklari yoki siyrak butalar ostida ko'milib yotadi; harorat mo''tadil bo'lgan tong yoki shom uni qum bo'ylab emaklab yurganini ko'rishning eng oson vaqti.",
    },
  },

  'net-winged-beetle': {
    lesson: [
      {
        title: "Yorqin qizil elitra",
        body: "Butun tana odatda yorqin qizil yoki to'q sariq-qizil, tekis, yumshoq qanot qoplamalari (elitra) esa bo'rtib chiqqan uzunasiga qirralari o'zaro kesishib, to'rsimon tekstura hosil qiladi — bu tor qanotli qo'ng'iz nomining manbai.",
        anchor: 'elytra',
      },
      {
        title: "Yumshoq, qattiq emas elitra",
        body: "Ko'pchilik qo'ng'izlarning qattiq qanot qoplamalaridan farqli, bu turning elitrasi moslashuvchan, deyarli charmsimon — uni ohista qisib ko'rsangiz egiluvchanligini his qilasiz, bu uni yulduzcha va qalqondor qo'ng'izlardan ajratishning qulay usuli.",
        anchor: 'ridge',
      },
      {
        title: "Ogohlantirish sifatida qizil rang",
        body: "Yorqin qizil rang shunchaki ko'rinish uchun emas — bu aniq ogohlantiruvchi rang (aposematizm): tanasida yirtqichlarga yoqmaydigan kimyoviy moddalar bor, bir marta cho'qigan qush buni odatda eslab qolib, keyin undan qochadi.",
        anchor: 'pronotum',
      },
      {
        title: "U aslida yaltiramaydi",
        body: "Tor qanotli qo'ng'izlar ko'pincha nomi yoki ko'rinishi bo'yicha yulduzchalar bilan adashtiriladi, ammo ular yaltirolmaydi; haqiqiy yorug'lik chiqaruvchi yulduzchalar Lampyridae oilasiga mansub bo'lib, ular boshqa oila va boshqa odatlarga ega.",
      },
    ],
    motion: {
      title: "Taqlidchilik uchun namuna",
      body: "Qo'ng'izning o'zi unchalik shafqatsiz emas — g'ayrioddiy narsa uning rangi qanchalik keng ko'chirilishida: ko'plab zararsiz hasharotlar deyarli bir xil qizil-qora naqshni rivojlantiradi, haqiqiy tur bilan uchrashib undan qochishni o'rgangan yirtqichlar taqlidchilarni ham chetlab o'tadi.",
    },
    quiz: [
      {
        question: "Tor qanotli qo'ng'iz butunlay yorqin qizil rangda — bu rang asosan nima uchun kerak?",
        options: [
          "Gullar orasida yashirinishga yordam berish",
          "Yirtqichlarni uning ta'mi yomon va himoya kimyoviy moddalari borligi haqida ogohlantirish",
          "Sevgi-mehr namoyishi, yirtqichlarni ogohlantirishga aloqasi yo'q",
        ],
        answer: 1,
        explain: "Uning qizil rangi tanadagi yoqimsiz kimyoviy moddalarga bog'liq klassik ogohlantiruvchi rang; bir marta yomon ta'mni tatib ko'rgan yirtqichlar keyin bu naqshni eslab, undan qochadi.",
      },
      {
        question: "Tor qanotli qo'ng'iz haqida qaysi fikr to'g'ri?",
        options: [
          "Yulduzcha kabi, uning qorni kechasi yaltiraydi",
          "U yaltiramaydi, ammo zararsiz hasharotlar ko'pincha yirtqichlarni aldash uchun uning rangini taqlid qiladi",
          "U kechasi juft topish uchun yaltiroq signallardan foydalanadi",
        ],
        answer: 1,
        explain: "Tor qanotli qo'ng'izlar yaltirolmaydi, garchi yulduzchalar bilan adashtirilsa-da; uning naqshi ko'plab zararsiz hasharotlar xavfsizlik uchun taqlid qiladigan ogohlantiruvchi namunadir.",
      },
    ],
    habitat: {
      title: "Bargli o'rmon chekkalari bo'ylab",
      body: "Voyaga yetganlari bargli o'rmon chekkalarida, butalarda yoki gullar orasida yashab, kunduzi faol bo'ladi va yashirinishdan ko'ra jasoratli rangga tayanadi; lichinkalari esa chirigan yog'och va to'kilgan barglar ostida yashirinib, chirindi bilan oziqlanadi va kamdan-kam ko'rinadi.",
    },
  },

  'leaf-beetle': {
    lesson: [
      {
        title: "Sariq fonda qora chiziqlar",
        body: "Tuxumsimon va tekislangan, asosiy rangi sariq-yashil, qanot qoplamalarida (elitrasida) jasoratli qora chiziqlar, orqa plastinkada (pronotumda) esa bir necha dog' bor — qorayog'och barglarida eng ko'p uchraydigan sariq-qora qo'ng'iz.",
        anchor: 'elytra',
      },
      {
        title: "Mo'ylovlar egalik daraxtini qanday topadi",
        body: "Ipsimon mo'ylovlar qorayog'och barglari chiqargan hid molekulalarini yuqori sezgirlik bilan aniqlaydi; voyaga yetganlari shu hid izidan yaqin atrofdagi qorayog'ochlarga to'g'ridan-to'g'ri boradi va boshqa daraxt turlarida kamdan-kam qoladi.",
        anchor: 'antenna',
      },
      {
        title: "Voyaga yetganlari barglarni teshib kemiradi",
        body: "Voyaga yetganning jag'lari (mandibulalari) kuchli kemiradi, bargni tekis, yumaloq teshiklar bilan to'liq teshadi; kuchli zararlanishda butun qorayog'och teshik-teshik bo'lib qolishi mumkin — bu daraxtning asosiy barg yeyuvchi zararkunandalaridan biri.",
        anchor: 'head',
      },
      {
        title: "Lichinkalari bargni skeletlantiradi",
        body: "Lichinkalarning og'iz a'zolari kuchsizroq bo'lib, faqat bargning ostki yumshoq to'qimasini qirib oladi, to'rsimon tomirlarni qoldiradi — yeyilgan barg gazlamaga o'xshab yupqalashadi; yetuk lichinkalar guruh bo'lib tana asosiga emaklab, g'umbaklanadi.",
      },
    ],
    motion: {
      title: "Tana bo'ylab ommaviy yurish",
      body: "Yetuk lichinkalar barg to'qimasini yeb bo'lgach, o'sha joyning o'zida g'umbaklanmaydi — ular guruh bo'lib tana bo'ylab pastga emaklab, po'stloq yoriqlari yoki tana asosidagi bo'sh tuproqqa to'planadi, tepadagi yirtqichlardan uzoqlashadi.",
    },
    quiz: [
      {
        question: "Qorayog'och barg qo'ng'izining voyaga yetgani va lichinkasi qorayog'och barglarini yeyishda qanday farq qiladi?",
        options: [
          "Voyaga yetganlari bargni to'liq teshib, teshik qoldiradi; lichinkalari faqat ostki qismini qirib, to'rsimon tomir qoldiradi",
          "Ular bir xil oziqlanadi, faqat lichinkalar ko'proq yeydi",
          "Voyaga yetganlari faqat sharbat ichadi va bargni hech qachon tishlamaydi; faqat lichinkalari to'qimani yeydi",
        ],
        answer: 0,
        explain: "Voyaga yetganlari kuchli jag'lari bilan bargni to'liq teshadi; lichinkalari esa faqat ostki qismini qirib, to'rsimon tomirlarni qoldiradi — ikki oziqlanish uslubini oson farqlash mumkin.",
      },
      {
        question: "Yetuk qorayog'och barg qo'ng'izi lichinkasi g'umbaklashdan oldin odatda nima qiladi?",
        options: [
          "O'zi oziqlangan bargning ostki tomonida g'umbaklanadi",
          "Guruh bo'lib tana bo'ylab pastga emaklab, tana asosida birgalikda g'umbaklanadi",
          "Yolg'iz g'umbaklanish uchun tuproq chuqurligiga kirib ketadi",
        ],
        answer: 1,
        explain: "Barglarni yeb bo'lgach, yetuk lichinkalar guruh bo'lib tana bo'ylab pastga emaklab, po'stloq yoriqlari yoki tana asosidagi bo'sh tuproqda birgalikda g'umbaklanadi.",
      },
    ],
    habitat: {
      title: "Qorayog'och o'sadigan har qanday joyda",
      body: "Qorayog'och ekilgan har qanday joyda — ko'cha daraxtlari, parklar va ko'chatzorlarda — paydo bo'ladi; soni odatda bahor oxirida yangi barglar yozilishi bilan ortadi, bargni ag'darsangiz ko'pincha ostida to'plangan lichinkalarni topasiz.",
    },
  },

  damselfly: {
    lesson: [
      {
        title: "Ip kabi ingichka qorin",
        body: "Qorin juda uzun va ingichka, deyarli ipdek nozik — bu uni bақuvvat ninachidan ajratishning eng oson usuli; shoxchada o'tirganda, uning ingichka qorni shabadada mayin tebranadi.",
        anchor: 'abdomen',
      },
      {
        title: "Tinch holatda yig'ilgan qanotlar",
        body: "Tinch holatda, ninachaninacha to'rtta qanotini ham birgalikda orqasi ustiga tik yig'adi; o'tirgan ninachi esa aksincha, ikkala qanot juftini ham yon tomonga tekis yoyadi — dalada ikkalasini farqlashning eng tezkor usuli.",
        anchor: 'wing',
      },
      {
        title: "Bir-biridan uzoq joylashgan ko'zlar",
        body: "Uning ikkita murakkab ko'zi bir-biridan uzoq, aniq bo'shliq bilan joylashgan; ninachining murakkab ko'zlari esa boshning tepasida deyarli tutashadi — bu ikkalasini farqlashning yana bir ishonchli belgi.",
        anchor: 'eye',
      },
      {
        title: "Dum uchidagi jabralar",
        body: "Nimfa suv ostida yashab, qorin uchidagi uchta tekis, bargsimon jabra orqali nafas oladi, bu ninachi nimfasida yo'q; voyaga yetgani ham zaifroq uchuvchi bo'lib, ninachi kabi tez havoda muallaq turish yoki quvishi kamdan-kam.",
      },
    ],
    motion: {
      title: "Qamishlar orasida qisqa parvozlar",
      body: "Ninachaninachaning old va orqa qanotlari deyarli bir xil, uchish mushaklari esa ninachinikidan kuchsizroq, shuning uchun uzoq masofali sayohat kamdan-kam; u suv o'simliklari orasida qisqa muddat havoda muallaq turib, yaqin masofadan mayda pashshalarga zarba berishni afzal ko'radi.",
    },
    quiz: [
      {
        question: "O'tirgan holatda va uchmayotganda, ninachaninacha va ninachining qanot holati qanday keskin farq qiladi?",
        options: [
          "Ninachaninachalar to'rtta qanotini ham tik yig'adi; ninachilar ikkala juftni ham yon tomonga tekis yoyadi",
          "Ularning o'tirish holati bir xil va farqlab bo'lmaydi",
          "Ninachaninachalar qanotlarini tanaga to'liq tortib oladi",
        ],
        answer: 0,
        explain: "O'tirgan ninachaninacha qanotlarini tik yig'adi; ninachi esa ikkala juftni ham yon tomonga tekis yoyadi — dalada ikkalasini farqlashning eng tezkor usuli.",
      },
      {
        question: "Faqat murakkab ko'zlarning joylashuviga qarab, ninachaninachani ninachidan qanday farqlash mumkin?",
        options: [
          "Ninachaninachaning ko'zlari bir-biridan uzoq; ninachiniki esa deyarli tutashadi",
          "Ninachaninachada faqat bitta murakkab ko'z bor; ninachida ikkita",
          "Ularning ko'zlari bir xil masofada joylashgan",
        ],
        answer: 0,
        explain: "Ninachaninachaning ko'zlari aniq bo'shliq bilan bir-biridan uzoq; ninachiniki esa boshning tepasida deyarli tutashadi — ikkalasini farqlashning ishonchli usuli.",
      },
    ],
    habitat: {
      title: "Suv bo'yidagi o'tloq chekkalari",
      body: "Hovuz, soy va botqoqlik chetlaridagi suv o'simliklari orasida yashaydi, past uchadi yoki o't poyalariga qo'nib quyoshda isinadi; toza yozgi tonglar uning tinch o'tirib, qanotlaridagi shudringni quritishini kuzatishning eng oson vaqti.",
    },
  },

  'orchid-mantis': {
    lesson: [
      {
        title: "Gulbargga o'xshash pushti va oq",
        body: "Tanasi asosan pushti va oq, to'rtta tekislangan oyoq bo'lagi yumaloq, shaffof chetlari bilan bir qarashda orxideya gulbargiga deyarli aynan o'xshaydi — hasharotlar dunyosidagi eng yaxshi taqlidchilardan biri.",
        anchor: 'abdomen',
      },
      {
        title: "Oyoq bo'laklari gulbargga aylanadi",
        body: "O'rta va orqa oyoqlarning sonlari tekislanib, yon tomonga kengayadi, chetlari yumaloq konturga egilib, uzoqdan qaraganda to'rtta ochilgan gulbargga o'xshaydi — bu niqob old oyoqlarda yo'q.",
        anchor: 'petalLeg',
      },
      {
        title: "Old oyoqlari baribir ov qiladi",
        body: "Faqat o'rta va orqa oyoqlar gulbarg niqobini kiyadi; old juft esa duofosning ov qiluvchi shaklini (ov qiluvchi oyoqlar) saqlaydi, o'tkir tikanlar bilan qoplangan, qo'l yetadigan har qanday o'ljani kutadi.",
        anchor: 'raptorialLeg',
      },
      {
        title: "Nimfalari yanada yorqinroq ko'rinadi",
        body: "Yangi chiqqan nimfa ko'pincha voyaga yetganidan ham yorqinroq rangda bo'ladi, uning tusi har bir po'st tashlashda asta-sekin o'zgarib, u yashayotgan gullarga mos kelishda davom etadi — niqob butun umr uchun qotib qolmagan.",
      },
    ],
    motion: {
      title: "Changlatuvchilarni jalb qilish",
      body: "Ko'pchilik taqlidchilar yirtqichdan yashiringan bo'lsa, orxideya duofosi teskarisini qiladi — u shoxda o'zi soxta gul bo'lib turib, asalari va kapalaklarni jalb qiladi. Tadqiqotlar u atrofdagi haqiqiy gullardan ham ko'proq changlatuvchi jalb qilishini ko'rsatadi.",
    },
    quiz: [
      {
        question: "Orxideya duofosining tanasining qaysi qismi gulbargga o'xshab niqoblangan?",
        options: [
          "Uchala juft oyog'i ham gulbarg shaklida",
          "O'rta va orqa oyoqlarning sonlari; old oyoqlari ov qiluvchi shaklda qoladi",
          "Faqat qanot chetlari gulbarg shaklini taqlid qiladi",
        ],
        answer: 1,
        explain: "Niqob faqat o'rta va orqa oyoq sonlarida, ular gulbargga tekislangan; old oyoqlari esa haqiqiy ov qiluvchi oyoq bo'lib qoladi, zarba berishga tayyor turadi.",
      },
      {
        question: "Orxideya duofosining taqlidchiligi haqida qaysi fikr to'g'ri?",
        options: [
          "U haqiqiy gullar orqasida yashirinib, oziqlanayotgan asalari va kapalaklarga pistirma quradi",
          "U o'zi gulga taqlid qilib, changlatuvchilarni faol jalb qiladi; tajribalar u haqiqiy gullardan ham ko'proq jalb qilishini ko'rsatadi",
          "U gul hidiga taqlid qilib, shakl emas, hid orqali o'ljani jalb qiladi",
        ],
        answer: 1,
        explain: "U gullar ichida yashirinmaydi — uning o'z tanasi soxta gul bo'lib, changlatuvchilarni yaqinroq jalb qiladi; o'lchovlar u haqiqiy gullardan ham ko'proq jalb qilishini ko'rsatadi.",
      },
    ],
    habitat: {
      title: "Tropik yomg'ir o'rmoni gullari orasida",
      body: "Janubi-Sharqiy Osiyo yomg'ir o'rmonlariga xos, gullaydigan buta yoki lianalar gul to'plamlari orasida qimirlamay turib, asalari va kapalaklar yaqinlashishini kutadi; uni topish — hech qachon qimirlamaydigan bitta gulni topish demakdir.",
    },
  },

  'dead-leaf-butterfly': {
    lesson: [
      {
        title: "Barg uchiga o'xshash qanot uchi",
        body: "Qanotlar birgalikda tik yopilganda, old qanotning tashqi burchagi aniq bargning uchiga mos keladigan o'tkir nuqtaga cho'ziladi, bu esa butun konturni zumda barg shakliga aylantiradi.",
        anchor: 'forewing',
      },
      {
        title: "Bandni o'ynaydigan dumcha",
        body: "Orqa qanot uchida ingichka dumchaga torayadi, barg shaklining qarama-qarshi uchiga tushib, aynan barg bandiga o'xshaydi — bu mayda tafsilot ham e'tibordan chetda qolmagan.",
        anchor: 'tail',
      },
      {
        title: "Markaziy tomir va mog'or dog'lari",
        body: "Qanotning ostki tomoni quruq sariq yoki jigarrang, butun uzunligi bo'ylab barg markaziy tomiriga o'xshab to'q chiziq o'tadi, atrofida esa turli tuslikdagi dog'lar mog'or va hasharot tishlagan izlarni taqlid qiladi.",
        anchor: 'underwing',
      },
      {
        title: "Ikkita barg ham bir xil emas",
        body: "Quruq barg naqshining chuqurligi va dog'larning joylashuvi individlar orasida farq qiladi, xuddi haqiqiy tushgan barglar kabi; bu xilma-xillik yirtqichlarga bitta qat'iy qidiruv naqshini o'rganishni qiyinlashtiradi.",
      },
    ],
    motion: {
      title: "Uchishda to'satdan rang o'zgarishi",
      body: "Qanotini ochgan zahoti, ustki tomoni yorqin ko'k va to'q sariq-qizil rangda chaqnaydi — bargga o'xshash tinch holatidan butunlay boshqa hasharotga o'xshaydi; qo'nib, qanotlarini yopgach, rang yo'qoladi, ko'pincha uni ta'qib qilgan yirtqichni chalg'itadi.",
    },
    quiz: [
      {
        question: "Quruq barg kapalagi qanotlarini tik yopganda, qaysi tomoni tashqarida ko'rinadi?",
        options: [
          "Ustki tomoni, yorqin ko'k va to'q sariq yuzasi",
          "Ostki tomoni, jigarrang, markaziy tomir chiziqlari va dog'lari bilan, quruq bargga juda o'xshash",
          "Chetki tomoni, hech qanday naqshsiz tor tirqish",
        ],
        answer: 1,
        explain: "Qanotlar yopilganda ostki tomoni ko'rinadi — jigarrang, markaziy tomir va dog'lar bilan; yorqin ko'k-to'q sariq ustki tomoni faqat uchishda qanotlar ochilganda ko'rinadi.",
      },
      {
        question: "Quruq barg kapalagi uchishda qanotlarini ochib, yorqin ustki tomonini ko'rsatganda, bu yirtqichlardan qochishga qanday yordam beradi?",
        options: [
          "Hech qanday yordam bermaydi — bu faqat sevgi-mehr namoyishi",
          "Rangning to'satdan chaqnashi ta'qib qilayotgan yirtqichni cho'chitadi, u qo'nib qanotlarini yopgan zahoti esa yana yo'qoladi",
          "Yorqin rang ultrabinafsha nurni qaytarib, yirtqichning ko'ziga zarar yetkazadi",
        ],
        answer: 1,
        explain: "Bu chaqnoq rang: uchishdagi yorqin qanotlar yirtqichlarni cho'chitadi, qo'nib qanotlarini yopgan zahoti esa yana yashiringan holatga qaytadi, ko'pincha ta'qibchini yo'qotadi.",
      },
    ],
    habitat: {
      title: "O'rmon to'shamasi barglari orasida",
      body: "Doim yashil bargli o'rmonlarning soyali pastki qavatida yashaydi, yashirinish uchun quruq shox-barglar orasiga qo'nadi; voyaga yetganlari gullarni chetlab o'tib, chirigan meva va sharbat oqayotgan tanalarni afzal ko'radi, kuz-qish faslida o'rmon yo'lkalarida tez-tez uchraydi.",
    },
  },

  'hawk-moth': {
    lesson: [
      {
        title: "Oqim shaklidagi tana",
        body: "Tanasi mustahkam va ignasimon, oldi tor, orqasi kengroq, xuddi kichkina torpeda kabi, uzun va qattiq qanotlari bilan — bu tuzilma uning tez qanot qoqishi va nektar ichish uchun havoda muallaq turishining asosi.",
        anchor: 'abdomen',
      },
      {
        title: "Kolibriga teng qanot qoqishi",
        body: "Ikki juft tor qanoti soniyasiga taxminan 70–90 marta qoqiladi, shu qadar tez harakatlanadiki, konturi eshitiladigan gulduros bilan xira tumanga aylanadi; uning havoda muallaq turib ovqatlanish holati kolibrinikiga juda o'xshaydi.",
        anchor: 'forewing',
      },
      {
        title: "Tanasidan uzunroq xartum",
        body: "Ingichka til (xartum) tinch holatda soat prujinasi kabi o'ralib turadi va faqat ovqatlanish uchun yoziladi; yozilganda u kuyaning o'z tana uzunligidan oshib ketishi mumkin, gul ichidagi chuqur yashiringan nektarga yetib boradi.",
        anchor: 'proboscis',
      },
      {
        title: "Ko'pincha boshqa qush deb adashtiriladi",
        body: "Uning havoda muallaq turish holati va tuzilishi ko'pincha odamlarni kolibri ko'rdim deb o'ylashga majbur qiladi, ammo Xitoyda kolibrilar yashamaydi — ularning oldida turgan mayda uchuvchi aslida haqiqiy kuya.",
      },
    ],
    motion: {
      title: "Kolibri uslubida bir joyda muallaq turish",
      body: "Ovqatlanayotganda u gul oldida qimirlamay osilib turadi, qanotlari mayda sakkizlik shaklini chizib, soniyasiga taxminan 70–90 marta qoqilib, barqaror ko'tarish kuchini beradi; bu uchish uslubi kolibrilarnikiga ajablanarli darajada o'xshaydi, garchi mustaqil rivojlangan bo'lsa ham.",
    },
    quiz: [
      {
        question: "Kimdir Xitoyda gulzor yonida «kolibri» ko'rganini aytadi — bu qanday izohlanishi eng ehtimoliy?",
        options: [
          "Xitoyda haqiqatan ham juda kichik kolibri populyatsiyasi bor",
          "U ko'rgan narsa nektar ichayotgan havoda muallaq turgan kolibri-kuya edi; Xitoyda kolibrilar yashamaydi",
          "Bu ko'chib o'tayotgan kolibrini tasodifan ko'rish edi",
        ],
        answer: 1,
        explain: "Xitoyda kolibrilar yashamaydi, ular faqat Amerikada uchraydi; havoda muallaq turib nektar ichuvchi bu mavjudot kolibri-kuya bo'lib, qarindosh bo'lmasa-da, kolibriga ajablanarli darajada o'xshab qolgan.",
      },
      {
        question: "Kolibri-kuya ovqatlanish uchun xartumini yozganda, uning uzunligi taxminan qancha bo'ladi?",
        options: [
          "Tanasidan ancha qisqa, atigi uning o'ndan bir qismicha",
          "O'z tana uzunligiga yaqin yoki undan uzunroq",
          "U umuman yozilmaydi va ishlatilmagan holda o'ralib qoladi",
        ],
        answer: 1,
        explain: "Xartumi tinch holatda o'ralib turadi va ovqatlanish uchun yozilib, o'z tana uzunligiga yaqin yoki undan uzunroqqa yetadi — gul ichiga chuqur kirish uchun yetarli.",
      },
    ],
    habitat: {
      title: "Gulzor orasidagi mehmon",
      body: "Bog', dala chekkasi va quyoshli yovvoyi gul maydonlarida keng uchraydi, kunduzi, ayniqsa yorqin tushdan keyin faol; gullagan sarmasaryog' yoki sinniya guruhi ko'pincha uning havoda muallaq turib nektar ichishini yaqindan kuzatish uchun yetarli.",
    },
  },

  'termite-soldier': {
    lesson: [
      {
        title: "Bosh va jag'lar undan ham kattaroq",
        body: "Uning boshi ishchi yoki yosh termitnikidan sezilarli darajada kattaroq, o'roqsimon jag'lari (mandibulalari) yuzning deyarli yarmini egallaydi; oqargan, yumshoq tanasiga qarshi, og'ir bosh bu askarni bir qarashda ajratadi.",
        anchor: 'head',
      },
      {
        title: "Murakkab ko'zlar yo'q",
        body: "Murakkab ko'zlar joylashishi kerak bo'lgan yerda hech narsa yo'q — askar aslida ko'r, oila tunnellarining zim-ziyo qorong'ilikida yashaydi, faqat mo'ylovlari orqali hid, tebranish va uyadoshlarining feromonlarini sezadi.",
        anchor: 'head',
      },
      {
        title: "Boqolmaydigan jag'lar",
        body: "Bu qo'rqinchli jag'lar faqat bostirib kirgan chumoli yoki boshqa yirtqichlarni sanchish va yirtish uchun mo'ljallangan, oziq chaynash yoki maydalash qobiliyatiga ega emas — askar ular bilan jang qiladi, ammo ular bilan yeya olmaydi.",
        anchor: 'mandible',
      },
      {
        title: "To'liq ishchilar tomonidan boqiladi",
        body: "O'zi oziqni tishlab yoki chaynay olmagani sababli, askar to'liq ishchilarning og'izdan-og'izga qusib berishiga bog'liq; ishchining g'amxo'rligisiz, hatto ro'parasidagi oziq ham askarga foyda keltirmaydi.",
      },
    ],
    motion: {
      title: "Jag'larni ochish urush degani",
      body: "Uya tunneli buzilgan zahoti, askarlar teshikka shoshilib borib, jag'larini bostirib kirgan chumoli yoki boshqa yirtqichga qadaydi; bu deyarli refleksga o'xshash tishlash ortdagi ishchilar va malikaga chekinish uchun vaqt beradi.",
    },
    quiz: [
      {
        question: "Termitlar va chumolilar tashqi ko'rinishda o'xshash, ammo taksonomik jihatdan haqiqiy munosabatlari qanday?",
        options: [
          "Termitlar aslida chumolilarning kenja oilasi, Hymenoptera turkumida",
          "Termitlar Blattodea turkumiga mansub, tarakonlarga yaqin qarindosh; chumolilar Hymenoptera turkumida — o'xshashlik konvergent evolyutsiya natijasi",
          "Ular bir xil turkum, faqat rang va tana shaklida farqlanadi",
        ],
        answer: 1,
        explain: "Termitlar (Blattodea turkumi) tarakonlarga yaqin qarindosh; chumolilar (Hymenoptera) esa asalari va arilarga yaqinroq — o'xshashlik konvergent evolyutsiya natijasi.",
      },
      {
        question: "Qora qanotli yer osti termitining askar kastasi haqida qaysi fikr to'g'ri?",
        options: [
          "Uning yaxshi rivojlangan murakkab ko'zlari va a'lo ko'rish qobiliyati bor, jangda ishchilarni ko'rish orqali boshqaradi",
          "Uning murakkab ko'zlari yo'q va u ko'r; jag'lari faqat tishlaydi, chaynamaydi, shuning uchun ishchilar tomonidan boqilishi kerak",
          "U o'z oziqini chaynay oladi, ammo oziq manbaini topish uchun ishchilarga muhtoj",
        ],
        answer: 1,
        explain: "Askar ko'r, atrofni faqat mo'ylovlari orqali sezadi; jag'lari tishlashi mumkin, ammo chaynay olmaydi, shuning uchun ishchilar qusib bergan oziq hisobiga yashaydi.",
      },
    ],
    habitat: {
      title: "Yer ostidagi tunnellar",
      body: "Qora qanotli yer osti termiti yer ostida uyalanadi, daraxt tanalari va devorlar bo'ylab loy naylarini quradi; askarlar teshik va kirish joylarini qo'riqlaydi — issiq, nam yomg'irdan keyin devor tagi yoki o'lik yog'och yaqinidagi bu loyli izlarni qidiring.",
    },
  },
  'water-scavenger': {
    lesson: [
      {
        title: "Mo'ylovlar qanday nafas oladi",
        body: "Sirtga yaqinlashganda, u boshini egib, qisqa mo'ylovlarini suv pardasidan o'tkazadi, nozik tuklar orqali havoni qorin ostidagi kumushrang qatlamga tortadi — suvni hech qachon tark etmasdan, yirtqichlarga ko'rinmasdan nafas oladi.",
        anchor: 'antenna',
      },
      {
        title: "Jag' paypaslagichlari vazifani o'z zimmasiga oladi",
        body: "Mo'ylovlar boshqa vazifaga o'tgani sababli, bir juft ingichka jag' paypaslagichi razvedka vazifasini o'z zimmasiga oladi — mo'ylovlardan uzunroq, suzayotganda tebranib, suv o'ti va chiqindini hidlaydi, bu ko'pchilik qo'ng'izlarda mo'ylovga yuklangan vazifa.",
        anchor: 'palp',
      },
      {
        title: "Ostki tomondagi kil tikan",
        body: "Ag'darib qaralsa, qorin bo'ylab bir qirra o'tadi — o'tkir kil, uchida tikan bilan tugaydi; agar baliq uni og'ziga olsa, tikan tanglayga qattiq sanchilib, baliqni ovni tupurib tashlashga majbur qiladi.",
        anchor: 'keel',
      },
      {
        title: "Faqat lichinka yirtqichga aylanadi",
        body: "Voyaga yetganlari yumshoq xulqli, suv o'ti va chirigan modda bilan oziqlanadi; lichinkasi esa aksincha, shafqatsiz ovchi bo'lib, ilgaksimon jag'lari bilan shilliqqurt va mayda suv hayvonlarini ovlaydi — bir hayot siklida deyarli qarama-qarshi ratsion.",
      },
    ],
    motion: {
      title: "Navbat bilan eshkak eshish",
      body: "Suzayotganda, uning o'rta va orqa oyoqlari yurgandek chapdan o'ngga navbat bilan eshkak eshadi, tanani mayin tebratadi; suzuvchi qo'ng'iz esa ikkala oyoqni birgalikda tepib, o'q kabi otilib ketadi — faqat eshkak uslubi ularni farqlaydi.",
    },
    quiz: [
      {
        question: "Ulkan qora suv chirituvchi qo'ng'izi va suzuvchi qo'ng'izning ikkalasi ham suv ostida yashaydi — ularning suzish uslubi qanday farq qiladi?",
        options: [
          "Suv chirituvchi qo'ng'iz oyoqlarini chapdan o'ngga navbat bilan eshadi, suzuvchi qo'ng'iz ikkalasini birgalikda tepadi",
          "Suv chirituvchi qo'ng'iz ikkala oyoqni birgalikda tepadi, suzuvchi qo'ng'iz navbat bilan eshadi",
          "Ularning suzish uslubi bir xil; faqat tana rangi farqlaydi",
        ],
        answer: 0,
        explain: "U yurgandek, oyoqlarini navbat bilan eshib, mayin tebranib suzadi; suzuvchi qo'ng'iz esa ikkalasini birgalikda tepib, bir zarbda tez otiladi.",
      },
      {
        question: "Ulkan qora suv chirituvchi qo'ng'izining qisqa, gurzisimon mo'ylovi asosan nima uchun ishlatiladi?",
        options: [
          "Ko'pchilik qo'ng'izlar kabi, hid izlash uchun",
          "Suv pardasini teshib, havoni qorin ostidagi havo qatlamiga tortish uchun",
          "Jang paytida raqiblarga zarba berish quroli sifatida",
        ],
        answer: 1,
        explain: "Uning mo'ylovlari nafas olish uchun qayta vazifalantirilgan, havoni qorin ostidagi qatlamga tortadi; hid izlash esa uzun jag' paypaslagichlariga yuklangan.",
      },
    ],
    habitat: {
      title: "Turg'un hovuz va suv o'tlari orasida",
      body: "Suv o'tiga boy hovuz, sholi maydoni va sekin ariqlar uning uyi, yozda eng band; kunduzi qorin ostida kumushrang havo qatlami bilan suv o'ti bo'ylab emaklaydi, kechasi esa yorug'likka uchadi — chiroq ostidagi katta qora qo'ng'iz ko'pincha shu tur.",
    },
  },

  'checkered-beetle': {
    lesson: [
      {
        title: "Qizil-qora ogohlantiruvchi chiziqlar",
        body: "Elitra ko'k-qora rangda, uchta jasoratli qizil chiziq bilan, gulda uzoqdan ham osongina ko'rinadi; bu baland ovozli naqsh ogohlantiruvchi rang bo'lib, qushlarga ta'mi yomonligini va tishlashdan oldin ikkilanishni bildiradi.",
        anchor: 'band',
      },
      {
        title: "Tik turgan tuklar kiyimi",
        body: "Uzun tuklar tanasi ustida tik turadi; gullar orasida chopib yurganda gulchang olib yuradi — tasodifiy changlatish. Xuddi shu tuklar teginish sezgichi vazifasini ham bajarib, orqadan kelayotgan havo harakatini seza oladi.",
        anchor: 'fuzz',
      },
      {
        title: "Gullar orasidagi ovchi",
        body: "Voyaga yetganlari soyabon shaklidagi gul to'plamlarida qolib, gulchang yeydi va o'sha gullardagi mayda qo'ng'iz va pashshalarni ushlab yeydi — har xil ovqatlanuvchi; katta murakkab ko'zlari guldagi har bir mehmonni kuzatib boradi.",
        anchor: 'eye',
      },
      {
        title: "Lichinkalari asalari uyalariga bostirib kiradi",
        body: "Urg'ochilari asalari uyalari yaqinida tuxum qo'yadi, chiqqan lichinkalar esa yakka asalarilarning uya kataklariga yashirincha kirib, asalarilarning o'z lichinka va g'umbaklari bilan oziqlanadi — voyaga yetgani asosan o'simlik bilan oziqlansa, bolasi go'shtxo'rga aylanadi.",
      },
    ],
    motion: {
      title: "Gullar orasida tez chopqillash",
      body: "U gul to'plami bo'ylab tez chopib, oyoqlari tez zarblar bilan otilib boradi, so'ng yaqin atrofga mayda pashsha yoki qo'ng'iz qo'ngan zahoti otilib chiqib, bir harakatda uni bosib qoladi — gullar panohida yashiringan chaqqon pistirmachi.",
    },
    quiz: [
      {
        question: "Xitoy shaxmat qo'ng'izining lichinkasi o'sish uchun nima bilan oziqlanadi?",
        options: [
          "Voyaga yetgani kabi, gulchang va nektar bilan",
          "Asalari uyalariga yashirincha kirib, asalari lichinkalari va g'umbaklari bilan oziqlanadi",
          "Chirigan barglar va chirigan yog'och bo'laklari bilan",
        ],
        answer: 1,
        explain: "Voyaga yetganlari gulchang yeydi va gullarda mayda hasharotlarni tutadi; lichinkalari esa asalari uyalariga bostirib kirib, ularning o'z lichinka va g'umbaklari bilan oziqlanadi — keskin ratsion o'zgarishi.",
      },
      {
        question: "Shaxmat qo'ng'izining yorqin qizil-qora chiziqli elitrasining asosiy maqsadi nima?",
        options: [
          "Yirtqichlarga ta'mi yomonligini bildiruvchi ogohlantiruvchi rang",
          "Sevgi-mehr signali — qanchalik yorqin bo'lsa, shunchalik jozibali",
          "Gulbargga taqlid qiluvchi kamuflyaj",
        ],
        answer: 0,
        explain: "Qizil-qora chiziqlar klassik ogohlantiruvchi rang bo'lib, qushlarga yomon ta'm haqida signal beradi; ko'plab yoqimsiz ta'mli hasharotlar shunga o'xshash jasoratli naqshlardan foydalanadi.",
      },
    ],
    habitat: {
      title: "Yoz boshidagi soyabon gullar",
      body: "Yoz boshidan o'rtasigacha, dala chekkalaridagi yovvoyi sabzi yoki boshqa soyabon gul to'plamlarini qidiring, bu qizil-qora qo'ng'izlar shu yerda chopqillaydi; urg'ochilari ba'zan bog' asalari qutilari yaqinida tuxum qo'yadi.",
    },
  },

  'shining-chafer': {
    lesson: [
      {
        title: "Mis-yashil rang qayerdan keladi",
        body: "Elitraning mis-yashil tovlanishi pigment emas, yorug'lik bilan interferensiyaga kiruvchi mikroskopik qatlamlardan hosil bo'lgan tuzilma rangi; uni og'dirsangiz, tus yashildan oltinga, so'ng qizilga siljiydi — rang tuzilmada, bo'yoqda emas.",
        anchor: 'elytra',
      },
      {
        title: "Yuzdagi kichik qalqon",
        body: "Boshning old qismida keng, yuqoriga qayrilgan klipeus kichik qalqon kabi turadi, ovqatlanish paytida yig'ilgan og'iz a'zolarini himoya qiladi; uning shakli gul qo'ng'izlari oilasi ichida turga qarab farq qiladi, tasniflashning muhim belgisi.",
        anchor: 'clypeus',
      },
      {
        title: "Shamsimon ochiluvchi mo'ylovlar",
        body: "Mo'ylov uchida uchta plastinka lamellali mo'ylov kabi ochilib-yopilib turadi: yig'ilganda qisqa tumshuqchaga o'xshaydi; ochilganda esa hid ushlash yuzasini ko'paytirib, qorong'ida terak va meva daraxtlarini topishga yordam beradi.",
        anchor: 'antenna',
      },
      {
        title: "Lichinkasi qurt deb ataladi",
        body: "Lichinkasi dehqonlarga tanish oq qurt bo'lib, tuproqda C harfiga o'xshab burishib, yeryong'oq va makkajo'xori ildizlarini kemiradi; voyaga yetganlari esa kechasi daraxt tojiga to'da bo'lib chiqib, barglarni yeydi — bitta hayot, ikki bosqichdagi zarar.",
      },
    ],
    motion: {
      title: "Tegilganda o'lik taqlid qilish",
      body: "Ovqatlanayotgan voyaga yetgan shoxning silkinishini sezgan zahoti, oyoqlarini yig'ib, bargdan tushib, o'tda bir muddat harakatsiz yotadi, so'ng ag'darilib emaklab yoki uchib ketadi — bu barcha skarabey qo'ng'izlariga xos tushib-qotib qolish hiylasi.",
    },
    quiz: [
      {
        question: "Mis-yashil gul qo'ng'izini spirtga tushirsangiz, uning mis-yashil rangiga nima bo'ladi?",
        options: [
          "Spirt rangni eritib, tezda kulrang-oqqa aylanadi",
          "Rang xiralashmaydi — u pigmentdan emas, tuzilmadan keladi",
          "Spirt pigmentni o'zgartirib, qizil rangga aylanadi",
        ],
        answer: 1,
        explain: "Mis-yashil rang mayda qatlamlardagi yorug'lik interferensiyasidan kelib chiqadi, shuning uchun spirtda erimaydi; pigment rangi esa buning o'rniga oqib chiqib xiralashardi.",
      },
      {
        question: "Ekin zararkunandasi «oq qurt» va mis-yashil gul qo'ng'izi orasidagi munosabat qanday?",
        options: [
          "Oq qurt aynan uning lichinkasi bo'lib, yer ostida ekin ildizlarini kemiradi",
          "Oq qurt unga aloqasi bo'lmagan kuya lichinkasi",
          "Oq qurt uning tuxumlarini ovlaydigan tabiiy dushmani",
        ],
        answer: 0,
        explain: "«Oq qurt» skarabey lichinkalarining umumiy nomi; bu gul qo'ng'izining qurti pastda ildizlarni yeydi, voyaga yetgani esa tepada barglarni yeydi — ikkalasi ham zararkunanda nishoni.",
      },
    ],
    habitat: {
      title: "Yozgi kechalardagi terak tojlari",
      body: "Iyun-iyul oylaridagi dim kechalar kuzatish uchun eng qulay vaqt: ko'cha chiroqlari mis-yashil to'plarni jalb qiladi, terak, qorayog'och va olma tojlari esa bir necha kun ichida barglarni to'r kabi qoldiradigan ovqatlanuvchi to'dalar bilan to'ladi; kunduzi tuproqda yashirinib, kamdan-kam ko'rinadi.",
    },
  },

  'assassin-bug': {
    lesson: [
      {
        title: "Egilgan tumshuq qanday ovqatlanadi",
        body: "Mustahkam rostrum tinch holatda bosh ostiga yig'ilib turadi, so'ng oldinga otilib o'ljani sanchadi; u so'lak yuborib o'ljaning ichini suyultiradi, so'ng suyuqlikni orqaga tortib oladi — qurbon ichida tashqi hazm qilish.",
        anchor: 'rostrum',
      },
      {
        title: "Tumshuq skripka vazifasini ham bajaradi",
        body: "Pronotum ostki tomonida qirrali egat o'tadi; xavf tug'ilganda, u tumshuq uchini qirralar bo'ylab sudrab, g'ichirlovchi tovush chiqaradi. Uni qo'lga olish ko'pincha og'riqli sanchishga olib keladi — kuzatish kerak, teginish emas.",
        anchor: 'pronotum',
      },
      {
        title: "Qisqich kabi old oyoqlar",
        body: "Mustahkam old oyoqlarda qisqa tikanlar va uchida yopishqoq yostiqchalar bor; ular o'ljani ushlagan zahoti, ko'pincha avval yengil sinov zarbasidan keyin, tumshuq nishonga tekkuncha uni qattiq ushlab turish uchun qisqich kabi yopiladi.",
        anchor: 'foreleg',
      },
      {
        title: "Qandalalar orasidagi g'ayrioddiy tur",
        body: "Ko'pchilik haqiqiy qandalalar tumshug'ini poya va barglardan sharbat ichish uchun ishlatadi, ammo sanchqichli qandala xuddi shu og'iz a'zosini hasharotlarga qaratilgan quroliga aylantirgan; shira va tirqishlar uning menyusida, bog' uchun xush kelibsiz qorovul.",
      },
    ],
    motion: {
      title: "Bitta zarba hal qiladi",
      body: "U sekin yaqinlashib, so'ng chaqmoq tezligida zarba beradi — old oyoqlari o'ljani mahkamlaganda, tumshuq bir zumda, odatda bosh va ko'krak orasidagi yumshoq bo'shliqqa sanchiladi; so'lak qurbonni bir necha soniyada holdan toydiradi, u esa shoshilmasdan ovqatlanadi.",
    },
    quiz: [
      {
        question: "Sanchqichli qandala tutgan tirqishni qanday iste'mol qiladi?",
        options: [
          "Jag'lari bilan tirqishni bo'laklarga bo'lib, yutib yuboradi",
          "Tirqishning ichini suyultiruvchi hazm suyuqligini yuboradi, so'ng suyuqlikni orqaga tortib oladi",
          "Tirqishni butunlay yutib, uni ichida sekin hazm qiladi",
        ],
        answer: 1,
        explain: "Sanchqichli qandalalarda chaynovchi og'iz a'zolari yo'q; tumshug'i so'lak yuborib o'ljani ichdan hazm qiladi, so'ng suyuqlikni so'rib oladi — tashqi hazm.",
      },
      {
        question: "Sanchqichli qandala xavf tug'ilganda chiqaradigan g'ichirlovchi tovushni qanday hosil qiladi?",
        options: [
          "Qanotlarini qorin chetiga ishqalab titratib",
          "Tumshuq uchini ko'krak ostidagi qirralar bo'ylab oldinga-orqaga sudrab",
          "Nafas olish teshiklaridan havoni tez chiqarib",
        ],
        answer: 1,
        explain: "U tumshuq uchini pronotum ostidagi qirrali egat bo'ylab sudraydi, skripka torini kamon bilan tortgandek; chirildoqlar qanot bilan g'ichirlasa, bu qandala tumshug'i bilan g'ichirlaydi.",
      },
    ],
    habitat: {
      title: "Butazordagi pistirma nuqtalari",
      body: "Buta, o'tloq, bog' va dala uning pistirma nuqtalariga ega; yoz va kuz kunlari uning barglarda pistirma qurishini kuzatish uchun eng yaxshi vaqt, ba'zi turlari qorong'i tushgach ko'cha chiroqlariga uchadi — kuzating, teginmang, uning sanchishi arinikidan ham og'riqliroq.",
    },
  },

  bumblebee: {
    lesson: [
      {
        title: "Tuklar qishki kiyim sifatida",
        body: "Zich tuklar tanani qoplab, gulchang ushlaydi va issiqlikni saqlaydi: uchish mushaklaridan chiqqan issiqlik bilan birga, bu shmelga muzlashga yaqin tonglarda uchishga imkon beradi — ko'pincha tog' o'tloqlaridagi yagona changlatuvchi.",
        anchor: 'fuzz',
      },
      {
        title: "Butun ko'krakni titratish",
        body: "Uchish mushaklari qanot asosini to'g'ridan-to'g'ri tortmaydi; ular ko'krakni siqib-bo'shatadi, ko'krak tez egilganda qanotlar unga ergashib qoqiladi — bu bilvosita tizim asalari, pashsha va boshqa tez qanot qoquvchilarni harakatga keltiradi.",
        anchor: 'wing',
      },
      {
        title: "Orqa oyoqdagi gulchang savatchasi",
        body: "Orqa boldirning tashqi tomoni silliq va botiq, uzun tuklar bilan o'ralgan, o'rnatilgan gulchang savatchasini hosil qiladi; ishchilar tuklaridagi gulchangni unga artadi, nektar bilan siqadi, har bir oyoq yorqin sariq to'pga aylanguncha.",
        anchor: 'pollenBasket',
      },
      {
        title: "Gulchang yomg'irini silkitib tushirish",
        body: "Pomidor va ko'kmarjon changdonlari mayda teshikli tuz idishiga o'xshaydi; shmel changdonni tishlab, uchish mushaklarini vizillatib gulchangni silkitib tushiradi — asalari qila olmaydigan «vizillatib changlatish» hiylasi.",
        anchor: 'abdomen',
      },
    ],
    motion: {
      title: "Uchishdan oldin isinish uchun titrash",
      body: "Sovuq tonglarda, uchishdan oldin u uchish mushaklarini uzib, dvigatel isinayotgandek titratadi, ko'krak haroratini taxminan 30°C ga ko'taradi; bu hiyla, zich tuklar bilan birga, asalarilar uyada qolganda ham oziq izlashga imkon beradi.",
    },
    quiz: [
      {
        question: "«Suyuqlik dinamikasi qonunlariga ko'ra, shmellar ucha olmasligi kerak» — bu da'vo ortidagi haqiqat nima?",
        options: [
          "Shmellar haqiqatan ham suyuqlik dinamikasiga zid keladi, fan buni hali izohlay olmagan",
          "Erta soddalashtirilgan modellar hisob-kitobda xato qilgan; qanot uchidagi girdoblarni hisobga olish buni to'liq izohlaydi",
          "Shmellar aslida uchmaydi — ular faqat uzoq masofaga sirg'anadi",
        ],
        answer: 1,
        explain: "Bu da'vo qattiq qanot formulalarini qoqiluvchi uchishga qo'llagan; tez qoqiladigan qanotlardan hosil bo'lgan girdoblar yetarlicha ko'tarish kuchini beradi, shuning uchun bu sirli emas.",
      },
      {
        question: "Issiqxona pomidor yetishtiruvchilari nima uchun changlatish uchun aynan shmellarni jalb qiladi?",
        options: [
          "Shmellar asalilardan tezroq uchadi, shuning uchun samaraliroq changlatadi",
          "Pomidor changdonlari faqat yuqori chastotali tebranish ostida gulchang chiqaradi, buni shmellar qila oladi, asalilar esa yo'q",
          "Pomidor nektari asalilar uchun zaharli, shmellar uchun esa zararsiz",
        ],
        answer: 1,
        explain: "Pomidor changdonlari faqat yuqori chastotali tebranish ostida gulchang chiqaradi; shmellar uchish mushaklarini vizillatib uni silkitib tushiradi, bu asalilarda yo'q hiyla.",
      },
    ],
    habitat: {
      title: "Bahor boshidagi gulzorlar",
      body: "Shmellar pastlikdagi dalalardan tog' o'tloqlarigacha tarqalgan, sovuq hududlarda ayniqsa ajralib turadi; erta bahorda qishlab chiqqan malika birinchi bo'lib chiqib, meva daraxtlari gullaganda yolg'iz uya asos soladi — sovuq tongdagi mehmon odatda aynan u.",
    },
  },

  cricket: {
    lesson: [
      {
        title: "O'ng qanot chapni bosadi",
        body: "Erkaklari old qanotlarini assimetrik joylashtiradi, o'ng qanot ustida: o'ng qanotning ostki tomonidagi mayda tishlar qirg'ich faylini hosil qiladi, chap qanot chetidagi qattiq qirra esa; birgalikda ochilib-yopilishi aniq chirillashni hosil qiladi.",
        anchor: 'stridulator',
      },
      {
        title: "Qulog'i old oyoqlarda joylashgan",
        body: "Chirildoqning qulog'i boshida emas, old oyoq boldirlarida — tovushga qarab burilgan bir juft tuxumsimon eshitish pardasi; ikkala old oyoq alohida quloq kabi ishlab, vaqt farqidan foydalanib raqib yoki juftini topadi.",
      },
      {
        title: "Dum tuklari orqani sezadi",
        body: "Qorin uchidagi bir juft uzun tukcha sezuvchi tuklar bilan qoplangan, orqadan kelayotgan eng kichik havo harakatini ushlaydi; yirtqichning sakrashi orqaga qaraganidan tezroq zumdagi sakrashni keltirib chiqarishga yetarli shabada qo'zg'atadi.",
        anchor: 'cercus',
      },
      {
        title: "Orqa oyoqlar katapulta sifatida",
        body: "Orqa oyoq soni to'quchdek qalin, sakrash mushagiga to'la; cho'chiganda, u mushakni tarang tortib, so'ng bo'shatib, o'zini tana uzunligidan o'nlab barobar uzoqqa otadi — mag'lub ham shu oyoqlar bilan qochadi.",
        anchor: 'hindleg',
      },
    ],
    motion: {
      title: "Kuzgi tunda chirillash",
      body: "Kuylayotganda, erkak ikkala old qanotini burchak ostida ko'tarib, soniyasiga o'nlab marta ochib-yopadi, o'ng qanot fayli chap qanot qirrasini qirib, qanotlar tovush taxtasi vazifasini ham bajaradi; har bir kayfiyatning o'z ritmi bor.",
    },
    quiz: [
      {
        question: "Chirildoq va chirildoq chigirtkasining ikkalasi ham old qanotlarini ishqalab chirillaydi — ular orasidagi farq nima?",
        options: [
          "Chirildoqda o'ng qanot chap ustida yotadi; chirildoq chigirtkasida chap qanot o'ng ustida",
          "Chirildoqda chap qanot o'ng ustida yotadi; chirildoq chigirtkasida o'ng qanot chap ustida",
          "Ikkalasida ham har doim o'ng qanot ustida, bir xil qurilishga ega",
        ],
        answer: 0,
        explain: "Chirildoq kuylaganda, o'ng qanot ustida, fayl ostida turadi; chirildoq chigirtkasi esa aksini qiladi, chap qanot ustida — ko'zgu tasviri hiylasi.",
      },
      {
        question: "Jang chirildog'ining qulog'ini topish uchun tananing qaysi qismini tekshirish kerak?",
        options: [
          "Boshning ikki yoni, murakkab ko'zlar ortida",
          "Old oyoq boldirlaridagi tuxumsimon eshitish pardalari",
          "Mo'ylov asosidagi bir juft mayda teshik",
        ],
        answer: 1,
        explain: "Chirildoqning eshitish pardalari old oyoq boldirlarida joylashgan, har bir oyoq alohida quloq kabi vaqt farqidan yo'nalishni baholaydi — boshda quloq yo'q.",
      },
    ],
    habitat: {
      title: "Devorlar va tosh yoriqlari bo'ylab",
      body: "Kuz boshidan keyingi tunlar eng jonli: uy poydevorlari, dala chekkalari va g'isht uyumlari kuylash sahnasiga aylanadi, chiroq nuri esa in og'zida chirillayotgan erkakni topadi — Xitoyning chirildoq urishtirish madaniyatining «to'quvchisi».",
    },
  },

  'robber-fly': {
    lesson: [
      {
        title: "Yuzni qo'riqlovchi mo'ylov soqoli",
        body: "Zich qattiq tuklar halqasi, mistaks, og'iz a'zolarini sim to'r kabi qo'riqlaydi; tutilgan asalari yoki ari ko'pincha tipirchilab nishlaydi, bu halqa esa ko'z va og'iz a'zolari orasida turadi — qaroqchi pashshaning himoyasi.",
        anchor: 'mystax',
      },
      {
        title: "Ko'zlar orasidagi vodiy",
        body: "Ikkita ulkan murakkab ko'z boshning tepasida aniq botiqlik qoldiradi, bu oilaning savdo belgisi; ular orasidagi keng bo'shliq cho'zilgan masofa o'lchagich kabi ishlab, yuqori tezlikdagi uchishda nishonning masofasini baholashga yordam beradi.",
        anchor: 'eye',
      },
      {
        title: "Oltita oyoq qafas kabi yopiladi",
        body: "Tikanlar bilan qoplangan uzun, mustahkam oyoqlar havoda o'ljaga to'qnashgan zahoti qafas kabi yopiladi; o'rindiqqa qaytgach, og'iz a'zolari sanchiladi, asablarni falajlaydigan va to'qimani eritadigan zahar yuboradi.",
        anchor: 'foreleg',
      },
      {
        title: "Faqat qiyin nishonlarni tanlaydi",
        body: "Ninachilar, arilar va yo'lbars qo'ng'izlari — o'zlari ham ovchi — uning menyusida uchraydi; portlovchi uchish va o'tkir hujum burchagi bilan u raqib uchib ketayotgan paytda zarba beradi, «havo yirtqichi» nomini haqli ravishda oqlaydi.",
        anchor: 'wing',
      },
    ],
    motion: {
      title: "O'rindiqdan pistirma",
      body: "U ochiq o'rindiqda qiruvchi samolyot kabi kutib turadi, so'ng ko'zlari o'tayotgan hasharotga qulflangan zahoti otiladi, orqadan egilib kelib nishonni ushlaydi va ovqatlanish uchun o'rindiqqa olib qaytadi — kamdan-kam bir-ikki soniyadan ortiq davom etadi.",
    },
    quiz: [
      {
        question: "Qaroqchi pashshaning og'iz a'zolarini o'rab turgan zich tuklarning asosiy vazifasi nima?",
        options: [
          "Havodan gulchangni oziq sifatida filtrlash",
          "Tipirchilayotgan o'ljaning qarshi hujumidan boshni himoya qilish",
          "Sevgi-mehr davrida urg'ochilarni jalb qiluvchi bezak",
        ],
        answer: 1,
        explain: "Qaroqchi pashsha ko'pincha nishlaydigan ari kabi xavfli o'ljani tutadi, tuklar halqasi esa ko'z va og'izni tipirchilayotgan qurbonning qarshi hujumidan himoya qiladi.",
      },
      {
        question: "Quyidagi hasharotlardan qaysi biri qaroqchi pashshaning menyusida uchraydi?",
        options: [
          "Faqat chivin va pashsha kabi mayda, zaif hasharotlar",
          "Hatto ninachi va ari kabi ovchilar ham ro'yxatda",
          "U hech qachon tirik o'lja tutmaydi, faqat daraxt yarasidan oqayotgan sharbatni yalaydi",
        ],
        answer: 1,
        explain: "Qaroqchi pashsha havoning yuqori yirtqichi bo'lib, pistirma va zahar bilan ninachi va arilarni ham tutadi — u yuzma-yuz emas, kutilmaganlik bilan g'alaba qozonadi.",
      },
    ],
    habitat: {
      title: "Shox uchidagi quyoshli o'rindiq",
      body: "Yozning yorqin kunlarida o'rmon chekkasi, daryo bo'yi va o'tloq yonbag'irlarini, ayniqsa quyoshda isigan quruq shoxcha va panjara ustunlarini tekshiring; katta ko'zli, tukli «og'ir vazndor» ko'pincha o'sha yerda osmonni kuzatib, har zarbadan keyin qaytib o'tiradi.",
    },
  },

  'crane-fly': {
    lesson: [
      {
        title: "Ulkan chivin deb noto'g'ri ayblanadi",
        body: "Kattalashtirilgan chivinga o'xshab qurilgan, ko'pincha «ulkan chivin» deb urib tashlanadi; aslida uning og'iz a'zolari kuchsizlanib, tishlay olmaydi, ko'pchilik voyaga yetganlari deyarli ovqatlanmasdan, qisqa umrini juft izlashga bag'ishlaydi.",
        anchor: 'abdomen',
      },
      {
        title: "Galter eng oson ipucha",
        body: "Orqa qanotlari qisqa, sharsimon uchli poyachalarga — galterlarga — kichraygan, uchishda tez tebranib, o'rnatilgan giroskop kabi ishlaydi; turna pashshaning galterlari g'ayrioddiy uzun va yalang'och ko'zga aniq ko'rinadi.",
        anchor: 'haltere',
      },
      {
        title: "Uzilib tushish uchun qurilgan oyoqlar",
        body: "Oltita oyog'i kulgili darajada uzun va ingichka, har bir bo'g'imida uzilish nuqtasi bor: yirtqich ushlab olsa yoki to'rga ilinsa, oyoq oddiygina uzilib, qolgan tana qochadi; ammo yo'qolgan voyaga yetgan oyog'i hech qachon qayta o'smaydi.",
        anchor: 'leg',
      },
      {
        title: "Chayqaluvchi, tebranuvchi uchish",
        body: "Bir juft tor old qanot sekin qoqiladi, turna pashshaga o't ustida qisqa sakrashlar bilan chayqaluvchi uchishni beradi; bu qo'pol uslub, hujum vositasi yo'qligi bilan birga, uni qush, o'rgimchak va duofoslar uchun oson o'ljaga aylantiradi.",
        anchor: 'wing',
      },
    ],
    motion: {
      title: "Oyoqni tashlab qochish",
      body: "Tumshuq yoki to'r bitta oyoqni ushlagan zahoti, turna pashshasi mushakni qisqartirib, o'sha oyoqni o'rnatilgan uzilish nuqtasida tozalab uzadi, so'ng tutuvchisi bir lahza ikkilanganda qochib qoladi — bitta oyoq hayotga almashtiriladi.",
    },
    quiz: [
      {
        question: "Uyga «ulkan chivin» uchib kirsa — u tishlab qon so'radimi?",
        options: [
          "Ha, u oddiy chivindan ham ko'proq so'radi",
          "Yo'q — turna pashshasining og'iz a'zolari kuchsizlangan, voyaga yetganlari deyarli umuman ovqatlanmaydi",
          "Faqat erkaklari tishlamaydi; urg'ochilari tishlaydi",
        ],
        answer: 1,
        explain: "Turna pashshasi faqat kattalashtirilgan chivinga o'xshaydi; uning og'iz a'zolari tishlash uchun juda zaif, u na qon so'radi, na ko'p ovqatlanadi.",
      },
      {
        question: "Turna pashshasi qochish uchun oyog'ini tashlab yuborgandan keyin, o'sha yo'qolgan oyoqqa nima bo'ladi?",
        options: [
          "Bir necha kun ichida to'liq yangi oyoq o'sib chiqadi",
          "U hech qachon qayta o'smaydi — pashsha qolgan umrini bir oyoq kam bilan yashaydi",
          "Uning o'rnidan ikkita ingichkaroq yangi oyoq chiqadi",
        ],
        answer: 1,
        explain: "Oyoqni tashlash ataylab qilingan omon qolish harakati, ammo voyaga yetganlari boshqa po'st tashlamaydi, shuning uchun u qayta o'smaydi; ba'zi turna pashshalari bir necha oyog'i yo'qligicha yashayveradi.",
      },
    ],
    habitat: {
      title: "Shom paytida nam o't ustida",
      body: "Bahor va kuz kechalarida, uy yaqinidagi gazon va soy bo'yidagi botqoqliklarda uning chayqaluvchi, past uchishini ko'rish mumkin, qorong'i tushgach esa yorug'likka tortilib deraza to'riga urilib yuradi; lichinkasi nam tuproqda yashab, chirindi va o't ildizlari bilan oziqlanadi.",
    },
  },

  mantidfly: {
    lesson: [
      {
        title: "Duofosning soxta nusxasi",
        body: "Bir juft ov qiluvchi old oyoq duofosnikiga deyarli aynan o'xshaydi — tikanli son, bukiluvchi boldir, otilib chiqib o'ljani ushlashga tayyor; ammo u duofoslar bilan hech qanday qarindoshlikka ega emas, bu ko'rinish mustaqil rivojlangan.",
        anchor: 'raptorialLeg',
      },
      {
        title: "Uzun bo'yinning ma'nosi",
        body: "Pronotum «bo'yin»ga cho'ziladi, bosh va old oyoqlarni oldinga olib boradi, zarba uchun masofani kengaytiradi — bu duofosning o'zi cho'zilgan ko'kragiga juda o'xshaydi; konvergent evolyutsiya bir dizaynni ikki marta yaratgan.",
        anchor: 'pronotum',
      },
      {
        title: "Qanotlar sirni fosh qiladi",
        body: "Tinch holatda, to'rtta shaffof qanot orqa ustida tom shaklida yotadi, tomirlari zich to'rga o'ralgan — bu to'rqanot turkumining, yashil to'rqanotning qarindoshi ekanligining belgisi; duofos esa charmsimon old qanotlarini tekis yig'adi, oson farqlanadi.",
        anchor: 'wing',
      },
      {
        title: "Lichinkalari tuxum xaltasiga ko'chib o'tadi",
        body: "Ko'plab birinchi bosqich lichinkalari o'rgimchak tuxum xaltalarini izlaydi, ba'zilari o'rgimchak tuxum qo'yayotganda unga yopishib oladi; ichkarida lichinka g'umbaklashguncha tuxumlar bilan oziqlanadi — voyaga yetgani duofosga o'xshaydi, ammo lichinkasi parazit.",
      },
    ],
    motion: {
      title: "Mo''jaz o'roqsimon zarba",
      body: "U gullar va barglar orasida pistirmada yotib, uzun ko'kragini burab, tanasini nishonga qaratadi, so'ng old oyoqlarini chaqmoq tezligida otib, shirani yoki mayda pashshani ushlaydi; zarba duofosnikini takrorlaydi, faqat bir necha barobar kichikroq.",
    },
    quiz: [
      {
        question: "Duofospashsha duofosnikiga o'xshash bir juft ov qiluvchi old oyoq olib yuradi — u aslida qaysi turkumga mansub?",
        options: [
          "Mantodea, duofoslar oilasining kichik bir tarmog'i",
          "Neuroptera, yashil to'rqanotga yaqin qarindosh",
          "Hemiptera, sanchqichli qandalalarga qarindosh",
        ],
        answer: 1,
        explain: "Duofospashsha Neuroptera turkumiga mansub, yashil to'rqanotga qarindosh; uning oyoqlari va bo'yni duofoslar bilan konvergent evolyutsiya natijasida, uzoq qarindoshlik emas.",
      },
      {
        question: "Ko'plab duofospashsha lichinkalari qayerda ulg'ayadi?",
        options: [
          "O'rgimchak tuxum xaltasi ichida, tuxumlar bilan oziqlanib",
          "Suv ostida, chivin lichinkalarini ovlab",
          "Tuproqda, o'simlik ildizlarini kemirib",
        ],
        answer: 0,
        explain: "Birinchi bosqich lichinkalari o'rgimchak tuxum xaltalarini izlab topadi, ba'zilari avval unga yopishib oladi; g'umbaklashguncha tuxum bilan oziqlanish kamdan-kam parazitlik yo'li.",
      },
    ],
    habitat: {
      title: "Chiroq yonidagi tungi mehmon",
      body: "Kunduzi u gullar va buta barglari orasida yashirinib, mini-duofos holatida shira va mayda pashshalarga pistirma quradi; yozgi tunlarda yorug'likka tortiladi, chiroq va to'rlarga qo'nadi — qanotlarini tekshirib, uning kimligini tasdiqlang.",
    },
  },

  caddisfly: {
    lesson: [
      {
        title: "Tukli qanotlar, tangachali emas",
        body: "Qanotlari tangacha bilan emas, mayin tuk bilan qoplangan — shuning uchun turkum nomi Trichoptera, «tukli qanot». Sinfli pashshalar kuyalarning opa-singil guruhi. Kuya «kukun» — tangacha to'kadi; sinfli pashsha qanotida esa faqat tuk bor.",
        anchor: 'hairyWing',
      },
      {
        title: "Tanasidan uzunroq mo'ylovlar",
        body: "Ipsimon mo'ylovlari ko'pincha tana uzunligidan oshadi, tinch holatda oldinga tutiladi, qanotlari esa orqa ustida tom shaklida yig'ilgan, bu unga ingichka kuyaga o'xshash ko'rinish beradi; o'sha uzun mo'ylovlar kechasi birinchi ipucha.",
        anchor: 'antenna',
      },
      {
        title: "Ovqat asbobi sifatida jag' paypaslagichlari",
        body: "Voyaga yetganning chaynovchi og'iz a'zolari kuchsizlanib, qattiq oziqni ushlay olmaydi, shuning uchun u nektar va namlikni artish uchun jag' paypaslagichlariga tayanadi; qisqa voyaga yetgan bosqichi deyarli ro'za tutgandek, lichinka zaxirasi hisobiga yashaydi.",
        anchor: 'palp',
      },
      {
        title: "Suv osti me'mori",
        body: "Sinf qurti deb ataladigan lichinka soy tubida yashab, qum, mayda tosh yoki barg bo'laklarini ipak bilan bog'lab, hamma yerga olib yuradigan quticha yasaydi, xavf tug'ilganda unga to'liq kirib oladi; uslubi va materiali turga qarab farq qiladi.",
      },
    ],
    motion: {
      title: "Uyini o'zi bilan olib yurish",
      body: "Sinf qurti soy tubida emaklayotganda, boshi va ko'kragi quticha og'zidan chiqib, oltita oyog'i yerni ushlab, «uyni» oldinga sudraydi, xavf tug'ilganda esa zumda ichkariga qaytib, qattiqlashgan boshi bilan kirishni bekitadi.",
    },
    quiz: [
      {
        question: "Sinfli pashshalar kuyalarga juda o'xshaydi — ularni farqlashning eng ishonchli usuli qanday?",
        options: [
          "Sinfli pashsha qanotlari mayin tuk bilan, kuyaniki esa tangacha bilan qoplangan",
          "Sinfli pashshalar har doim kuyalardan ancha yirikroq tanaga ega",
          "Sinfli pashshalar kunduzi, kuyalar esa faqat kechasi uchadi",
        ],
        answer: 0,
        explain: "Trichoptera (sinfli pashshalar) tuk bilan qoplangan qanotga, Lepidoptera (kuyalar) esa tangacha bilan qoplangan qanotga ega — ikkala turkum nomi ham shu farqdan kelib chiqqan.",
      },
      {
        question: "Soyda sinf qurtlarining katta populyatsiyasi odatda suv haqida nimadan darak beradi?",
        options: [
          "Suv sifati nisbatan yaxshi, ifloslanish past",
          "Suv havzasi kuchli evtrofikatsiyaga uchragan",
          "Suv baliqlar yashashi uchun juda issiq",
        ],
        answer: 0,
        explain: "Sinfli pashsha lichinkalari kislorod va ifloslanishga sezgir, kunlik pashsha va tosh pashsha bilan birga klassik suv sifati ko'rsatkichi — soni tozalikdan darak beradi.",
      },
    ],
    habitat: {
      title: "Soy bo'yidagi shom to'dalari",
      body: "Toza soylar va ko'l qirg'oqlari uning uyi: shom paytida voyaga yetganlari suv ustida to'da bo'lib uchadi, qorong'i tushgach esa qirg'oqdagi ko'cha chiroqlariga to'planadi; kunduzi soy tubidagi toshlarni ag'darsangiz, ko'pincha ichida qum-tosh qutichasidagi sinf qurtini topasiz.",
    },
  },
  'house-fly': {
    lesson: [
      {
        title: "Chiziqlarni o'qish",
        body: "Ko'krakka qarang: kulrang fonda oldindan orqaga to'rtta to'q chiziq — uy pashshasining shaxsiy guvohnomasi. Yuz mingdan ortiq pashsha turi orasida, dasturxoningizdagisi aynan shu to'rtta chiziq bilan nomlangan.",
        anchor: 'stripe',
      },
      {
        title: "U faqat yalaydi, hech qachon tishlamaydi",
        body: "Og'iz a'zolari shimuvchi mop kabi: qisqa, osilib turuvchi xartum, uchida ikkita egatli yostiqcha bilan. Pashsha shakarni eritish uchun so'lak purkaydi, so'ng shiraga aylangan suyuqlikni qayta shimib oladi — u tishlay olmaydi va ignaga o'xshash hech narsa olib yurmaydi.",
        anchor: 'proboscis',
      },
      {
        title: "Shift bo'ylab yurish",
        body: "Har bir oyoq uchida mayin tuklar bilan qoplangan bir juft yopishqoq yostiqcha bor, ular yelimsimon parda ajratib, ho'l yopishish orqali shishaga mahkam yopishadi. Oltita oyoq navbat bilan ko'tarilib-tushadi, shuning uchun har doim kamida bittasi ushlab turadi — shift esa unga pol bo'lib qoladi.",
        anchor: 'pulvillus',
      },
      {
        title: "Nima uchun urib tutish qiyin",
        body: "Bitta juft qanot butun uchishni bajaradi; orqa qanotlari esa yashiringan mayda muvozanat organlariga aylangan. Yugurib borish shart emas — orqaga sakrash, bir qanot qoqish, va u havoda; uning ko'zlari yaqinlashayotgan soyaga qo'lingizdan ancha tezroq javob beradi.",
        anchor: 'wing',
      },
    ],
    motion: {
      title: "Oyoqlarini ishqalashning siri",
      body: "Tinch turgan pashsha doimo oyoqlarini ishqalaydi, boshini artadi, qanotlarini siladi. Uning ta'm retseptorlari oyoqlarida joylashgan, shuning uchun har bir qo'nish — bir tatib ko'rish; changni va eski hidlarni artib tashlash keyingi qadam shakar suvida aniq «o'qilishini» ta'minlaydi.",
    },
    quiz: [
      {
        question: "Uy pashshasi ovqatga qo'nganda, u aslida qanday ovqatlanadi?",
        options: ["Ignaga o'xshash og'iz a'zosini sanchib so'radi", "Hazm suyuqligini purkab ovqatni yumshatadi, so'ng g'ovaksimon yostiqchalar bilan artib oladi", "Jag'lari bilan kichik bo'laklarni chaynab yeydi"],
        answer: 1,
        explain: "Shimuvchi og'iz a'zolari faqat suyuqlikni yalay oladi: qattiq ovqat avval so'lakda eritilishi kerak. Pashshada sanchuvchi yoki chaynovchi hech narsa yo'q.",
      },
      {
        question: "Uy pashshasiga shiftdan teskari osilib turishga nima imkon beradi?",
        options: ["Doimiy qanot qoqish", "Yelimsimon parda ajratuvchi oyoq yostiqchalari", "Qorindagi so'rg'ich"],
        answer: 1,
        explain: "Oyoq yostiqchalaridagi tuklar yelimsimon parda ajratib, ho'l yopishish orqali silliq yuzalarga mahkam yopishadi; oltita oyoq navbat bilan ko'tarilgani uchun ushlash hech qachon yo'qolmaydi.",
      },
    ],
    habitat: {
      title: "Odamlar bor joyning har qanday yeri",
      body: "Uy pashshasi bizdan ajralib deyarli mavjud emas; uning hayoti inson odatlariga ergashadi. Axlat qutilari, go'ng uyumlari va oshxona tokchalari uning bolalar xonasi va ovqat xonasi vazifasini bajaradi, har ikki issiq haftada bitta avlod almashishi bilan u butun dunyoga tarqalgan.",
    },
  },
  mosquito: {
    lesson: [
      {
        title: "Uy chivinini nomlash",
        body: "Tinch turgan Culex tanasini devorga deyarli parallel tutadi, dumi ko'tarilmagan (Anopheles esa boshini pastga, dumini yuqoriga qayirib turadi). Keyin qorinni tekshiring: har bir segment asosida och chiziq. Ikkalasi ham mos kelsa — oqargan uy chivini.",
        anchor: 'band',
      },
      {
        title: "Aniq igna to'plami",
        body: "Xartum bitta igna emas, qobiq ichidagi oltita ingichka asbob: ikkitasi arrasimon pichoq terini ochadi, ikkitasi ushlab turadi, bittasi antikoagulant so'lak yuboradi, bittasi qonni tortib oladi. Qichishish — o'sha so'lakka allergiya.",
        anchor: 'proboscis',
      },
      {
        title: "Mo'ylovlar jinsni ko'rsatadi",
        body: "Urg'ochining mo'ylovlari siyrak, qisqa tuk halqalari bilan ingichka ipga o'xshaydi; erkaklarniki esa patsimon — bu uning «qulog'i», urg'ochining qanot qoqish vizillashiga sozlangan. Faqat urg'ochilari chaqadi; erkakning og'iz a'zolari terini teshishga ham qodir emas.",
        anchor: 'antenna',
      },
      {
        title: "Qanotdagi tangachalar",
        body: "Chivin qanotlari tor, tomirlari va chetlari mayda tangachalar bilan chegaralangan — oilaning belgisi; boshqa pashshalarda yalang'och parda bor. Soniyasiga yuzlab marta qoqilib, bu tanish vizillash ularning bir-birini topishiga ham yordam beradi.",
        anchor: 'wing',
      },
    ],
    motion: {
      title: "Chaqishning anatomiyasi",
      body: "Qo'ngandan so'ng, urg'ochi tomir ko'p bo'lgan joyni qidiradi, so'ng oltita asbob navbat bilan kesib, antikoagulant so'lakni qonga almashtiradi. Bir necha daqiqa ichida u o'z og'irligining deyarli ikki barobarini oladi, qorni qizarib shishadi va chiqib ketadi.",
    },
    quiz: [
      {
        question: "Qaysi chivinlar qon so'radi?",
        options: ["Barcha chivinlar", "Faqat urg'ochilari, tuxumlarini rivojlantirish uchun", "Faqat erkaklari, sevgi-mehr paytida ko'z-ko'z qilish uchun"],
        answer: 1,
        explain: "Qon tuxum rivojlanishi uchun oziq ehtiyoji, shuning uchun faqat urg'ochilari chaqadi; erkaklarining og'iz a'zolari zaif va ular butunlay nektar va o'simlik sharbati bilan yashaydi.",
      },
      {
        question: "Oqargan uy chivini devorga qo'nganda o'zini qanday tutadi?",
        options: ["Tanasi devorga deyarli parallel", "Boshi pastga, dumi yuqoriga qiyshaygan", "Har doim teskari osilib turadi"],
        answer: 0,
        explain: "Culex sirtga parallel dam oladi; bosh pastga, dum yuqoriga qiyshayish esa Anophelesga tegishli — ikkalasini farqlashning eng tezkor dala belgisi.",
      },
    ],
    habitat: {
      title: "Turg'un suv yonidagi hayot",
      body: "Tashlab yuborilgan shina yoki gulдon idishidagi suv bolalik uchun yetarli: tuxumlar sol shaklida suzadi, suzuvchi qurtlar bosh pastga osilib filtrlaydi, hatto g'umbagi ham unda kalapisak oshadi. Turg'un suvni to'kib tashlash har qanday chivin spiralidan ko'ra samaraliroq.",
    },
  },
  cockroach: {
    lesson: [
      {
        title: "Ikkita chiziq hammasini aytadi",
        body: "Ko'plab tarakonlar mayda va choy-jigarrang; bu turning shaxsiy guvohnomasi pronotumda — old chetdan orqa chetgacha ikkita to'q chiziq. Nimfalarida qanot yo'q, ammo chiqqan kunidan chiziqlarni olib yuradi, shuning uchun har qanday yoshda nomlash mumkin.",
        anchor: 'stripe',
      },
      {
        title: "Yashiringan bosh",
        body: "Tarakonning boshi oldinda ochiq turmaydi: u pronotum qalqoni ostiga tortiladi, og'iz a'zolari pastga qaragan, shuning uchun yuqoridan faqat tepasi ko'rinadi. Eng nozik qism qalqonlangan holda qoladi — va tana tor yoriqlar uchun tekisroq siqiladi.",
        anchor: 'head',
      },
      {
        title: "Orqadagi ko'zlar",
        body: "Dum uchidagi serklar orqaga qaratilgan ko'zgu kabi: ularning tuklari orqadan kelgan eng kichik havo puflashini ushlaydi. Shippakning shabadasi shippakning o'zidan oldin yetib keladi — serklar ishga tushadi, signal to'g'ridan-to'g'ri oyoqlarga boradi, u esa yo'qoladi.",
        anchor: 'cercus',
      },
      {
        title: "Hech qachon ishlatmaydigan qanotlar",
        body: "Charmsimon old qanotlar qorinni qoplab, uchishga tayyordek ko'rinadi, ammo u deyarli hech qachon uchmaydi. Uning qochish rejasi — yoriq: tekislangan tana va tikanli oyoqlar bir necha millimetrlik bo'shliqni ham xavfsizlik eshigiga aylantiradi.",
        anchor: 'wing',
      },
    ],
    motion: {
      title: "Soniyaning bir necha ulushidagi qochish",
      body: "Cho'chigan tarakon o'n millisekundlar ichida otilib ketadi: serklar havo harakatini his qiladi, miya emas, qorindagi asab markazi oyoqlarni ishga tushiradi. U orqasini xavfga o'girib, yugurish paytida devor bo'ylab burchak oladi.",
    },
    quiz: [
      {
        question: "Mayda tarakonlar orasidan nemis tarakonini qanday tanib olish mumkin?",
        options: ["Pronotumidagi ikkita to'q chiziq bo'yicha", "Ucha olish-olmasligi bo'yicha", "Qorin rangi tusi bo'yicha"],
        answer: 0,
        explain: "Juft pronotum chiziqlari uning eng barqaror dala belgisi, nimfadan voyaga yetgungacha saqlanadi — o'lchov yoki umumiy rangdan ancha ishonchliroq.",
      },
      {
        question: "Shippak hali tushmasdan turib tarakon allaqachon yo'qolgan — uni nima ogohlantirgan?",
        options: ["Murakkab ko'zlari shippakni ko'rgan", "Serklari zarba oldidan kelgan shabadani sezgan", "Qadam tovushlarini eshitgan"],
        answer: 1,
        explain: "Serklardagi tuklar eng kichik havo oqimini sezadi; signal miyani chetlab, qorindagi asab markazi orqali millisekundlar ichida oyoqlarni harakatga keltiradi.",
      },
    ],
    habitat: {
      title: "Radiator va yoriq orasida",
      body: "Uning uy tanlash ro'yxatida uchta band bor: issiq, nam va yoriq. Rakovina ostidagi truba bo'shlig'i, muzlatgich kompressori yonidagi joy, mikroto'lqinli pech ostida — barchasi besh yulduzli uyalar. U kunduzi yashirinib, kechasi devor plintusi bo'ylab chiqadi.",
    },
  },
}

export const getGuide = (id: string): Guide | undefined => GUIDES[id]
