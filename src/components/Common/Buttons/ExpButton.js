import React from 'react'
import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import { DropDownExpStyled, DropDownDivInsideStyled } from './ButtonStyled'

export default function ExpButton() {
  return (
    <>
      <DropDownExpStyled>
        <DropDownDivInsideStyled>
          <TrendingUpIcon
            style={{ fontSize: '1.2rem', lineHeight: 'inherit' }}
          />
          <span style={{ verticalAlign: 'super', margin: '0 3px 0 3px' }}>
            Exp. level
          </span>
          <ExpandMoreIcon
            style={{ fontSize: '1.2rem', lineHeight: 'inherit' }}
          />
        </DropDownDivInsideStyled>
      </DropDownExpStyled>
    </>
  )
}
