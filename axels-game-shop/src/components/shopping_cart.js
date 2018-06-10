import React from 'react';
import CartItem from './cartItem'

class ShoppingCart extends React.Component {
	
	state = {
		shoppingCart: this.props.shoppingCart

	}

	render(){
		console.log(this.state.shoppingCart);
		const displayItems = this.state.shoppingCart.map((item) =>{
			return <CartItem item={item} />
		})

		return (
		 <main role="main" className="shoppingCart container">
			<table id="cart" className="table table-hover table-condensed">
    				<thead>
						<tr>
							<th style={{width: 50 + "%"}}>Product</th>
							<th style={{width: 10 + "%"}}>Price</th>
							<th style={{width:  8 + "%"}}>Quantity</th>
							<th style={{width: 22 + "%"}} className="text-center">Subtotal</th>
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
							<td colspan="2" className="hidden-sm-up"></td>
							<td className="hidden-sm-up text-center"><strong>Total $1.99</strong></td>
							<td><a href="#" className="btn btn-success btn-block">Checkout <i className="fa fa-angle-right"></i></a></td>
						</tr>
					</tfoot>
				</table>
				</main>
			);
	}
}

export default ShoppingCart;