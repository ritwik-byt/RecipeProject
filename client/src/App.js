import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('https://recipeproject-1gpw.onrender.com/recipes') // ✅ Your deployed backend URL
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error('Failed to fetch recipes:', err));
  }, []);

  return (
    <div className="App">
      <h1>Recipe List</h1>
      {recipes.length === 0 ? (
        <p>Loading recipes...</p>
      ) : (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe._id}>
              <strong>{recipe.title}</strong>: {recipe.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
