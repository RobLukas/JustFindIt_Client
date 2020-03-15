import React from 'react'
import { connect } from 'react-redux'

import Select from '../../../Common/Buttons/SelectButton'
import { SeparationStyled, SelectMobileDivStyled } from './MobileFilterStyled'
import { cities, technologies } from '../../../../api/filters'
import {
  changeCityCategory,
  changeTechnologyCategory
} from '../../../../redux/actions/filters'

const MobileFilter = ({
  cityCategory,
  technologyCategory,
  changeTechnologyCategory,
  changeCityCategory
}) => {
  return (
    <>
      <SelectMobileDivStyled>
        <Select
          collection={cities}
          value={cityCategory}
          onChange={changeCityCategory}
        />
        <SeparationStyled />
        <Select
          collection={technologies}
          value={technologyCategory}
          onChange={changeTechnologyCategory}
        />
      </SelectMobileDivStyled>
    </>
  )
}

const mapStateToProps = ({ filters }) => {
  const { cityCategory, technologyCategory } = filters
  return {
    cityCategory,
    technologyCategory
  }
}

const mapDispatchToProps = { changeCityCategory, changeTechnologyCategory }

export default connect(mapStateToProps, mapDispatchToProps)(MobileFilter)
