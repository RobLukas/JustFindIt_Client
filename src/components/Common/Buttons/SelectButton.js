import React from 'react'

import { SelectStyled } from './ButtonStyled'

export default function Select({ collection, value, onChange }) {
  const handleChange = e => {
    onChange(e.target.value)
  }

  return (
    <SelectStyled onChange={handleChange} value={value}>
      {collection.map(item => (
        <option>{item}</option>
      ))}
    </SelectStyled>
  )
}
