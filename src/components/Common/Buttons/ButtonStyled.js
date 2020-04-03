import styled from 'styled-components'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import WbSunnyIcon from '@material-ui/icons/WbSunny'
import Brightness3Icon from '@material-ui/icons/Brightness3'

const IconTechStyled = styled.svg({
  fill: 'rgb(255, 255, 255)'
})

const IconButtonContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexBasis: 35,
  height: 35
})

const MoreHorizIconStyled = styled(MoreHorizIcon)(({ theme }) => ({
  display: 'block'
}))

const SelectStyled = styled.select(({ theme }) => ({
  display: 'inherit',
  color: theme.primary.color,
  backgroundColor: theme.secondary.background,
  fontSize: 18,
  borderRadius: 3,
  padding: 15,
  border: '0',
  outline: '0',
  WebkitAppearance: 'none',
  width: '100%',
  height: '100%'
}))

const SunnyIconStyled = styled(WbSunnyIcon)(({ theme }) => ({
  fontSize: 22,
  verticalAlign: 'middle'
}))

const BrightnessIconStyled = styled(Brightness3Icon)(({ theme }) => ({
  fontSize: 22,
  transform: 'scaleX(-1)',
  verticalAlign: 'middle'
}))

const IconDivInnerStyled = styled.div(props => ({
  display: 'flex',
  margin: '0 auto',
  background:
    props.isSelectedAll || props.selected
      ? `linear-gradient(${props.linearGradient})`
      : 'linear-gradient(-90deg, rgb(145, 147, 170), rgb(125, 130, 168))',
  paddingBottom: 5,
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: 'none',
  textTransform: 'none',
  width: 35,
  height: 35,
  position: 'relative',
  cursor: 'pointer',
  padding: 0,
  borderRadius: '50%',
  transition: 'all 0.3s ease 0s',
  '&:hover': {
    color: 'white',
    fill: 'white',
    backgroundPosition: '35px center'
  }
}))

const TechnologyIconStyled = styled.div({
  maxWidth: 40,
  minWidth: 22,
  marginRight: 17,
  display: 'block',
  cursor: 'pointer'
})

const DropDownIconStyled = styled.div({
  borderRadius: '50%',
  display: 'inline-block',
  position: 'relative',
  marginTop: 6
})

const TitleTechnologySpanStyled = styled.span(({ theme }) => ({
  color: theme.secondary.color,
  fontSize: '0.7rem',
  paddingTop: 5,
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  width: '100%',
  display: 'inline-block',
  textAlign: 'center'
}))

const DropDownSalaryStyled = styled.div({
  margin: '0 10px 0 0',
  display: 'inline-block',
  position: 'relative'
})

const DropDownExpStyled = styled.div({
  display: 'inline-block',
  position: 'relative'
})

const DropDownButtonStyled = styled.button(({ theme, selected }) => ({
  color: selected ? theme.filter.selected.color : theme.filter.button.color,
  background: selected
    ? theme.filter.selected.background
    : theme.secondary.background,
  marginLeft: 0,
  cursor: 'pointer',
  padding: '0 7px 0 12px',
  margin: 0,
  boxShadow: 'none',
  textTransform: 'none',
  height: 35,
  alignItems: 'center',
  fontSize: '0.8rem',
  borderRadius: 20,
  display: 'flex',
  textDecoration: 'none',
  textAlign: 'center',
  letterSpacing: '0.5px',
  outline: 0,
  border: 0,
  '.MuiSvgIcon-root': {
    fill: selected ? theme.filter.selected.color : theme.filter.button.color
  },
  '-webkit-tap-highlight-color': 'transparent',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    boxShadow:
      '0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2)'
  }
}))

export {
  MoreHorizIconStyled,
  IconButtonContainer,
  DropDownExpStyled,
  DropDownButtonStyled,
  TitleTechnologySpanStyled,
  TechnologyIconStyled,
  IconDivInnerStyled,
  IconTechStyled,
  DropDownSalaryStyled,
  SelectStyled,
  DropDownIconStyled,
  SunnyIconStyled,
  BrightnessIconStyled
}
