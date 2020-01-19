import styled from 'styled-components'

const StyledHeader = styled.header({
  height: '65px',
  backgroundColor: '#4d5052',
  alignItems: 'center',
  display: 'flex'
})

const StyledLinkMenu = styled.a({
  margin: '0 24px 0 auto',
  color: '#b7c4d0',
  '$:hover': {
    color: '#ff4081'
  }
})

const StyledLogo = styled.img({
  margin: '0 25px 0 15px',
  width: '160px',
  height: '55px'
})

export { StyledHeader, StyledLinkMenu, StyledLogo }
