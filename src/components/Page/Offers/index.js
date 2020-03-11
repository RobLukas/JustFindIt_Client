import React from 'react'
import { connect } from 'react-redux'

import { Header } from '../../index'
import Filter from '../../Common/Filter'
import OfferItem from '../../Common/OfferItem'
import Map from '../common/map'
import offersData from '../../../api/offers'
import { filter } from '../../../api/filters'

const Offers = ({ cityCategory, technologyCategory }) => {
  const filteredOffers = filter(offersData, cityCategory, technologyCategory)

  return (
    <>
      <Header />
      <div style={{ flex: 1 }}>
        <Filter />
        <OfferItem offersList={filteredOffers} />
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
