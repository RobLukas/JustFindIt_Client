import { SWITCH_THEME_MODE } from '../constants/themeMode'

export const switchThemeMode = themeMode => ({
  type: SWITCH_THEME_MODE,
  themeMode
})
