import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaSitemap } from 'react-icons/fa';
import Loading from './Loading';

function SpecificRecipe() {
  let { id } = useParams();
  const url = `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=fa9dcf89&app_key=e55fbcf7e825e3653c5ad9c6e4f8bf11`;
  const [specificRecipe, setSpecificRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getRecipe() {
      const response = await fetch(url);
      const data = await response.json();
      setSpecificRecipe(data.recipe);
      setIsLoading(false);
    }
    getRecipe();
  }, [url]);
  return (
    <>
      {Object.keys(specificRecipe).length < 1 ? (
        isLoading ? (
          <div className='container'>
            <Loading />
          </div>
        ) : (
          ''
        )
      ) : (
        <section className='SpecificRecipe'>
          <Link to='/' className='btn btn-home'>
            Back Home
          </Link>
          <div className='specific'>
            <div className='left'>
              <h1>{specificRecipe.label}</h1>
              <img src={specificRecipe.image} alt={specificRecipe.label} />
            </div>
            <div className='right'>
              <div className='columns'>
                <div className='column'>
                  <div className='recipe-detail'>
                    <p>
                      <strong>Cuisine: </strong>
                      {specificRecipe.cuisineType.join(' ')}
                    </p>
                  </div>
                  <div className='recipe-detail'>
                    <p>
                      <strong>Calories: </strong>{' '}
                      {specificRecipe.calories.toFixed(2)}
                    </p>
                  </div>
                  <div className='recipe-detail'>
                    <p>
                      <strong>Diet: </strong>{' '}
                      {specificRecipe.dietLabels.join(' ')}
                    </p>
                  </div>
                  <div className='recipe-detail'>
                    <p>
                      <strong>Meal Type: </strong>{' '}
                      {specificRecipe.mealType.join(' ')}
                    </p>
                  </div>
                </div>
                <div className='column'>
                  <div className='recipe-ingredients'>
                    <p>
                      <strong>Ingredients: </strong>{' '}
                    </p>
                    <ul>
                      {specificRecipe.ingredients.map((ingredient, idx) => {
                        return (
                          <li key={idx}>
                            <FaSitemap /> {ingredient.text}, (Category){' '}
                            {ingredient.foodCategory}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default SpecificRecipe;
