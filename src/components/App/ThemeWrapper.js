import React from 'react'
import { connect } from 'react-redux'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from './GlobalStyles'
import MuiTheme from '../../theme/muiTheme'
import { darkMode } from '../../theme/themeMode'

const ThemeWrapper = ({ children }) => {
  return (
    <MuiThemeProvider theme={MuiTheme}>
      <ThemeProvider theme={darkMode}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </MuiThemeProvider>
  )
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(ThemeWrapper)
