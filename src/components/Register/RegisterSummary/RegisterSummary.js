import React from 'react';
import Team from '../../Team/Team';
import Button from '../../UI/Button/Button';
import './RegisterSummary.css'

const RegisterSummary = (props) => {
  return (
    <div className="register-summary">
      <h2>Here is your team</h2>
        <div style={{width: '100%', margin: 'auto' }}>
          <Team elements={props.elements}/>
        </div>
          <Button>Continue</Button>
          <Button>Cancel</Button>

    </div>
  )

}

export default RegisterSummary;
