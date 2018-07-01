import React from 'react';
import CartItem from './cartItem'
import {connect} from 'react-redux';
import {addToCart} from '../actions/index';

class ShoppingCart extends React.Component {

	state = {
		priceTotal: 0
	}

	calculateTotal = () => {
		let total = 0;
		this.props.shoppingCart.forEach((item) => {
			let subtotal = item.price * item.quantity
			 total+=subtotal;
		});
		return total.toFixed(2);
		this.setState({
			priceTotal: total
		});
	}



	render(){
				// console.log(this.props);

		const displayItems = this.props.shoppingCart.map((item) =>{
			return <CartItem deleteItem={this.props.deleteItem} item={item} />
		})
		return (
		 <main role="main" className="shoppingCart container">
			<table id="cart" className="table table-hover table-condensed">
    				<thead>
						<tr>
							<th style={{width: 60 + "%"}}>Product</th>
							<th style={{width: 10 + "%"}}>Price</th>
							<th style={{width:  8 + "%"}}>Quantity</th>
							<th style={{width: 12 + "%"}} className="text-center">Subtotal</th>
							<th style={{width: 10 +"%"}}></th>
						</tr>
					</thead>
					<tbody>
					{displayItems}
					</tbody>
					<tfoot>
						<tr className="hidden-xs-down">
							<td className="text-center"><strong>Total 1.99</strong></td>
						</tr>
						<tr>
							<td><a href="#" className="btn btn-warning"><i className="fa fa-angle-left"></i> Continue Shopping</a></td>
							<td colSpan="2" className="hidden-sm-up"></td>
							<td className="hidden-sm-up text-center"><strong>Total ${this.calculateTotal()}</strong></td>
							<td><a href="#" className="btn btn-success btn-block">Checkout <i className="fa fa-angle-right"></i></a></td>
						</tr>
					</tfoot>
				</table>
				</main>
			);
	}
}


const mapStateToProps = (state) => {
			return {
				shoppingCart: state.shoppingCart
			}
}

// const  mapDispatchToProps = (dispatch) => {
// 			addToCart: (item) => {
// 				dispatch: "ADD_TO_CART"
// 			}
// }

export default connect(mapStateToProps)(ShoppingCart);
