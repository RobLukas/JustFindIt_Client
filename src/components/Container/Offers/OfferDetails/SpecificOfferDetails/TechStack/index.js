import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import levelCollection from './levelCollection';

import {
  TechStackContainer,
  TechStackContent,
  TechStackSkillPointContainer,
  TechStackSkillPoint,
  TechStackName,
  TechStackSkillName,
} from './TechStackStyled';

const TechStackItems = ({ techDesc }) => {
  const { name, level } = techDesc;
  const numStars = 5;

  function isSelected(level, index) {
    return level - 1 >= index;
  }

  return (
    <>
      <TechStackContainer>
        <TechStackContent>
          <TechStackSkillPointContainer>
            {[...Array(numStars)].map((elem, index) => (
              <TechStackSkillPoint
                key={uuidv4()}
                selected={isSelected(level, index)}
              />
            ))}
          </TechStackSkillPointContainer>
          <TechStackName>{name}</TechStackName>
          <TechStackSkillName>{levelCollection[level]}</TechStackSkillName>
        </TechStackContent>
      </TechStackContainer>
    </>
  );
};

export default TechStackItems;
