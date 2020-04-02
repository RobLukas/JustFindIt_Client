import { Map } from 'react-leaflet'
import styled from 'styled-components'

const MapContainerStyled = styled.div({
  '@media (max-width: 1019px)': {
    display: 'none'
  },
  '@media (min-width: 1500px)': {
    width: '50%'
  },
  width: '45%',
  position: 'fixed',
  top: 191,
  right: 0,
  bottom: 0
})

const MapLeafletStyled = styled(Map)({
  position: 'relative',
  outline: 'none'
})

const MapInsideContainerStyled = styled.div({
  height: '100%',
  width: '100%'
})

export { MapContainerStyled, MapInsideContainerStyled, MapLeafletStyled }
