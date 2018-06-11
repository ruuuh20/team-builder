import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button'
import './UserInfo.css';
import axios from '../../../axios-file';
import Spinner from '../../../components/UI/Spinner/Spinner';
import { connect } from 'react-redux';
import Input from '../../../components/UI/Forms/Input'



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
    },
    loading: false
  }

  handleRegister= (event) => {
    event.preventDefault()
    this.setState({
      loading: true
    })
    const team = {
      elements: this.props.positions,
      points: this.props.points,
      registerData: formData

    }
    const formData = {};
    for (let formElementIdentifier in this.state.registerForm) {
      formData[formElementIdentifier] = this.state.registerForm[formElementIdentifier].value
    }
    axios.post('/teams.json', team)
      .then(response => {
      this.setState({
        loading: false
      })

      this.props.history.push('/')
    })
      .catch(error => this.setState({
        loading: false

      }))

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
    if (this.state.loading) {
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
    positions: state.elements,
    points: state.totalPoints
  }
}

export default connect(mapStateToProps)(UserInfo);
