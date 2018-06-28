import React from 'react';
import GameDetails from './game_details';
import {connect} from 'react-redux';
import {addToCart} from '../actions/index';

class Card extends React.Component {
	
	state = {
		isClicked: false
	}

	  showGameDetails = (e) => {
      e.preventDefault();
      this.setState({
      isClicked: !this.state.isClicked
    });
 }

 	

     render() {
     				console.log(this.props);

     	const {id,title,img,price,quantity,description, genre} = this.props.game
     return (
		<div className="col-lg-4 col-md-6 col-xs-12">
		  <div className="card" style={{width: 18 + "rem" }}>
			<img className="card-img-top" src={img} alt="Card image cap" />
			  <a onClick={this.showGameDetails} href="" className="btn btn-primary btn-block">Game Details</a>
			  <button onClick={() => this.props.addToCart(this.props.game)} type="button" className="btn btn-success btn-block">Add To Cart</button>

				{this.state.isClicked ?  <GameDetails updateQuantity={this.props.updateQuantity} game={this.props.game} />: null }
		</div>
	</div>
	)
     }

}

const mapStateToProps = (state) => {
		return {
			shoppingCart: state.shoppingCart
		}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => {
      dispatch(addToCart(item))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card);