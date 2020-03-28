import styled from 'styled-components'

const OfferCointainer = styled.div({
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

export { OfferCointainer }
