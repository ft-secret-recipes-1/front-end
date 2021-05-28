import Recipecard from "./Recipecard";
import Recipepreview from "./Recipepreview";

const Recipelist = (props) => {
  const { recipes, deleteRecipe } = props;
  console.log(props);
  return (
    <div>
      {recipes.map((recipe) => {
        return (
          <Recipepreview
            key={recipe.recipe_id}
            deleteRecipe={deleteRecipe}
            recipe={recipe}
          ></Recipepreview>
        );
      })}
    </div>
  );
};

export default Recipelist;
