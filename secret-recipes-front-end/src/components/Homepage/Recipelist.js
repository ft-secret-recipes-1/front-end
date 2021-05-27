import Recipecard from "./Recipecard";

const Recipelist = (props) => {
  const { recipes, deleteRecipe } = props;
  console.log(props);
  return (
    <div>
      {recipes.map((recipe) => {
        return (
          <Recipecard
            key={recipe.recipe_id}
            deleteRecipe={deleteRecipe}
            recipe={recipe}
          ></Recipecard>
        );
      })}
    </div>
  );
};

export default Recipelist;
