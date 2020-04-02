import React from 'react'
import { connect } from 'react-redux'
import { TileLayer } from 'react-leaflet'

import Marker from './Marker'
import { citiesGeoPosition } from '../../../api/categories'
import {
  MapContainerStyled,
  MapInsideContainerStyled,
  MapLeafletStyled
} from './MapStyled'

const MapContainer = ({
  offersList,
  cityCategory,
  specificGeoPosition,
  isLightMode,
  ...props
}) => {
  let positionMap
  let zoomMap
  const lightModeMap =
    'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
  const darkModeMap =
    'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'

  if (specificGeoPosition) {
    positionMap = specificGeoPosition
    zoomMap = 14
  } else {
    const { geoPosition, zoom } = citiesGeoPosition.find(
      elem => elem.name === cityCategory
    )
    positionMap = geoPosition
    zoomMap = zoom
  }

  return (
    <>
      <MapContainerStyled>
        <MapInsideContainerStyled>
          <MapLeafletStyled center={positionMap} zoom={zoomMap} animate={true}>
            <TileLayer url={isLightMode ? lightModeMap : darkModeMap} />
            {offersList.map(offerItem => (
              <Marker offerItem={offerItem} {...props} />
            ))}
          </MapLeafletStyled>
        </MapInsideContainerStyled>
      </MapContainerStyled>
    </>
  )
}

const mapStateToProps = ({ themeMode, filters }) => {
  const { isLightMode } = themeMode
  const { cityCategory } = filters
  return {
    isLightMode,
    cityCategory
  }
}

export default connect(mapStateToProps)(MapContainer)
