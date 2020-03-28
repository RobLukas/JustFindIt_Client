import React from 'react'

import HeadInfoContainer from './HeadInfo'
import {
  HeadContainer,
  HeadTilesStyled,
  HeadTileIconContainer,
  HeadTileFirstDesc,
  HeadTileSecondDesc,
  HeadTilesContainer,
  HeadTileCompanyLink,
  CompanyNameIcon,
  CompanySizeIcon,
  CompanyEMPTypeIcon,
  CompanySkillIcon,
  NewIcon
} from './HeadOfferDetailsStyled'

const HeadOfferDetails = ({ offerItem, ...props }) => {
  const {
    companyUrl,
    companyName,
    companySize,
    employmentType,
    experienceLevel
  } = offerItem

  return (
    <>
      <HeadContainer>
        <HeadInfoContainer offerItem={offerItem} {...props} />
        <HeadTilesContainer>
          <HeadTilesStyled>
            <HeadTileIconContainer>
              <CompanyNameIcon />
            </HeadTileIconContainer>
            <HeadTileCompanyLink href={companyUrl}>
              {companyName}
            </HeadTileCompanyLink>
            <HeadTileSecondDesc>{'Company name'}</HeadTileSecondDesc>
          </HeadTilesStyled>
          <HeadTilesStyled>
            <HeadTileIconContainer>
              <CompanySizeIcon />
            </HeadTileIconContainer>
            <HeadTileFirstDesc>{companySize}</HeadTileFirstDesc>
            <HeadTileSecondDesc>{'Company size'}</HeadTileSecondDesc>
          </HeadTilesStyled>
          <HeadTilesStyled>
            <HeadTileIconContainer>
              <CompanyEMPTypeIcon />
            </HeadTileIconContainer>
            <HeadTileFirstDesc>{employmentType}</HeadTileFirstDesc>
            <HeadTileSecondDesc>{'EMP. type'}</HeadTileSecondDesc>
          </HeadTilesStyled>
          <HeadTilesStyled>
            <HeadTileIconContainer>
              <CompanySkillIcon />
            </HeadTileIconContainer>
            <HeadTileFirstDesc>{experienceLevel}</HeadTileFirstDesc>
            <HeadTileSecondDesc>{'EXP. lvl'}</HeadTileSecondDesc>
          </HeadTilesStyled>
          <HeadTilesStyled>
            <HeadTileIconContainer>
              <NewIcon />
            </HeadTileIconContainer>
            <HeadTileFirstDesc>{'New'}</HeadTileFirstDesc>
            <HeadTileSecondDesc>{'Added'}</HeadTileSecondDesc>
          </HeadTilesStyled>
        </HeadTilesContainer>
      </HeadContainer>
    </>
  )
}

export default HeadOfferDetails
