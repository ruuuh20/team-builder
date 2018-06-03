import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl'

const controls = [
  { label: 'red', type: 'red' },
  { label: 'blue', type: 'blue' },
  { label: 'top', type: 'top' },

]

const BuildControls = (props) => (
  <div className="buildcontrols">
  <p>Points: <strong>{props.points}</strong></p>
    {controls.map(control => (
      <BuildControl key={control.label}
                    label={control.label}
                    added={() => props.elementAdded(control.type)}
                    removed={() => props.elementRemoved(control.type)}
                    disabled={props.disabled[control.type]}
                     />
    ))}
    <button className="completeButton" disabled={!props.purchaseable}>Complete
    </button>
  </div>
)

export default BuildControls;
