import styled from 'styled-components'

export default Icon => {
  const StyledNav = styled.a({
    margin: '0 20px 0 20px',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#99a1ab',
    '&:hover': {
      color: '#ff4081'
    }
  })
  
  const StyledNavIcon = styled(Icon)({
    marginRight: '12px'
  })

  return { StyledNav, StyledNavIcon }
}
