import React from 'react'

import HeadOfferDetails from './HeadOfferDetails'
import SpecificOfferDetails from './SpecificOfferDetails'
import TechStackItems from './SpecificOfferDetails/TechStack'
import { OfferCointainer } from '../OfferStyled'
import { OfferDetailsContainer } from './OfferDetailsStyled'
import Description from './SpecificOfferDetails/Description'

const OfferList = ({ offerItem, ...props }) => {
  const { skills, body } = offerItem

  return (
    <OfferCointainer>
      <OfferDetailsContainer>
        <HeadOfferDetails offerItem={offerItem} {...props} />
        <SpecificOfferDetails titleName={'Tech Stack'}>
          {skills.map(techItemDesc => (
            <TechStackItems techDesc={techItemDesc} />
          ))}
        </SpecificOfferDetails>
        <SpecificOfferDetails titleName={'Description'}>
          <Description htmlBody={body} />
        </SpecificOfferDetails>
      </OfferDetailsContainer>
    </OfferCointainer>
  )
}

export default OfferList
