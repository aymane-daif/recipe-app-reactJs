import React from 'react'
import { Link } from "react-router-dom";
import { MdKitchen,MdFitnessCenter } from 'react-icons/md';
import { GiHotMeal } from 'react-icons/gi';


function Recipe({image,label,cuisineType,calories,mealType,uri}) {
  const id = uri.substring(uri.indexOf('#')+1,uri.length)
  
  return (
    <>
    <section className="recipe">
         <div className="recipe-container">
           <div className="left">
            <img src={image} alt={label} />
           </div>
           <div className="right">
            <h3>{label}</h3> 
            <div className="recipe-detail">
              <MdKitchen />
              <p><strong>Cuisine: </strong>{cuisineType.join(" ")}</p> 
            </div>
            <div className="recipe-detail">
              <MdFitnessCenter />
              <p><strong>Calories: </strong> {calories.toFixed(2)}</p>
            </div>
            <div className="recipe-detail">
              <GiHotMeal />
              <p><strong>Meal Type: </strong> {mealType.join(" ")}</p>
            </div>
            <Link to={`/${id}`} className="btn">See Recipe's Details</Link>
            
           </div>
         </div>
    </section>
      
    </>
  )
}

export default Recipe
