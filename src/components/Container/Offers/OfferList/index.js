import React from 'react'

import OfferItem from './OfferItem'
import {
  OfferListOfItems,
  LinkStyled,
  NoJobOfferContainer,
  NoJobOfferTitle
} from './OfferListStyled'
import { OfferCointainer } from '../OfferStyled'

const OfferList = ({ offersList }) => {
  const noOffers = offersList.length
  return (
    <OfferCointainer>
      <div style={{ position: 'relative' }}>
        {noOffers ? (
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
        ) : (
          <NoJobOfferContainer>
            <NoJobOfferTitle>
              {'Sorry, there are no job offers.'}
            </NoJobOfferTitle>
          </NoJobOfferContainer>
        )}
      </div>
    </OfferCointainer>
  )
}

export default OfferList
