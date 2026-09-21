import { PART as cards } from './_parts/cards'
import { PART as common } from './_parts/common'
import { PART as discovery } from './_parts/discovery'
import { PART as feedback } from './_parts/feedback'
import { PART as panels } from './_parts/panels'
import { PART as stage } from './_parts/stage'
import { PART as topbar } from './_parts/topbar'
import type { Dict } from './LocaleProvider'

/** O'zbek interfeys lug'ati. Tur Dict bilan belgilangan: zh'da kalit qo'shilib, bu yerda unutilsa, kompilyatsiya xato beradi. */
export const uz: Dict = {
  ...common.uz,
  ...topbar.uz,
  ...stage.uz,
  ...panels.uz,
  ...discovery.uz,
  ...cards.uz,
  ...feedback.uz,
}
