import React from 'react'

import headerLinearBg from './headerLinearBackground'
import headerBackground from '../../../../../../img/header_background.png'
import {
  HeadInfoContainer,
  BackButtonStyled,
  ArroBackIconStyled,
  InfoContainer,
  CompanyLogoContainer,
  CompanyLogoInnerContainer,
  CompanyLogoDivStyled,
  CompanyLogoImageStyled,
  InfoTextContainer,
  InfoSalaryStyled,
  InfoTitleStyled,
  InfoAddressStyled,
  InfoTitleContainer,
  ApplyButtonStyled,
  ApplyTitleContainer,
  ApplyIconStyled
} from './HeadInfoStyled'

const HeadInfo = ({ offerItem, history }) => {
  const {
    workplace,
    salaryFrom,
    salaryTo,
    street,
    city,
    salaryCurrency,
    companyLogo,
    technologyCategory
  } = offerItem

  const backLink = () => history.push('/offers')

  return (
    <>
      <HeadInfoContainer
        backgroundImg={headerBackground}
        backgroundLinear={headerLinearBg[technologyCategory]}
      >
        <BackButtonStyled onClick={backLink}>
          <ArroBackIconStyled />
        </BackButtonStyled>
        <InfoContainer>
          <CompanyLogoContainer>
            <CompanyLogoInnerContainer>
              <CompanyLogoDivStyled>
                <CompanyLogoImageStyled src={companyLogo} />
              </CompanyLogoDivStyled>
            </CompanyLogoInnerContainer>
          </CompanyLogoContainer>
          <InfoTextContainer>
            <InfoSalaryStyled>{`${salaryFrom} - ${salaryTo} ${salaryCurrency} /month`}</InfoSalaryStyled>
            <InfoTitleContainer>
              <InfoTitleStyled>{workplace}</InfoTitleStyled>
            </InfoTitleContainer>
            <InfoAddressStyled>{`${street}, ${city}`}</InfoAddressStyled>
          </InfoTextContainer>
          <ApplyButtonStyled>
            <ApplyTitleContainer>
              <ApplyIconStyled />
              {'Apply'}
            </ApplyTitleContainer>
          </ApplyButtonStyled>
        </InfoContainer>
      </HeadInfoContainer>
    </>
  )
}

export default HeadInfo
