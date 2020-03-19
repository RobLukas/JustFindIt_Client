import React from 'react'
import { connect } from 'react-redux'
import { TileLayer } from 'react-leaflet'

import Marker from './Marker'
import {
  MapContainerStyled,
  MapInsideContainerStyled,
  MapLeafletStyled
} from './MapStyled'

const position = [52.237049, 19.17511]
const MapContainer = ({ offersList, isLightMode }) => {
  const lightModeMap =
    'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
  const darkModeMap =
    'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'

  return (
    <>
      <MapContainerStyled>
        <MapInsideContainerStyled>
          <MapLeafletStyled center={position} zoom={6}>
            <TileLayer url={isLightMode ? lightModeMap : darkModeMap} />
            {offersList.map(offerItem => (
              <Marker offerItem={offerItem}></Marker>
            ))}
          </MapLeafletStyled>
        </MapInsideContainerStyled>
      </MapContainerStyled>
    </>
  )
}

const mapStateToProps = ({ themeMode }) => {
  const { isLightMode } = themeMode
  return {
    isLightMode
  }
}

export default connect(mapStateToProps)(MapContainer)
