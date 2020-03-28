import styled from 'styled-components'
import { Link } from 'react-router-dom'

const OfferListOfItems = styled.ul({
  padding: 0,
  margin: 0
})

const LinkStyled = styled(Link)({
  textDecoration: 'none',
  '&:focus, &:hover, &:visited, &:link, &:active': {
    textDecoration: 'none'
  }
})

export { OfferListOfItems, LinkStyled }
