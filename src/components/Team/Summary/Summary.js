import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button'

class Summary extends React.Component {

  //only needs to be updated when Modal is updated(wrapped in it)

  componentWillUpdate() {
    console.log("hi")
  }
  render() {
    const elementsSummary = Object.keys(this.props.elements)
    .map(elKey => {
      return (
        <li key={elKey}>
        <span style={{textTransform: 'capitalize'}}>{elKey}: {this.props.elements[elKey]}</span>
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
        <p>Total Points: {this.props.points}</p>
        <p>Continue?</p>
      <Button clicked={this.props.saveCanc} type="danger">Cancel</Button>
      <Button clicked={this.props.saveCont} type="success">Continue</Button>
      </Aux>
    )
  }





}

export default Summary;
