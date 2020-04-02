import offerList from '../api/offers'

export default {
  offers: offerList,
  filters: {
    cityCategory: 'All',
    technologyCategory: 'All',
    salary: { minValue: 0, maxValue: 50 },
    expLevel: 'All'
  },
  themeMode: { isLightMode: false }
}
