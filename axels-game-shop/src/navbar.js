import React from 'react';
import SearchBar from './components/SearchBar';
const Navbar = (props) => {
	console.log(props);
	return (
		 <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <a className="navbar-brand" href="#">Axel's Game Shop</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="https://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div className="dropdown-menu" aria-labelledby="dropdown01">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li>
          	 <a href="#" onClick={(e)=>props.displayCart(e)} className="btn btn-primary">
           <i className="fas fa-shopping-cart"></i> {props.cartCount}
        </a>
          </li>
        </ul>
        <SearchBar query={props.query} handleSearch={props.handleSearch} shoppingCart={props.shoppingCart} />
      </div>
    </nav>
    )
};
export default Navbar;