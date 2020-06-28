import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { SelectStyled } from './ButtonStyled';

export default function Select({ collection, value, onChange }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <SelectStyled onChange={handleChange} value={value}>
      {collection.map((item) => (
        <option key={uuidv4()}>{item}</option>
      ))}
    </SelectStyled>
  );
}
