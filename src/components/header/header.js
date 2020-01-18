import React from 'react'
import styled from 'styled-components'
import WorkOutlineIcon from '@material-ui/icons/WorkOutline'
import BusinessIcon from '@material-ui/icons/Business'
import MenuIcon from '@material-ui/icons/Menu'
import NavLink from './navLink'
import logo from '../../img/justfindit_logo_name.png'

const Header = () => {
  const Header = styled.header({
    height: '65px',
    backgroundColor: '#4d5052',
    alignItems: 'center',
    display: 'flex'
  })

  const LinkMenu = styled.a({
    margin: '0 24px 0 auto',
    color: '#b7c4d0',
    '$:hover': {
      color: '#ff4081'
    }
  })

  const Logo = styled.img({
    margin: '0 25px 0 15px',
    width: '160px',
    height: '55px'
  })

  return (
    <Header>
      <Logo src={logo} alt="justfind.it" />
      <NavLink Icon={WorkOutlineIcon} link={'/'} desc={'Job offers'} />
      <NavLink Icon={BusinessIcon} link={'/'} desc={'Brand Stories'} />
      <LinkMenu>
        <MenuIcon />
      </LinkMenu>
    </Header>
  )
}

export default Header
