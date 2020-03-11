import L from 'leaflet'

const createIconMarker = iconSrc =>
  new L.Icon({
    iconUrl: iconSrc,
    iconRetinaUrl: iconSrc,
    iconAnchor: null,
    popupAnchor: [0, -28],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(40, 40),
    className: 'leaflet-marker-icon'
  })

export default createIconMarker
