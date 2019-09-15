import React from 'react';


class DiceResults extends React.Component {
  renderRolls(array) {
    /**
    * Renders all of the individual rolls from an array
    * @param {array} 
    * @return {jsx elements}
    */ 

    return array.map( (roll, index) => {
      let rollClass = (this.props.winner && this.props.winner === roll.toString()) ? `roll-${roll} winner` : `roll-${roll}`;
      
      return (
        <p key={index} className={rollClass}>{roll}</p>
      )
    })
  }

  render() {
    const showWinner = this.props.winner ? 'showWinner' : 'hideWinner';
    return(
      <div className="results-container">
        <div className="rolls-container">
          <div><span>Your Rolls:</span></div>
          <div>{this.renderRolls(this.props.rolls)}</div>
        </div>
        <div className={`winner-container ${showWinner}`}>
          <p>Winner!</p>
          <p>{this.props.winner}</p>
        </div>
      </div>
    )
  }
}

export default DiceResults;
