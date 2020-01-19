import React from 'react'
import WorkOutlineIcon from '@material-ui/icons/WorkOutline'
import BusinessIcon from '@material-ui/icons/Business'
import MenuIcon from '@material-ui/icons/Menu'

import { StyledHeader, StyledLinkMenu, StyledLogo } from './header-styled'
import NavLink from './navLink/nav-link'
import logo from '../../img/justfindit_logo_name.png'

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo src={logo} alt="justfind.it" />
      <NavLink Icon={WorkOutlineIcon} link={'/'} desc={'Job offers'} />
      <NavLink Icon={BusinessIcon} link={'/'} desc={'Brand Stories'} />
      <StyledLinkMenu>
        <MenuIcon />
      </StyledLinkMenu>
    </StyledHeader>
  )
}

export default Header
