import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";
import Recipes from "./components/Recipes";

const API_KEY = '5b42a03277b16e40dd14db8f04da92c6';

class App extends Component {
  state ={
    recipes: [],
  };

  getRecipe = async (e) => {     //construktor (){this.getRecipe = this.getRecipe.bind() } -----new version of React, min 16
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`); //to chet localhost denided response use http://cors-anywhere.herokuapp.com/ just before https://www.food2fork.....
    const data = await api_call.json();
    this.setState({ recipes: data.recipes});
    console.log(this.state.recipes);
  }
  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes }); // if the name and the key are the same> {recipes: recipes} > we can write it this way
  }
  componentDidUpdate = () => {
    const recipe = JSON.stringify(this.state.recipes);
    // localStorage.setItem("recipes", recipes);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default App;