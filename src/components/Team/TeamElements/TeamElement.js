import React, {Component} from 'react';
import './TeamElement.css'

class TeamElement extends Component  {
  render () {

      let element = null;

      switch (this.props.type) {
        case ('forward'):
          element =   <div className="forward">o</div>
          break;
        case ('midfielder'):
          element = (
            <div className="midfielder">o</div>
          )
          break;
        case ('defender'):
          element =   <div className="defender">o</div>;
          break;
        case ('goalkeeper'):
          element =   <div className="goalkeeper">GK</div>
          break;
    
        default:
          element = null
      }
      return element;

}
}

export default TeamElement;
