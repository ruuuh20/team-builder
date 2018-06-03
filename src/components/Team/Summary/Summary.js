import React from 'react';
import Aux from '../../../hoc/Aux'

const Summary = (props) => {
  const elementsSummary = Object.keys(props.elements)
  .map(elKey => {
    return (
      <li key={elKey}>
      <span style={{textTransform: 'capitalize'}}>{elKey}: {props.elements[elKey]}</span>
      </li>
  )
  })


  return (
    <Aux>
      <h2>Your summary</h2>
      <p>Here is your team</p>
      <ul>
        {elementsSummary}

      </ul>
      <p>Continue?</p>

    </Aux>
  )

}

export default Summary;
