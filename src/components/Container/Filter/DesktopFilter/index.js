import React from 'react'

import SwitchMode from '../../../Common/Buttons/SwitchModeButton'
import IconDropDown from '../../../Common/Buttons/IconDropDown'
import ExpButton from '../../../Common/Buttons/ExpButton'
import SalaryButton from '../../../Common/Buttons/SalaryButton'

import CityFilter from './CityFilter'
import TechnologyFilter from './TechnologyFilter'

import {
  FilterDesktopStyled,
  DropDownDivStyled,
  CityCategoryContainer,
  TechnologyCategoryContainer
} from './DesktopFilterStyled'

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
