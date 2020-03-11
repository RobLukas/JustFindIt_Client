import React from './node_modules/react'

import FilterMobile from './MobileFilter'
import FilterDesktop from './DesktopFilter'

export default function Filter() {
  return (
    <>
      {/* Mobile */}
      <FilterMobile />

      {/* Desktop */}
      <FilterDesktop />
    </>
  )
}
