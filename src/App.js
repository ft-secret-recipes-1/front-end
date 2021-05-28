import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";

import './App.css'
import Header from './components/Homepage/Header'
import Homepage from './components/Homepage/Homepage'
import SignInForm from './components/Login/SignInForm'
import SignUpForm from './components/Login/SignUpForm'
import AddRecipe from './components/AddRecipe/AddRecipe'
import Recipecard from "./components/Homepage/Recipecard";
import 'bootstrap/dist/css/bootstrap.min.css'

import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  // this initial state is a placeholder, and can be removed.
  const [recipes, setRecipes] = useState();

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
          <PrivateRoute
            component={Recipecard}
            path="/recipe/:id"/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
