import React from 'react'
import { connect } from 'react-redux'

import { technologies } from '../../../../api/filters'
import { changeTechnologyCategory } from '../../../../redux/actions/filters'

import IconButton from '../Buttons/IconTechButto'
import { ButtonSelectStyled } from '../FilterStyled'

const TechnologyFilter = ({ technologyCategory, changeTechnologyCategory }) => {
  return (
    <>
      {technologies.map(technology => {
        if (technology === 'All') {
          return (
            <ButtonSelectStyled
              selected={technology === technologyCategory}
              onClick={e => changeTechnologyCategory(technology)}
            >
              All
            </ButtonSelectStyled>
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
