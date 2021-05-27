import { useEffect } from "react";
import Recipelist from "./Recipelist";
import axios from "axios";

const Homepage = (props) => {
  const { recipes, setRecipes } = props;
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
  return (
    <div className="homepage">
      <Recipelist deleteRecipe={deleteRecipe} recipes={recipes} />
    </div>
  );
};

export default Homepage;
