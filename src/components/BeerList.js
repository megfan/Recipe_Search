import React from 'react'
import {Link} from "react-router-dom";

const BeerList = props => (
  <div className="container">
    <div className="beer_list">
        {props.beerList.map((beer)=> {
            return (
            <div key={beer.id} className="beers__box">                
                <div className="beer__box_img">
                    <img className="beer-img" 
                        src={beer.image_url}
                        alt={beer.name}/>
                </div>   
                <div className="beer__text">
                    <h5 className="beers__title">
                        {beer.name.length < 45
                        ? `${beer.name}`
                        : `${beer.name.substring(0,45)}...`}
                    </h5>
                    <p className="beers__subtitle">First brewed: <span>{beer.first_brewed}</span></p>
                    <p className="beers__subtitle">About: <span>{beer.description}</span></p>
                    <button className="beer_buttons">
                        <Link to={{
                        pathname: `/beer/${beer.id}`,
                        state: {beer: beer.name}
                        }} >View beer</Link>
                    </button>
                </div>                
            </div>
            );
        } )}
    </div>  
  </div>
); 
  
export default BeerList;