import React from 'react'

export const CityFilter = () => {
  return (
    <>
      <CityCategoryContainer>
        {cities.map(city => {
          return (
            <ButtonSelectStyled
              selected={city === cityCategory}
              onClick={e => changeCityCategory(city)}
            >
              {city}
            </ButtonSelectStyled>
          )
        })}
        <IconDropDown />
        <SwitchMode />
      </CityCategoryContainer>
    </>
  )
}

const mapStateToProps = ({ filters }) => {
    const { cityCategory, technologyCategory } = filters
    return {
      cityCategory,
      technologyCategory
    }
  }
  
const mapDispatchToProps = { changeCityCategory, changeTechnologyCategory }
  
export default connect(mapStateToProps, mapDispatchToProps)(DesktopFilter)
