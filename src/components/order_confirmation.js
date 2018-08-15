import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';



class OrderConfirmation extends React.Component {



  render(){
    return (

      <main role="main" className="jumbotron text-center container">
        <h1 className="display-3">Thank You!</h1>
        <h2>Order Number: {this.props.orderNumber}</h2>
        <p className="lead"><strong>Your order is on it's way! Please check your email for tracking details.</strong></p>
        <hr />
        <p>
          Having trouble? <a href="#">Contact us</a>
        </p>
        <p className="lead">
          <Link to="/shop-games" className="btn btn-primary" role="button">Continue Shopping</Link>
        </p>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orderNumber: state.orderNumber
  }
}

export default connect(mapStateToProps)(OrderConfirmation);
