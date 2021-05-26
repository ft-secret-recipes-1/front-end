import './App.css'
import ModifyRecipe from './components/ModifyRecipe'
import Homepage from './components/Homepage/Homepage'
import SignInForm from './components/Login/SignInForm'
import SignUpForm from './components/Login/SignUpForm'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App () {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/signIn" component={SignInForm} />
          <Route path="/signUp" component={SignUpForm} />
          <Route path="/addRecipe" component={AddRecipe} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
