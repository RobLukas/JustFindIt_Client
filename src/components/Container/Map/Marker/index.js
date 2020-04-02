import React from 'react'
import { Marker, Popup } from 'react-leaflet'

import { createIconMarker } from './createIconMarker'
import PopupBoxMessage from '../Popup'
import technologyIcons from '../../../../img/tech_icons'

const MarkerMap = ({ offerItem, history }) => {
  const { id, geoPosition, technologyIcon } = offerItem

  function handleClick() {
    history.push(`/offers/${id}`)
  }

  return (
    <Marker
      position={geoPosition}
      icon={createIconMarker(technologyIcons[technologyIcon])}
      onMouseOver={e => {
        e.target.openPopup()
      }}
      onMouseOut={e => {
        e.target.closePopup()
      }}
      onClick={handleClick}
    >
      <Popup closeButton={false}>
        <PopupBoxMessage {...offerItem} />
      </Popup>
    </Marker>
  )
}

export default MarkerMap
