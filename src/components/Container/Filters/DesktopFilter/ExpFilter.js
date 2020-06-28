import React, { useState } from 'react'
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import { expLevels } from '../../../../api/categories'
import { changeExpLevel } from '../../../../redux/actions/filters'

import {
  DropDownContainer,
  DropDownContent,
  DropDownListContainer,
  DropDownListElement
} from './DropDowns/DropDownStyled'
import ExpButton from '../../../Common/Buttons/ExpButton'

const DropDownExp = ({ expLevel, changeExpLevel, history }) => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  const handleClickAway = () => {
    setOpen(false)
  }

  const handleClickExpLevel = expLevelValue => {
    history.push('/offers')
    changeExpLevel(expLevelValue)
  }

  return (
    <>
      <DropDownContainer>
        <ExpButton handleClick={handleClick} expLevelSelected={expLevel} />
        {open ? (
          <ClickAwayListener onClickAway={handleClickAway}>
            <DropDownContent>
              <DropDownListContainer onClick={handleClick}>
                {expLevels.map(expLevel => (
                  <DropDownListElement
                    key={uuidv4()}
                    onClick={() => handleClickExpLevel(expLevel)}
                  >
                    {expLevel}
                  </DropDownListElement>
                ))}
              </DropDownListContainer>
            </DropDownContent>
          </ClickAwayListener>
        ) : null}
      </DropDownContainer>
    </>
  )
}

const mapStateToProps = ({ filters }) => {
  const { expLevel } = filters

  return { expLevel }
}

const mapDispatchToProps = { changeExpLevel }

export default connect(mapStateToProps, mapDispatchToProps)(DropDownExp)
