import React from 'react'

import SwitchMode from '../../../Common/Buttons/SwitchModeButton'
import IconDropDown from '../../../Common/DropDowns/IconDropDown'
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

const DesktopFilter = props => {
  return (
    <>
      <FilterDesktopStyled>
        <div style={{ width: '100%' }}>
          <CityCategoryContainer>
            <CityFilter {...props} />
            <IconDropDown />
            <SwitchMode />
          </CityCategoryContainer>
          <TechnologyCategoryContainer>
            <TechnologyFilter {...props} />
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
