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

const ingredientUnits = ['tsp', 'tbsp', 'lbs', 'fl oz', 'cup', 'pt', 'qt', 'gal', 'mL', 'litre', 'dL', 'oz', 'mg', 'g', 'kg']

const Steps = (props) => {
    const {recipeData, setRecipeData, ingredients, setIngredients} = props;

    const updateSelected = (ev) => {
        ev.preventDefault();
        setRecipeData({...recipeData, [ev.target.name]: ev.target.value})
    }

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
                            <StyledSelect
                                style={{display: 'inline-block', width: '75px'}}
                                value={this_steps_ingredients.ingredient_unit}
                                onClick={updateSelected}
                                >
                                {ingredientUnits.map(unit => {
                                    return (<option value={unit}>{unit}</option>)
                                })}
                            </StyledSelect>
                            <StyledSelect style={{width: "70%", margin: '0 0 0 30px'}}
                                name={`step_ingredients`}
                                value={this_steps_ingredients}
                                type='form'
                                onClick={updateSelected}>
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
