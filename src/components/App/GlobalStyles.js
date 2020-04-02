import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle(({ theme }) => {
  return {
    body: {
      margin: 0,
      backgroundColor: theme.primary.background,
      fontFamily: '"Open Sans", sans-serif',
      fontWeight: 300
    },
    'div#root': {
      height: '100%',
      overflowX: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    },
    '.MuiIconButton-root:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.08) !important'
    },
    '.leaflet-container': {
      background: `${theme.primary.background} !important`,
      height: '100%',
      width: '100%'
    },
    '.leaflet-bar': {
      display: 'none'
    },
    '.leaflet-popup-content': {
      margin: '0 !important'
    },
    '::-webkit-scrollbar': {
      width: 11,
      backgroundColor: theme.scrollbar.background,
      borderRadius: 100
    },
    '::-webkit-scrollbar:hover': {
      backgroundColor: theme.scrollbar.hover
    },
    /* Handle */
    '::-webkit-scrollbar-thumb': {
      borderRadius: 100,
      background: theme.scrollbar.thumbBackground,
      minHeight: 13
    }
  }
})

export default GlobalStyles
