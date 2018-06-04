import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl'

const positions = [
  { label: 'forward', type: 'forward' },
  { label: 'midfielder', type: 'midfielder' },
  { label: 'defender', type: 'defender' },
  { label: 'goalkeeper', type: 'goalkeeper' },

]

const BuildControls = (props) => (
  <div className="buildcontrols">
  <p>Points: <strong>{props.points}</strong></p>
    {positions.map(position => (
      <BuildControl key={position.label}
                    label={position.label}
                    added={() => props.elementAdded(position.type)}
                    removed={() => props.elementRemoved(position.type)}
                    disabled={props.disabled[position.type]}

                     />
    ))}
    <button
    className="completeButton"
    disabled={!props.saveable}
    onClick={props.ordered}
    >
    Complete
    </button>
  </div>
)

export default BuildControls;
