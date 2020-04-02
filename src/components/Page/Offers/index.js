import React from 'react'
import { connect } from 'react-redux'

import Header from '../../Container/Header'
import Filters from '../../Container/Filters'
import DesktopFilter from '../../Container/Filters/DesktopFilter'
import OfferList from '../../Container/Offers/OfferList'
import OfferItem from '../../Container/Offers/OfferDetails'
import Map from '../../Container/Map'

import { filter as filterOffers } from '../../../api/filters'

const Offers = ({
  offers,
  offerItem,
  cityCategory,
  technologyCategory,
  expLevel,
  minValue,
  maxValue,
  ...props
}) => {
  const filteredOffers = filterOffers(
    offers,
    cityCategory,
    technologyCategory,
    expLevel,
    minValue,
    maxValue
  )

  const getOfferView = () => {
    if (offerItem) {
      return (
        <>
          <DesktopFilter {...props} />
          <OfferItem offerItem={offerItem} {...props} />
        </>
      )
    } else {
      return (
        <>
          <Filters {...props} />
          <OfferList offersList={filteredOffers} />
        </>
      )
    }
  }

  return (
    <>
      <Header />
      <div style={{ flex: 1 }}>
        {getOfferView()}
        <Map
          offersList={filteredOffers}
          specificGeoPosition={offerItem ? offerItem.geoPosition : undefined}
          {...props}
        />
      </div>
    </>
  )
}

const mapStateToProps = ({ filters, offers }) => {
  const { cityCategory, technologyCategory, expLevel } = filters
  const { minValue, maxValue } = filters.salary

  return {
    offers,
    cityCategory,
    technologyCategory,
    expLevel,
    minValue,
    maxValue
  }
}

export default connect(mapStateToProps)(Offers)
