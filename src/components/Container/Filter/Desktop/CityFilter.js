import React from 'react'
import { connect } from 'react-redux'

import { ButtonSelectStyled } from '../FilterStyled'
import { cities } from '../../../../api/filters'
import { changeCityCategory } from '../../../../redux/actions/filters'

export const CityFilter = ({ cityCategory, changeCityCategory }) => {
  return (
    <>
      {cities.map(city => {
        return (
          <ButtonSelectStyled
            selected={city === cityCategory}
            onClick={e => changeCityCategory(city)}
          >
            {city}
          </ButtonSelectStyled>
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
