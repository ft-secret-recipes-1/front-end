import {useEffect} from "react";
import {useState} from "react";
import {Card} from "react-bootstrap";
import styled from "styled-components";
import {axiosWithAuth} from "../helpers/axiosWithAuth";

const Input = styled.input `
  width: 100%;
  padding: 6px 10px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin-bottom: 15px;
`;

const StyledSelect = styled.select `
    padding: 8px 10px;
    border: 1px solid #d5d5d5; 
    border-radius: 5px;
    background: white;
    display: inline-block

`
const initialIngredient = {
    ingredient_id: 0,
    ingredient_name: 'loading',
    ingredient_unit: 'n/a'
}

const Steps = (props) => {
    const {recipeData, setRecipeData} = props;
    const [ingredients, setIngredients] = useState([initialIngredient])
    const updateSelected = (ev) => {
        ev.preventDefault();
        console.log(ev.target.name, ev.target.value, 'here pls')
        setRecipeData({
            ...recipeData,
            [ev.target.name]: ev.target.value
        })
    }

    useEffect(() => {
        axiosWithAuth().get("/ingredients").then(res => {
            setIngredients(res.data)
        }).catch(err => console.error(err.response))
    }, [])

    return (
        <Card>
            <Card.Body>
                <Card.Title>Steps</Card.Title>
                {
                recipeData.recipe_steps.map((step, index) => {
                    return (
                        <div key={index}>
                            <h6 style={
                                {
                                    display: 'inline',
                                    width: '10%'
                                }
                            }>
                                {
                                `${
                                    step.step_number
                                }.  `
                            }</h6>
                            <Input style={
                                    {
                                        display: "inline-block",
                                        width: '80%'
                                    }
                                }
                                name={
                                    `step_ingredients[${index}].recipe_source`
                                }
                                value={
                                    recipeData.step_ingredients.recipe_source
                            }></Input><br/>
                            <Input style={
                                    {
                                        display: "inline",
                                        width: "10%"
                                    }
                                }
                                name={
                                    `step_ingredients[${index}].`
                                }/>
                            <StyledSelect style={
                                    {
                                        width: "70%",
                                        margin: '0 0 0 30px'
                                    }
                                }
                                name={`step_ingredients`}
                                value={recipeData.step_ingredients[index]}
                                type='form'
                                onChange={updateSelected}>
                                {
                                ingredients.map((ing, ingind) => {
                                    return (
                                        <option key={ingind} value={ingind}>
                                            {
                                            ing.ingredient_name
                                        }
                                            ({
                                            ing.ingredient_unit
                                        })</option>
                                    )
                                })
                            } </StyledSelect>
                        </div>
                    )
                })
            } </Card.Body>
        </Card>
    )
}

export default Steps;
