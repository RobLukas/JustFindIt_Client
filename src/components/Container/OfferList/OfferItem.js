import React from 'react'
import BusinessIcon from '@material-ui/icons/Business'
import PlaceIcon from '@material-ui/icons/Place'

import {
  OfferItemContainer,
  OfferItemContentStyled,
  OfferItemLinkStyled,
  OfferItemSidebarColorStyled,
  OfferItemLogoContainer,
  OfferItemLogoStyled,
  OfferItemDescContainer,
  OfferItemTitleContainer,
  OfferItemTitleWorkplaceStyled,
  OfferItemTitleSalaryContainer,
  OfferItemTitleSalaryStyled,
  OfferItemAddressContainer,
  OfferItemIconStyled,
  OfferItemAddressTitleStyled,
  OfferItemNewTitleStyled,
  OfferItemTechnologyContainer,
  OfferItemTechnologyTitleStyled
} from './OfferItemStyled'

import linearCollection from '../../../api/iconTechTheme'

const OfferItem = ({
  nameCompany,
  workplace,
  salary,
  street,
  city,
  logoCompany,
  technologyCategory,
  technologies
}) => {
  return (
    <>
      <OfferItemContainer>
        <OfferItemContentStyled>
          <OfferItemSidebarColorStyled
            backgroundColor={linearCollection[technologyCategory]}
          />
          <OfferItemLinkStyled>
            <OfferItemLogoContainer>
              <OfferItemLogoStyled src={logoCompany}></OfferItemLogoStyled>
            </OfferItemLogoContainer>
            <OfferItemDescContainer>
              <OfferItemTitleContainer>
                <OfferItemTitleWorkplaceStyled>
                  {workplace}
                </OfferItemTitleWorkplaceStyled>
                <OfferItemTitleSalaryContainer>
                  <OfferItemTitleSalaryStyled>
                    {salary}
                  </OfferItemTitleSalaryStyled>
                  <OfferItemNewTitleStyled>New</OfferItemNewTitleStyled>
                </OfferItemTitleSalaryContainer>
              </OfferItemTitleContainer>
              <OfferItemAddressContainer>
                <OfferItemIconStyled
                  style={{ fontSize: 14 }}
                  component={BusinessIcon}
                />
                <OfferItemAddressTitleStyled>
                  {nameCompany}
                </OfferItemAddressTitleStyled>
                <OfferItemIconStyled
                  style={{
                    fontSize: 14,
                    marginLeft: 20
                  }}
                  component={PlaceIcon}
                />
                <OfferItemAddressTitleStyled>
                  {`${street}, ${city}`}
                </OfferItemAddressTitleStyled>
                <OfferItemTechnologyContainer>
                  {technologies.map(technologyItem => (
                    <OfferItemTechnologyTitleStyled>
                      {technologyItem}
                    </OfferItemTechnologyTitleStyled>
                  ))}
                </OfferItemTechnologyContainer>
              </OfferItemAddressContainer>
            </OfferItemDescContainer>
          </OfferItemLinkStyled>
        </OfferItemContentStyled>
      </OfferItemContainer>
    </>
  )
}

export default OfferItem
