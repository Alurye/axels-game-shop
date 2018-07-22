import React from 'react';
import {connect} from 'react-redux';
import {handleQuantity} from '../actions/index';




class GameDetails extends React.Component {

	state = {
		// quantity: this.props.game.quantity,
		currentCartItem: {
				...this.props.game,
				userQty:this.props.game.quantity

	}
	}

	handleQuantity = (e,item) => {
		e.preventDefault();
		let newQuantity = parseInt(e.target.value)
		if (newQuantity > this.props.game.quantity) {
			this.setState({
				currentCartItem:{
					...this.props.game,
					userQty: this.props.game.quantity
				}
			});
		} else if (newQuantity < 1) {
			this.setState({
				currentCartItem:{
					...this.props.game,
					userQty: 1
				}
			});
		} else {
			this.setState({
				currentCartItem:{
				...this.props.game,
				userQty: newQuantity
			}
		}, ()=>  this.props.handleQuantity(this.state.currentCartItem));
		}
	}

	render(){
		console.log(this.state.currentCartItem);
		const {title,genre,price,description} = this.props.game
		return (
		<div className="card-body">
			<h4 className="card-title">{title}</h4>
			<p className="card-text"><strong>Price:</strong> ${price}</p>
			<form className="form-inline">
			<div className="input-group mb-2 mr-sm-2 mb-sm-0">
				<label htmlFor="Quantity">Quantity: </label>
				 <input name="userQty" onChange={(e)=> this.handleQuantity(e,this.state.currentCartItem)} className='form-control mb-2 mr-sm-2 mb-sm-0' type="number" value={this.state.currentCartItem.userQty} placeholder={this.state.userQty} />
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
		currentCartItem: state.currentCartItem
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleQuantity: (e,item) => {
			dispatch(handleQuantity(e,item));
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(GameDetails);
