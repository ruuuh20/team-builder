import React from 'react';
import RegisterSummary from '../../components/Register/RegisterSummary/RegisterSummary'

class Register extends React.Component {
  state = {
    elements: {
      goalkeeper: 1,
      forward: 1
    }
  }

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const elements = {};
    for (let param of query.entries()) {
      elements[param[0]] = +param[1];
    }
    this.setState({
      elements: elements
    })
  }

  registerCancel = () => {
    this.props.history.goBack();

  }

  registerContinue = () => {
    this.props.history.replace('/register/contact')
  }
  render() {
    return (
      <div>
        <RegisterSummary
        elements={this.state.elements}
        regCanc={this.registerCancel}
        regCont={this.registerContinue} />

      </div>
    )
  }

}

export default Register;
