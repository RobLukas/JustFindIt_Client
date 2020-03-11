import React from 'react'
import WorkOutlineIcon from '@material-ui/icons/WorkOutline'
import BusinessIcon from '@material-ui/icons/Business'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'

import { StyledHeader, StyledLinkMenu, StyledLogo } from './HeaderStyled'
import NavLink from './NavLink/NavLink'
import logo from '../../img/justfindit_logo_name.png'

export const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo src={logo} alt="justfind.it" />
      <NavLink iconComponent={WorkOutlineIcon} link={'/'} desc={'Job offers'} />
      <NavLink iconComponent={BusinessIcon} link={'/'} desc={'Brand Stories'} />
      <StyledLinkMenu>
        <IconButton style={{ color: '#b7c4d0' }}>
          <MenuIcon />
        </IconButton>
      </StyledLinkMenu>
    </StyledHeader>
  )
}
