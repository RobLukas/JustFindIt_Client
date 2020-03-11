import React from './node_modules/react'
import TrendingUpIcon from './node_modules/@material-ui/icons/TrendingUp'
import ExpandMoreIcon from './node_modules/@material-ui/icons/ExpandMore'

import { DropDownExpStyled, DropDownDivInsideStyled } from '../Filter/FilterStyled'

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
