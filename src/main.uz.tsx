import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { INSECTS } from './data/insects.uz'
import { getGuide } from './data/guides.uz'
import { LocaleProvider } from './i18n/LocaleProvider'
import { uz } from './i18n/uz'
import './styles/global.css'

/**
 * O'zbekcha kirish nuqtasi.
 *
 * main.tsx / main.en.tsx bilan bir xil tuzilishga ega — faqat locale,
 * lug'at va ma'lumotlar almashtirilgan. Ishga tushirish vaqtida tilni
 * almashtirish o'rniga alohida haqiqiy kirish nuqtasi ishlatilishining
 * sababi: /uz/ sahifasi o'zining lang / title / og teglariga ega bo'lishi
 * kerak — qidiruv tizimlari haqiqiy o'zbekcha sahifani ko'rsin; bundan
 * tashqari Rollup har bir kirish nuqtasini alohida to'plamga ajratadi,
 * boshqa til ziyoratchilari bir bayt ham o'zbekcha ma'lumot yuklamaydi.
 */
const el = document.getElementById('root')
if (!el) throw new Error('missing #root')

createRoot(el).render(
  <StrictMode>
    <LocaleProvider value={{ locale: 'uz', dict: uz, insects: INSECTS, getGuide }}>
      <App />
    </LocaleProvider>
  </StrictMode>,
)
