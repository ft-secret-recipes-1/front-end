import "./App.css";
import AddRecipe from "./components/AddRecipe";
import Homepage from './Components/Homepage/Homepage'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <AddRecipe />
      <Homepage />
    </div>
  );
}

export default App;
