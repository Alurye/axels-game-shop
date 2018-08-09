import React from 'react';
import GameDetails from './game_details';
import EditDetails from './edit_details';
import {deleteGame} from '../actions/index';
import {connect} from 'react-redux';

class Item extends React.Component {

	state = {
		isClicked: false,
		editBtnClckd: false,
		pathname: this.props.location.pathname.split('/')[1]
	}

	  showGameDetails = (e, game) => {
      e.preventDefault();
      this.setState({
      isClicked: !this.state.isClicked
    });

 }


 // <button data-toggle="modal" data-target={"#"+id} type="button" className="btn btn-warning btn-block">Edit Details</button>


 render() {

     	const {title,id,img} = this.props.game

     return (
						<div className="col-lg-4 col-md-6 col-xs-12">
						  <div className="card" style={{width: 18 + "rem" }}>
							<img className="card-img-top" src={img} alt={title} />
							  <button onClick={(e) => this.showGameDetails(e,this.props.game)} className="btn btn-primary btn-block">Game Details</button>
				 				<button  onClick={() => this.props.deleteGame(this.props.game.id)} type="button" className="btn btn-danger btn-block">Delete Game </button>
								{this.state.isClicked ?  <GameDetails game={this.props.game} />: null }
						</div>
							<EditDetails game={this.props.game} />
					</div>

					)
     		}

}

const mapStateToProps = (state) => {
		return {
			currentCartItem: state.currentCartItem,
			gameDetailsClicked: state.gameDetailsClicked
		}
}

const mapDispatchToProps = (dispatch) => {
  return {
		deleteGame: (id) => {
			dispatch(deleteGame(id))
		},
		dispatch
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Item);
