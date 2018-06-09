import React from 'react';
import './Save.css'


const Save = (props) => {
  const elements = [];
  console.log(props.elements)
  for (let el in props.elements) {
    elements.push(
      {
      name: el, number: props.elements[el]
      }
    )
  };

  const elementOutput = elements.map(e => {
    return <span
            style={{
              textTransform: 'capitalize',
              display: 'inline-block',
              margin: '0 8px'
            }} key={e.name}>{e.name} ({e.number})</span>
    console.log(e)
  });

  return (
  <div className="save">
    <p>Player positions: {elementOutput} </p>
    <p>Points: {props.points}</p>

  </div>
)
}

export default Save;
