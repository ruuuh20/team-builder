import React from 'react';
import './BuildControl.css';

const BuildControl = (props) => (
  <div className="build-control">
    <div className="label">{props.label}</div>
    <button className="remove" onClick={props.removed} disabled={props.disabled}>Remove</button>
    <button className="add" onClick={props.added}>Add</button>
  </div>
)

export default BuildControl;
