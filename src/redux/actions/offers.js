import { LOAD_OFFERS } from '../constants/offers'

export const loadOffers = offers => ({
  type: LOAD_OFFERS,
  offers
})
