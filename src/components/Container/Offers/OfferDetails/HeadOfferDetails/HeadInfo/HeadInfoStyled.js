import styled from 'styled-components'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import MailIcon from '@material-ui/icons/Mail'

const HeadInfoContainer = styled.div(props => ({
  '@media (max-width: 1020px)': {
    padding: '25px 9px 25px 9px'
  },
  height: '100%',
  filter: 'brightness(0.85)',
  borderRadius: '0 0 4px 4px',
  padding: '20px 20px 0 20px',
  background: `url(${props.backgroundImg}), linear-gradient(${props.backgroundLinear})`
}))

const BackButtonStyled = styled.button({
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  outline: 'none',
  height: 28,
  width: 28,
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  color: '#fff',
  cursor: 'pointer',
  top: 10,
  left: 10,
  border: 0,
  borderRadius: 4,
  transition: 'all 0.3s ease-out 0s',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.35)'
  }
})

const ArroBackIconStyled = styled(ArrowBackIcon)({
  '&.MuiSvgIcon-root': {
    fill: '#fff'
  }
})

const InfoContainer = styled.div({
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

const CompanyLogoContainer = styled.div({
  flexShrink: 0,
  width: 127,
  height: 127,
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
  backgroundClip: 'padding-box',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  borderWidth: 10,
  borderStyle: 'solid',
  borderColor: 'rgba(255, 255, 255, 0.15)',
  borderImage: 'initial'
})

const CompanyLogoInnerContainer = styled.div({
  backgroundColor: '#fff',
  width: 107,
  height: 107,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%'
})

const CompanyLogoDivStyled = styled.div({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  width: 70,
  height: 70,
  marginRight: 0,
  background: '#fff',
  borderRadius: 100
})

const CompanyLogoImageStyled = styled.img({
  maxWidth: 70,
  maxHeight: 45
})

const InfoTextContainer = styled.div({
  marginLeft: 25
})

const InfoSalaryStyled = styled.span({
  fontSize: 14
})

const InfoTitleContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap'
})

const InfoTitleStyled = styled.span({
  fontSize: 18,
  marginRight: 8,
  fontWeight: 400
})

const InfoAddressStyled = styled.div({
  fontSize: 14
})

const ApplyButtonStyled = styled.button({
  color: '#448aff',
  backgroundColor: '#fff',
  border: 0,
  outline: 'none',
  fontSize: '1rem',
  height: 36,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 0 0 auto',
  borderRadius: 20,
  padding: '0 20px 0 20px'
})

const ApplyTitleContainer = styled.span({
  width: '100%',
  display: 'inherit',
  alignItems: 'inherit',
  justifyContent: 'inherit'
})

const ApplyIconStyled = styled(MailIcon)({
  '&.MuiSvgIcon-root': {
    fill: '#448aff',
    width: 18
  },
  marginRight: 6
})

export {
  HeadInfoContainer,
  BackButtonStyled,
  ArroBackIconStyled,
  InfoContainer,
  CompanyLogoContainer,
  CompanyLogoInnerContainer,
  CompanyLogoDivStyled,
  CompanyLogoImageStyled,
  InfoTextContainer,
  InfoSalaryStyled,
  InfoTitleContainer,
  InfoTitleStyled,
  InfoAddressStyled,
  ApplyButtonStyled,
  ApplyTitleContainer,
  ApplyIconStyled
}
