import styled from 'styled-components'

const HeaderStyled = styled.header({
  '@media(min-width: 1020px)': {
    height: '65px'
  },
  backgroundColor: '#4d5052',
  alignItems: 'center',
  display: 'flex'
})

const MenuLinkStyled = styled.a({
  '@media (max-width: 1020px)': {
    margin: '0 10px 0 auto'
  },
  margin: '0 20px 0 auto',
  '> button:focus': {
    backgroundColor: 'inherit'
  }
})

const LogoStyled = styled.img({
  '@media(min-width: 1020px)': {
    margin: '0 25px 0 15px'
  },
  width: '160px',
  height: '55px'
})

export { HeaderStyled, MenuLinkStyled, LogoStyled }
