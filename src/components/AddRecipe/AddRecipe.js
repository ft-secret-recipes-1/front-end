import React, {useState} from "react";
// import Button from "react-bootstrap/Button";
import {Container, Row, Col, Button} from "reactstrap";
import styled from "styled-components";
import axios from "axios";
import Steps from "./Steps";

import { axiosWithAuth } from "../helpers/axiosWithAuth";
// import { useHistory } from "react-router-dom";

// Styled Components
const FormContainer = styled.div `
  margin-top: 10%;
  width: 100%;
`;

const Input = styled.input `
  width: 100%;
  padding: 6px 10px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin-bottom: 15px;
`;

const initialState = {
    recipe_name: "",
    recipe_source: "",
    category: "",
};

const AddRecipe = (props) => {
    const [recipeData, setRecipeData] = useState(initialState);
    // const [ingredientData, setIngredientData] = useState([{
        //     ingredient_id: 0,
        //     ingredient_name: 0,
        //     ingredient_unit: 'oz'
        // }]);
    const {ingredients, setIngredients} = props;

    // const history = useHistory();
      
    const submitForm = () => {
      console.log(recipeData)
      axiosWithAuth().post('/recipes', recipeData).catch(err => console.error(err.response)).then(res => console.log(res))
    }

    const changeHandler = (e) => {
        e.preventDefault();
        setRecipeData({
            ...recipeData,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post("https://ft-bw-may-secret-family-recipe.herokuapp.com/api/recipes", recipeData).then((res) => {
            console.log(res);
            alert("New Recipe Added 🤠");
            // history.push("/");
        });
    };

    return (
        <Container>
            <Row>
                <Col xs="12"
                    md={
                        {
                            size: 6,
                            offset: 3
                        }
                }>
                    <h2>New Recipe</h2>
                    <FormContainer>
                        <form onSubmit={onSubmit}>
                            <label htmlFor="title"
                                style={
                                    {
                                        display: "block",
                                        textAlign: "left"
                                    }
                            }>
                                Title
                            </label>
                            <Input name="recipe_name"
                                value={
                                    recipeData.recipe_name
                                }
                                onChange={changeHandler}
                                className="form-control"
                                id="title"/>

                            <label htmlFor="source"
                                style={
                                    {
                                        display: "block",
                                        textAlign: "left"
                                    }
                            }>
                                Source
                            </label>

                            <Input name="recipe_source"
                                value={
                                    recipeData.recipe_source
                                }
                                onChange={changeHandler}
                                className="form-control"
                                id="source"/>

                            <label htmlFor=""
                                style={
                                    {
                                        display: "block",
                                        textAlign: "left"
                                    }
                            }>
                                Describe Step
                            </label>

                            <Steps ingredients={ingredients}
                                setIngredients={setIngredients}
                                recipeData={recipeData}
                                setRecipeData={setRecipeData}/>

                            <label htmlFor="category"
                                style={
                                    {
                                        display: "block",
                                        textAlign: "left"
                                    }
                            }>
                                Category
                            </label>

                            <Input name="category"
                                value={
                                    recipeData.category
                                }
                                onChange={changeHandler}
                                className="form-control"
                                id="category"/>

                            <label htmlFor="instructions"
                                style={
                                    {
                                        display: "block",
                                        textAlign: "left"
                                    }
                            }>
                                Instructions
                            </label>
                            <textarea name="instructions"
                                value={
                                    recipeData.instructions
                                }
                                onChange={changeHandler}
                                className="form-control"
                                id="instructions"
                                rows="3"
                                style={
                                    {borderRadius: "5px"}
                                }/>
                            <Button onClick={submitForm}
                                style={
                                    {margin: "5% 50%"}
                                }
                                className="btn btn-light">
                                Add
                            </Button>
                        </form>
                    </FormContainer>
                </Col>
            </Row>
        </Container>
    );
};

export default AddRecipe;
