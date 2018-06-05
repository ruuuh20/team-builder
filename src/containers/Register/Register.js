import React from 'react';
import RegisterSummary from '../../components/Register/RegisterSummary/RegisterSummary'

class Register extends React.Component {
  state = {
    elements: {
      goalkeeper: 1,
      forward: 1
    }
  }
  render() {
    return (
      <div>
        <RegisterSummary elements={this.state.elements} />

      </div>
    )
  }

}

export default Register;
