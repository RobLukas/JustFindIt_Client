import {
  CHANGE_CITY_CATEGORY,
  CHANGE_TECHNOLOGY_CATEGORY,
  CHANGE_SALARY_RANGE,
  CHANGE_EXP_LEVEL
} from '../constants/filters'

export const changeCityCategory = cityValue => ({
  type: CHANGE_CITY_CATEGORY,
  cityValue
})

export const changeTechnologyCategory = technologyValue => ({
  type: CHANGE_TECHNOLOGY_CATEGORY,
  technologyValue
})

export const changeSalaryRange = (minValue, maxValue) => ({
  type: CHANGE_SALARY_RANGE,
  minValue,
  maxValue
})

export const changeExpLevel = expLevelValue => ({
  type: CHANGE_EXP_LEVEL,
  expLevelValue
})
