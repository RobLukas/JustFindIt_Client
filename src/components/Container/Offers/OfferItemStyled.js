import styled from 'styled-components'

const OfferMainStyled = styled.div({
  '@media (min-width: 1020px)': {
    overflowY: 'scroll',
    width: '55%',
    position: 'fixed',
    top: 191,
    bottom: 0,
    left: 0
  },
  '@media (min-width: 1500px)': {
    width: '50%'
  }
})

const OfferItemStyled = styled.div({
  width: '100%',
  display: 'flex'
})

const OfferItemUlStyled = styled.ul({
  padding: 0,
  margin: 0
})

const OfferItemLiStyled = styled.li({
  '@media (max-width: 1020px)': {
    height: 86
  },
  height: 77,
  cursor: 'pointer',
  backgroundColor: '#4d5052',
  borderRadius: 6,
  margin: '0 10px 12px 10px',
  padding: 0,
  display: 'flex'
})

const OfferItemLinkStyled = styled.a({
  display: 'flex',
  textDecoration: 'none',
  minWidth: 0,
  color: 'black',
  height: '100%',
  fontSize: 11,
  alignItems: 'center',
  flex: 1
})

const OfferIconStyled = styled.img({
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

const OfferItemTitle = styled.span({
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

const OfferItemTitlePrice = styled.span({
  color: '#51b368',
  verticalAlign: 'middle',
  textAlign: 'right',
  fontSize: 16,
  whiteSpace: 'nowrap'
})

const OfferItemNew = styled.span({
  '@media (max-width: 1020px)': {
    marginLeft: 'auto'
  },
  marginLeft: 21,
  color: '#ddd',
  border: '1px solid #777',
  backgroundColor: '#777',
  padding: '4px 7px',
  borderRadius: 16,
  whiteSpace: 'nowrap',
  verticalAlign: 'bottom',
  fontSize: 12
})

const OfferItemDivBlockTitles = styled.div({
  '@media (max-width: 1020px)': {
    display: 'block'
  },
  color: '#b7c4d0',
  display: 'flex',
  alignItems: 'center'
})

const OfferItemDivBlockAddress = styled.div({
  '@media (max-width: 1020px)': {
    display: 'none'
  },
  display: 'flex',
  alignItems: 'center',
  marginTop: 6
})

export {
  OfferItemStyled,
  OfferItemUlStyled,
  OfferItemLiStyled,
  OfferItemLinkStyled,
  OfferIconStyled,
  OfferItemTitle,
  OfferItemNew,
  OfferItemDivBlockTitles,
  OfferItemTitlePrice,
  OfferItemDivBlockAddress,
  OfferMainStyled
}
