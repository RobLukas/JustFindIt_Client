import React from 'react'
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import { TileLayer } from 'react-leaflet'

import Marker from './Marker'
import { citiesGeoPosition } from '../../../api/categories'
import { darkModeMap, lightModeMap } from '../../../api/maps'
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
              <Marker key={uuidv4()} offerItem={offerItem} {...props} />
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
