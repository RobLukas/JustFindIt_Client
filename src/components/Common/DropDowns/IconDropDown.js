import React from 'react'
import IconButton from '@material-ui/core/IconButton'

import {
  MoreHorizIconStyled,
  IconButtonContainer
} from '../Buttons/ButtonStyled'

export default function IconDropDown() {
  return (
    <>
      <IconButtonContainer>
        <IconButton size={'small'}>
          <MoreHorizIconStyled />
        </IconButton>
      </IconButtonContainer>
    </>
  )
}
