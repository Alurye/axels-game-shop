import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import CardContainer from './components/card_container'
import Card from './components/card';
import games from './components/game_data'
import ShoppingCart from './components/shopping_cart'
import {connect} from 'react-redux';
import {addToCart} from './actions/index';

class App extends Component {

  state = {
    shoppingCart:[],
    cartClicked: false,
    query: '',
    cartCount:0,
    currentCartItem: {
        title:'',
        console:'',
        quantity:0,
        price:'',
        genre:'',
        img:'',
        description:''
    }
  }

addToCart = (item) => {

   if (this.state.shoppingCart.includes(item)){
          return false;
   } else {
    this.setState({
      currentCartItem:item,
      shoppingCart:[...this.state.shoppingCart, item]
    }, this.cartLength);
   }

  }



cartLength = () => {
  let cartCount = 0;
 
     this.state.shoppingCart.map((item) => {
        return cartCount+=item.quantity
  });
   
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


  updateGames = (id,quantity) => {
      // console.log("id", id, "quantity", quantity);
   let updatedGameData = this.props.games.map((game) => {
        if (game.id === id) {
           console.log(game.quantity);
         return  this.state.currentCartItem;
        } else {
          return game;
        }
        
  });
          // console.log(updatedGameData)

   // this.setState({
   //      gameData:updatedGameData
   // }, console.log(this.state.gameData));

  }

  updateQuantity = (quantity, id) => {
    // e.preventDefault();
    console.log(this.state.currentCartItem);

      this.setState({
        currentCartItem: {...this.state.currentCartItem,
          quantity: quantity
        }
      }, this.updateGames(id, quantity));

    // if (e.target.value > this.props.quantity) {
    //   this.setState({
    //     currentCartItem: {
    //        quantity: this.props.quantity
    //     }
       
    //   });
    // } else if (e.target.value < 1) {
    //   this.setState({
    //     currentCartItem: {
    //       quantity: 1
    //     }
       
    //   });
    // } else {
    //   this.setState({
    //     currentCartItem: {
    //        quantity: e.target.value
    //     }
      
    // });
    // }


    
  }


  render() {
    console.log(this.props);
    // console.log(this.state.gameData);
    // let filteredSearch = this.props.games.filter(item => 
    //       item.title.toLowerCase().includes(this.state.query.toLowerCase()));
    // console.log(this.updateGames(2,1));
    // console.log(this.state.gameData, prevState);
    // console.log(this.state.currentCartItem.quantity,this.state.currentCartItem);      
    return (
      <React.Fragment>
       <Navbar query={this.state.query} handleSearch={this.handleSearch} shoppingCart={this.state.shoppingCart} displayCart={this.displayCart} cartCount={this.state.cartCount}/>
        {this.state.cartClicked ? <ShoppingCart deleteItem={this.deleteItem}  /> :<CardContainer updateQuantity={this.updateQuantity} addToCart={this.addToCart}  />}
    </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
     games: state.gameData
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => {
      dispatch(addToCart(item))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
