import React from 'react'

import {
  PopupContainerStyled,
  SpanPopupStyled,
  ImgContainerStyled,
  ImgStyled,
  DescriptionContainer,
  SalaryDescStyled
} from './PopupStyled'

export default ({ logoCompany, workplace, salary, nameCompany }) => {
  console.log(logoCompany)
  return (
    <PopupContainerStyled>
      <ImgContainerStyled>
        <ImgStyled src={logoCompany} alt={'icon'}></ImgStyled>
      </ImgContainerStyled>
      <DescriptionContainer>
        <SpanPopupStyled>{workplace}</SpanPopupStyled>
        <SalaryDescStyled>{salary}</SalaryDescStyled>
        <SpanPopupStyled>{nameCompany}</SpanPopupStyled>
      </DescriptionContainer>
    </PopupContainerStyled>
  )
}
