import { CHANGE_CITY_CATEGORY, CHANGE_TECHNOLOGY_CATEGORY } from '../constants/filters'

export const changeCityCategory = cityValue => ({
  type: CHANGE_CITY_CATEGORY,
  cityValue
})

export const changeTechnologyCategory = technologyValue => ({
  type: CHANGE_TECHNOLOGY_CATEGORY,
  technologyValue
})
