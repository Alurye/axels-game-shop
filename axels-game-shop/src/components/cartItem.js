import React from 'react';

const CartItem = (props) => {
		const {img, title, description, price, quantity} = props.item;
	return(
		<tr>
			<td data-th="Product">
				<div className="row">
					<div className="col-sm-4 hidden-xs"><img src={img} alt="..." className="img-responsive"/></div>
					<div className="col-sm-8">
						<h4 className="nomargin">{title}</h4>
						<p>{description}</p>
					</div>
				</div>
			</td>
			<td data-th="Price">${price}</td>
			<td data-th="Quantity">
				<input type="number" className="form-control text-center" value={quantity} />
			</td>
			<td data-th="Subtotal" className="text-center">${price * quantity}</td>
			<td className="actions" data-th="">
				<button className="btn btn-info btn-sm"><i className="fas fa-sync-alt"></i></button>
				<button onClick={() => props.deleteItem(props.item)} className="btn btn-danger btn-sm"><i className="fas fa-trash-alt"></i></button>

				
			</td>
		</tr>
		);
}

export default CartItem;