import React from 'react';
import RegisterSummary from '../../components/Register/RegisterSummary/RegisterSummary';
import { Route, Redirect } from 'react-router-dom';
import UserInfo from './UserInfo/UserInfo';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index'

class Register extends React.Component {

  // componentWillMount() {
  //   const query = new URLSearchParams(this.props.location.search);
  //   const elements = {};
  //   let points = 0
  //   for (let param of query.entries()) {
  //     if (param[0] === 'points') {
  //       points = param[1];
  //     } else {
  //       elements[param[0]] = +param[1];
  //     }
  //
  //   }
  //   this.setState({
  //     elements: elements,
  //     totalPoints: points
  //   })
  // }

  componentDidMount() {
    
  }

  registerCancel = () => {
    this.props.history.goBack();

  }

  registerContinue = () => {
    this.props.history.replace('/register/user')
  }
  render() {
    let summary = <Redirect to="/" />


    if (this.props.positions) {
      const registeredRedirect = this.props.registered ? <Redirect to="/" /> : null
      summary = (
      <div>
      {registeredRedirect}
        <RegisterSummary
          elements={this.props.positions}
          regCanc={this.registerCancel}
          regCont={this.registerContinue} />
        <Route path={this.props.match.path + '/user'}
        component={UserInfo}
        />
      </div>
      )
    }
    return summary

  }

}

const mapStateToProps = state => {
  return {
    positions: state.teamBuilder.elements,
    registered: state.register.registered
  }
}



export default connect(mapStateToProps)(Register);
