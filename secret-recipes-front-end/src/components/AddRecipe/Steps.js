import {Card} from "react-bootstrap";
import styled from "styled-components";

const Input = styled.input `
  width: 100%;
  padding: 6px 10px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin-bottom: 15px;
`;

const StyledSelect = styled.select`
    padding: 8px 10px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    background: white;
    display: inline-block

`

const Steps = (props) => {
    const {recipeData, setRecipeData, ingredients, setIngredients} = props;

    return (
        <Card>
            <Card.Body>
                <Card.Title>Steps</Card.Title>
                {
                recipeData.recipe_steps.map((step, index) => {
                    const this_steps_ingredients = recipeData.step_ingredients[index];
                    return (
                        <>
                            <h6 style={
                                {display: 'inline',
                            width: '10%'}
                            }>
                                {
                                `${
                                    step.step_number
                                }.  `
                            }</h6>
                            <Input style={
                                    {display: "inline-block",
                                width: '80%'}
                                }
                                name={
                                    `step_ingredients[${index}]`
                                }
                                value={
                                    recipeData.step_ingredients.recipe_source
                            }></Input><br/>
                            <Input
                                style={{display: 'inline-block', width: '75px'}}   
                            >
                            </Input>
                            <StyledSelect style={{width: "70%"}}
                                name={`step_ingredients`}
                                value={this_steps_ingredients}
                                type='form'>
                                    {ingredients.map(ing => {
                                        return(
                                        <option value={ing.ingredient_id}>{ing.ingredient_name} ({ing.ingredient_unit})</option>
                                    )})}
                            </StyledSelect>
                        </>
                    )
                })
            } </Card.Body>
        </Card>
    )
}

export default Steps;
