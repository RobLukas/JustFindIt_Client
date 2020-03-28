import React from 'react'

import {
  PopupContainerStyled,
  SpanPopupStyled,
  ImgContainerStyled,
  ImgStyled,
  DescriptionContainer,
  SalaryDescStyled
} from './PopupStyled'

export default ({
  companyLogo,
  workplace,
  salaryFrom,
  salaryTo,
  salaryCurrency,
  companyName
}) => {
  return (
    <PopupContainerStyled>
      <ImgContainerStyled>
        <ImgStyled src={companyLogo} alt={'icon'}></ImgStyled>
      </ImgContainerStyled>
      <DescriptionContainer>
        <SpanPopupStyled>{workplace}</SpanPopupStyled>
        <SalaryDescStyled>{`${salaryFrom} - ${salaryTo} ${salaryCurrency}`}</SalaryDescStyled>
        <SpanPopupStyled>{companyName}</SpanPopupStyled>
      </DescriptionContainer>
    </PopupContainerStyled>
  )
}
