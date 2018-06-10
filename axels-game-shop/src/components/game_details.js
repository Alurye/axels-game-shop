import React from 'react';


class GameDetails extends React.Component {
	  
	state = {
		value: this.props.quantity
	}

	handleQuantity = (e) => {
		e.preventDefault
		if (e.target.value > this.props.quantity) {
			this.setState({
				value: this.props.quantity
			});
		} else if (e.target.value < 0) {
			this.setState({
				value: 0
			});
		} else {
			this.setState({
			value: e.target.value
		});
		console.log(e.target.value);
		}


		
	}

	render(){
		const {title,genre,price,quantity,description} = this.props

		return (
		<div className="card-body">
			<h4 className="card-title">{title}</h4>
			<p className="card-text"><strong>Price:</strong> ${price}</p>
			<form className="form-inline">
			<div className="input-group mb-2 mr-sm-2 mb-sm-0">
				<label htmlFor="Quantity">Quantity:</label>
				 <input onChange={(e) => this.handleQuantity(e)} className='form-control mb-2 mr-sm-2 mb-sm-0' type="number" value={this.state.value} />
			</div>
			</ form>
			<p className="card-text"><strong>Genre:</strong> {genre}</p>
			<p className="card-text"><strong>Description:</strong> {description}</p>
		</div>
		);
	}
	
}

export default GameDetails;