import styled from 'styled-components';

const FilterButtonStyled = styled.button(({ selected, theme }) => ({
  background: selected
    ? theme.filter.selected.background
    : theme.secondary.background,
  color: selected ? theme.filter.selected.color : theme.filter.button.color,
  minWidth: 40,
  cursor: 'pointer',
  marginRight: 15,
  fontFamily: 'inherit',
  padding: '0 12px',
  boxShadow: 'none',
  textTransform: 'none',
  height: 35,
  lineHeight: '35px',
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
      '0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2)',
  },
}));

const FilterDesktopStyled = styled.div({
  '@media (max-width: 1019px)': {
    display: 'none',
  },
  padding: '0 20px 0 18px',
  height: 126,
  display: 'flex',
  alignItems: 'center',
  paddingTop: 3,
});

const DropDownContainer = styled.div({
  display: 'flex',
  marginLeft: 'auto',
  float: 'right',
});

const CityCategoryContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
});

const TechnologyCategoryContainer = styled.div({
  display: 'flex',
  marginTop: 15,
});

const DropDownListElement = styled.li(({ theme }) => ({
  textAlign: 'center',
  justifyContent: 'center',
  fontSize: 14,
  display: 'flex',
  color: theme.primary.color,
  cursor: 'pointer',
  margin: 0,
  padding: '7px 24px 7px 24px',
  '&:hover': {
    backgroundColor: theme.dropdown.button.hover,
  },
}));

export {
  FilterButtonStyled,
  FilterDesktopStyled,
  DropDownContainer,
  CityCategoryContainer,
  TechnologyCategoryContainer,
  DropDownListElement,
};
