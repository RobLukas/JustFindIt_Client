import styled from 'styled-components'

const FilterButtonStyled = styled.button(({ selected, theme }) => ({
  background: selected
    ? theme.filter.selected.background
    : theme.secondary.background,
  color: theme.primary.color,
  minWidth: 40,
  marginRight: 15,
  padding: '0 12px',
  boxShadow: 'none',
  textTransform: 'none',
  height: 35,
  fontSize: '12.6px',
  borderRadius: 20,
  textAlign: 'center',
  display: 'flex',
  position: 'relative',
  textDecoration: 'none',
  letterSpacing: '0.5px',
  outline: 0,
  border: 'none',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    boxShadow:
      '0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2)'
  }
}))

const FilterDesktopStyled = styled.div({
  '@media (max-width: 1019px)': {
    display: 'none'
  },
  padding: '0 20px 0 18px',
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
  FilterButtonStyled,
  FilterDesktopStyled,
  DropDownDivStyled,
  CityCategoryContainer,
  TechnologyCategoryContainer
}
