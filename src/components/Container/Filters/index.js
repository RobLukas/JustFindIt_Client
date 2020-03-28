import React from 'react'

import MobileFilter from './MobileFilter'
import DesktopFilter from './DesktopFilter'

const Filters = props => {
  return (
    <>
      {/* Mobile */}
      <MobileFilter />

      {/* Desktop */}
      <DesktopFilter {...props} />
    </>
  )
}

export default Filters
