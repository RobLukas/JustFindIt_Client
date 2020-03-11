import { SWITCH_THEME_MODE } from '../constants/theme-mode'

export const switchThemeMode = themeMode => ({
  type: SWITCH_THEME_MODE,
  themeMode
})
