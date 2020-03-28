import styled from 'styled-components'

const OfferDescContainer = styled.div(({ theme }) => ({
  boxShadow: 'rgba(10, 10, 10, 0.1) 0px 2px 18px 10px',
  marginTop: 40,
  background: theme.secondary.background,
  borderRadius: 5
}))

const OfferDescTitle = styled.div(({ theme }) => ({
  color: theme.primary.color,
  fontWeight: 600,
  fontSize: 18,
  borderBottom: `2px solid ${theme.offer.desc.seperateLine.color}`,
  padding: '12px 20px 12px 20px'
}))

const OfferDescSpecificationContainer = styled.div(({ theme }) => ({
  color: theme.secondary.color,
  position: 'relative',
  padding: 24
}))

const OfferDescSpecificationContent = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  marginBottom: -20
})

export {
  OfferDescContainer,
  OfferDescTitle,
  OfferDescSpecificationContainer,
  OfferDescSpecificationContent
}
