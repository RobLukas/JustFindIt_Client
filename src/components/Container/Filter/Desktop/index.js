import React from 'react'

import SwitchMode from './switch-mode-button'
import IconDropDown from './icon-dropdown'
import ExpButton from '../Buttons/ExpButton'
import SalaryButton from '../Buttons/salary-button'

import CityFilter from './CityFilter'
import TechnologyFilter from './TechnologyFilter'

import {
  FilterDesktopStyled,
  DropDownDivStyled,
  CityCategoryContainer,
  TechnologyCategoryContainer
} from '../FilterStyled'

const DesktopFilter = () => {
  return (
    <>
      <FilterDesktopStyled>
        <div style={{ width: '100%' }}>
          <CityCategoryContainer>
            <CityFilter />
            <IconDropDown />
            <SwitchMode />
          </CityCategoryContainer>
          <TechnologyCategoryContainer>
            <TechnologyFilter />
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

export default DesktopFilter
