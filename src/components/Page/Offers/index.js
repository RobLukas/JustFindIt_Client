import React from 'react'
import { connect } from 'react-redux'

import Header from '../../Container/Header'
import Filters from '../../Container/Filters'
import DesktopFilter from '../../Container/Filters/DesktopFilter'
import OfferList from '../../Container/Offers/OfferList'
import OfferItem from '../../Container/Offers/OfferDetails'
import Map from '../../Container/Map'

import offersData from '../../../api/offers'
import { filter } from '../../../api/filters'

const Offers = ({ cityCategory, technologyCategory, offerItem, ...props }) => {
  const filteredOffers = filter(offersData, cityCategory, technologyCategory)

  if (offerItem) {
    const { geoPosition } = offerItem

    return (
      <>
        <Header />
        <div style={{ flex: 1 }}>
          <DesktopFilter {...props} />
          <OfferItem offerItem={offerItem} {...props} />
          <Map
            offersList={filteredOffers}
            geoPosition={geoPosition}
            {...props}
          />
        </div>
      </>
    )
  }
  return (
    <>
      <Header />
      <div style={{ flex: 1 }}>
        <Filters {...props} />
        <OfferList offersList={filteredOffers} />
        <Map offersList={filteredOffers} {...props} />
      </div>
    </>
  )
}

const mapStateToProps = ({ filters }) => {
  const { cityCategory, technologyCategory } = filters
  return {
    cityCategory,
    technologyCategory
  }
}

export default connect(mapStateToProps)(Offers)
