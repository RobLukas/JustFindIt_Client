import styled from './node_modules/styled-components'
import { Icon } from './node_modules/@material-ui/core'

const NavStyled = styled.a({
  '@media(max-width: 1020px)': {
    display: 'none'
  },
  margin: '0 20px 0 20px',
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: '#99a1ab',
  '&:hover': {
    color: '#ff4081'
  }
})

const IconNavStyled = styled(Icon)({
  marginRight: '12px'
})

export { NavStyled, IconNavStyled }
