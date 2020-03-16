import React from 'react'

import { OfferListCointainer, OfferListOfItems } from './OfferListStyled'

import OfferItem from './OfferItem'

const OfferList = ({ offersList }) => {
  return (
    <OfferListCointainer>
      <div style={{ position: 'relative' }}>
        <OfferListOfItems>
          {offersList.map(offerItem => {
            return <OfferItem {...offerItem} />
          })}
        </OfferListOfItems>
      </div>
    </OfferListCointainer>
  )
}

export default OfferList
