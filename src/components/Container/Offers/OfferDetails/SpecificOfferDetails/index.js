import React from 'react'
import {
  OfferDescContainer,
  OfferDescTitle,
  OfferDescSpecificationContainer,
  OfferDescSpecificationContent
} from './SpecificOfferDetailsStyled'

const SpecificOfferDetails = ({ titleName, children }) => {
  return (
    <>
      <OfferDescContainer>
        <OfferDescTitle>{titleName}</OfferDescTitle>
        <OfferDescSpecificationContainer>
          <OfferDescSpecificationContent>
            {children}
          </OfferDescSpecificationContent>
        </OfferDescSpecificationContainer>
      </OfferDescContainer>
    </>
  )
}

export default SpecificOfferDetails
