import React from './node_modules/react'
import IconButton from './node_modules/@material-ui/core/IconButton'

import { MoreHorizIconStyled, IconButtonContainer } from './filter-styled'

export default function IconDropDown() {
  return (
    <>
      <IconButtonContainer>
        <IconButton size={'small'} color={'inherit'}>
          <MoreHorizIconStyled />
        </IconButton>
      </IconButtonContainer>
    </>
  )
}
