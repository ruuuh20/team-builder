import React, {Component} from 'react';
import './TeamElement.css'

class TeamElement extends Component  {
  render () {

      let element = null;

      switch (this.props.type) {
        case ('bottom'):
          element = <div className='bottom'></div>;
          break;
        case ('top'):
          element = (
            <div className='top'></div>
          )
          break;
        case ('blue'):
          element = <div className="blue"></div>;
          break;
        case ('red'):
          element = <div className="red"></div>
          break;
        default:
          element = null
      }
      return element;

}
}

export default TeamElement;
