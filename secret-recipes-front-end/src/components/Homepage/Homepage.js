import { useEffect, useState } from "react";
import Recipelist from "./Recipelist";
import axios from "axios";
import styled from "styled-components";

const Input = styled.input`
  width: 25%;
  padding: 6px 10px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin-bottom: 15px;
`;

const Homepage = (props) => {
  const { recipes, setRecipes } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const [searchRecipe, setSearchRecipe] = useState(recipes);
  console.log(props);

  // useEffect(() => {
  //     let error = null;
  //     axios.get('https://ft-bw-may-secret-family-recipe.herokuapp.com/api')
  //     .catch(err => {
  //         console.error(err);
  //         error = err;
  //     }).then(res => {
  //         if (!error) {
  //             setRecipes(res.data);
  //         }

  //     })
  // }, [])

  const deleteRecipe = (recipe_id) => {
    setRecipes(
      recipes.filter((recipe) => {
        if (recipe.recipe_id !== recipe_id) {
          return true;
        }
        return false;
      })
    );
  };

  useEffect(() => {
    setSearchRecipe(
      recipes.filter((recipe) => {
        if (
          recipe.recipe_name.includes(searchTerm) ||
          recipe.category.category.includes(searchTerm)
        ) {
          return true;
        } else {
          return false;
        }
      })
    );
  }, [searchTerm]);
  return (
    <div className="homepage">
      <Input
        placeholder="Search Recipes"
        className="form-control"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />

      <Recipelist deleteRecipe={deleteRecipe} recipes={searchRecipe} />
    </div>
  );
};

export default Homepage;
