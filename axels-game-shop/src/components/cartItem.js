import React from 'react';
import {connect} from 'react-redux';
import {deleteItem} from '../actions/index';
import {handleQuantity} from '../actions/index';




class CartItem extends React.Component {

	state =  {
		quantity: this.props.item.quantity
	}

	handleQuantity = (e) => {
		if (e.target.value > this.props.item.quantity) {
			this.setState({
				quantity: this.props.item.quantity
			});
		} else if ( e.target.value < 0) {
			this.setState({
				quantity: 1
			});
		} else {
			this.setState({
				quantity: e.target.value
			});
		}
	}

	refreshCart = (e, q, item) => {
		e.preventDefault();
		this.props.handleQuantity(this.state.quantity,this.props.item);
	}

render(){


	const {img, title, description, price, quantity} = this.props.item;

	return(
		<tr>
			<td data-th="Product">
				<div className="row">
					<div className="col-sm-4 hidden-xs"><img src={img} alt={title} className="img-responsive"/></div>
					<div className="col-sm-8">
						<h4 className="nomargin">{title}</h4>
						<p>{description}</p>
					</div>
				</div>
			</td>
			<td data-th="Price">${price}</td>
			<td data-th="Quantity">
				<input type="number" onChange={this.handleQuantity} className="form-control text-center" value={this.state.quantity} />
			</td>
			<td data-th="Subtotal" className="text-center">${price * quantity}</td>
			<td className="actions" data-th="">
				<button onClick={(e)=> this.refreshCart(e,this.props.item)} className="btn btn-info btn-sm"><i className="fas fa-sync-alt"></i></button>
				<button onClick={() => this.props.deleteItem(this.props.item)} className="btn btn-danger btn-sm"><i className="fas fa-trash-alt"></i></button>
			</td>
		</tr>
		);
}

}

const mapStateToProps = (state) => {
			return {
				shoppingCart: state.shoppingCart
			}
}
const mapDispatchToProps = (dispatch) => {

	return {
		deleteItem: (item) => {
			 dispatch(deleteItem(item));
		},
		handleQuantity: (e,q,item) => {
			dispatch(handleQuantity(e,q,item));
		}
	}

}


export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
