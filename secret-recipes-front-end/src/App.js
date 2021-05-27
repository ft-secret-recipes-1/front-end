import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import Header from "./components/Homepage/Header";
import Homepage from "./components/Homepage/Homepage";
import SignInForm from "./components/Login/SignInForm";
import SignUpForm from "./components/Login/SignUpForm";
import AddRecipe from "./components/AddRecipe";
import "bootstrap/dist/css/bootstrap.min.css";

import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  // this initial state is a placeholder, and can be removed.
  const [recipes, setRecipes] = useState([
    {
      recipe_id: 0,
      recipe_name: "Placeholder",
      recipe_source: "Adrian",
      user_id: 0,
      category: {
        category_id: 0,
        category: "digital",
      },
      shapedSteps: [
        {
          step_id: 0,
          step_description: "Heat water",
          step_ingredients: [
            {
              step_ingredient_id: 3,
              quantity: 1,
              ingredient: {
                ingredient_id: 7,
                ingredient_name: "water",
                ingredient_unit: "oz",
              },
            },
            {
              step_ingredient_id: 2,
              quantity: 5,
              ingredient: {
                ingredient_id: 2,
                ingredient_name: "Garlic",
                ingredient_unit: "clove",
              },
            },
          ],
        },
      ],
    },
  ]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <PrivateRoute
            component={Homepage}
            recipes={recipes}
            setRecipes={setRecipes}
            path="/home"
          />
          <Route exact path="/" component={SignInForm} />
          <Route path="/signUp" component={SignUpForm} />
          <Route path="/addRecipe" component={AddRecipe} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
