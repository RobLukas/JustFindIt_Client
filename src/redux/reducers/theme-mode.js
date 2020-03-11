import defaultState from '../defaultState'
import { SWITCH_THEME_MODE } from '../constants/theme-mode'

export default (state = defaultState.themeMode, action) => {
  const { type, themeMode } = action

  switch (type) {
    case SWITCH_THEME_MODE:
      return {
        ...state,
        themeMode: !themeMode
      }
    default:
      return state
  }
}
