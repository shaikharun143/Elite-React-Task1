import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import RecipeSearch from './components/RecipeSearch';
import './App.css'

function App() {
  const [recipes, setRecipes] = useState([]);

  return (
    <Router>
      <div className="App">
        <h1>Recipe Finder</h1>
        <RecipeSearch setRecipes={setRecipes} />
        <Routes>
          <Route path="/" element={<RecipeList recipes={recipes} />} />
          <Route path="/recipe/:id" element={<RecipeDetail recipes={recipes} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
