import React, { useState } from 'react';

import Search from './components/Search';
import Recipies from './components/Recipies';
import Loading from './components/Loading';
import './App.css';

function App() {
  const [recipe, setRecipe] = useState('');
  const [recipies, setRecipies] = useState([]);
  const [isEntry, setIsEntry] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className='App'>
      <Search
        recipe={recipe}
        setRecipe={setRecipe}
        setRecipies={setRecipies}
        setIsEntry={setIsEntry}
        setIsLoading={setIsLoading}
      />
      <main className='main'>
        {isLoading ? (
          <Loading />
        ) : recipies.length > 0 ? (
          <Recipies recipies={recipies} />
        ) : isEntry ? (
          ''
        ) : (
          <h1>There is no such recipe. Sorry...😢</h1>
        )}
      </main>
    </div>
  );
}

export default App;
