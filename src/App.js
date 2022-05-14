
import './App.css';
import Home from './javascript/components/Home';
import RecipePage from './javascript/components/RecipePage';
import { Routes, Route } from "react-router-dom"
import AddRecipe from "./javascript/components/AddRecipe"
import RecipesAPI from './javascript/components/RecipesAPI';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/recipes" element={ <Home/> } />
        <Route path="/recipes/:id" element={ <RecipePage/> } />
        <Route path="/addRecipe" element={ <AddRecipe/> } />
        <Route path="/officialRecipes" element={ <RecipesAPI/> } />
      </Routes>
    </div>

    
  );

  
}

export default App;
