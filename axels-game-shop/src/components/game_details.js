import React from 'react';
import {connect} from 'react-redux';
import {handleQuantity} from '../actions/index';




class GameDetails extends React.Component {

	state = {
		quantity: this.props.game.quantity, //2
	}

	handleQuantity = (e, item) => {
		e.preventDefault();
		let newQuantity = parseInt(e.target.value)

		if (newQuantity > this.props.game.quantity) {
			this.setState({
				quantity: this.props.game.quantity
			}, () => this.props.handleQuantity(this.state.quantity, item));
		} else if (newQuantity < 1) {
			this.setState({
				quantity: 1
			}, () => this.props.handleQuantity(this.state.quantity, item));
		} else {
			this.setState({
			quantity: newQuantity
		}, () => this.props.handleQuantity(this.state.quantity, item));
		}
	}

	render(){
		// console.log(this.state.quantity)
		// console.log(this.props.gameData);
		const {title,genre,price,description} = this.props.game
		return (
		<div className="card-body">
			<h4 className="card-title">{title}</h4>
			<p className="card-text"><strong>Price:</strong> ${price}</p>
			<form className="form-inline">
			<div className="input-group mb-2 mr-sm-2 mb-sm-0">
				<label htmlFor="Quantity">Quantity: </label>
				 <input name="quantity" onChange={(e)=> this.handleQuantity(e, this.props.game)} className='form-control mb-2 mr-sm-2 mb-sm-0' type="number" value={this.state.quantity} />
			</div>
			</ form>
			<p className="card-text"><strong>Genre:</strong> {genre}</p>
			<p className="card-text"><strong>Description:</strong> {description}</p>
		</div>
		);
	}

}

const mapStateToProps = (state) => {
	return {
		gameData: state.gameData,
		currentCartItem: state.currentCartItem
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleQuantity: (e,q,item) => {
			dispatch(handleQuantity(e,q,item));
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(GameDetails);
