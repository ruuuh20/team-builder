import React, {Component} from 'react';
import './TeamElement.css'

class TeamElement extends Component  {
  render () {

      let element = null;

      switch (this.props.type) {
        case ('forward'):
          element =   <div className="player player-nine">x</div>
          break;
        case ('midfielder'):
          element = (
            <div className="player player-five">x</div>
          )
          break;
        case ('defender'):
          element =   <div className="player player-one">x</div>;
          break;
        case ('goalkeeper'):
          element =   <div className="player player-goalkeeper">GK</div>
          break;
        case ('field'):
          element = (
            <div className="main-container">
              <div className="field">

                <div className="player player-goalkeeper">GK</div>
                  <div className="player player-one">x</div>
                  <div className="player player-two">x</div>
                  <div className="player player-three">x</div>
                  <div className="player player-four">x</div>
                  <div className="player player-five">x</div>
                  <div className="player player-six">x</div>
                  <div className="player player-seven">x</div>
                  <div className="player player-eight">x</div>
                  <div className="player player-nine">x</div>
                  <div className="player player-ten">x</div>

              </div>
          </div>
        )
          break;
        default:
          element = null
      }
      return element;

}
}

export default TeamElement;
