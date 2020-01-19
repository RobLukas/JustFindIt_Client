import React from 'react'

import styled from './nav-link-styled'

export default function NavLink({ Icon, link, desc }) {
  const { StyledNav, StyledNavIcon } = styled(Icon)
  return (
    <StyledNav href={link}>
      <StyledNavIcon />
      <span>{desc}</span>
    </StyledNav>
  )
}
