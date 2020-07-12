import React, { useEffect, useState } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import Nav from "./components/nav/Nav";
import Card from "./components/card/Card";

const App = () => {
  useEffect(() => {
    //initializing materialize css JS
    M.AutoInit();
  });

  const API_ID = "e3578195";
  const API_KEY = "70bbe1ce21e419d12584fd68b592653b";

  useEffect(() => {
    getRecipe();
  }, []);

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=banana&app_id=${API_ID}&app_key=${API_KEY}`
    );
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  };

  return (
    <div className="App">
      <Nav />
      <form>
        <div className="input-field col s6" style={{ marginLeft: "20%" }}>
          <input
            id="last_name"
            type="text"
            className="validate"
            style={{ width: "200px" }}
            value={search}
          />
          <label htmlFor="last_name">Search here!!!</label>
          <a href="#!" className="btn">
            search
          </a>
        </div>
      </form>
      <div className="">
        <div className="children">
          {recipes.map((recipe) => (
            <Card
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredientLines}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
