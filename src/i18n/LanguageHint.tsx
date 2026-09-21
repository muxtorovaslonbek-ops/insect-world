import { useEffect, useState } from 'react'
import { hrefForLocale } from './hrefForLocale'
import { rememberLocaleChoice } from './rememberLocale'
import { useLocale } from './useT'
import type { Locale } from './types'
import s from './LanguageHint.module.css'
import { EVENTS, track } from '../analytics'

const DISMISS_KEY = 'iw-lang-hint-dismissed'

/**
 * 提示文案按"目标语言"组织，而不是按"当前页面语言"——文案天然是
 * 「用对方的语言说给对方听」，所以内容永远是目标语言写的那份，跟当前
 * 停在哪个语言页无关。三语站扩容只需要在这里加一个键。
 */
const TARGET_HINT: Record<Locale, { text: string; cta: string; lang: string }> = {
  zh: { text: '本站也有中文版。', cta: '查看中文版 →', lang: 'zh-Hans' },
  en: { text: 'This field guide is also available in English.', cta: 'View in English →', lang: 'en' },
  uz: { text: "Bu sayt o'zbek tilida ham mavjud.", cta: "O'zbekcha ko'rish →", lang: 'uz' },
}

function detectBrowserLocale(): Locale {
  const nav = navigator.language?.toLowerCase() ?? ''
  if (nav.startsWith('zh')) return 'zh'
  if (nav.startsWith('uz')) return 'uz'
  return 'en'
}

/**
 * 语言提示条：浏览器语言与当前页语言不一致时，顶部出一条可关闭的横幅。
 *
 * **这个组件本身只提示，不跳转。** 自动跳转有两个实际害处：Google 爬虫多报
 * en-US，会跟着被带到英文版，影响中文版收录；分享出去的链接落地行为也变得
 * 不可预测 —— 同一个地址，不同人打开看到不同语言。
 *
 * 真正的自动跳转在别处：`functions/index.ts` 这个 Cloudflare Pages Function
 * 在边缘按 Accept-Language 把根路径 `/` 的访客送去 `/en/` 或 `/uz/`（判定见
 * `edgeLocale.ts`），且专门排除了爬虫 —— 上面这条"害处"因此不成立。
 * 两层各管各的：边缘管"首次落地进哪个语言"，这条 hint 管"已经进错语言的人
 * 怎么补救"（例如从物种深链 `/s/<id>/` 进来，边缘不碰深链）。
 *
 * 关掉之后记在 localStorage，不再打扰；点了下面的切换链接则额外记一个
 * cookie（见 `rememberLocaleChoice`），供边缘那层尊重这个明确选择。
 */
export function LanguageHint({ speciesId }: { speciesId: string }) {
  const locale = useLocale()
  const [target, setTarget] = useState<Locale | null>(null)

  useEffect(() => {
    if (localStorage.getItem(DISMISS_KEY) === '1') return
    const browserLocale = detectBrowserLocale()
    setTarget(browserLocale !== locale ? browserLocale : null)
  }, [locale])

  if (!target) return null

  const copy = TARGET_HINT[target]

  return (
    <div className={s.bar} role="note">
      <span className={s.text} lang={copy.lang}>
        {copy.text}
      </span>
      <a
        className={s.cta}
        href={hrefForLocale(target, speciesId)}
        lang={copy.lang}
        onClick={() => {
          // 顺序有讲究：先记住明确选择（功能性的，边缘分流靠它），再上报。
          // track() 自己吞异常，但没必要让锦上添花的那一步排在前面。
          rememberLocaleChoice(target)
          track(EVENTS.LANGUAGE_SWITCH, { to: target, from: 'hint' })
        }}
      >
        {copy.cta}
      </a>
      <button
        className={s.close}
        onClick={() => {
          localStorage.setItem(DISMISS_KEY, '1')
          setTarget(null)
        }}
        aria-label={locale === 'zh' ? 'Dismiss' : locale === 'uz' ? 'Yopish' : '关闭'}
      >
        ×
      </button>
    </div>
  )
}
