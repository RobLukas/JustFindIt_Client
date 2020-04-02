import defaultState from '../defaultState'
import { LOAD_OFFERS } from '../constants/offers'

export default (state = defaultState.offers, action) => {
  const { type, offers } = action

  switch (type) {
    case LOAD_OFFERS: {
      console.log('offers: ', offers)
      return {
        ...state,
        data: offers
      }
    }
    default:
      return state
  }
}
