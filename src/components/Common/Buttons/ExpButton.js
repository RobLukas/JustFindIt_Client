import React from 'react'
import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import { DropDownExpStyled, DropDownButtonStyled } from './ButtonStyled'

const ExpButton = ({ expLevelSelected, handleClick }) => {
  const isExpLevelSelected = expLevelSelected !== 'All'

  return (
    <>
      <DropDownExpStyled>
        <DropDownButtonStyled
          onClick={handleClick}
          selected={isExpLevelSelected}
        >
          <TrendingUpIcon
            style={{ fontSize: '1.2rem', lineHeight: 'inherit' }}
          />
          <span style={{ verticalAlign: 'super', margin: '0 3px 0 3px' }}>
            {isExpLevelSelected ? expLevelSelected : 'Exp. level'}
          </span>
          <ExpandMoreIcon
            style={{ fontSize: '1.2rem', lineHeight: 'inherit' }}
          />
        </DropDownButtonStyled>
      </DropDownExpStyled>
    </>
  )
}

export default ExpButton
