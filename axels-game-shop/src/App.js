import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import CardContainer from './components/card_container'
import Card from './components/card';
import games from './components/game_data'
import ShoppingCart from './components/shopping_cart'

class App extends Component {

  state = {
    gameData: games,
    shoppingCart:[],
    cartClicked: false,
  }

addToCart = (item) => {
    console.log(item)
    this.setState({
      shoppingCart:[...this.state.shoppingCart, item]
    });
  }


displayCart = () => {
    
    this.setState({
      cartClicked: !this.state.cartClicked
    });


}



  render() {
    console.log(this.state.shoppingCart)
    return (
      <React.Fragment>
       <Navbar displayCart={this.displayCart} shoppingCartCount={this.state.shoppingCart.length}/>
        {this.state.cartClicked ? <ShoppingCart shoppingCart={this.state.shoppingCart} /> :<CardContainer addToCart={this.addToCart} gameData={this.state.gameData} />}
    </React.Fragment>
    );
  }
}

export default App;
