import React from 'react'
import { Marker, Popup } from 'react-leaflet'

import createMarkerIcon from './createIconMarker'
import PopupBoxMessage from '../Popup'
import technologyIcons from '../../../../img/tech_icons'

export default ({ offerItem }) => {
  const { geoPosition, technologyIcon } = offerItem
  return (
    <Marker
      position={geoPosition}
      icon={createMarkerIcon(technologyIcons[technologyIcon])}
      onMouseOver={e => {
        e.target.openPopup()
      }}
      onMouseOut={e => {
        e.target.closePopup()
      }}
    >
      <Popup closeButton={false}>
        <PopupBoxMessage {...offerItem} />
      </Popup>
    </Marker>
  )
}
