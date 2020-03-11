import React from 'react'
import { connect } from 'react-redux'

import { cities, technologies } from '../../../../api/filters'
import {
  changeCityCategory,
  changeTechnologyCategory
} from '../../../../redux/actions/filters'

import SwitchMode from './switch-mode-button'
import IconDropDown from './icon-dropdown'
import ExpButton from '../Buttons/ExpButton'
import SalaryButton from '../Buttons/salary-button'
import IconButton from '../Buttons/IconTechButto'
import {
  FilterDesktopStyled,
  ButtonSelectStyled,
  DropDownDivStyled,
  CityCategoryContainer,
  TechnologyCategoryContainer
} from '../FilterStyled'

const DesktopFilter = ({
  cityCategory,
  technologyCategory,
  changeTechnologyCategory,
  changeCityCategory
}) => {
  return (
    <>
      <FilterDesktopStyled>
        <div style={{ width: '100%' }}>
          <CityCategoryContainer>
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
            <IconDropDown />
            <SwitchMode />
          </CityCategoryContainer>
          <TechnologyCategoryContainer>
            {technologies.map(technology => {
              if (technology === 'All') {
                return (
                  <ButtonSelectStyled
                    selected={technology === technologyCategory}
                    onClick={e => changeTechnologyCategory(technology)}
                  >
                    All
                  </ButtonSelectStyled>
                )
              }
              return (
                <IconButton
                  isSelectedAll={technologyCategory === 'All'}
                  selected={technology === technologyCategory}
                  technology={technology}
                  onChange={changeTechnologyCategory}
                />
              )
            })}
            <IconDropDown />
            <DropDownDivStyled>
              <SalaryButton />
              <ExpButton />
            </DropDownDivStyled>
          </TechnologyCategoryContainer>
        </div>
      </FilterDesktopStyled>
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

export default connect(mapStateToProps, mapDispatchToProps)(DesktopFilter)
