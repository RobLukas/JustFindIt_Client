import React from './node_modules/react'
import ExpandMoreIcon from './node_modules/@material-ui/icons/ExpandMore'

import { DropDownSalaryStyled, DropDownDivInsideStyled } from './filter-styled'

export default function SalaryButton() {
  return (
    <>
      <DropDownSalaryStyled>
        <DropDownDivInsideStyled>
          <span style={{ verticalAlign: 'super' }}>$ Salary</span>
          <ExpandMoreIcon
            style={{ fontSize: '1.2rem', lineHeight: 'inherit' }}
          />
        </DropDownDivInsideStyled>
      </DropDownSalaryStyled>
    </>
  )
}
