import React, { useState } from "react";

const initialState = {
  title: "",
  source: "",
  ingredients: "",
  instructions: "",
  category: "",
};

const AddRecipe = () => {
  const [recipeData, setRecipeData] = useState(initialState);

  const changeHandler = (e) => {
    e.preventDefault();
    setRecipeData({ ...recipeData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>New Recipe</h1>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Title"
          name="title"
          value={recipeData.title}
          onChange={changeHandler}
        />
        <input
          placeholder="Source"
          name="source"
          value={recipeData.source}
          onChange={changeHandler}
        />
        <input
          placeholder="Ingredients"
          name="ingredients"
          value={recipeData.ingredients}
          onChange={changeHandler}
        />
        <input
          placeholder="Category"
          name="category"
          value={recipeData.category}
          onChange={changeHandler}
        />
        <textarea
          placeholder="Instructions"
          name="instructions"
          value={recipeData.instructions}
          onChange={changeHandler}
        />
      </form>
    </div>
  );
};

export default AddRecipe;
