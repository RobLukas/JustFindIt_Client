import styled from 'styled-components'
import DomainIcon from '@material-ui/icons/Domain'
import GroupIcon from '@material-ui/icons/Group'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile'
import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import TimelapseIcon from '@material-ui/icons/Timelapse'

const HeadTileCompanyLink = styled.a({
  color: '#039be5',
  textAlign: 'center',
  textDecoration: 'none'
})

const CompanyNameIcon = styled(DomainIcon)(({ theme }) => ({
  '&.MuiSvgIcon-root': {
    fill: theme.offer.header.icons.companyName,
    width: 20,
    height: 20
  }
}))

const CompanySizeIcon = styled(GroupIcon)(({ theme }) => ({
  '&.MuiSvgIcon-root': {
    fill: theme.offer.header.icons.companySize,
    width: 20,
    height: 20
  }
}))

const CompanyEMPTypeIcon = styled(InsertDriveFileIcon)(({ theme }) => ({
  '&.MuiSvgIcon-root': {
    fill: theme.offer.header.icons.companyEMPType,
    width: 20,
    height: 20
  }
}))

const CompanySkillIcon = styled(TrendingUpIcon)(({ theme }) => ({
  '&.MuiSvgIcon-root': {
    fill: theme.offer.header.icons.companySkill,
    width: 20,
    height: 20
  }
}))

const NewIcon = styled(TimelapseIcon)(({ theme }) => ({
  '&.MuiSvgIcon-root': {
    fill: theme.offer.header.icons.new,
    width: 20,
    height: 20
  }
}))

const HeadContainer = styled.div({
  '@media (max-width: 1020px)': {
    height: 'auto',
    marginBottom: 30
  },
  position: 'relative',
  height: 235,
  marginBottom: 100
})

const HeadTilesContainer = styled.div({
  '@media (max-width: 1020px)': {
    transform: 'translateY(0px)',
    padding: '0 5px 0 5px'
  },
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  transform: 'translateY(-50%)',
  padding: '0 15px 0 15px'
})

const HeadTilesStyled = styled.div(({ theme }) => ({
  '@media (max-width: 1020px)': {
    boxShadow: 'none',
    flex: '1 0 calc(50% - 2px)',
    margin: 1
  },
  boxSizing: 'border-box',
  alignItems: 'center',
  backgroundColor: theme.secondary.background,
  boxShadow:
    'rgba(0, 0, 0, 0.08) 0px 2px 2px 0px, rgba(0, 0, 0, 0.06) 0px 1px 5px 0px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'relative',
  borderRadius: 4,
  flex: '1 1 0%',
  margin: '0px 5px 0px 5px',
  padding: '20px 5px 20px 5px'
}))

const HeadTileIconContainer = styled.div(({ theme }) => ({
  boxShadow:
    'rgba(0, 0, 0, 0.08) 0px 2px 2px 0px, rgba(0, 0, 0, 0.06) 0px 1px 5px 0px',
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  left: '50%',
  top: 0,
  transform: 'translate(-50%, -50%)',
  background: theme.secondary.background,
  borderRadius: '50%',
  padding: 8
}))

const HeadTileFirstDesc = styled.div(({ theme }) => ({
  color: theme.primary.color,
  fontSize: '0.875rem',
  textAlign: 'center'
}))

const HeadTileSecondDesc = styled.div(({ theme }) => ({
  color: theme.secondary.color,
  whiteSpace: 'nowrap',
  fontSize: 11
}))

export {
  HeadContainer,
  HeadTilesStyled,
  HeadTileIconContainer,
  HeadTileCompanyLink,
  HeadTileFirstDesc,
  HeadTileSecondDesc,
  HeadTilesContainer,
  CompanyNameIcon,
  CompanySizeIcon,
  CompanyEMPTypeIcon,
  CompanySkillIcon,
  NewIcon
}
