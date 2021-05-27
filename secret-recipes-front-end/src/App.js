import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useState } from 'react'

import './App.css'
import Header from './components/Homepage/Header'
import Homepage from './components/Homepage/Homepage'
import SignInForm from './components/Login/SignInForm'
import SignUpForm from './components/Login/SignUpForm'
import AddRecipe from './components/AddRecipe/AddRecipe'
import 'bootstrap/dist/css/bootstrap.min.css'

function App () {
  // this initial state is a placeholder, and can be removed.
  const [recipes, setRecipes] = useState([
    {
      recipe_id: 0,
      recipe_name: 'Placeholder',
      recipe_source: 'Adrian',
      user_id: 0,
      category: {
        category_id: 0,
        category: 'digital'
      },
      shapedSteps: [
        {
          step_id: 0,
          step_description: 'Heat water',
          step_ingredients: [
            {
              step_ingredient_id: 3,
              quantity: 1,
              ingredient: {
                ingredient_id: 7,
                ingredient_name: 'water',
                ingredient_unit: 'oz'
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
        }
      ]
    }
  ])
  const [ingredients, setIngredients] = useState([
    {
        "ingredient_id": 1,
        "ingredient_name": "Broccoli",
        "ingredient_unit": "lbs"
    },
    {
        "ingredient_id": 2,
        "ingredient_name": "Pesto",
        "ingredient_unit": "lbs"
    },
])

  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route
            exact
            path='/'
            render={() => {
              return <Homepage recipes={recipes} setRecipes={setRecipes} />
            }}
          />
          <Route path='/signIn' component={SignInForm} />
          <SignUpForm path='/signUp' component={SignUpForm} />
          <Route path='/addRecipe' render={() => {
            return <AddRecipe ingredients={ingredients} setIngredients={setIngredients}/>
          }} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
