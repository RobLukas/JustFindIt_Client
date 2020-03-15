import styled from 'styled-components'

const PopupContainerStyled = styled.div({
  display: 'flex',
  padding: '10px 20px',
  cursor: 'pointer',
  fontSize: 13,
  marginTop: 0,
  margin: 0
})

const ImgContainerStyled = styled.div({
  position: 'relative',
  width: 40,
  display: 'flex',
  flexShrink: 0
})

const ImgStyled = styled.img({
  margin: 'auto',
  maxWidth: 40,
  maxHeight: 40,
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
})

const DescriptionContainer = styled.div({
  flexDirection: 'column',
  display: 'flex',
  minWidth: 140,
  marginLeft: 7,
  textAlign: 'left'
})

const SpanPopupStyled = styled.span({
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden'
})

const SalaryDescStyled = styled.span({
  color: '#1ec66c',
  fontWeight: 400,
  whiteSpace: 'nowrap'
})

export {
  PopupContainerStyled,
  SpanPopupStyled,
  ImgContainerStyled,
  ImgStyled,
  DescriptionContainer,
  SalaryDescStyled
}
