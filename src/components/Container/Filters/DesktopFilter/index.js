import React from 'react'

import SwitchMode from '../../../Common/Buttons/SwitchModeButton'
import ExpFilter from './ExpFilter'
import SalaryFilter from './SalaryFilter'

import CityFilter from './CityFilter'
import TechnologyFilter from './TechnologyFilter'

import {
  FilterDesktopStyled,
  DropDownContainer,
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
            <SwitchMode />
          </CityCategoryContainer>
          <TechnologyCategoryContainer>
            <TechnologyFilter {...props} />
            <DropDownContainer>
              <SalaryFilter {...props} />
              <ExpFilter {...props} />
            </DropDownContainer>
          </TechnologyCategoryContainer>
        </div>
      </FilterDesktopStyled>
    </>
  )
}

export default DesktopFilter
