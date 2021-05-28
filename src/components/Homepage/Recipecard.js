import {useHistory} from "react-router";
import {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import {useParams} from 'react-router'
import {axiosWithAuth} from "../helpers/axiosWithAuth";
import { useEffect } from "react";

const Recipecard = props => {
    const [recipe, setRecipe] = useState()

    const deleteRecipe = (recipe_id) => {
        axiosWithAuth().delete(`recipes/${recipe_id}`).then(res => console.log(res)).catch(err => (console.error(err.response)))
    }

    const {id} = useParams();
    const history = useHistory();

    useEffect(() => {
        console.log('running')
        axiosWithAuth().get(`/recipes/${id}`).then(res => {
            console.log(res);
            setRecipe(res.data)
        }).catch(err => console.error(err.response))
    }, [id])


    const dsDef = ev => {
        ev.preventDefault()
        // history.push(ev.target.target)
    }
    return (recipe !== undefined) ? (
        <Card className='Recipecard'
            style={
                {
                    width: '500px',
                    padding: '30px',
                    margin: '100px auto 0 auto'
                }
        }>
            <h2>{
                recipe.recipe_name
            }</h2>
            <b>Source:</b>
            <span>{
                recipe.recipe_source
            }</span>
            <br/>
            <h3>Instructions</h3>
            <ol className='instructions'>
                {
                recipe.steps.map(step => {
                    return (
                        <li key={
                            step.step_id
                        }>
                            <b className='description'>
                                {
                                step.step_description
                            }</b>
                            <br/>
                            <br/>
                            {(() => {
                                return((step.step_ingredients.length === 0) ? null : <b className='descriptor'>Ingredients:</b>)
                            })()}
                            <ul className='ingredients'>
                                {
                                step.step_ingredients.map(ingredient => {
                                    const ingTarget = `/ingredient/${
                                        ingredient.ingredient.ingredient_id
                                    }`
                                    return (
                                        <li className='ingredient'
                                            key={
                                                ingredient.step_ingredient_id
                                        }>
                                            <a href={ingTarget}
                                                onClick={
                                                    (ev) => {
                                                        dsDef();
                                                        history.push(ingTarget);
                                                    }
                                            }>
                                                {
                                                `${
                                                    ingredient.quantity
                                                } ${
                                                    ingredient.ingredient.ingredient_unit
                                                }
                        of ${
                                                    ingredient.ingredient.ingredient_name
                                                }`
                                            } </a>
                                        </li>
                                    )
                                })
                            } </ul>
                            <br/>
                        </li>
                    )
                })
            } </ol>
            <div className='category'>
                <h3>Category</h3>
                <b>
                    #{
                    recipe.category.category
                } </b>
            </div>
            <div className='modifyCard'
                style={
                    {
                        display: 'flex',
                        justifyContent: 'space-evenly'
                    }
            }>
                <Button variant='danger' href='#' target=''
                    onClick={
                        ev => {
                            ev.preventDefault()
                            deleteRecipe(recipe.recipe_id)
                        }
                }>
                    Delete
                </Button>
                <Button className='btn btn-light'
                    target={
                        `/edit/${
                            recipe.recipe_id
                        }`
                    }
                    href={
                        `/edit/${
                            recipe.recipe_id
                        }`
                    }
                    onClick={dsDef}>
                    Edit
                </Button>
            </div>
        </Card>
    ) : null
}

export default Recipecard
