import React from 'react';
import GameDetails from './game_details';
import {connect} from 'react-redux';
import {addToCart} from '../actions/index';
import {showGameDetails} from '../actions/index';

class Card extends React.Component {

	state = {
		isClicked: false
	}

	  showGameDetails = (e, game) => {
      e.preventDefault();
      this.setState({
      isClicked: !this.state.isClicked
    });

		this.props.showGameDetails(game);
 }



     render() {
     				console.log(this.props);
     	const {img} = this.props.game
     return (
		<div className="col-lg-4 col-md-6 col-xs-12">
		  <div className="card" style={{width: 18 + "rem" }}>
			<img className="card-img-top" src={img} alt="Card image cap" />
			  <a onClick={(e) => this.showGameDetails(e,this.props.game)} href="" className="btn btn-primary btn-block">Game Details</a>
			  <button onClick={() => this.props.addToCart(this.props.game)} type="button" className="btn btn-success btn-block">Add To Cart</button>

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
    addToCart: (item) => {
      dispatch(addToCart(item))
    },
		showGameDetails: (game) => {
			dispatch(showGameDetails(game))
		}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card);
