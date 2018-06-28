import React from 'react';


class GameDetails extends React.Component {
	  
	state = {
		quantity: this.props.game.quantity
	}

	handleQuantity = (e) => {
		e.preventDefault
		if (e.target.value > this.props.quantity) {
			this.setState({
				quantity: this.props.quantity
			});
		} else if (e.target.value < 1) {
			this.setState({
				quantity: 1
			});
		} else {
			this.setState({
			quantity: e.target.value
		});
		}

		this.props.updateQuantity(this.props.id,this.state.quantity);
		
	}

	render(){
		console.log(this.props);
		const {id,title,img, genre,price,quantity,description} = this.props.game
		return (
		<div className="card-body">
			<h4 className="card-title">{title}</h4>
			<p className="card-text"><strong>Price:</strong> ${price}</p>
			<form className="form-inline">
			<div className="input-group mb-2 mr-sm-2 mb-sm-0">
				<label htmlFor="Quantity">Quantity: </label>
				 <input onChange={(e)=>this.handleQuantity(e)} className='form-control mb-2 mr-sm-2 mb-sm-0' type="number" value={this.state.quantity} />
			</div>
			</ form>
			<p className="card-text"><strong>Genre:</strong> {genre}</p>
			<p className="card-text"><strong>Description:</strong> {description}</p>
		</div>
		);
	}
	
}

export default GameDetails;