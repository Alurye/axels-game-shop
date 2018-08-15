import React from 'react';

const CheckoutListItem = (props) => {
  const {title,price, quantity} = props.item
  return (
    <li className="list-group-item d-flex justify-content-between lh-condensed">
      <div>
        <h6 className="my-0">{title}</h6>
          <small className="text-muted">x{quantity}</small>

      </div>
      <span className="text-muted">${parseFloat(price).toFixed(2)}</span>
    </li>
  );
}

export default CheckoutListItem;
