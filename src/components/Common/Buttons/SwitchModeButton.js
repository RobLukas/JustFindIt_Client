import React from 'react'

import Switch from '@material-ui/core/Switch'

import { SunnyIconStyled, BrightnessIconStyled } from './ButtonStyled'

export default function SwitchModeButton() {
  return (
    <div style={{ marginLeft: 'auto' }}>
      <div className="switch">
        <label>
          <SunnyIconStyled />
          <Switch defaultChecked color={'default'} />
          <BrightnessIconStyled />
        </label>
      </div>
    </div>
  )
}
