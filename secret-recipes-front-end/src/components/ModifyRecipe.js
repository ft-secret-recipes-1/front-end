import React, { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
import { Container, Row, Col, Button } from "reactstrap";
import styled from "styled-components"

import FormButton from './FormButton'

//Styled Components
const FormContainer = styled.div`
  margin-top: 10%;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 6px 10px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin-bottom: 15px;
`;

const initialState = {
  title: "",
  source: "",
  ingredients: "",
  instructions: "",
  category: "",
};

const ModifyRecipe = (props) => {
  const {passedRecipe} = props;
  const [recipeData, setRecipeData] = useState(initialState);
  let formType;
  console.log(1, formType);
  useEffect(() => {
    if (passedRecipe) {
      setRecipeData(passedRecipe)
    }
  }, [passedRecipe])

  const changeHandler = (e) => {
    e.preventDefault();
    setRecipeData({ ...recipeData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <Row>
        <Col xs="12" md={{ size: 6, offset: 3 }}>
          <h2>New Recipe</h2>
          <FormContainer>
            <form onSubmit={onSubmit}>
              <label
                htmlFor="title"
                style={{ display: "block", textAlign: "left" }}
              >
                Title
              </label>
              <Input
                name="title"
                value={recipeData.title}
                onChange={changeHandler}
                className="form-control"
                id="title"
              />

              <label
                htmlFor="source"
                style={{ display: "block", textAlign: "left" }}
              >
                Source
              </label>

              <Input
                name="source"
                value={recipeData.source}
                onChange={changeHandler}
                className="form-control"
                id="source"
              />

              <label
                htmlFor="ingredients"
                style={{ display: "block", textAlign: "left" }}
              >
                Ingredients
              </label>

              <Input
                name="ingredients"
                value={recipeData.ingredients}
                onChange={changeHandler}
                className="form-control"
                id="ingredients"
              />

              <label
                htmlFor="category"
                style={{ display: "block", textAlign: "left" }}
              >
                Category
              </label>

              <Input
                name="category"
                value={recipeData.category}
                onChange={changeHandler}
                className="form-control"
                id="category"
              />

              <label
                htmlFor="instructions"
                style={{ display: "block", textAlign: "left" }}
              >
                Instructions
              </label>
              <textarea
                name="instructions"
                value={recipeData.instructions}
                onChange={changeHandler}
                className="form-control"
                id="instructions"
                rows="3"
                style={{ borderRadius: "5px" }}
              />
            <FormButton buttonType={formType} />
              <Button style={{ margin: "5% 50%" }} className="btn btn-light">
                Add
              </Button>
            </form>
          </FormContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default ModifyRecipe;
