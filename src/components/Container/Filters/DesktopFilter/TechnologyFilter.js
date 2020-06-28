import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import IconButton from '../../../Common/Buttons/IconTechButton';
import { technologies } from '../../../../api/categories';
import { changeTechnologyCategory } from '../../../../redux/actions/filters';
import { FilterButtonStyled } from './DesktopFilterStyled';

const TechnologyFilter = ({
  technologyCategory,
  changeTechnologyCategory,
  history,
}) => {
  const handleClickTechnology = (technology) => {
    history.push('/offers');
    changeTechnologyCategory(technology);
  };

  return (
    <>
      {technologies.map((technology) => {
        if (technology === 'All') {
          return (
            <FilterButtonStyled
              key={uuidv4()}
              selected={technology === technologyCategory}
              onClick={() => handleClickTechnology(technology)}
            >
              {'All'}
            </FilterButtonStyled>
          );
        }
        return (
          <IconButton
            key={uuidv4()}
            isSelectedAll={technologyCategory === 'All'}
            selected={technology === technologyCategory}
            technology={technology}
            onClick={() => handleClickTechnology(technology)}
          />
        );
      })}
    </>
  );
};

const mapStateToProps = ({ filters }) => {
  const { technologyCategory } = filters;
  return {
    technologyCategory,
  };
};

const mapDispatchToProps = { changeTechnologyCategory };

export default connect(mapStateToProps, mapDispatchToProps)(TechnologyFilter);
