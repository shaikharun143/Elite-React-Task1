import React from 'react';
import { useParams } from 'react-router-dom';
import './RecipeDetail.css'

function RecipeDetail({ recipes }) {
  const { id } = useParams();
  const recipe = recipes[id];

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div className="recipe-detail">
      <h2>{recipe.label}</h2>
      <img src={recipe.image} alt={recipe.label} />
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeDetail;
