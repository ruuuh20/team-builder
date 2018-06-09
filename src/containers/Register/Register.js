import React from 'react';
import RegisterSummary from '../../components/Register/RegisterSummary/RegisterSummary';
import { Route } from 'react-router-dom';
import UserInfo from './UserInfo/UserInfo'

class Register extends React.Component {
  state = {
    elements: null,
    points: 0
  }

  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const elements = {};
    let points = 0
    for (let param of query.entries()) {
      if (param[0] === 'points') {
        points = param[1];
      } else {
        elements[param[0]] = +param[1];
      }

    }
    this.setState({
      elements: elements,
      totalPoints: points
    })
  }

  registerCancel = () => {
    this.props.history.goBack();

  }

  registerContinue = () => {
    this.props.history.replace('/register/user')
  }
  render() {
    return (
      <div>
        <RegisterSummary
          elements={this.state.elements}
          regCanc={this.registerCancel}
          regCont={this.registerContinue} />
        <Route path={this.props.match.path + '/user'} render={(props) => (<UserInfo elements={this.state.elements} points={this.state.totalPoints} {...props} />)}/>

      </div>
    )
  }

}

export default Register;
