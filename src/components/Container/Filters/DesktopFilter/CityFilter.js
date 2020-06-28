import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { FilterButtonStyled } from './DesktopFilterStyled';
import { cities } from '../../../../api/categories';
import { changeCityCategory } from '../../../../redux/actions/filters';
import DropDownIconDots from './DropDowns/DropDownIconDots';
import { DropDownListElement } from './DropDowns/DropDownStyled';

export const CityFilter = ({ cityCategory, changeCityCategory, history }) => {
  const limitButtonItems = 7;
  const dropdownItemsFrom = limitButtonItems + 1;

  const listOfButtonCities = cities.slice(0, limitButtonItems);
  const listOfDropDownCities = cities.slice(dropdownItemsFrom);
  const findCityInDropDown = listOfDropDownCities.find(
    (elem) => elem === cityCategory
  );

  if (findCityInDropDown) {
    listOfButtonCities.push(cityCategory);
    delete listOfDropDownCities[findCityInDropDown];
  }

  const onChangeCity = (city) => {
    history.push('/offers');
    changeCityCategory(city);
  };

  return (
    <>
      {listOfButtonCities.map((city) => {
        return (
          <FilterButtonStyled
            key={uuidv4()}
            selected={city === cityCategory}
            onClick={() => onChangeCity(city)}
          >
            {city}
          </FilterButtonStyled>
        );
      })}
      <DropDownIconDots>
        {listOfDropDownCities.map((city) => (
          <DropDownListElement
            key={uuidv4()}
            onClick={() => onChangeCity(city)}
          >
            {city}
          </DropDownListElement>
        ))}
      </DropDownIconDots>
    </>
  );
};

const mapStateToProps = ({ filters }) => {
  const { cityCategory } = filters;
  return {
    cityCategory,
  };
};

const mapDispatchToProps = { changeCityCategory };

export default connect(mapStateToProps, mapDispatchToProps)(CityFilter);
