import React from 'react'
import styled from 'styled-components'

export default function NavLink({ Icon, link, desc }) {
  const NavIcon = styled(Icon)({
    marginRight: '12px'
  })
  const Nav = styled.a({
    margin: '0 20px 0 20px',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#99a1ab',
    '&:hover': {
      color: '#ff4081'
    }
  })

  return (
    <Nav href={link}>
      <NavIcon />
      <span>{desc}</span>
    </Nav>
  )
}
