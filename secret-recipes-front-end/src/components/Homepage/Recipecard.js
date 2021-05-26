// import { useHistory } from "react-router";
// need react-router set up
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const Recipecard = props => {
  const { recipe, deleteRecipe } = props
  // const history = useHistory();

  const categeoryLink = `/category/${recipe.category.category_id}`
  const navToLink = ev => {
    ev.preventDefault()
    // history.push(ev.target.target)
  }

  return (
    <Card
      className='Recipecard'
      style={{
        width: '500px',
        padding: '30px',
        margin: '0 auto 0 auto'
      }}
    >
      <h2>{recipe.recipe_name}</h2>
      <b>Source:</b>
      <span>{recipe.recipe_source}</span>
      <br />
      <h3>Instructions</h3>
      <ol className='instructions'>
        {recipe.shapedSteps.map(step => {
          return (
            <li key={step.step_id}>
              <b className='description'>{step.step_description}</b>
              <br />
              <br />
              <b className='descriptor'>Ingredients:</b>
              <ul className='ingredients'>
                {step.step_ingredients.map(ingredient => {
                  const ingTarget = `/ingredient/${ingredient.ingredient.ingredient_id}`
                  return (
                    <li
                      className='ingredient'
                      key={ingredient.step_ingredient_id}
                    >
                      <a
                        target={ingTarget}
                        href={ingTarget}
                        onClick={navToLink}
                      >
                        {`${ingredient.quantity} ${
                          ingredient.ingredient.ingredient_unit
                        }${ingredient.quantity === 1 ? '' : 's'}
                                         of ${
                                           ingredient.ingredient.ingredient_name
                                         }`}
                      </a>
                    </li>
                  )
                })}
              </ul>
              <br />
            </li>
          )
        })}
      </ol>
      <div className='category'>
        <h3>Category</h3>
        <a onClick={navToLink} link={categeoryLink} href={categeoryLink}>
          #{recipe.category.category}
        </a>
      </div>
      <div
        className='modifyCard'
        style={{
          display: 'flex',
          justifyContent: 'space-evenly'
        }}
      >
        <Button
          variant='danger'
          href='#'
          target=''
          onClick={ev => {
            ev.preventDefault()
            deleteRecipe(recipe.recipe_id)
          }}
        >
          Delete
        </Button>
        <Button
          className='btn btn-light'
          target={`/edit/${recipe.recipe_id}`}
          href={`/edit/${recipe.recipe_id}`}
          onClick={navToLink}
        >
          Edit
        </Button>
      </div>
    </Card>
  )
}

export default Recipecard
