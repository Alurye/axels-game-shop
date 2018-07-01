import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route, Link } from 'react-router-dom';
import Navbar from './navbar';
import CardContainer from './components/card_container'
import Card from './components/card';
import games from './components/game_data'
import ShoppingCart from './components/shopping_cart'
import {connect} from 'react-redux';
import {addToCart} from './actions/index';
import RegisterGameForm from './components/register_game_form';
import Login from './components/login';

class App extends Component {

  state = {
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



// cartLength = () => {
//   let totalCartItems = 0;
//
//      state.shoppingCart.map((item) => {
//         return totalCartItems+=item.quantity
//   });
//
//
//
// }


// deleteItem = (item) => {
//  let filteredCart = this.state.shoppingCart.filter((itm) => {
//         return itm !== item
//   });
//    this.setState({
//       shoppingCart: filteredCart
//    }, this.cartLength);
// }

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

//    navControl = () => {
//     if (this.props.cartClicked) {
//
//     return <ShoppingCart deleteItem={this.deleteItem} />
//   } else if (this.props.gameFormClicked) {
//     return <RegisterGameForm />
//   } else {
//     return <CardContainer updateQuantity={this.updateQuantity} />
//   }
// };

  // {this.navControl()}
  render() {
    // console.log(this.state.gameData);
    // let filteredSearch = this.props.games.filter(item =>
    //       item.title.toLowerCase().includes(this.state.query.toLowerCase()));
    // console.log(this.updateGames(2,1));
    // console.log(this.state.gameData, prevState);
    // console.log(this.state.currentCartItem.quantity,this.state.currentCartItem);


    return (
      <Router>
      <React.Fragment>
       <Navbar query={this.state.query} handleSearch={this.handleSearch} cartCount={this.state.cartCount}/>
        <Switch>
          <Route exact path="/home" render={() => <Login />} />
            <Route exact path="/inventory" render={() => <CardContainer updateQuantity={this.updateQuantity} />} />
            <Route exact path="/register-game-form" render={() => <RegisterGameForm/>} />
            <Route exact path="/shopping-cart" render={() => <ShoppingCart/>} />
        </Switch>
    </React.Fragment>
    </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
     games: state.gameData,
     gameFormClicked: state.gameFormClicked,
     cartClicked: state.cartClicked
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => {
      dispatch(addToCart(item))
    },
    navControl: () => {
      dispatch()
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
