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
    query: '',
    cartCount:0,
    currentCartItem: {
        title:'',
        console:'',
        quantity:'',
        price:'',
        genre:'',
        img:'',
        description:''
    }
  }

addToCart = (item) => {
    this.setState({
      currentCartItem: item,
      shoppingCart:[...this.state.shoppingCart, this.state.currentCartItem]
    }, this.cartLength);
  }

cartLength = () => {
  let cartCount = 0;
 
     this.state.shoppingCart.map((item) => {
        return cartCount+=item.quantity
  });
      console.log('hello:', cartCount);
   
    this.setState({
    cartCount: cartCount
      });
  
  
}

displayCart = () => {
    
    this.setState({
      cartClicked: !this.state.cartClicked
    });


}

deleteItem = (item) => {
 let filteredCart = this.state.shoppingCart.filter((itm) => {
        return itm !== item
  });
   this.setState({
      shoppingCart: filteredCart
   }, this.cartLength);
}

handleSearch = (e) => {
    
    this.setState({
      query: e.target.value
  });


  }


  handleQuantity = (e) => {
    e.preventDefault
    if (e.target.value > this.props.quantity) {
      this.setState({
        currentCartItem: {
           quantity: this.props.quantity
        }
       
      });
    } else if (e.target.value < 1) {
      this.setState({
        quantity: 1
      });
    } else {
      this.setState({
      quantity: e.target.value
    }, console.log(this.state.value));
    }


    
  }


  render() {
    console.log(this.state.query);
    let filteredSearch = this.state.gameData.filter(item => 
          item.title.toLowerCase().includes(this.state.query.toLowerCase()));

      ;
    return (
      <React.Fragment>
       <Navbar query={this.state.query} handleSearch={this.handleSearch} shoppingCart={this.state.shoppingCart} displayCart={this.displayCart} cartCount={this.state.cartCount}/>
        {this.state.cartClicked ? <ShoppingCart deleteItem={this.deleteItem} shoppingCart={this.state.shoppingCart} /> :<CardContainer addToCart={this.addToCart} gameData={filteredSearch} />}
    </React.Fragment>
    );
  }
}

export default App;
