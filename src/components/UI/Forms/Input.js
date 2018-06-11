import React from 'react';
import './Input.css';

const Input = (props) => {
  let inputElement = null;

  switch (props.elementType) {
    case ('input'):
      inputElement = <input className="input-element" {...props.elementConfig} value={props.value}  onChange={props.handleChange}/>
      break
    case ('textarea'):
      inputElement = <textarea className="input-element" {...props.elementConfig} value={props.value}  onChange={props.handleChange}/>
      break;
    default:
      inputElement = <input className="input-element" {...props.elementConfig} value={props.value} onChange={props.handleChange} />

  }

  return (
  <div className="input">
    <label className="label">{props.label}</label>
      {inputElement}
  </div>
)
}

export default Input;
