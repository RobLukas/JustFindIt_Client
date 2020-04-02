import styled from 'styled-components'

const SelectMobileDivStyled = styled.div({
  '@media (min-width: 1020px)': {
    display: 'none'
  },
  display: 'flex',
  margin: '10px'
})

const SeparationStyled = styled.div({
  marginLeft: 10
})

export { SelectMobileDivStyled, SeparationStyled }
