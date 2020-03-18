import styled from 'styled-components'
import { Icon } from '@material-ui/core'

const NavStyled = styled.a(({ theme }) => ({
  '@media(max-width: 1020px)': {
    display: 'none'
  },
  margin: '0 20px 0 20px',
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: theme.secondary.color,
  '&:hover': {
    color: '#ff4081'
  }
}))

const IconNavStyled = styled(Icon)({
  marginRight: '12px'
})

export { NavStyled, IconNavStyled }
