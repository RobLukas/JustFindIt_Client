import React from 'react'
import IconButton from '@material-ui/core/IconButton'

import { MoreHorizIconStyled, IconButtonContainer } from './ButtonStyled'

const IconDotsButton = ({ handleClick }) => {
  return (
    <>
      <IconButtonContainer>
        <IconButton onClick={handleClick} size={'small'}>
          <MoreHorizIconStyled />
        </IconButton>
      </IconButtonContainer>
    </>
  )
}

export default IconDotsButton
