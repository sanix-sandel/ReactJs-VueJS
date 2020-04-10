import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe.js';

const App=()=>{
  const APP_ID='46eaf27a';
  const APP_KEY='7039890d19939d2137e63650c11ef1bf';
  
  const [recipes, setRecipes]=useState([]); 
  const [search, setSearch]=useState("");
  const [query, setQuery]=useState('chicken');
  
  useEffect(()=>{
    getRecipes();
  },[query]);

  const getRecipes=async()=>{
    const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);
    const data= await response.json()
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search)
  }
  
  const getSearch=e=>{
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return(
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button  className="search-button" type="submit">Search</button>
      </form>
      {recipes.map(recipe=>(
        <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))}   
      
    </div>
  );
};

export default App;
