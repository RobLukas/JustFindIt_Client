import styled from 'styled-components'

const TechStackContainer = styled.div({
  display: 'flex',
  justifyContent: 'flex-start',
  maxWidth: '20%',
  flex: '0 0 20%',
  marginBottom: 32
})

const TechStackContent = styled.div({
  position: 'relative',
  width: '100%'
})

const TechStackSkillPointContainer = styled.div({
  display: 'flex',
  justifyContent: 'flex-start',
  marginBottom: 4
})

const TechStackSkillPoint = styled.div(({ selected, theme }) => ({
  backgroundColor: selected
    ? theme.offer.desc.skillPoint.selected
    : theme.offer.desc.skillPoint.unselected,
  display: 'block',
  width: 10,
  height: 10,
  borderRadius: '50%',
  marginRight: 10
}))

const TechStackName = styled.div(({ theme }) => ({
  color: theme.primary.color,
  fontWeight: 600,
  fontSize: 16,
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  width: '90%',
  display: 'block',
  overflow: 'hidden'
}))

const TechStackSkillName = styled.div(({ theme }) => ({
  color: theme.secondary.color
}))

export {
  TechStackContainer,
  TechStackContent,
  TechStackSkillPointContainer,
  TechStackSkillPoint,
  TechStackName,
  TechStackSkillName
}
