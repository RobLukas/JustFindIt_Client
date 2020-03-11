import React from 'react'
import { connect } from 'react-redux'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import { ThemeProvider } from 'styled-components'

import MuiTheme from '../../theme/mui-theme'
import { darkMode } from '../../theme/theme-mode'

const ThemeWrapper = ({ children }) => {
  return (
    <MuiThemeProvider theme={MuiTheme}>
      <ThemeProvider theme={darkMode}>{children}</ThemeProvider>
    </MuiThemeProvider>
  )
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(ThemeWrapper)
