import Recipecard from './Recipecard'

const Recipelist = (props) => {
    const {recipes, deleteRecipe} = props;
    return (
            <div>
                {recipes.map(recipe => {
                    return (
                        <Recipecard deleteRecipe={deleteRecipe} recipe={recipe}></Recipecard>
                        )
                    })
                }
            </div>
    )
}

export default Recipelist 