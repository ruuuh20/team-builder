import React, { Component } from 'react';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Forms/Input'
import './Auth.css'

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
        <form>
        {form}
          <Button>Submit
          </Button>

        </form>
      </div>

    )
  }
}

export default Auth
