import React from 'react'
import Recipe from './Recipe';

function Recipies({recipies}) {

  return (
    <>
      {recipies.map((item,index) => {
       const {calories,cuisineType,uri,label,image,mealType} = item.recipe
       return(
      
        <Recipe 
          key={index}
          image={image} 
          label={label} 
          cuisineType={cuisineType} 
          calories={calories} 
          mealType={mealType}
          uri={uri}
        />
       )
      })}
    </>
  )
}


export default Recipies
