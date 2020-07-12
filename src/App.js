import React, { useEffect, useState } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import Nav from "./components/nav/Nav";
import Card from "./components/card/Card";
import Footer from "./components/footer/Footer";
import { FaSearch } from "react-icons/fa";
require("dotenv").config();

const App = () => {
  useEffect(() => {
    //initializing materialize css JS
    M.AutoInit();
  });

  const API_ID = process.env.REACT_APP_API_ID;
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("apple");

  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
    );
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch(" ");
  };

  return (
    <div className="App">
      <Nav />
      <form onSubmit={getSearch}>
        <div className="input-field col s6" style={{ marginLeft: "10%" }}>
          <input
            id="last_name"
            type="text"
            className="validate"
            style={{ width: "300px" }}
            value={search}
            onChange={updateSearch}
            required
          />
          <label htmlFor="last_name">Search here!!!</label>
          <a href="#!" className="btn purple">
            search <FaSearch size="1rem" color="white" />
          </a>
        </div>
      </form>
      <p style={{ marginLeft: "10%" }} className="red-text">
        You can only make 10 or less requests per minute
      </p>
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
      <Footer />
    </div>
  );
};

export default App;
