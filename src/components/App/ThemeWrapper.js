import React from 'react'
import { connect } from 'react-redux'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from './GlobalStyles'
import MuiTheme from '../../theme/muiTheme'
import { darkMode, lightMode } from '../../theme/themeMode'

const ThemeWrapper = props => {
  const themeMode = props.isLightMode ? lightMode : darkMode
  return (
    <MuiThemeProvider theme={MuiTheme}>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        {props.children}
      </ThemeProvider>
    </MuiThemeProvider>
  )
}

const mapStateToProps = ({ themeMode }) => ({
  isLightMode: themeMode.isLightMode
})

export default connect(mapStateToProps)(ThemeWrapper)
