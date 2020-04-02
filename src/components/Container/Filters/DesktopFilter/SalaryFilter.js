import React, { useState } from 'react'
import { connect } from 'react-redux'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import { changeSalaryRange } from '../../../../redux/actions/filters'

import {
  DropDownContainer,
  DropDownSalaryContent,
  DropDownSalaryTitle,
  SliderStyled
} from './DropDowns/DropDownStyled'
import SalaryButton from '../../../Common/Buttons/SalaryButton'

const valueText = value => {
  if (value === 50) {
    return 'Max'
  }
  return `${value}k`
}

const DropDownSalary = ({ minValue, maxValue, changeSalaryRange, history }) => {
  const [open, setOpen] = useState(false)
  const [range, setRange] = useState([minValue, maxValue])

  const handleClick = () => {
    setOpen(!open)
  }

  const handleChangeRange = (e, newValue) => {
    const [minValue, maxValue] = newValue
    changeSalaryRange(minValue, maxValue)
    history.push('/offers')
  }

  const handleOnDragAnimation = (e, newValue) => {
    const [minValue, maxValue] = newValue
    setRange([minValue, maxValue])
  }

  const handleClickAway = () => {
    setOpen(false)
  }

  return (
    <>
      <DropDownContainer>
        <SalaryButton
          minSalary={minValue > 0 ? minValue : undefined}
          maxSalary={maxValue < 50 ? maxValue : undefined}
          handleClick={handleClick}
        />
        {open ? (
          <ClickAwayListener onClickAway={handleClickAway}>
            <DropDownSalaryContent>
              <DropDownSalaryTitle>{'Choose salary range'}</DropDownSalaryTitle>
              <SliderStyled
                value={range}
                onChange={handleOnDragAnimation}
                onChangeCommitted={handleChangeRange}
                min={0}
                max={50}
                step={1}
                valueLabelDisplay={'auto'}
                valueLabelFormat={valueText}
              ></SliderStyled>
            </DropDownSalaryContent>
          </ClickAwayListener>
        ) : null}
      </DropDownContainer>
    </>
  )
}

const mapStateToProps = ({ filters }) => {
  const { minValue, maxValue } = filters.salary

  return {
    minValue,
    maxValue
  }
}

const mapDispatchToProps = { changeSalaryRange }

export default connect(mapStateToProps, mapDispatchToProps)(DropDownSalary)
