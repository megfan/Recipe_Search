import React from 'react'
import {Link} from "react-router-dom";


class Recipes extends React.Component {
    constructor(props) {
        super(props);
      }
    render(){
     if(this.props.recipes === undefined){
        return null        
    }else{
        return(
            <div className="container">
                <div className="row">
                    {this.props.recipes.map((recipe)=> {
                        return (
                        <div key={recipe.recipe_id} className="col-xl-3 col-lg-4 col-md-6 col-sm-8" style={{marginBottom: "2rem"}}>
                            <div className="recipes__box">
                                <img className="recipe__box-img" 
                                    src={recipe.image_url}
                                    alt={recipe.title}/>
                                <div className="recipe__text">
                                    <h5 className="recipes__title">
                                        {recipe.title.length < 30
                                        ? `${recipe.title}`
                                        : `${recipe.title.substring(0,31)}...`}</h5>
                                    <p className="recipes__subtitle">Publisher: 
                                        <span> {recipe.publisher}</span>
                                    </p>                            
                                </div>
                                <button className="recipe_buttons">
                                    <Link to={{
                                        pathname: `/recipe/${recipe.recipe_id}`,
                                        state: {recipe: recipe.title}
                                        }} >View recipe</Link>
                                </button>
                            </div>
                        </div>
                        );
                    } )}
                </div>  
            </div>
        )
    }
    }  
}; 
  
export default Recipes;