import React from 'react';
import {connect} from 'react-redux';
import {deleteItem, refreshCart, handleQuantity} from '../actions/index';




class CartItem extends React.Component {

	state =  {
		currentCartItem:{
			...this.props.item,
			userQty: this.props.item.userQty

		}
	}

	handleQuantity = (e, q, item) => {
		e.preventDefault();
		let newQuantity = parseInt(e.target.value, 10);
		if (newQuantity > this.props.item.quantity) {
			this.setState({
				currentCartItem:{
					...this.props.item,
					userQty: this.props.item.quantity
				}
			});
		} else if ( newQuantity < 1) {
			// console.log('elseif');
			this.setState({
				currentCartItem:{
					...this.props.item,
					userQty: 1
				}
			});
		} else {
			this.setState({
				currentCartItem: {
					...this.props.item,
					userQty: newQuantity
				}
			});
		}
	}



render(){
	const {img, title, description, price, userQty} = this.props.item;

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
			<td data-th="Price">${parseFloat(price).toFixed(2)}</td>
			<td data-th="Quantity">
				<input type="number" onChange={this.handleQuantity} className="form-control text-center" value={this.state.currentCartItem.userQty} />
			</td>
			<td data-th="Subtotal">${parseFloat(price * userQty).toFixed(2)}</td>
			<td className="actions" data-th="">
				<button onClick={(e)=> this.props.refreshCart(e,this.state.currentCartItem)} className="btn btn-info btn-sm"><i className="fas fa-sync-alt"></i></button>
				<button onClick={() => this.props.deleteItem(this.props.item)} className="btn btn-danger btn-sm"><i className="fas fa-trash-alt"></i></button>
			</td>
		</tr>
		);
}

}

const mapStateToProps = (state) => {
			return {
				shoppingCart: state.shoppingCart,
				itemQty: state.itemQty
			}
}
const mapDispatchToProps = (dispatch) => {

	return {
		deleteItem: (item) => {
			 dispatch(deleteItem(item));
		},
		handleQuantity: (e,item) => {
			dispatch(handleQuantity(e,item));
		},
		refreshCart: (e,item) => {
			dispatch(refreshCart(item))
		}
	}

}


export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
