import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component {


  render(){
    return(
      <main role="main" className="container">


    <div className="jumbotron">
    <h1 className="display-3">Axel's Game Shop</h1>
    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <img style={{maxWidth: 100 + "%"}} src={require("../img/doc_doom.jpg")} alt="doctor doom" />
    <hr className="my-4" />
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <p className="lead">
      <Link to="/signup" className="btn btn-primary btn-lg" role="button">
      Sign Up</Link> or <Link to="/login" className="btn btn-primary btn-lg" role="button">Login</Link> </p>
  </div>
      </main>
    );
  }
}

export default Home;
