import styled from 'styled-components'
import { Icon } from '@material-ui/core'

const OfferItemContainer = styled.li(({ theme }) => ({
  '@media (max-width: 1020px)': {
    height: 86
  },
  height: 77,
  cursor: 'pointer',
  backgroundColor: theme.secondary.background,
  borderRadius: 6,
  margin: '0 10px 12px 10px',
  padding: 0,
  display: 'flex'
}))

const OfferItemContentStyled = styled.div({
  width: '100%',
  display: 'flex'
})

const OfferItemSidebarColorStyled = styled.div(props => ({
  background: `linear-gradient(${props.backgroundColor})`,
  width: 5,
  borderRadius: '6px 0 0 6px'
}))

const OfferItemLinkStyled = styled.a({
  display: 'flex',
  textDecoration: 'none',
  minWidth: 0,
  height: '100%',
  fontSize: 11,
  alignItems: 'center',
  flex: 1
})

const OfferItemLogoContainer = styled.div({
  flex: '0 0 112px',
  position: 'relative'
})

const OfferItemLogoStyled = styled.img({
  position: 'absolute',
  border: 0,
  top: '50%',
  left: '50%',
  maxHeight: 40,
  maxWidth: 85,
  transform: 'translate(-50%, -50%)',
  display: 'block',
  borderRadius: 5
})

const OfferItemDescContainer = styled.div({
  width: '100%',
  paddingRight: 20,
  minWidth: 0
})

const OfferItemTitleContainer = styled.div(({ theme }) => ({
  '@media (max-width: 1020px)': {
    display: 'block'
  },
  color: theme.primary.color,
  display: 'flex',
  alignItems: 'center'
}))

const OfferItemTitleWorkplaceStyled = styled.span({
  '@media (max-width: 1020px)': {
    whiteSpace: 'initial',
    overflow: 'initial',
    textOverflow: 'initial'
  },
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  fontSize: 16,
  margin: '0 5px 0 0',
  fontWeight: 600,
  lineHeight: '23px'
})

const OfferItemTitleSalaryContainer = styled.div({
  marginLeft: 'auto',
  display: 'flex',
  alignItems: 'center'
})

const OfferItemTitleSalaryStyled = styled.span({
  '@media (max-width: 1020px)': {
    lineHeight: '11px'
  },
  color: '#51b368',
  verticalAlign: 'middle',
  textAlign: 'right',
  fontSize: 16,
  whiteSpace: 'nowrap'
})

const OfferItemAddressContainer = styled.div({
  '@media (max-width: 1020px)': {
    display: 'none'
  },
  display: 'flex',
  alignItems: 'center',
  marginTop: 6
})

const OfferItemIconStyled = styled(Icon)(({ theme }) => ({
  verticalAlign: 'text-top',
  fontSize: 14
}))

const OfferItemAddressTitleStyled = styled.span(({ theme }) => ({
  verticalAlign: 'middle',
  textAlign: 'center',
  color: theme.secondary.color,
  marginLeft: 3,
  fontSize: 11
}))

const OfferItemNewTitleStyled = styled.span(({ theme }) => ({
  '@media (max-width: 1020px)': {
    marginLeft: 'auto'
  },
  marginLeft: 21,
  color: theme.offers.newTitle.color,
  backgroundColor: theme.offers.newTitle.background,
  padding: '4px 7px',
  borderRadius: 16,
  whiteSpace: 'nowrap',
  fontWeight: 400,
  verticalAlign: 'bottom',
  fontSize: 12
}))

const OfferItemTechnologyContainer = styled.div({
  marginLeft: 'auto',
  whiteSpace: 'nowrap',
  flex: 1,
  display: 'flex',
  justifyContent: 'flex-end',
  overflow: 'hidden'
})

const OfferItemTechnologyTitleStyled = styled.span(({ theme }) => ({
  color: theme.primary.color,
  border: `1px solid ${theme.offers.techTitle.border}`,
  backgroundColor: theme.offers.techTitle.background,
  display: 'inline-block',
  marginLeft: 6,
  borderRadius: 16,
  textTransform: 'lowercase',
  padding: '4px 7px',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  minWidth: '1ch'
}))

export {
  OfferItemContainer,
  OfferItemContentStyled,
  OfferItemSidebarColorStyled,
  OfferItemLinkStyled,
  OfferItemLogoStyled,
  OfferItemLogoContainer,
  OfferItemDescContainer,
  OfferItemTitleContainer,
  OfferItemTitleWorkplaceStyled,
  OfferItemTitleSalaryContainer,
  OfferItemTitleSalaryStyled,
  OfferItemAddressContainer,
  OfferItemIconStyled,
  OfferItemAddressTitleStyled,
  OfferItemNewTitleStyled,
  OfferItemTechnologyContainer,
  OfferItemTechnologyTitleStyled
}
