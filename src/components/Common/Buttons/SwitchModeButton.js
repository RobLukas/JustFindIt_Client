import React from 'react';
import { connect } from 'react-redux';

import Switch from '@material-ui/core/Switch';

import { SunnyIconStyled, BrightnessIconStyled } from './ButtonStyled';
import { switchThemeMode } from '../../../redux/actions/themeMode';

const SwitchModeButton = ({ isLightMode, switchThemeMode }) => {
  const handleSwitchChange = (e) => {
    switchThemeMode(e.target.checked);
  };

  return (
    <>
      <div style={{ marginLeft: 'auto' }}>
        <div className="switch">
          <label>
            <SunnyIconStyled />
            <Switch
              checked={!isLightMode || false}
              onChange={handleSwitchChange}
              color={'default'}
            />
            <BrightnessIconStyled />
          </label>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ themeMode }) => ({
  isLightMode: themeMode.isLightMode,
});

const mapDispatchToProps = { switchThemeMode };

export default connect(mapStateToProps, mapDispatchToProps)(SwitchModeButton);
