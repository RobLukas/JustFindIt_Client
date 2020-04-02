import { combineReducers } from 'redux'

import offers from './offers'
import filters from './filters'
import themeMode from './themeMode'

export default combineReducers({
  offers,
  filters,
  themeMode
})
