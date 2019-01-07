import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const API_KEY = '5b42a03277b16e40dd14db8f04da92c6';

class Recipe extends Component {
  state = {
      activeRecipe: []
  }  
  componentDidMount = () => {
    const title = this.props.location.state.recipe;  
    const req = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`); //to chet localhost denided response use http://cors-anywhere.herokuapp.com/ just before https://www.food2fork.....//
    const res = await req.json();
    this.setState({ activeRecipe: res.recipes[0]});
  }

  render() {
      const recipe = this.state.activeRecipe;
    return (
      <div className="container">
          {this.state.activeRecipe.length !== 0 && 
            <div className="active-recipe">
              <img className="active-recipe__img" src={recipe.image_url} alt={recipe.title} />
              <h3 className="active-recipes__title">{recipe.title}</h3>
              <h4 className="active-recipe__publisher">
                  Publisher: <span>{recipe.publisher}</span>
              </h4>
              <p className="active-recipe__website">
                  Website: <span><a href={recipe.publisher_url}>{recipe.publisher_url}</a></span>
              </p>
              <button className="active-recipe__button">
                <Link to="/">Go home</Link>
              </button>
           </div>
          }
      </div>                                            
    )
  }
};

export default Recipe;