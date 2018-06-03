import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
import Team from '../../components/Team/Team'
import BuildControls from '../../components/Team/BuildControls/BuildControls'


const ELEMENT_POINTS = {
  top: 12,
  bottom: 20,
  red: 50,
  blue: 30
}

class TeamBuilder extends Component {

  constructor(props) {
    super(props);
    this.state = {
      elements: {
        top: 0,
        blue: 0,
        bottom: 0,
        red: 0
      },
      totalPoints: 10,
      purchaseable: false
    }
  }

  updatePurchaseState (elements) {

    const sum = Object.keys(elements).map(elKey => {
      return elements[elKey];
    })
    .reduce((sum, el) => {
      return sum + el
    }, 0);
    this.setState({
      purchaseable: sum > 0
      // if at least one element, true
    })
  }

  addElementHandler = (type) => {
    const oldCount = this.state.elements[type];
    const updatedCount = oldCount + 1;
    const updatedElements = {
      ...this.state.elements
    };
    updatedElements[type] = updatedCount;
    const pointAddition = ELEMENT_POINTS[type];
    const oldPoint = this.state.totalPoints;
    const newPoint = oldPoint + pointAddition;
    this.setState({
      totalPoints: newPoint,
      elements: updatedElements
    })
    this.updatePurchaseState(updatedElements);

  }

  removeElementHandler = (type) => {
    const oldCount = this.state.elements[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedElements = {
      ...this.state.elements
    };
    updatedElements[type] = updatedCount;
    const pointReduction = ELEMENT_POINTS[type];
    const oldPoint = this.state.totalPoints;
    const newPoint = oldPoint - pointReduction;
    this.setState({
      totalPoints: newPoint,
      elements: updatedElements
    })
      this.updatePurchaseState(updatedElements);
  }

  render() {
    const disabledInfo = {
      ...this.state.elements
    }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
      // updates the new state (disabledInfo) with true or false
    }
    return (
      <Aux>
      <Team elements={this.state.elements}/>
      <BuildControls
        elementAdded={this.addElementHandler}
        elementRemoved={this.removeElementHandler}
        disabled={disabledInfo}
        points={this.state.totalPoints}
        purchaseable={this.state.purchaseable}
      />
      </Aux>
    )
  }
}

export default TeamBuilder;
