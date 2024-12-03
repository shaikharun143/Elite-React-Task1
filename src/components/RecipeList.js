import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeList.css'
function RecipeList({ recipes }) {
  return (
    <div className="recipe-list">
      {recipes.map((recipe, index) => (
        <div key={index} className="recipe-item">
          <Link to={`/recipe/${index}`}>
            <h2 className='listHeading'>{recipe.label}</h2>
            <img src={recipe.image} alt={recipe.label} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
