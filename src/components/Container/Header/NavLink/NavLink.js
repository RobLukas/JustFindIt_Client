import React from './node_modules/react'

import { NavStyled, IconNavStyled } from './nav-link-styled'

export default function NavLink({ iconComponent: Icon, link, desc }) {
  return (
    <NavStyled href={link}>
      <IconNavStyled component={Icon} />
      <span>{desc}</span>
    </NavStyled>
  )
}
