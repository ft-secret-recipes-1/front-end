

const Recipecard = (props) => {
    const {recipe, deleteRecipe} = props;

    const categoryHref = `/category/${recipe.category.category_id}`
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
                                    const ingredientHref = `/ingredient/${ingredient.ingredient.ingredient_id}`
                                    return (
                                    <li className='ingredient' key={ingredient.step_ingredient_id}><a href={ingredientHref}>
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
            <a href={categoryHref}>{recipe.category.category}</a>
            </div>
            <div className='modify'>
                <a onClick={deleteRecipe(recipe.recipe_id)}>Delete</a>
            </div>
        </div>
    )

}

export default Recipecard;