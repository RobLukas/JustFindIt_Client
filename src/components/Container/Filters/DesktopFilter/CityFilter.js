import React from 'react'
import { connect } from 'react-redux'

import { FilterButtonStyled } from './DesktopFilterStyled'
import { cities } from '../../../../api/categories'
import { changeCityCategory } from '../../../../redux/actions/filters'

export const CityFilter = ({ cityCategory, changeCityCategory, history }) => {
  const onChangeCity = city => {
    history.push('/offers')
    changeCityCategory(city)
  }

  return (
    <>
      {cities.map(city => {
        return (
          <FilterButtonStyled
            selected={city === cityCategory}
            onClick={e => onChangeCity(city)}
          >
            {city}
          </FilterButtonStyled>
        )
      })}
    </>
  )
}

const mapStateToProps = ({ filters }) => {
  const { cityCategory } = filters
  return {
    cityCategory
  }
}

const mapDispatchToProps = { changeCityCategory }

export default connect(mapStateToProps, mapDispatchToProps)(CityFilter)
