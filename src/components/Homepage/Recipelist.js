import Recipepreview from "./Recipepreview";

const Recipelist = (props) => {
  const { recipes, deleteRecipe, setSearchTerm} = props;
  console.log(props);
  return recipes !== undefined ? (<div>
  {recipes.map((recipe) => {
    return (
      <Recipepreview
      key={recipe.recipe_id}
      deleteRecipe={deleteRecipe}
      recipe={recipe}
      setSearchTerm={setSearchTerm}
      ></Recipepreview>
      );
    })}
</div>) : null;
};


export default Recipelist;
