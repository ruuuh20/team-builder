import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
import Team from '../../components/Team/Team'
import BuildControls from '../../components/Team/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import Summary from '../../components/Team/Summary/Summary'


const ELEMENT_POINTS = {
  goalkeeper: 30,
  midfielder: 45,
  forward: 50,
  defender: 40
}

class TeamBuilder extends Component {

  constructor(props) {
    super(props);
    this.state = {
      elements: {
        goalkeeper: 0,
        defender: 0,
        midfielder: 0,
        forward: 0
      },
      totalPoints: 10,
      saveable: false,
      saving: false
    }
  }

  updateSaveState (elements) {

    const sum = Object.keys(elements).map(elKey => {
      return elements[elKey];
    })
    .reduce((sum, el) => {
      return sum + el
    }, 0);
    this.setState({
      saveable: sum > 0
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
    this.updateSaveState(updatedElements);

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
      this.updateSaveState(updatedElements);
  }

  saveHandler = () => {
    this.setState({
      saving: true
    })
  }

  cancelSave = () => {
    this.setState({
      saving: false
    })
  }

  continueSave = () => {
    alert('continueee')
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
      <Modal show={this.state.saving} modalClosed={this.cancelSave}>
        <Summary
          elements={this.state.elements}
          saveCanc={this.cancelSave}
          saveCont={this.continueSave}
          points={this.state.totalPoints} />
      </Modal>
      <Team elements={this.state.elements}/>
      <BuildControls
        elementAdded={this.addElementHandler}
        elementRemoved={this.removeElementHandler}
        disabled={disabledInfo}
        points={this.state.totalPoints}
        saveable={this.state.saveable}
        ordered={this.saveHandler}
      />
      </Aux>
    )
  }
}

export default TeamBuilder;
