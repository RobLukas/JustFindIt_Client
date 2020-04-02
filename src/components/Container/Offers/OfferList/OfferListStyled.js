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

const NoJobOfferContainer = styled.div({
  display: 'flex',
  position: 'absolute',
  justifyContent: 'center',
  alignItems: 'flex-end',
  fontSize: 14,
  left: 0,
  top: 0,
  height: 70,
  width: '100%'
})

const NoJobOfferTitle = styled.span(({ theme }) => ({
  color: theme.secondary.color
}))

export { OfferListOfItems, LinkStyled, NoJobOfferContainer, NoJobOfferTitle }
