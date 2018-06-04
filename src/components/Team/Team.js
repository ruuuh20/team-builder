import React from 'react';
import './Team.css';
import TeamElement from './TeamElements/TeamElement'

const Team = (props) => {
  // convert to array
  let transformedElements = Object.keys(props.elements)
    .map(elKey => {
      return [...Array(props.elements[elKey])].map((_, index) => {
        return <TeamElement key={elKey + index} type={elKey} />
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, [])
    if (transformedElements.length === 0) {
      transformedElements = <p>Choose team elements</p>
    }
  return (

    <div className="main-container">
      <div className="field">

      {transformedElements}
    </div>
    </div>
    
  );
}

export default Team;
