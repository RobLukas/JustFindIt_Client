import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
  typography: {
    fontFamily: ['Open Sans', 'sans-serif'].join(',')
  },
  overrides: {
    MuiButton: {
      root: {
        color: '#b7c4d0',
        backgroundColor: '#4d5052',
        minWidth: 40,
        marginRight: 15,
        boxShadow: 'none',
        textTransform: 'none',
        height: 35,
        fontSize: '12.6px',
        borderRadius: 20,
        alignItems: 'center',
        display: 'flex',
        position: 'relative',
        textDecoration: 'none',
        textAlign: 'center',
        letterSpacing: '0.5px',
        outline: 0,
        border: 'none',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          boxShadow:
            '0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2)'
        }
      },
      text: {
        padding: '0 12px'
      }
    },
    MuiSwitch: {
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
