import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle(({ theme }) => {
  return {
    body: {
      margin: 0,
      backgroundColor: theme.primary.background,
      fontFamily: ['Open Sans', 'Helvetica', 'Arial', 'sans-serif'],
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
    '.leaflet-popup-content': {
      margin: '0 !important'
    },
    '::-webkit-scrollbar': {
      width: 11,
      backgroundColor: 'rgba(0, 0, 0, 0.15)',
      borderRadius: 100
    },
    '::-webkit-scrollbar:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.25)'
    },
    /* Handle */
    '::-webkit-scrollbar-thumb': {
      borderRadius: 100,
      background: theme.scrollbar.background,
      minHeight: 13
    }
  }
})

export default GlobalStyles
