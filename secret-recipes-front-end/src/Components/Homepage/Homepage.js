import { useState } from 'react'
import Recipelist from './Recipelist'

const Homepage = () => {
    const [recipes, setRecipes] = useState([{
        recipe_id: 0,
        recipe_name: 'Placeholder',
        recipe_source: 'Adrian',
        user_id: 0,
        category: {
            category_id: 0,
            category: 'digital',
        },
        shapedSteps: [{
            step_id:0,
            step_description: 'Heat water',
            step_ingredients: [
                {
                    step_ingredient_id: 3,
                    quantity: 1,
                    ingredient: {
                        ingredient_id: 7,
                        ingredient_name: 'water',
                        ingredient_unit: 'oz',
                    }
                },
                {
                    step_ingredient_id: 2,
                    quantity: 5,
                    ingredient: {
                        ingredient_id: 2,
                        ingredient_name: 'Garlic',
                        ingredient_unit: 'clove'
                    }
                }
            ]
        },
    ]},])

    
    const deleteRecipe = (recipe_id) => {
        setRecipes(recipes.filter(recipe => {
            if (recipe.recipe_id !== recipe_id) {
                return true;
            }
            return false;
        }));
    }
    return (
        <div className='homepage'>
            <Recipelist deleteRecipe={deleteRecipe} recipes={recipes}/>
        </div>
    )


}

export default Homepage;