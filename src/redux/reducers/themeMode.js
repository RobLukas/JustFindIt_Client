import defaultState from '../defaultState'
import { SWITCH_THEME_MODE } from '../constants/themeMode'

export default (state = defaultState.themeMode, action) => {
  const { type, themeMode } = action

  switch (type) {
    case SWITCH_THEME_MODE:
      return {
        ...state,
        isLightMode: !themeMode
      }
    default:
      return state
  }
}
