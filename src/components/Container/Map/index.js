import React from 'react'
import { TileLayer } from 'react-leaflet'

import Marker from './Marker'
import {
  MapContainerStyled,
  MapInsideContainerStyled,
  MapLeafletStyled
} from './MapStyled'

const position = [52.237049, 19.17511]
export default function MapComponent({ offersList }) {
  return (
    <>
      <MapContainerStyled>
        <MapInsideContainerStyled>
          <MapLeafletStyled center={position} zoom={6}>
            {/* <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png" /> */}
            <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />
            {offersList.map(offerItem => (
              <Marker offerItem={offerItem}></Marker>
            ))}
          </MapLeafletStyled>
        </MapInsideContainerStyled>
      </MapContainerStyled>
    </>
  )
}
