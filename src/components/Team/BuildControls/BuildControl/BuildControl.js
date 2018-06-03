import React from 'react';
import './BuildControl.css';

const BuildControl = (props) => (
  <div className="build-control">
    <div classname="label">{props.label}</div>
    <button className="less">Less</button>
    <button className="more" onClick={props.added}>More</button>
  </div>
)

export default BuildControl;
