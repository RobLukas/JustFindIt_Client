import React from 'react';

import { techIcons, backgroundLinear } from '../../../api/techIcon';
import {
  TitleTechnologySpanStyled,
  TechnologyIconStyled,
  IconDivInnerStyled,
  IconTechStyled,
} from './ButtonStyled';

export default function IconButton({
  technology,
  onClick,
  selected,
  isSelectedAll,
}) {
  const { path, width, widthBox, heightBox } = techIcons[technology];

  return (
    <>
      <TechnologyIconStyled>
        <IconDivInnerStyled
          isSelectedAll={isSelectedAll}
          selected={selected}
          linearGradient={backgroundLinear[technology]}
          onClick={onClick}
        >
          <IconTechStyled
            width={width}
            height={heightBox}
            viewBox={`0 0 ${widthBox} ${heightBox}`}
          >
            <path d={path} />
          </IconTechStyled>
        </IconDivInnerStyled>
        <TitleTechnologySpanStyled>{technology}</TitleTechnologySpanStyled>
      </TechnologyIconStyled>
    </>
  );
}
