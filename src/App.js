import React, { Component } from 'react';
import './App.css';

function GridBoard (props) {
  var boxes = ['box1', 'box2', 'box3', 'box4', 'box5', 'box6', 'box7', 'box8', 'box9'];
  return (
    <div className = 'divMain'>
      <div className='main'>
        <div className='top-row'>
          {boxes.map(function (boxId) {
            return (
              <div
                key={boxId}
                onClick={props.onBoxClick.bind(null, boxId)}
                className='one'>
                  {props[boxId]}
              </div>
            )
          })}
        </div>
      </div>
      <div className='player1'>
        <div className='sm1'> Jax's Points: {props.playerOnePoints} </div>
      </div>
      <div className='sm1'> </div>
      <div className='player2'>
        <div className='sm2'> Pedro's Points: {props.playerTwoPoints}</div>
      </div>
     </div>
  )
}

class UserInputs extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      box1: '',
      box2: '',
      box3: '',
      box4: '',
      box5: '',
      box6: '',
      box7: '',
      box8: '',
      box9: '',
      playersTurn: 'player1',
      winner: '',
      playerOnePoints: 0,
      playerTwoPoints: 0,
    }

    this.handleBoxClick = this.handleBoxClick.bind(this);
    this.changePlayersTurn = this.changePlayersTurn.bind(this);
    this.checkForWinner = this.checkForWinner.bind(this);
    this.startOver = this.startOver.bind(this);
    this.resetPoints = this.resetPoints.bind(this);
  }
  handleBoxClick(boxId) {
    if (this.state[boxId] !== '' || this.state.winner !== '') {
      return
    }

    var newState = {};
    newState[boxId] = this.state.playersTurn === 'player1'
      ? 'x'
      : 'o'

    this.setState(function () {
      return newState
    }, this.changePlayersTurn);
  }
  checkForWinner () {
    var box1 = this.state.box1;
    var box2 = this.state.box2;
    var box3 = this.state.box3;
    var box4 = this.state.box4;
    var box5 = this.state.box5;
    var box6 = this.state.box6;
    var box7 = this.state.box7;
    var box8 = this.state.box8;
    var box9 = this.state.box9;
    var winner = false;

    if(box1 ==='x' && box2 ==='x' && box3 ==='x'){
      winner = true;
      this.setState(function(prevState){
        return {
          winner: 'player1',
          playerOnePoints: prevState.playerOnePoints + 1,
        }
      })
    } else if(box1 === 'x' && box5 ==='x' && box9 ==='x'){
      winner = true;
      this.setState(function(prevState){
        return {
          winner: 'player1',
          playerOnePoints: prevState.playerOnePoints + 1
        }
      })
    } else if(box1 === 'x' && box4 === 'x' && box7 === 'x'){
      winner = true;
      this.setState(function(prevState){
        return {
          winner: 'player1',
          playerOnePoints: prevState.playerOnePoints + 1,
        }
      })
    } else if(box2 === 'x' && box5 === 'x' && box8 === 'x'){
      winner = true;
      this.setState(function(prevState){
        return {
          winner: 'player1',
          playerOnePoints: prevState.playerOnePoints + 1,
        }
      })
    }else if(box3 === 'x' && box6 === 'x' && box9 === 'x'){
      winner = true;
      this.setState(function(prevState){
        return {
          winner: 'player1',
          playerOnePoints: prevState.playerOnePoints + 1,
        }
      })
    }else if(box3 === 'x' && box5 === 'x' && box7 === 'x'){
      winner = true;
      this.setState(function(prevState){
        return {
          winner: 'player1',
          playerOnePoints: prevState.playerOnePoints + 1,
        }
      })
    }else if(box4 === 'x' && box5 === 'x' && box6 === 'x'){
      winner = true;
      this.setState(function(prevState){
        return {
          winner: 'player1',
          playerOnePoints: prevState.playerOnePoints + 1,
        }
      })
    }else if(box7 === 'x' && box8 === 'x' && box9 === 'x'){
      winner = true;
      this.setState(function(prevState){
        return {
          winner: 'player1',
          playerOnePoints: prevState.playerOnePoints + 1,
        }
      })
    }else if(box1 === 'o' && box5 ==='o' && box9 ==='o'){
      winner = true;
      this.setState(function(prevState){
        return {
          winner: 'player2',
          playerTwoPoints: prevState.playerTwoPoints + 1
        }
      })
    } else if(box1 === 'o' && box4 === 'o' && box7 === 'o'){
      winner = true;
      this.setState(function(prevState){
        return {
          winner: 'player2',
          playerTwoPoints: prevState.playerTwoPoints + 1
        }
      })
    } else if(box2 === 'o' && box5 === 'o' && box8 === 'o'){
      winner = true;
      this.setState(function(prevState){
        return {
          winner: 'player2',
          playerTwoPoints: prevState.playerTwoPoints + 1
        }
      })
    }else if(box3 === 'o' && box6 === 'o' && box9 === 'o'){
      winner = true;
      this.setState(function(prevState){
        return {
          winner: 'player2',
          playerTwoPoints: prevState.playerTwoPoints + 1
        }
      })
    }else if(box3 === 'o' && box5 === 'o' && box7 === 'o'){
      winner = true;
      this.setState(function(prevState){
        return {
          winner: 'player1',
          playerOnePoints: prevState.playerOnePoints + 1,
        }
      })
    }else if(box4 === 'o' && box5 === 'o' && box6 === 'o'){
      winner = true;
      this.setState(function(prevState){
        return {
          winner: 'player2',
          playerTwoPoints: prevState.playerTwoPoints + 1
        }
      })
    }else if(box7 === 'o' && box8 === 'o' && box9 === 'o'){
      winner = true;
      this.setState(function(prevState){
        return {
          winner: 'player2',
          playerTwoPoints: prevState.playerTwoPoints + 1
        }
      })
    } else if(box1 === 'o' && box2 === 'o' && box3 === 'o'){
      winner = true;
      this.setState(function(prevState){
        return {
          winner: 'player2',
          playerTwoPoints: prevState.playerTwoPoints + 1
        }
      })
    } else if(box1 !== '' && box2 !== '' && box3 !== '' && box4 !== '' && box5 !=='' && box6 !=='' && box7 !=='' && box8 !=='' && box9 !==''){
      this.setState(function(){
        return {
          winner: 'tie'
        }
      })
    }
    return winner;
  }
  startOver () {
    this.setState(function(){
      return {
        box1: '',
        box2: '',
        box3: '',
        box4: '',
        box5: '',
        box6: '',
        box7: '',
        box8: '',
        box9: '',
        playersTurn: 'player1',
        winner: '',
      }
    })
  }
  resetPoints () {
    this.setState(function (){
      return {
        playerOnePoints: 0,
        playerTwoPoints: 0,
      }
    })
    this.startOver();
  }
  changePlayersTurn () {
    if (this.checkForWinner() === true) {
      return
    }


    if(this.state.playersTurn === 'player1'){
      this.setState(function(){
        return {
          playersTurn: 'player2',
        }
      })
    } else if(this.state.playersTurn === 'player2'){
      this.setState(function(){
        return {
          playersTurn: 'player1',
        }
      })
    }

  }
  render() {
    return (
      <div>
        <div className = 'winner'>
          {this.state.winner === 'player1' ? 'Winner JAX' : null}
          {this.state.winner === 'player2' ? 'Winner Pedro' : null}

        </div>
        <div className = 'tie'>{this.state.winner === 'tie' ? 'Tie' : null} </div>
        <div className='player'> {this.state.playersTurn === 'player1' ? 'JAX' : 'PEDRO'}'s turn </div>
        <GridBoard
          onBoxClick={this.handleBoxClick}
          box1={this.state.box1}
          box2={this.state.box2}
          box3={this.state.box3}
          box4={this.state.box4}
          box5={this.state.box5}
          box6={this.state.box6}
          box7={this.state.box7}
          box8={this.state.box8}
          box9={this.state.box9}
          playerOnePoints={this.state.playerOnePoints}
          playerTwoPoints={this.state.playerTwoPoints}
        />
        <div className='sbutton'>
          <button onClick={this.startOver}>New Game</button>
          <button onClick={this.resetPoints}> Reset Points </button>
        </div>
        <div className='bottom'> Live Long And Pawspurrr</div>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Cat TAC TOE</h1>
        </div>
        <UserInputs />
      </div>
    );
  }
}

export default App;
