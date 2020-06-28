import React from 'react'
import { v4 as uuidv4 } from 'uuid';

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
                <LinkStyled key={uuidv4()} to={`/offers/${id}`}>
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
