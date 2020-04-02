import React from 'react'
import WorkOutlineIcon from '@material-ui/icons/WorkOutline'
import BusinessIcon from '@material-ui/icons/Business'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'

import NavLink from './NavLink'
import { HeaderStyled, MenuLinkStyled, LogoStyled } from './HeaderStyled'
import logo from '../../../img/justfindit_logo_name.png'

const Header = () => {
  return (
    <HeaderStyled>
      <LogoStyled src={logo} alt="justfind.it" />
      <NavLink iconComponent={WorkOutlineIcon} link={'/'} desc={'Job offers'} />
      <NavLink iconComponent={BusinessIcon} link={'/'} desc={'Brand Stories'} />
      <MenuLinkStyled>
        <IconButton>
          <MenuIcon />
        </IconButton>
      </MenuLinkStyled>
    </HeaderStyled>
  )
}

export default Header
