import L from 'leaflet'

// import styled, { keyframes, css } from 'styled-components'

// const bounceMarker = keyframes`
//   0% { transform: translateY(0); }
//   50% { transform: translateY(-100px); }
//   100% { transform: translateY(0); }
// `

// const animationRule = css`
//   ${bounceMarker} 2s ease-in-out infinite;
// `

// const MarkerStyled = styled(Marker)(props => ({
//   animation: props.animation ? animationRule : ''
//   // animationName: bounceMarker,
//   // animationTimingFunction: 'ease-in-out'
// }))

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

// const createAnimationMarker = geoPosition =>
//   new L.animatedMarker(geoPosition, {
//     icon: createIconMarker()
//   })

export { createIconMarker }
