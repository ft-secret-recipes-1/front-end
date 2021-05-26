import "./App.css";
import AddRecipe from "./components/AddRecipe";
import Homepage from './components/Homepage/Homepage'
import SignInForm from "./components/Login/SignInForm"
import SignUpForm from "./components/Login/SignUpForm"
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <AddRecipe />
      <Homepage />
      <SignInForm />
      <SignUpForm />
    </div>
  );
}

export default App;
