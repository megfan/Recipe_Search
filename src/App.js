import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";
import BeerList from "./components/BeerList";

// const API_KEY = '5b42a03277b16e40dd14db8f04da92c6';

class App extends Component {
  state ={
    beerList: [],
  };

  getBeers = async (e) => {     //construktor (){this.getRecipe = this.getRecipe.bind() } -----new version of React, min 16
    // const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://api.punkapi.com/v2/beers?page=2&per_page=80`);
    //to chet localhost denided response use http://cors-anywhere.herokuapp.com/ just before https://www.food2fork.....
    const data = await api_call.json();
    console.log(data);
    this.setState({ beerList: data});
    console.log(this.state.beerList);
  }
  // componentDidMount = () => {
  //   const json = localStorage.getItem("beerList");
  //   const beerList = JSON.parse(json);
  //   this.setState({ beerList}); // if the name and the key are the same> {recipes: recipes} > we can write it this way
  //   console.log(this.state.beerList);
  // }
  // componentDidUpdate = () => {
  //   const beer = JSON.stringify(this.state.beerList);
  //   localStorage.setItem("beerList", beer);
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="header_container">
            <h1 className="App-title">WorldBestBeer</h1>
            <Form getBeers={this.getBeers} />
          </div>
        </header>
        <BeerList beerList={this.state.beerList}/>
      </div>
    );
  }
}

export default App;