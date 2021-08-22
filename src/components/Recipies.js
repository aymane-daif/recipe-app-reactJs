import React from 'react'
import Recipe from './Recipe';

function Recipies({recipies}) {

  return (
    <>
      {recipies.map((item,index) => {
       const {calories,cuisineType,dietLabels,label,ingredientLines,image,mealType} = item.recipe
       return(
        <Recipe 
          key={index}
          image={image} 
          label={label} 
          cuisineType={cuisineType} 
          calories={calories} 
          mealType={mealType}
        />
       )
      })}
    </>
  )
}


export default Recipies
