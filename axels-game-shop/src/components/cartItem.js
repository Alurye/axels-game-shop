import React from 'react';

const CartItem = (props) => {
		const {img, title, description, price,} = props.item;
	return(
		<tr>
			<td data-th="Product">
				<div className="row">
					<div className="col-sm-3 hidden-xs"><img src={img} alt="..." className="img-responsive"/></div>
					<div className="col-sm-9">
						<h4 className="nomargin">{title}</h4>
						<p>{description}</p>
					</div>
				</div>
			</td>
			<td data-th="Price">${price}</td>
			<td data-th="Quantity">
				<input type="number" className="form-control text-center" value="1" />
			</td>
			<td data-th="Subtotal" className="text-center">1.99</td>
			<td className="actions" data-th="">
				<button className="btn btn-info btn-sm"><i className="fas fa-sync-alt"></i></button>
				<button className="btn btn-danger btn-sm"><i className="fas fa-trash-alt"></i></button>

				
			</td>
		</tr>
		);
}

export default CartItem;