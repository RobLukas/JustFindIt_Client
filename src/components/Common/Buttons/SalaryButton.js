import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'

import { DropDownSalaryStyled, DropDownButtonStyled } from './ButtonStyled'

const SalaryButton = ({ minSalary, maxSalary, handleClick }) => {
  const bothSalaryChoosen = minSalary && maxSalary
  const justMaxSalaryChoosen = !minSalary && maxSalary
  const justMinSalaryChoosen = minSalary && !maxSalary

  let salaryInfo
  if (bothSalaryChoosen) {
    salaryInfo = (
      <>
        <span
          style={{ verticalAlign: 'super' }}
        >{`${minSalary}k - ${maxSalary}k PLN`}</span>
      </>
    )
  } else if (justMaxSalaryChoosen) {
    salaryInfo = (
      <>
        <span style={{ verticalAlign: 'super' }}>{`< ${maxSalary}k PLN`}</span>
      </>
    )
  } else if (justMinSalaryChoosen) {
    salaryInfo = (
      <>
        <span style={{ verticalAlign: 'super' }}>{`${minSalary}k+ PLN`}</span>
      </>
    )
  } else {
    salaryInfo = (
      <>
        <AttachMoneyIcon style={{ fontSize: '1rem' }} />
        <span style={{ verticalAlign: 'super' }}>Salary</span>
      </>
    )
  }

  return (
    <>
      <DropDownSalaryStyled>
        <DropDownButtonStyled
          onClick={handleClick}
          selected={minSalary || maxSalary}
        >
          {salaryInfo}
          <ExpandMoreIcon
            style={{ fontSize: '1.2rem', lineHeight: 'inherit' }}
          />
        </DropDownButtonStyled>
      </DropDownSalaryStyled>
    </>
  )
}

export default SalaryButton
