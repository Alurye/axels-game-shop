import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route, Redirect } from 'react-router-dom';
import Navbar from './navbar';
import CardContainer from './components/card_container'
import ShoppingCart from './components/shopping_cart'
import {connect} from 'react-redux';
import {addToCart} from './actions/index';
import RegisterGameForm from './components/register_game_form';
import SignUp from './components/signup';
import Login from './components/login';
import CheckoutForm from './components/checkout_form';
import Home from './components/home';
import OrderConfirmation from './components/order_confirmation'

class App extends Component {

  state = {
    query: ''
  }


handleSearch = (e) => {

    this.setState({
      query: e.target.value
  });


  }


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



               <Route exact path="/register-game-form" render={(props) => <RegisterGameForm   />} />
               <Route exact path="/inventory" render={(props) => <CardContainer {...props} />} />




             <Route exact path="/order-confirmed" render={(props) => <OrderConfirmation {...props} />} />
            <Route exact path="/" render={(props) => <Home {...props} />} />
            <Route exact path="/signup" render={(props) => <SignUp {...props} />} />
            <Route exact path="/login" render={(props) => <Login {...props} /> } />

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
