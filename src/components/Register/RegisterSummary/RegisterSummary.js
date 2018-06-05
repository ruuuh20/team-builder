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
          <Button clicked={props.regCanc}>Continue</Button>
          <Button clicked={props.regCont}>Cancel</Button>

    </div>
  )

}

export default RegisterSummary;
