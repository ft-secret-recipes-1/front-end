import {useHistory} from "react-router";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { axiosWithAuth } from "../helpers/axiosWithAuth";

const Recipepreview = props => {
    const {recipe} = props;

    const history = useHistory();
    const deleteRecipe = (recipe_id) => {
        axiosWithAuth().delete(`recipes/${recipe_id}`).then(res => console.log(res)).catch(err => (console.error(err.response)))
    }

    const navToLink = (ev) => {
        history.push(ev.target.link)
    }


    return (
        <Card className='Recipecard'
            style={
                {
                    width: '500px',
                    padding: '30px',
                    margin: '10px auto 0 auto'
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
            <div className='category'>
                <h3>Category</h3>
                <b>
                    #{
                    recipe.category.category
                } </b>
            </div><br/>
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
                <Button onClick={
                    ev => {
                        ev.preventDefault()
                        history.push(`/recipe/${recipe.recipe_id}`)
                    }
                }>
                    View
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
                    onClick={navToLink}>
                    Edit
                </Button>
            </div>
        </Card>
    )
}

export default Recipepreview
