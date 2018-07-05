import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route, Redirect } from 'react-router-dom';
import Navbar from './navbar';
import CardContainer from './components/card_container'
import Card from './components/card';
import ShoppingCart from './components/shopping_cart'
import {connect} from 'react-redux';
import {addToCart} from './actions/index';
import RegisterGameForm from './components/register_game_form';
import SignUp from './components/signup';
import Login from './components/login';
import CheckoutForm from './components/checkout_form';
import Home from './components/home';

class App extends Component {

  state = {
    query: ''
  }


handleSearch = (e) => {

    this.setState({
      query: e.target.value
  });


  }


  // updateGames = (id,quantity) => {
  //  let updatedGameData = this.props.games.map((game) => {
  //       if (game.id === id) {
  //          console.log(game.quantity);
  //        return  this.state.currentCartItem;
  //       } else {
  //         return game;
  //       }
  //
  // });
  //
  // }

  // updateQuantity = (quantity, id) => {
  //   // e.preventDefault();
  //   console.log(this.state.currentCartItem);
  //
  //     this.setState({
  //       currentCartItem: {...this.state.currentCartItem,
  //         quantity: quantity
  //       }
  //     }, this.updateGames(id, quantity));

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



  // }

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
       <Navbar query={this.state.query} handleSearch={this.handleSearch} />
        <Switch>
            <Route exact path="/home" render={(props) => <Home {...props} />} />
            <Route exact path="/signup" render={(props) => <SignUp {...props} />} />
            <Route exact path="/login" render={(props) => <Login {...props} /> } />
            <Route exact path="/register-game-form" render={(props) => <RegisterGameForm   />} />
            <Route exact path="/inventory" render={(props) => <CardContainer {...props} />} />
            <Route exact path="/games" render={(props) => <CardContainer {...props}  />} />
            <Route exact path="/checkout" render={(props) => <CheckoutForm {...props} /> } />
            <Route exact path="/shopping-cart" render={(props) => <ShoppingCart {...props} /> } />
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
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
