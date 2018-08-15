import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route, Redirect } from 'react-router-dom';
import Navbar from './navbar';
import GameContainer from './components/game_container'
import GameInventory from './components/game_inventory'
import Orders from './components/orders'
import ShoppingCart from './components/shopping_cart'
import {connect} from 'react-redux';
import {addToCart} from './actions/index';
import RegisterGameForm from './components/register_game_form';
import SignUp from './components/signup';
import Login from './components/login';
import CheckoutForm from './components/checkout_form';
import Home from './components/home';
import OrderConfirmation from './components/order_confirmation'
import {Elements, StripeProvider} from 'react-stripe-elements';

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

               <Route exact path="/register-game-form" render={(props) => <RegisterGameForm {...props}  />} />
               <Route exact path="/inventory" render={(props) => <GameInventory {...props} />} />




             <Route exact path="/order-confirmed" render={(props) => <OrderConfirmation {...props} />} />
            <Route exact path="/" render={(props) => <Home {...props} />} />
            <Route exact path="/signup" render={(props) => <SignUp {...props} />} />
            <Route exact path="/login" render={(props) => <Login {...props} /> } />
              <Route exact path="/orders" render={(props) => <Orders {...props}  />} />
            <Route exact path="/shop-games" render={(props) => <GameContainer {...props}  />} />
            <Route exact path="/checkout" render={(props) =>
                <StripeProvider apiKey="pk_test_LwL4RUtinpP3PXzYirX2jNfR">
                  <Elements>
                    <CheckoutForm {...props} />
                  </Elements>
                </StripeProvider> } />
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
