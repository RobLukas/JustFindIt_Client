import React from 'react'
import { connect } from 'react-redux'

import Header from '../../Container/Header'
import Filter from '../../Container/Filter'
import OfferList from '../../Container/OfferList'
import Map from '../../Container/Map'

import offersData from '../../../api/offers'
import { filter } from '../../../api/filters'

const Offers = ({ cityCategory, technologyCategory }) => {
  const filteredOffers = filter(offersData, cityCategory, technologyCategory)

  return (
    <>
      <Header />
      <div style={{ flex: 1 }}>
        <Filter />
        <OfferList offersList={filteredOffers} />
        <Map offersList={filteredOffers} />
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
