import React from './node_modules/react'
import BusinessIcon from './node_modules/@material-ui/icons/Business'
import PlaceIcon from './node_modules/@material-ui/icons/Place'

import {
  OfferItemLinkStyled,
  OfferIconStyled,
  OfferItemTitle,
  OfferItemNew,
  OfferItemDivBlockTitles,
  OfferItemTitlePrice,
  OfferItemDivBlockAddress
} from './offer-item-styled'
import linearCollection from './CollectionLineargradient'

export default function OfferItemElement({
  nameCompany,
  workplace,
  salary,
  street,
  city,
  logoCompany,
  technologyCategory,
  technologies
}) {
  return (
    <>
      <div
        style={{
          width: 5,
          borderRadius: '6px 0 0 6px',
          background: `linear-gradient(${linearCollection[technologyCategory]})`
        }}
      />
      <OfferItemLinkStyled>
        <div
          style={{
            flex: '0 0 112px',
            position: 'relative'
          }}
        >
          <OfferIconStyled src={logoCompany}></OfferIconStyled>
        </div>
        <div
          style={{
            width: '100%',
            paddingRight: 20,
            minWidth: 0
          }}
        >
          <OfferItemDivBlockTitles>
            <OfferItemTitle>{workplace}</OfferItemTitle>
            <div
              style={{
                marginLeft: 'auto',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <span style={{ lineHeight: '11px' }}>
                <OfferItemTitlePrice>{salary}</OfferItemTitlePrice>
              </span>
              <OfferItemNew>New</OfferItemNew>
            </div>
          </OfferItemDivBlockTitles>
          <OfferItemDivBlockAddress>
            <span
              style={{
                color: '#b7c4d0',
                whiteSpace: 'nowrap'
              }}
            >
              <BusinessIcon
                style={{
                  verticalAlign: 'text-top',
                  color: '#c7ced6',
                  fontSize: 14
                }}
              ></BusinessIcon>
              <span
                style={{
                  verticalAlign: 'middle',
                  textAlign: 'center',
                  marginLeft: 3,
                  whiteSpace: 'nowrap',
                  fontSize: 11
                }}
              >
                {nameCompany}
              </span>
              <PlaceIcon
                style={{
                  verticalAlign: 'text-top',
                  color: '#c7ced6',
                  fontSize: 14,
                  marginLeft: 20
                }}
              ></PlaceIcon>
              <span
                style={{
                  verticalAlign: 'middle',
                  textAlign: 'center',
                  marginLeft: 3,
                  whiteSpace: 'nowrap',
                  fontSize: 11
                }}
              >
                {`${street}, ${city}`}
              </span>
            </span>
            <div
              style={{
                marginLeft: 'auto',
                whiteSpace: 'nowrap',
                flex: 1,
                display: 'flex',
                justifyContent: 'flex-end',
                overflow: 'hidden'
              }}
            >
              {technologies.map(technologyItem => (
                <span
                  style={{
                    color: '#b7c4d0',
                    border: '1px solid #393939',
                    backgroundColor: '#393939',
                    display: 'inline-block',
                    marginLeft: 6,
                    borderRadius: 16,
                    textTransform: 'lowercase',
                    padding: '4px 7px',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    minWidth: '1ch'
                  }}
                >
                  {technologyItem}
                </span>
              ))}
            </div>
          </OfferItemDivBlockAddress>
        </div>
      </OfferItemLinkStyled>
    </>
  )
}
