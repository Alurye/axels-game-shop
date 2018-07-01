import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import CardContainer from './components/card_container';
import RegisterGameForm from './components/register_game_form';
import SearchBar from './components/SearchBar';
import {connect} from 'react-redux';
import App from './App';
import Home from './components/home';

const Navbar = (props) => {
	console.log(props);
	// onClick={props.displayForm}
	console.log(props.match)

	return (
		<React.Fragment>
		 <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <a className="navbar-brand" href="#">Axel's Game Shop</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">

            <Link to="/home" className="nav-link">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link to="/register-game-form"  className="nav-link">Add Game</Link>
          </li>
					<li className="nav-item">
						<Link to="/inventory" className="nav-link">Inventory</Link>
					</li>
          <li>
          	 <Link to="/shopping-cart" href="#" onClick={props.displayCart} className="btn btn-primary">
           <i className="fas fa-shopping-cart"></i> {props.cartCount}
        </Link>
          </li>
        </ul>
        <SearchBar query={props.query} handleSearch={props.handleSearch} shoppingCart={props.shoppingCart} />
      </div>

    </nav>

</React.Fragment>
    )
};


const mapStateToProps = (state) => {
  return {
    shoppingCart: state.shoppingCart,
		gameFormClicked: state.gameFormClicked,
		cartClicked: state.cartClicked,
		cartCount: state.cartCount
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
			displayForm: () => {
				dispatch({type: "DISPLAY_FORM"});
			},
			displayCart: () => {
				dispatch({type: "DISPLAY_CART"});
			}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
