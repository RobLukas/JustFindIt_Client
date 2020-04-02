import styled from 'styled-components'
import Slider from '@material-ui/core/Slider'

const DropDownContainer = styled.div({
  position: 'relative'
})

const DropDownSalaryContent = styled.div({
  position: 'absolute',
  backgroundColor: '#4c5052',
  width: '200px',
  boxShadow: '0px 2px 24px 0px rgba(0,0,0,0.5)',
  borderRadius: 4,
  marginTop: 5,
  padding: '12px 16px',
  zIndex: 1,
  left: '50%',
  right: 0,
  transform: 'translate(-50%, 0)'
})

const DropDownContent = styled.div({
  position: 'absolute',
  backgroundColor: '#4c5052',
  boxShadow: '0px 2px 24px 0px rgba(0,0,0,0.5)',
  borderRadius: 4,
  marginTop: 5,
  left: '50%',
  transform: 'translate(-50%, 0)',
  zIndex: 2
})

const DropDownListContainer = styled.ul({
  margin: 0,
  padding: '8px 0 8px 0',
  whiteSpace: 'nowrap',
  lineHeight: 1.5
})

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
    backgroundColor: theme.dropdown.button.hover
  }
}))

const DropDownSalaryTitle = styled.div(({ theme }) => ({
  color: theme.primary.color,
  paddingBottom: 20,
  fontSize: 14
}))

const SliderStyled = styled(Slider)({
  '&.MuiSlider-root': {
    color: '#ff4081'
  }
})

export {
  DropDownContainer,
  DropDownContent,
  DropDownSalaryContent,
  DropDownSalaryTitle,
  SliderStyled,
  DropDownListContainer,
  DropDownListElement
}
