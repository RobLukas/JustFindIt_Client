import defaultState from '../defaultState'
import {
  CHANGE_CITY_CATEGORY,
  CHANGE_TECHNOLOGY_CATEGORY
} from '../constants/filters'

export default (state = defaultState.filters, action) => {
  const { cityValue, technologyValue, type } = action

  switch (type) {
    case CHANGE_CITY_CATEGORY:
      return {
        ...state,
        cityCategory: cityValue
      }
    case CHANGE_TECHNOLOGY_CATEGORY:
      return {
        ...state,
        technologyCategory: technologyValue
      }
    default:
      return state
  }
}
