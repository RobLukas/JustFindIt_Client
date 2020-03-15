import React from 'react'

import MobileFilter from './MobileFilter'
import DesktopFilter from './DesktopFilter'

const Filter = () => {
  return (
    <>
      {/* Mobile */}
      <MobileFilter />

      {/* Desktop */}
      <DesktopFilter />
    </>
  )
}

export default Filter
