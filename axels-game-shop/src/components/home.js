import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component {


  render(){
    return(
      <main role="main" className="container">
            <div className="jumbotron">
            <img style={{maxWidth: 100 + "%"}} src={require("../img/doc_doom.jpg")} alt="doctor doom" />
            <hr className="my-4" />
          </div>
      </main>
    );
  }
}

export default Home;
