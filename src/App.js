import './App.css';
import {useState} from 'react'
import Axios from 'axios'
import Recipetile from './recipetile/Recipetile';

function App() {
  const YOUR_APP_ID = 'da847987'
  const YOUR_APP_KEY= 'f915c8b84fc9cba5141d2c06d5c8e051'
  const [recipes , setRecipes] = useState([]);
  const [query, setQuery] = useState('');
  const [healthLabel, setHealthLabel] = useState('vegetarian')
  const url= `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;



  // const url = 'https://api.edamam.com/api/recipes/v2?type=public&app_id=da847987&app_key=f915c8b84fc9cba5141d2c06d5c8e051'


  const getRecipeInfo =async () => {
    var result =await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data.hits)
  }

  const onSubmit =(e) => {
    e.preventDefault();  // thid prevent the page from reloading ????!!!
    getRecipeInfo();
  }

  return <div className='App'>
    <h1 onClick={getRecipeInfo}>
      <u>Food Recipe Hub</u>🥗
      </h1>
    <form className='app__searchForm' onSubmit={onSubmit }>
      <input type="text" className='app__input'
        placeholder='Type The Ingredient'
        autoComplete='Off'
        value={query}
        onChange={(e) => setQuery(e.target.value) } 
        />
      <select className='app__healthLabels'>
        <option value="vegan" onClick={() => {setHealthLabel('vegan')}}>vegan</option>
        <option value="vegetarian" onClick={() => {setHealthLabel('vegetarian')}}>vegetarian</option>
        <option value="low-sugar" onClick={() => {setHealthLabel('low-sugar')}}>low-sugar</option>
        <option value="dairy-free" onClick={() => {setHealthLabel('dairy-free')}}>dairy-free</option>
        <option value="immuno-supportive" onClick={() => {setHealthLabel('immuno-supportive')}}>immuno-supportive</option>
        <option value="vegan" onClick={() => {setHealthLabel()}}>vegan</option>
      </select>
      <input type="submit"  value="Get Recipe" className='app__submit'/>
    </form>
    <div className='app__recipes'>
      {recipes.map((recipe) => {
        return <Recipetile recipe={recipe} />
      })}
    </div>
  </div>
  
}

export default App;
