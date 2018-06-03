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
      totalPoints: 10
    }
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

  }
  render() {
    return (
      <Aux>
      <Team elements={this.state.elements}/>
      <BuildControls elementAdded={this.addElementHandler}/>
      </Aux>
    )
  }
}

export default TeamBuilder;
