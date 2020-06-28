import offerList from './offers';
import { salaries } from './categories';

export const findOfferById = (offerId) =>
  offerList.filter((elem) => elem.id === offerId);

export const filter = (
  collection,
  citySelected,
  technologySelected,
  expLevel,
  minValue,
  maxValue
) => {
  let filteredCollection = collection;
  const { MinSalaryValue, MaxSalaryValue } = salaries;

  if (citySelected !== 'All') {
    filteredCollection = filteredCollection.filter(
      (item) => item.cityCategory === citySelected
    );
  }
  if (technologySelected !== 'All') {
    filteredCollection = filteredCollection.filter(
      (item) => item.technologyCategory === technologySelected
    );
  }
  if (expLevel !== 'All') {
    filteredCollection = filteredCollection.filter(
      (item) => item.experienceLevel === expLevel.toLowerCase()
    );
  }
  if (minValue !== MinSalaryValue) {
    filteredCollection = filteredCollection.filter(
      (item) => parseInt(item.salaryFrom) >= minValue
    );
  }
  if (maxValue !== MaxSalaryValue) {
    filteredCollection = filteredCollection.filter((item) => {
      return parseInt(item.salaryTo) <= maxValue;
    });
  }

  return filteredCollection;
};
