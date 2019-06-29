import React from 'react';
import {Link} from 'react-router-dom';

const API_KEY = '5b42a03277b16e40dd14db8f04da92c6';

class Recipe extends React.Component {
    state = {
        activeRecipe: []
    }
    componentDidMount = async () => {
        const id = this.props.match.params.id;
        console.log(this.props.match.params.id);
        const req = await fetch(`http://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/get?key=${API_KEY}&rId=${id}`);
        const res = await req.json();

        this.setState({
            activeRecipe: res.recipe
        });
    }
    render(){
        const recipe = this.state.activeRecipe;
        return (
            <div className="container-recipe">
                {this.state.activeRecipe.length !== 0 && 
                    <div className="active-recipe">
                        <img className="active-recipe__img" src={recipe.image_url} alt={recipe.title}/>
                        <div className="active-recipe_container">   
                            <h3 className="active-recipe__title">{recipe.title}</h3>
                            <h4 className="active-recipes__subtitle">
                                Publisher: <span>{recipe.publisher}</span>
                            </h4>
                            <h4 className="active-recipes__subtitle">
                                Website: <span><a href={recipe.publisher_url}>{recipe.publisher_url}</a></span>
                            </h4>
                            <h4 className="active-recipes__subtitle">ingredients:</h4>
                            <ul className="active-recipes__ingredients">{recipe.ingredients.map((ingredient)=>{
                                return(
                                    <li key={ingredient}>{ingredient}</li>
                                )})
                            }
                                </ul>
                            <button className="active-recipe__button">
                                <Link to="/">Go back</Link>
                            </button>
                        </div>                        
                    </div>
                }
            </div>
        );
    }
};
export default Recipe;