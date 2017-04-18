import React, { Component } from 'react';
import './App.css';

class GridBoard extends React.Component {
  render() {
    return (
      <div className = 'divMain'>
      <div className='main'>
        <div className='top-row'>
          <div onClick={this.props.clickBox1} className='one'> {this.props.box1}</div>
          <div onClick={this.props.clickBox2} className='one'> {this.props.box2}</div>
          <div onClick={this.props.clickBox3} className='one'> {this.props.box3}</div>
          <div onClick={this.props.clickBox4} className='one'> {this.props.box4}</div>
          <div onClick={this.props.clickBox5} className='one'> {this.props.box5}</div>
          <div onClick={this.props.clickBox6} className='one'> {this.props.box6}</div>
        </div>
        <div className='bottom-row'>
          <div onClick={this.props.clickBox7} className='one'> {this.props.box7}</div>
          <div onClick={this.props.clickBox8} className='one'> {this.props.box8}</div>
          <div onClick={this.props.clickBox9} className='one'> {this.props.box9}</div>
        </div>
      </div>
       <div className='player1'>
          <div className='sm1'> Jax's Points: {this.props.playerOnePoints} </div>
        </div>
        <div className='sm1'> </div>
       <div className='player2'><div className='sm2'> Pedro's Points: {this.props.playerTwoPoints}</div> </div>

       </div>

    )
  }
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

    this.box1 = this.box1.bind(this);
    this.changePlayersTurn.bind(this);
    this.box2 = this.box2.bind(this);
    this.box3=this.box3.bind(this);
    this.box4=this.box4.bind(this);
    this.box5=this.box5.bind(this);
    this.box6=this.box6.bind(this);
    this.box7=this.box7.bind(this);
    this.box8=this.box8.bind(this);
    this.box9=this.box9.bind(this);
    this.checkForWinner=this.checkForWinner.bind(this)
    this.startOver=this.startOver.bind(this)
    this.resetPoints=this.resetPoints.bind(this)
  }

  box1() {
    if (this.state.box1 !== '' || this.state.winner !== '') {
      return
    }

    if(this.state.playersTurn === 'player1'){
      this.setState(function(){
        return {
          box1: 'x'
        }
      }, this.changePlayersTurn)
    } else if(this.state.playersTurn === 'player2'){
      this.setState(function(){
        return {
          box1: 'o'
        }
      }, this.changePlayersTurn)
    }
  }
  box2() {
    if (this.state.box2 !== '' || this.state.winner !=='') {
      return
    }
    if(this.state.playersTurn === 'player1'){
      this.setState(function(){
        return {
          box2: 'x'
        }
      }, this.changePlayersTurn)
    } else if(this.state.playersTurn === 'player2'){
      this.setState(function(){
        return {
          box2: 'o'
        }
      }, this.changePlayersTurn)
    }
  }
  box3() {
    if (this.state.box3 !== '' || this.state.winner !=='') {
      return
    }
    if(this.state.playersTurn === 'player1'){
      this.setState(function(){
        return {
          box3: 'x'
        }
      }, this.changePlayersTurn)
    } else if(this.state.playersTurn === 'player2'){
      this.setState(function(){
        return {
          box3: 'o'
        }
      }, this.changePlayersTurn)
    }
  }
  box4() {
    if (this.state.box4 !== '' || this.state.winner !=='') {
      return
    }
    if(this.state.playersTurn === 'player1'){
      this.setState(function(){
        return {
          box4: 'x'
        }
      }, this.changePlayersTurn)
    } else if(this.state.playersTurn === 'player2'){
      this.setState(function(){
        return {
          box4: 'o'
        }
      }, this.changePlayersTurn)
    }
  }
  box5() {
    if (this.state.box5 !== '' || this.state.winner !== '') {
      return
    }
    if(this.state.playersTurn === 'player1'){
      this.setState(function(){
        return {
          box5: 'x'
        }
      }, this.changePlayersTurn)
    } else if(this.state.playersTurn === 'player2'){
      this.setState(function(){
        return {
          box5: 'o'
        }
      }, this.changePlayersTurn)
    }
  }
  box6() {
    if (this.state.box6 !== '' || this.state.winner !== '') {
      return
    }
    if(this.state.playersTurn === 'player1'){
      this.setState(function(){
        return {
          box6: 'x'
        }
      }, this.changePlayersTurn)
    } else if(this.state.playersTurn === 'player2'){
      this.setState(function(){
        return {
          box6: 'o'
        }
      }, this.changePlayersTurn)
    }
  }
  box7() {
    if (this.state.box7 !== '' || this.state.winner !=='') {
      return
    }
    if(this.state.playersTurn === 'player1'){
      this.setState(function(){
        return {
          box7: 'x'
        }
      }, this.changePlayersTurn)
    } else if(this.state.playersTurn === 'player2'){
      this.setState(function(){
        return {
          box7: 'o'
        }
      }, this.changePlayersTurn)
    }
  }
  box8() {
    if (this.state.box8 !== '' || this.state.winner !=='') {
      return
    }
    if(this.state.playersTurn === 'player1'){
      this.setState(function(){
        return {
          box8: 'x'
        }
      }, this.changePlayersTurn)
    } else if(this.state.playersTurn === 'player2'){
      this.setState(function(){
        return {
          box8: 'o'
        }
      }, this.changePlayersTurn)
    }
  }
  box9() {
    if (this.state.box9 !== '' || this.state.winner !=='') {
      return
    }
    if(this.state.playersTurn === 'player1'){
      this.setState(function(){
        return {
          box9: 'x'
        }
      }, this.changePlayersTurn)
    } else if(this.state.playersTurn === 'player2'){
      this.setState(function(){
        return {
          box9: 'o'
        }
      }, this.changePlayersTurn)
    }
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

    if(box1==='x' && box2==='x' && box3 ==='x'){
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
    this.startOver()
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
          clickBox1={this.box1}
          box1={this.state.box1}
          clickBox2={this.box2}
          box2={this.state.box2}
          clickBox3={this.box3}
          box3={this.state.box3}
          clickBox4={this.box4}
          box4={this.state.box4}
          clickBox5={this.box5}
          box5={this.state.box5}
          clickBox6={this.box6}
          box6={this.state.box6}
          clickBox7={this.box7}
          box7={this.state.box7}
          clickBox8={this.box8}
          box8={this.state.box8}
          clickBox9={this.box9}
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
