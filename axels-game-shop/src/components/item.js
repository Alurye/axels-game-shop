import React from 'react';
import GameDetails from './game_details';
import {deleteGame} from '../actions/index';
import {connect} from 'react-redux';
import {showGameDetails} from '../actions/index';

class Item extends React.Component {

	state = {
		isClicked: false,
		pathname: this.props.location.pathname.split('/')[1]
	}

	  showGameDetails = (e, game) => {
      e.preventDefault();
      this.setState({
      isClicked: !this.state.isClicked
    });

		this.props.showGameDetails(game);
 }


     render() {

     	const {title,img} = this.props.game
     return (
		<div className="col-lg-4 col-md-6 col-xs-12">
		  <div className="card" style={{width: 18 + "rem" }}>
			<img className="card-img-top" src={img} alt={title} />

			  <button onClick={(e) => this.showGameDetails(e,this.props.game)} className="btn btn-primary btn-block">Game Details</button>
 				<button  onClick={() => this.props.deleteGame(this.props.game.id)}type="button" className="btn btn-danger btn-block">Delete Game </button>
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
		showGameDetails: (game) => {
			dispatch(showGameDetails(game))
		},
		deleteGame: (id) => {
			dispatch(deleteGame(id))
		},
		dispatch
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Item);
