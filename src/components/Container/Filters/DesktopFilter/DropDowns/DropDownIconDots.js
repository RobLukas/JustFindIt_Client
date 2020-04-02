import React, { useState } from 'react'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

import IconDotsButton from '../../../../Common/Buttons/IconDotsButton'
import {
  DropDownContainer,
  DropDownContent,
  DropDownListContainer
} from './DropDownStyled'

const DropDownIconDots = ({ children }) => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  const handleClickAway = () => {
    setOpen(false)
  }

  return (
    <>
      <DropDownContainer>
        <IconDotsButton handleClick={handleClick} />
        {open ? (
          <ClickAwayListener onClickAway={handleClickAway}>
            <DropDownContent>
              <DropDownListContainer
                onClick={handleClick}
                style={{ minWidth: 150 }}
              >
                {children}
              </DropDownListContainer>
            </DropDownContent>
          </ClickAwayListener>
        ) : null}
      </DropDownContainer>
    </>
  )
}

export default DropDownIconDots
