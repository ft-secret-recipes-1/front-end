import React, { useState } from "react";
import Button from "react-bootstrap/Button";

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
        <div className="form-group w-75">
          <label htmlFor="title">Title</label>

          <input
            name="title"
            value={recipeData.title}
            onChange={changeHandler}
            className="form-control"
            id="title"
          />

          <label htmlFor="source">Source</label>

          <input
            name="source"
            value={recipeData.source}
            onChange={changeHandler}
            className="form-control"
            id="source"
          />

          <label htmlFor="ingredients">Ingredients</label>

          <input
            name="ingredients"
            value={recipeData.ingredients}
            onChange={changeHandler}
            className="form-control"
            id="ingredients"
          />

          <label htmlFor="category">Category</label>

          <input
            name="category"
            value={recipeData.category}
            onChange={changeHandler}
            className="form-control"
            id="category"
          />

          <label htmlFor="instructions">Instructions</label>
          <textarea
            name="instructions"
            value={recipeData.instructions}
            onChange={changeHandler}
            className="form-control"
            id="instructions"
            rows="3"
          />
        </div>
        <Button className="btn btn-light">Add</Button>
      </form>
    </div>
  );
};

export default AddRecipe;
