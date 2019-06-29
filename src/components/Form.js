import React from 'react';

const Form = props => (
  <form onSubmit={props.getBeers}>
    <input className="form__input" type="text"
    name="recipeName" />
    <button className="form__button">GO</button>
  </form>
);
export default Form;
