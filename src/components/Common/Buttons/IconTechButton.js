import React from 'react'

import { techIcons, backgroundLinear } from '../../../api/filters'
import {
  TitleTechnologySpanStyled,
  TechnologyIconStyled,
  IconDivInnerStyled,
  IconTechStyled
} from './ButtonStyled'

export default function IconButton({
  technology,
  onChange,
  selected,
  isSelectedAll
}) {
  const { path, width, widthBox, heightBox } = techIcons[technology]

  const handleChange = e => {
    onChange(technology)
  }

  return (
    <>
      <TechnologyIconStyled>
        <IconDivInnerStyled
          isSelectedAll={isSelectedAll}
          selected={selected}
          linearGradient={backgroundLinear[technology]}
          onClick={handleChange}
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
  )
}
