import React from 'react'
import { connect } from 'react-redux'

import WorkOutlineIcon from '@material-ui/icons/WorkOutline'
import BusinessIcon from '@material-ui/icons/Business'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'

import NavLink from './NavLink'
import { HeaderStyled, MenuLinkStyled, LogoStyled } from './HeaderStyled'

import darkLogo from '../../../img/justfind-logo-dark.png'
import lightLogo from '../../../img/justfind-logo-light.png'

const Header = ({ isLightMode }) => {
  return (
    <HeaderStyled>
      <LogoStyled src={isLightMode ? lightLogo : darkLogo} alt="justfind.it" />
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

const mapStateToProps = ({ themeMode }) => {
  const { isLightMode } = themeMode
  return {
    isLightMode,
  }
}

export default connect(mapStateToProps)(Header)
