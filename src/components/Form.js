import React from 'react';

const Form = props => (
  <form onSubmit={props.getRecipe}>
    <input className="form__input" type="text"
    name="recipeName" defaultValue="raspberry" autoComplete="off"/>
    <button className="form__button">GO</button>    
  </form>
);
export default Form;
