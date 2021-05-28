import { useEffect, useState } from "react";
import Recipelist from "./Recipelist";
// import axios from "axios";
import styled from "styled-components";
import { axiosWithAuth } from "../helpers/axiosWithAuth";

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
  // console.log(props);

  useEffect(() => {
    axiosWithAuth().get('/recipes')
    .catch(err => {console.error(err.response)})
    .then(res => {
      console.log(res)
      setRecipes(res.data)})
  }, [setRecipes])
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
        if (recipe.category.category !== undefined) {return (
          recipe.recipe_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          recipe.category.category.toLowerCase().includes(searchTerm.toLowerCase())
        )} else return true;
      })
    );
  }, [searchTerm, recipes]);
  return (
    <div className="homepage">
      <Input
        placeholder="Search Recipes"
        className="form-control"
        style={{margin:'10px auto'}}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />

      <Recipelist setSearchTerm={setSearchTerm} deleteRecipe={deleteRecipe} recipes={searchRecipe} />
    </div>
  );
};

export default Homepage;
