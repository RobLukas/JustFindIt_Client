import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'

import { DropDownSalaryStyled, DropDownDivInsideStyled } from './ButtonStyled'

export default function SalaryButton() {
  return (
    <>
      <DropDownSalaryStyled>
        <DropDownDivInsideStyled>
          <AttachMoneyIcon style={{ fontSize: '1rem' }} />
          <span style={{ verticalAlign: 'super' }}>Salary</span>
          <ExpandMoreIcon
            style={{ fontSize: '1.2rem', lineHeight: 'inherit' }}
          />
        </DropDownDivInsideStyled>
      </DropDownSalaryStyled>
    </>
  )
}
