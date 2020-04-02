import defaultState from '../defaultState'
import {
  CHANGE_CITY_CATEGORY,
  CHANGE_TECHNOLOGY_CATEGORY,
  CHANGE_SALARY_RANGE,
  CHANGE_EXP_LEVEL
} from '../constants/filters'

export default (state = defaultState.filters, action) => {
  const {
    cityValue,
    technologyValue,
    minValue,
    maxValue,
    expLevelValue,
    type
  } = action

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
    case CHANGE_SALARY_RANGE:
      return {
        ...state,
        salary: {
          minValue,
          maxValue
        }
      }
    case CHANGE_EXP_LEVEL:
      return {
        ...state,
        expLevel: expLevelValue
      }
    default:
      return state
  }
}
