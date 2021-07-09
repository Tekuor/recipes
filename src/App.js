import './App.css';
import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
require('dotenv').config()

function App() {
  const APP_ID = process.env.REACT_APP_APP_ID
  const APP_KEY = process.env.REACT_APP_API_KEY

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("chicken")

  useEffect(() => {
    console.log()
    getRecipes()
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipes(data.hits)
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
  }

  return (
    <div className="App text-red-200">
      <div className="pt-2 relative mx-auto text-gray-600">
        <form onSubmit={getSearch}>
          <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search" name="search" placeholder="Search" value={search} onChange={updateSearch}/>
          <button type="submit" className="bg-yellow-50 shadow-md h-10 rounded-lg text-sm w-20 ml-2">
            Search
          </button>
        </form>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {
            recipes.map((recipe, index) => (
              <Recipe
                key={index}
                title={recipe.recipe.label}
                image={recipe.recipe.image}
                calories={recipe.recipe.calories}
                ingredients={recipe.recipe.ingredients}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
