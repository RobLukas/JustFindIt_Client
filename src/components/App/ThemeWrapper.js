import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './GlobalStyles';
import MuiTheme from '../../theme/muiTheme';
import { darkMode, lightMode } from '../../theme/themeMode';

const ThemeWrapper = ({ isLightMode, children }) => {
  const themeMode = isLightMode ? lightMode : darkMode;
  return (
    <MuiThemeProvider theme={MuiTheme}>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

const mapStateToProps = ({ themeMode }) => ({
  isLightMode: themeMode.isLightMode,
});

export default connect(mapStateToProps)(ThemeWrapper);
