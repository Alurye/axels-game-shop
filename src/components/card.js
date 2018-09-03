import React from 'react';
import GameDetails from './game_details';
import {connect} from 'react-redux';
import {addToCart, showGameDetails, resetCurrentCartItem,cartTotal} from '../actions/index';

class Card extends React.Component {

	state = {
		isClicked: false,
		currentCartItem: {
			...this.props.game,
			userQty:this.props.game.quantity
		}
	}

	  showGameDetails = (e, game) => {
      e.preventDefault();
      this.setState({
      isClicked: !this.state.isClicked
    	});

			this.props.showGameDetails(game);
 }

		handleDuplicates = (item) => {
			const filteredCart = this.props.shoppingCart.filter(scItem => scItem.title === item.title)
			// let total = 0;
			// const cartTotal = this.props.shoppingCart.reduce((total,item) => {
			// 				let subtotal = item.price*item.userQty;
			// 				 return total+=subtotal;
			// },0).toFixed(2);

			if(filteredCart.length !== 0) {
				return false;
			} else {
					 console.log(item);
				this.props.addToCart(item);

				this.props.cartTotal();
				console.log(this.props.shoppingCart);
				this.props.resetCurrentCartItem();
			}
	}

	// cartTotal =  () => {
	// 		return this.props.shoppingCart.reduce((total,item) => {
	// 						let subtotal = item.price*item.userQty;
	// 						 return total+=subtotal;
	// 		},0).toFixed(2);
	//
	// 	}


     render() {
     	const {title,img} = this.props.game

		 return (
		<div className="col-lg-4 col-md-6 col-xs-12">
		  <div className="card">
			<img className="card-img-top" src={img} alt={title} />

			  <button onClick={(e) => this.showGameDetails(e,this.props.game)} className="btn btn-primary btn-block">Game Details</button>
			  <button onClick={() => this.handleDuplicates(this.state.currentCartItem)} type="button" className="btn btn-success btn-block">Add To Cart</button>

				{this.state.isClicked ?  <GameDetails game={this.props.game} />: null }
		</div>
	</div>
	)
     }

}

const mapStateToProps = (state) => {
		return {
			shoppingCart: state.shoppingCart,
			currentCartItem: state.currentCartItem,
			gameDetailsClicked: state.gameDetailsClicked
		}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (game) => {
      dispatch(addToCart(game))
    },
		showGameDetails: (game) => {
			dispatch(showGameDetails(game))
		},
		resetCurrentCartItem:() => {
			dispatch(resetCurrentCartItem());
		},
		cartTotal:() => {
			dispatch(cartTotal());
		}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card);
