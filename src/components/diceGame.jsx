import React from 'react';
import ReactDice from 'react-dice-complete';
import DiceResults from './diceResults';
import 'react-dice-complete/dist/react-dice-complete.css';

class DiceGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totals: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0
      },
      roll: null,
      rolls: [],
      winner: null,
      diceDisabled: false
    }
    this.rollAll = this.rollAll.bind(this);
    this.rollDone = this.rollDone.bind(this);
    this.clearGame = this.clearGame.bind(this);
  }

  checkWinner(obj) {
    /**
    * Checks if winner exists
    * @param {obj} 
    * @return {bool} 
    */ 

    return Object.keys(obj).find(key => obj[key] === 5);
  }
  clearGame() {
    /**
    * Clears game by resetting state
    * @return {function} setState();
    */ 

    this.setState({
      totals: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0
      },
      roll: null,
      rolls: [],
      winner: null,
      diceDisabled: false
    });
  }
  rollAll() {
    /**
    * ReactDice callback to roll dice
    * @return {function} reactDice.rollAll()
    */ 

    this.reactDice.rollAll()
  }
  rollDone(num) {
    /**
    * Parent callback function that kicks off results
    * @param {num} num 
    * @return {function} setRolls();
    * @return {function} setWinner();
    */ 

    this.setRolls(num);
    this.setWinner();
  }
  setRolls(num) {
    /**
    * Sets updated state from roll
    * @param {num} 
    * @return {function} setState()
    */

    const stateCopy = Object.assign({}, this.state);

    stateCopy.totals[num] += 1;
    stateCopy.roll = num;
    stateCopy.rolls.push(num);

    this.setState(stateCopy);
  }
  setWinner() {
    /**
    * Sets winner state if winner exists
    * @return {function} setWinner();
    */ 

    const winner = this.checkWinner(this.state.totals);

    if (winner) {
      this.setState({ 
        winner: winner,
        diceDisabled: true
      })
    }
  }

  render() {
    const diceDisabled = this.state.diceDisabled ? "disabled" : "active";
    return (
      <div className="game-container">
        <div className="title-container">
          <p>Roll the dice 5 times in a row to get a winner!</p>
        </div>
        <div className="board-container">
        <div className={`dice-container ${diceDisabled}`}>
          <ReactDice
            numDice={1}
            outline={true}
            outlineColor={"#000"}
            faceColor={"#fff"}
            dotColor={"#000"}
            dieSize={"100"}
            rollTime={1}
            disableIndividual={this.state.diceDisabled}
            rollDone={this.rollDone}
            ref={dice => this.reactDice = dice}
          />
        </div>
        <div className="buttons-container">
          <button 
            className="btn-green" 
            type="button"
            onClick={this.rollAll}
            disabled={this.state.diceDisabled}>Roll Dice</button>
          <button 
            className="btn-blue"type="button"
            onClick={this.clearGame}>Clear Game</button>
        </div>
        </div>   
        <DiceResults 
            totals={this.state.totals} 
            rolls={this.state.rolls} 
            winner={this.state.winner} />
      </div>
    )
  }
}

export default DiceGame;
