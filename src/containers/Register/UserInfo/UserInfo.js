import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button'
import './UserInfo.css';
import axios from '../../../axios-file';
import Spinner from '../../../components/UI/Spinner/Spinner';
import { connect } from 'react-redux';
import Input from '../../../components/UI/Forms/Input'
import withError from '../../../hoc/withError/withError'
import * as actions from '../../../store/actions/index'



class UserInfo extends Component {
  state = {
    registerForm: {
        name: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Name'
          },
          value: ''
        },
        email: {
          elementType: 'input',
          elementConfig: {
            type: 'email',
            placeholder: 'Email'
          },
          value: ''
        }
    }
  }

  handleRegister= (event) => {
    event.preventDefault()

    const team = {
      elements: this.props.positions,
      points: this.props.points,
      registerData: formData

    }
    const formData = {};
    for (let formElementIdentifier in this.state.registerForm) {
      formData[formElementIdentifier] = this.state.registerForm[formElementIdentifier].value
    }

    this.props.onRegister(team)

  }

  handleInputChange = (event, inputIdentifier) => {
    const updatedRegisterForm = {
      ...this.state.registerForm

    }
    //cloning the nested element
    const updatedFormElement = {
       ...updatedRegisterForm[inputIdentifier]
     }
     updatedFormElement.value = event.target.value;
     updatedRegisterForm[inputIdentifier] = updatedFormElement;
     this.setState({
       registerForm: updatedRegisterForm
     })

  }

  render() {
    const formElementsArray = [];
    // array of javascript objects
    for (let key in this.state.registerForm) {
      formElementsArray.push({
        id: key,
        config: this.state.registerForm[key]
      })
    }

    let form = (
      <form onSubmit={this.handleRegister}>

        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            handleChange={(event) => this.handleInputChange(event, formElement.id)}
            />
        ))}
        <Button>Register team</Button>
      </form>
    );
    if (this.props.loading) {
      form = <Spinner />
    }
    return (
      <div className="user-info">
        <h4>Enter Your information</h4>

        {form}
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    positions: state.teamBuilder.elements,
    points: state.teamBuilder.totalPoints,
    loading: state.register.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRegister: (regInfo) => dispatch(actions.registerTeam(regInfo))
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(withError(UserInfo, axios));
