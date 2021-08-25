import React from 'react';

function Search({ recipe, setRecipe, setRecipies, setIsEntry, setIsLoading }) {
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${recipe}&app_id=fa9dcf89&app_key=e55fbcf7e825e3653c5ad9c6e4f8bf11`;

  const getRecipies = async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data.hits;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (recipe.trim()) {
      setIsLoading(true);
      getRecipies().then((data) => {
        setRecipies(data);
        setIsLoading(false);
        setRecipe('');
      });
      setIsEntry(false);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className='form'>
        <label htmlFor='search'>Search for a recipe🥙</label>
        <input
          type='search'
          id='search'
          value={recipe}
          onChange={(e) => setRecipe(e.target.value)}
        />
      </form>
    </>
  );
}

export default Search;
