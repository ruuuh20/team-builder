import React, {Component} from 'react';
import './TeamElement.css'

class TeamElement extends Component  {
  render () {

      let element = null;

      switch (this.props.type) {
        case ('forward'):
          element = <div className='forward'></div>;
          break;
        case ('midfielder'):
          element = (
            <div className='midfielder'></div>
          )
          break;
        case ('defender'):
          element = <div className="defender"></div>;
          break;
        case ('goalkeeper'):
          element = <div className="goalkeeper"></div>
          break;
        case ('field'):
          element = <div className="field"></div>
          break;
        default:
          element = null
      }
      return element;

}
}

export default TeamElement;
