import React from 'react'
import { connect } from 'react-redux'

import IconButton from '../../../Common/Buttons/IconTechButton'
import { technologies } from '../../../../api/filters'
import { changeTechnologyCategory } from '../../../../redux/actions/filters'
import { FilterButtonStyled } from './DesktopFilterStyled'

const TechnologyFilter = ({ technologyCategory, changeTechnologyCategory }) => {
  return (
    <>
      {technologies.map(technology => {
        if (technology === 'All') {
          return (
            <FilterButtonStyled
              selected={technology === technologyCategory}
              onClick={e => changeTechnologyCategory(technology)}
            >
              All
            </FilterButtonStyled>
          )
        }
        return (
          <IconButton
            isSelectedAll={technologyCategory === 'All'}
            selected={technology === technologyCategory}
            technology={technology}
            onChange={changeTechnologyCategory}
          />
        )
      })}
    </>
  )
}

const mapStateToProps = ({ filters }) => {
  const { technologyCategory } = filters
  return {
    technologyCategory
  }
}

const mapDispatchToProps = { changeTechnologyCategory }

export default connect(mapStateToProps, mapDispatchToProps)(TechnologyFilter)
