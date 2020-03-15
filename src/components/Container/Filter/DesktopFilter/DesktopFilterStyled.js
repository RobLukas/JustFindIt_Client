import styled from 'styled-components'
import { Button } from '@material-ui/core'

const ButtonSelectStyled = styled(Button)(props => ({
  background: props.selected
    ? 'linear-gradient(to right, #ba68c8, #9c27b0)'
    : null,
  padding: '0 12px'
}))

const FilterDesktopStyled = styled.div({
  '@media (max-width: 1019px)': {
    display: 'none'
  },
  padding: '0 40px 0 18px',
  height: 126,
  display: 'flex',
  alignItems: 'center',
  paddingTop: 3
})

const DropDownDivStyled = styled.div({
  display: 'flex',
  marginLeft: 'auto',
  float: 'right'
})

const CityCategoryContainer = styled.div({
  display: 'flex',
  alignItems: 'center'
})

const TechnologyCategoryContainer = styled.div({
  display: 'flex',
  marginTop: 15
})

export {
  ButtonSelectStyled,
  FilterDesktopStyled,
  DropDownDivStyled,
  CityCategoryContainer,
  TechnologyCategoryContainer
}
