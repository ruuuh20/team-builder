import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button'

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
      <p>Total Points: {props.points}</p>
      <p>Continue?</p>
    <Button clicked={props.purchaseCanc} type="danger">Cancel</Button>
    <Button clicked={props.purchaseCont} type="success">Continue</Button>

    </Aux>
  )

}

export default Summary;
