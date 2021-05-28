import {useEffect} from "react";
import {useState} from "react";
import {Button, Card} from "react-bootstrap";
import styled from "styled-components";
import {axiosWithAuth} from "../helpers/axiosWithAuth";

const Input = styled.input`
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
    ingredient_name: 'none',
    ingredient_unit: 'n/a'
}

const initialRecipeStep = {
    recipe_source: ''
}


const Steps = (props) => {
    const {recipeData, setRecipeData} = props;
    const [recipeSteps, setRecipeSteps] = useState([])
    const [recipeIngredients, setRecipeIngredients] = useState([])
    const [ingredients, setIngredients] = useState([initialIngredient])
    const updateSelected = (ev) => {
        ev.preventDefault();
        console.log(ev.target.name, ev.target.value, 'here pls')
        setRecipeSteps({
            ...recipeSteps,
            [ev.target.name]: ev.target.value
        })
    }

    const updateIngredients = ev => {
        ev.preventDefault();
        console.log(ev.target.name, ev.target.value, 'yes here this time');
        let newRecipes = [...recipeSteps]
        let index = ev.target.name.match(/\[(.*?)\]/)
        newRecipes[index] = [ev.target.value]
        setRecipeIngredients(newRecipes)
    }

    useEffect(() => {
        axiosWithAuth().get("/ingredients").then(res => {
            setIngredients(res.data.concat(initialIngredient))
        }).catch(err => console.error(err.response))
    }, [])

    return (
        <Card>
            <Card.Body>
                <Card.Title>Steps</Card.Title>
                {
                recipeSteps.map((step, index) => {
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
                                    index+1
                                }.  `
                            }</h6>
                            <Input style={
                                    {
                                        display: "inline-block",
                                        width: '80%'
                                    }
                                }
                                name={
                                    `recipeSteps[${index}].recipe_source`
                                }
                                value={
                                    recipeSteps[index].recipe_source
                            }></Input><br/>
                            <Input style={
                                    {
                                        display: "inline",
                                        width: "10%"
                                    }
                                }
                                name={
                                    `recipeSteps[${index}].`
                                }/>
                            <StyledSelect style={
                                    {
                                        width: "auto",
                                        margin: '0 0 0 30px'
                                    }
                                }
                                name={`recipeIngredients[${index}]`}
                                value={recipeIngredients[index]}
                                type='form'
                                onChange={updateIngredients}>
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
                            } </StyledSelect><br/>
                        </div>
                    )
                })}
                {<Button onClick={() => {
                    setRecipeSteps([...recipeSteps, initialRecipeStep])
                    setRecipeIngredients([...recipeIngredients, initialIngredient])
                }}>+</Button>}
            </Card.Body>
        </Card>
    )
}

export default Steps;
