import React from 'react'

import { NavStyled, IconNavStyled } from './NavLinkStyled'

const NavLink = ({ iconComponent: Icon, link, desc }) => {
  return (
    <NavStyled href={link}>
      <IconNavStyled component={Icon} />
      <span>{desc}</span>
    </NavStyled>
  )
}

export default NavLink
