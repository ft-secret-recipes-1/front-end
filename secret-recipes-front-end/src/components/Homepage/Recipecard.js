// import { useHistory } from "react-router";
// need react-router set up
import Button from "react-bootstrap/Button";

const Recipecard = (props) => {
    const {recipe, deleteRecipe} = props;
    // const history = useHistory();

    const categeoryLink = `/category/${recipe.category.category_id}`
    const navToLink = ev => {
        ev.preventDefault();
        // history.push(ev.target.target)
    }

    return(
        <div className='Recipecard'>
            <h2>{recipe.title}</h2>
            <b>{recipe.source}</b>
            <h3>Instructions</h3>
            <ol className='instructions'>
                {recipe.shapedSteps.map(step => {
                    return (
                        <li>
                            <b className='description'>{step.step_description}</b><br/><br/>
                            <b className='descriptor'>Ingredients:</b>
                            <ul className='ingredients'>
                                {
                                step.step_ingredients.map(ingredient => {
                                    const ingTarget = `/ingredient/${ingredient.ingredient.ingredient_id}`
                                    return (
                                    <li className='ingredient' key={ingredient.step_ingredient_id}><a link={ingTarget} href={ingTarget} onClick={navToLink}>
                                        {`${ingredient.quantity} ${ingredient.ingredient.ingredient_unit}${ingredient.quantity === 1 ? '' : 's' }
                                         of ${ingredient.ingredient.ingredient_name}`}
                                    </a></li>
                                    )
                                })}
                            </ul><br/>
                            <li key={step.step_id} className='instruction'>{step.description}</li>
                        </li>
                    )
                })}
            </ol>
            <div className='category'>
            <h3>Categories</h3>
            <a onClick={navToLink} link={categeoryLink} href={categeoryLink}>{recipe.category.category}</a>
            </div>
            <div className='modifyCard'>
                <Button variant="danger" href='#' target='' onClick={ev => {
                    ev.preventDefault();
                    deleteRecipe(recipe.recipe_id)
                }}>Delete</Button>
                <Button className="btn btn-light" href={`/edit/${recipe.recipe_id}`} target={`/edit/${recipe.recipe_id}`} onClick={navToLink}>
                    Edit
                </Button>
            </div>
        </div>
    )

}

export default Recipecard;