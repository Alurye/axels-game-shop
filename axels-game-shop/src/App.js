import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import CardContainer from './components/card_container'
import Card from './components/card';
import games from './components/game_data'
class App extends Component {

  state = {
    gameData: games
  }



  render() {
    return (
      <React.Fragment>
       <Navbar/>
       <CardContainer gameData={this.state.gameData} />
    </React.Fragment>
    );
  }
}

export default App;
