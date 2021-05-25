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
      </form>
    </div>
  );
};

export default AddRecipe;
