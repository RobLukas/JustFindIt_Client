import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
  typography: {
    fontFamily: ['Open Sans', 'sans-serif'].join(',')
  },
  overrides: {
    MuiSwitch: {
      switchBase: {
        color: '#F1F1F1'
      },
      track: {
        backgroundColor: '#a6a8a8',
        opacity: 1
      }
    },
    MuiSvgIcon: {
      root: {
        fill: '#99a1ab'
      }
    }
  }
})
