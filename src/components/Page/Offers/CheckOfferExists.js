import React from 'react'
import { findOfferById } from '../../../api/filters'
import { Redirect } from 'react-router-dom'

const CheckOfferExists = Component => {
  const redirect = ({ match, ...props }) => {
    const getOfferItem = match.params.offerId
      ? findOfferById(match.params.offerId)[0]
      : null

    if (!getOfferItem) {
      return <Redirect to={'/offers'} />
    }
    return <Component offerItem={getOfferItem} {...props} />
  }
  return redirect
}

export default CheckOfferExists
