import React from 'react';
import {Link} from 'react-router-dom';

// const API_KEY = '5b42a03277b16e40dd14db8f04da92c6';

class beer extends React.Component {
    state = {
        activeBeer: []
    }
    componentDidMount = async () => {
        const name = this.props.match.params.id;
        const req = await fetch(`https://api.punkapi.com/v2/beers?ids=${name}`);
        const res = await req.json();

        this.setState({
            activeBeer: res[0]
        });
        console.log(res);
    }
    render(){
        const beer = this.state.activeBeer;
        return (
            <div className="container">
                {this.state.activeBeer.length !== 0 && 
                    <div className="active-beer">
                        <img className="active-beer__img" src={beer.image_url} alt={beer.name}/>
                        <div className="active-beer_container">   
                            <h3 className="active-name">{beer.name}</h3>
                            <h4 className="active__first_brewed">
                                first_brewed: <span>{beer.first_brewed}</span></h4>
                            <p className="active__description">
                                Description: <span>{beer.description}</span></p>
                            <div className="active__description">
                                Ingredients: 
                                <div className="malt">
                                    Malt: {beer.ingredients.malt.map((item, index)=> {
                                    return (
                                        <li key={index}> { item.name } <span>{item.amount.value} /kg</span></li>                                        
                                    )
                                })}
                                </div>
                                <div className="hops">
                                    Hops: {beer.ingredients.hops.map((item, index)=> {
                                    return (
                                        <li key={index}> { item.name } <span>{item.amount.value} /g {item.add} / {item.attribute}</span></li>                                        
                                    )
                                })}
                                </div>
                                
                            </div>
                            <div className="active__description">
                                Best with: <span>{beer.food_pairing.map((food, index)=> {
                                    return (
                                        <li className='active_description' key={index}>
                                            {food}
                                        </li>
                                    )
                            })}</span></div>
                            <p className="active__description">
                                Brewers tips: <span>{beer.brewers_tips}</span></p>
                            <button className="active__button">
                                <Link to="/">Go back</Link>
                            </button>
                        </div>
                        
                    </div>
                }
            </div>
        );
    }
};
export default beer;