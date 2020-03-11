import { combineReducers } from 'redux'

import filters from './filters'
import themeMode from './theme-mode'

export default combineReducers({
  filters,
  themeMode
})
