import React, { Component } from 'react';
import * as teamBuilderActions from '../../store/actions/index'

import { connect } from 'react-redux';
import Aux from '../../hoc/Aux';
import Team from '../../components/Team/Team';
import BuildControls from '../../components/Team/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import Summary from '../../components/Team/Summary/Summary';
import axios from '../../axios-file';
import Spinner from '../../components/UI/Spinner/Spinner';
import withError from '../../hoc/withError/withError';




class TeamBuilder extends Component {

  constructor(props) {
    super(props);
    this.state = {

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
    // this.setState({
    //   saveable: sum > 0
    //   // if at least one element, true
    // })
    return sum > 0;
  }

  // addElementHandler = (type) => {
  //   const oldCount = this.state.elements[type];
  //   const updatedCount = oldCount + 1;
  //   const updatedElements = {
  //     ...this.state.elements
  //   };
  //   updatedElements[type] = updatedCount;
  //   const pointAddition = ELEMENT_POINTS[type];
  //   const oldPoint = this.state.totalPoints;
  //   const newPoint = oldPoint + pointAddition;
  //   this.setState({
  //     totalPoints: newPoint,
  //     elements: updatedElements
  //   })
  //   this.updateSaveState(updatedElements);
  //
  // }
  //
  // removeElementHandler = (type) => {
  //   const oldCount = this.state.elements[type];
  //   if (oldCount <= 0) {
  //     return;
  //   }
  //   const updatedCount = oldCount - 1;
  //   const updatedElements = {
  //     ...this.state.elements
  //   };
  //   updatedElements[type] = updatedCount;
  //   const pointReduction = ELEMENT_POINTS[type];
  //   const oldPoint = this.state.totalPoints;
  //   const newPoint = oldPoint - pointReduction;
  //   this.setState({
  //     totalPoints: newPoint,
  //     elements: updatedElements
  //   })
  //     this.updateSaveState(updatedElements);
  // }

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
    // const query = [];
    // for (let i in this.state.elements) {
    //   query.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.elements[i]))
    // }
    // query.push('points=' + this.state.totalPoints)
    // const queryString = query.join('&');

    this.props.history.push('/register')
  }

  render() {
    const disabledInfo = {
      ...this.props.positions
    }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
      // updates the new state (disabledInfo) with true or false
    }
    let summary = null;


    let team = this.state.error ? <p>Cant be loaded</p> : <Spinner />

    if (this.props.positions) {
      team = (
        <Aux>
        <Team elements={this.props.positions}/>
        <BuildControls
          elementAdded={this.props.onElementAdded}
          elementRemoved={this.props.onElementRemoved}
          disabled={disabledInfo}
          points={this.props.points}
          saveable={this.updateSaveState(this.props.positions)}
          ordered={this.saveHandler}
        />
        </Aux>
      );
      summary =   <Summary
          elements={this.props.positions}
          saveCanc={this.cancelSave}
          saveCont={this.continueSave}
          points={this.props.points} />;
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

const mapStateToProps = state => {
  return {
    positions: state.elements,
    points: state.totalPoints
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onElementAdded: (posName) => dispatch(teamBuilderActions.addElement(posName)),
    onElementRemoved: (posName) => dispatch(teamBuilderActions.removElement(posName))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withError(TeamBuilder, axios));
