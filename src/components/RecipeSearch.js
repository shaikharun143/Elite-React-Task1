import React, { useState } from 'react';
import "./RecipeSearch.css"

function RecipeSearch({ setRecipes }) {
  const [query, setQuery] = useState('');

  const searchRecipes = async (e) => {
    e.preventDefault();
    const APP_ID = 'b139dee0';
    const APP_KEY = '9f42e99eff88a5b487570d6717d489c3';
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits.map(hit => hit.recipe));
  };

  return (
    <form onSubmit={searchRecipes}>
      <input
        type="text"
        placeholder="Search for recipes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default RecipeSearch;
