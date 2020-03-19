import { combineReducers } from 'redux'

import filters from './filters'
import themeMode from './themeMode'

export default combineReducers({
  filters,
  themeMode
})
