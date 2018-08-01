import React, { Component } from 'react';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Forms/Input'
import './Auth.css';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux'

class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your email'
        },
        value: ''
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Password'
        },
        value: ''
      }

    }
  }

  handleInputChange = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      //only the one changed control will be updated
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        touched: true
      }
    }
    this.setState({ controls: updatedControls})
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value)
  }

  render() {
    const formElementsArray = [];
    // array of javascript objects
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key]
      })
    }

    const form = formElementsArray.map(formElement => (
      <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        handleChange={(event) => this.handleInputChange(event, formElement.id)}

      />

    ))
    return (
      <div className="auth">
        <form onSubmit={this.submitHandler}>
        {form}
          <Button>Submit
          </Button>

        </form>
      </div>

    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password) => dispatch(actions.auth())
  }
}

export default connect(null, mapDispatchToProps)(Auth);
