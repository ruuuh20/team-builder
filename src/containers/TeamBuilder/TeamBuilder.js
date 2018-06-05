import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
import Team from '../../components/Team/Team'
import BuildControls from '../../components/Team/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import Summary from '../../components/Team/Summary/Summary'
import axios from '../../axios-file';
import Spinner from '../../components/UI/Spinner/Spinner'
import withError from '../../hoc/withError/withError'


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
      elements: null,
      totalPoints: 10,
      saveable: false,
      saving: false,
      loading: false,
      error: false
    }
  }

  componentDidMount() {
    axios.get('https://react-project-1-cddb1.firebaseio.com/elements.json')
      .then(response => {
        this.setState({
          elements: response.data
        })
      })
      .catch(error => {
        this.setState({
          error: true
        })
      })
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
    // alert('continueee')
    this.setState({
      loading: true
    })
    const team = {
      elements: this.state.elements,
      points: this.state.totalPoints,
      user: {
        name: 'Bob',
        email: 'test@test.com'
      }
    }
    axios.post('/teams.json', team)
      .then(response =>
      this.setState({
        loading: false,
        saving: false
      }))
      .catch(error => this.setState({
        loading: false,
        saving: false
      }))
  }

  render() {
    const disabledInfo = {
      ...this.state.elements
    }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
      // updates the new state (disabledInfo) with true or false
    }
    let summary = null;


    let team = this.state.error ? <p>Cant be loaded</p> : <Spinner />

    if (this.state.elements) {
      team = (
        <Aux>
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
      );
      summary =   <Summary
          elements={this.state.elements}
          saveCanc={this.cancelSave}
          saveCont={this.continueSave}
          points={this.state.totalPoints} />;
    }


    if (this.state.loading) {
        summary = <Spinner />
    }

    return (
      <Aux>
      <Modal show={this.state.saving} modalClosed={this.cancelSave}>
        {summary}
      </Modal>
      {team}


      </Aux>
    )
  }
}

export default withError(TeamBuilder, axios);
