import React from 'react'

import OfferItem from './OfferItem'
import { OfferListOfItems, LinkStyled } from './OfferListStyled'
import { OfferCointainer } from '../OfferStyled'

const OfferList = ({ offersList }) => {
  return (
    <OfferCointainer>
      <div style={{ position: 'relative' }}>
        <OfferListOfItems>
          {offersList.map(offerItem => {
            const { id } = offerItem
            return (
              <LinkStyled to={`/offers/${id}`}>
                <OfferItem {...offerItem} />
              </LinkStyled>
            )
          })}
        </OfferListOfItems>
      </div>
    </OfferCointainer>
  )
}

export default OfferList
