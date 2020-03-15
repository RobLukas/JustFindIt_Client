import React from 'react'

import {
  OfferItemStyled,
  OfferItemUlStyled,
  OfferItemLiStyled,
  OfferMainStyled
} from './OfferItemStyled'

import OfferItemElement from './OfferItemElement'

export default function OfferItem({ offersList }) {
  return (
    <OfferMainStyled>
      <div style={{ position: 'relative' }}>
        <OfferItemUlStyled>
          {offersList.map(offerItem => {
            return (
              <OfferItemLiStyled>
                <OfferItemStyled>
                  <OfferItemElement {...offerItem} />
                </OfferItemStyled>
              </OfferItemLiStyled>
            )
          })}
        </OfferItemUlStyled>
      </div>
    </OfferMainStyled>
  )
}
