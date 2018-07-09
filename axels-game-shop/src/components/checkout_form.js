import React from 'react';
import CheckoutListItem from './checkout_list_item';
import UUID from 'uuid';
import {saveOrderNumber} from '../actions/index';
import {connect} from 'react-redux';






class CheckoutForm extends React.Component {

  state = {
		first_name: '',
    last_name:'',
    email:'',
    address:'',
    address_2: '',
    state:'',
    country:'',
    zipCode:'',
    store_id:1,
    order_number: UUID()
	}




  handleCheckout = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })

  }

  totalCartItems = () => {
       let totalCartItems = 0;
            this.props.shoppingCart.map((item) => {
                 return totalCartItems+=item.quantity;
                     });
             return totalCartItems;

     }

	calculateTotal = () => {
		let total = 0;
		this.props.shoppingCart.forEach((item) => {
			let subtotal = item.price * item.quantity
			 total+=subtotal;
		});
		return total.toFixed(2);
	}


  orderSubmit = (e) => {

    e.preventDefault();
    let url = 'http://localhost:3000/api/v1/orders'
    fetch(url, {
      body: JSON.stringify(this.state),
      method: "POST",
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json'
      },
    }).then(res => res.json())
    .then(json => {
      this.props.saveOrderNumber(this.state.orderNumber);
      this.props.history.push('/order-confirmed');
      console.log(this.state.orderNumber)
    });
  }
              // <li className="list-group-item d-flex justify-content-between bg-light">
              //   <div className="text-success">
              //     <h6 className="my-0">Promo code</h6>
              //     <small>EXAMPLECODE</small>
              //   </div>
              //   <span className="text-success">-$5</span>
              // </li>


  render(){
    console.log(this.state.orderNumber);

    return(
      <div className="container">
      <div className="py-5 text-center">
        <h2>Checkout form</h2>
      </div>

      <div className="row">
        <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Your cart</span>
            <span className="badge badge-primary badge-pill">{this.totalCartItems()}</span>
          </h4>
          <ul className="list-group mb-3">
              {this.props.shoppingCart.length !== 0 ? this.props.shoppingCart.map((item) => {
                 return <CheckoutListItem key={item.id} item={item} />
              }) : null }

            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>${this.calculateTotal()}</strong>
            </li>
          </ul>


        </div>
        <div className="col-md-8 order-md-1">
          <h4 className="mb-3">Billing address</h4>
          <form onSubmit={this.orderSubmit} className="needs-validation" noValidate="">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firstName">First name</label>
                <input onChange={this.handleCheckout} name="firstName" type="text" className="form-control" id="firstName" placeholder="" value={this.state.firstName} required="" />
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lastName">Last name</label>
                <input onChange={this.handleCheckout} name="lastName" type="text" className="form-control" id="lastName" placeholder="" value={this.state.lastName} required="" />
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>



            <div className="mb-3">
              <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
              <input onChange={this.handleCheckout} name="email" value={this.state.email} type="email" className="form-control" id="email" placeholder="you@example.com" />
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="address">Address</label>
              <input onChange={this.handleCheckout} name="address" type="text" className="form-control" id="address" placeholder="1234 Main St" required="" />
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></label>
              <input type="text" name="address_2" className="form-control" id="address_2" placeholder="Apartment or suite" />
            </div>

            <div className="row">
              <div className="col-md-5 mb-3">
                <label htmlFor="country">Country</label>
                <select onChange={this.handleCheckout} value={this.state.country} name="country" className="custom-select d-block w-100" id="country" required="">
                  <option value="">Choose...</option>
                  <option>United States</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="state">State</label>
                <select onChange={this.handleCheckout} value={this.state.state} name="state" className="custom-select d-block w-100" id="state" required="">
                  <option value="">Choose...</option>
                    <option value="AL">Alabama</option>
                  	<option value="AK">Alaska</option>
                  	<option value="AZ">Arizona</option>
                  	<option value="AR">Arkansas</option>
                  	<option value="CA">California</option>
                  	<option value="CO">Colorado</option>
                  	<option value="CT">Connecticut</option>
                  	<option value="DE">Delaware</option>
                  	<option value="DC">District Of Columbia</option>
                  	<option value="FL">Florida</option>
                  	<option value="GA">Georgia</option>
                  	<option value="HI">Hawaii</option>
                  	<option value="ID">Idaho</option>
                  	<option value="IL">Illinois</option>
                  	<option value="IN">Indiana</option>
                  	<option value="IA">Iowa</option>
                  	<option value="KS">Kansas</option>
                  	<option value="KY">Kentucky</option>
                  	<option value="LA">Louisiana</option>
                  	<option value="ME">Maine</option>
                  	<option value="MD">Maryland</option>
                  	<option value="MA">Massachusetts</option>
                  	<option value="MI">Michigan</option>
                  	<option value="MN">Minnesota</option>
                  	<option value="MS">Mississippi</option>
                  	<option value="MO">Missouri</option>
                  	<option value="MT">Montana</option>
                  	<option value="NE">Nebraska</option>
                  	<option value="NV">Nevada</option>
                  	<option value="NH">New Hampshire</option>
                  	<option value="NJ">New Jersey</option>
                  	<option value="NM">New Mexico</option>
                  	<option value="NY">New York</option>
                  	<option value="NC">North Carolina</option>
                  	<option value="ND">North Dakota</option>
                  	<option value="OH">Ohio</option>
                  	<option value="OK">Oklahoma</option>
                  	<option value="OR">Oregon</option>
                  	<option value="PA">Pennsylvania</option>
                  	<option value="RI">Rhode Island</option>
                  	<option value="SC">South Carolina</option>
                  	<option value="SD">South Dakota</option>
                  	<option value="TN">Tennessee</option>
                  	<option value="TX">Texas</option>
                  	<option value="UT">Utah</option>
                  	<option value="VT">Vermont</option>
                  	<option value="VA">Virginia</option>
                  	<option value="WA">Washington</option>
                  	<option value="WV">West Virginia</option>
                  	<option value="WI">Wisconsin</option>
                  	<option value="WY">Wyoming</option>
                </select>
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="zip">Zip</label>
                <input onChange={this.handleCheckout} value={this.state.zipCode}  name="zipCode" type="text" className="form-control" id="zip" placeholder="" required="" />
                <div className="invalid-feedback">
                  Zip code required.
                </div>
              </div>
            </div>
            <hr className="mb-4" />
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="same-address" />
              <label className="custom-control-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
            </div>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="save-info" />
              <label className="custom-control-label" htmlFor="save-info">Save this information for next time</label>
            </div>
            <hr className="mb-4" />

            <h4 className="mb-3">Payment</h4>

            <div className="d-block my-3">
              <div className="custom-control custom-radio">
                <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" required="" />
                <label className="custom-control-label" htmlFor="credit">Credit card</label>
              </div>
              <div className="custom-control custom-radio">
                <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required="" />
                <label className="custom-control-label" htmlFor="debit">Debit card</label>
              </div>
              <div className="custom-control custom-radio">
                <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required="" />
                <label className="custom-control-label" htmlFor="paypal">Paypal</label>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="cc-name">Name on card</label>
                <input type="text" className="form-control" id="cc-name" placeholder="" required="" />
                <small className="text-muted">Full name as displayed on card</small>
                <div className="invalid-feedback">
                  Name on card is required
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="cc-number">Credit card number</label>
                <input type="text" className="form-control" id="cc-number" placeholder="" required="" />
                <div className="invalid-feedback">
                  Credit card number is required
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 mb-3">
                <label htmlFor="cc-expiration">Expiration</label>
                <input type="text" className="form-control" id="cc-expiration" placeholder="" required="" />
                <div className="invalid-feedback">
                  Expiration date required
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="cc-expiration">CVV</label>
                <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" />
                <div className="invalid-feedback">
                  Security code required
                </div>
              </div>
            </div>
            <hr className="mb-4" />
            <button className="btn btn-success btn-lg btn-block" type="submit">Confirm Purchase</button>
          </form>
        </div>
      </div>

      <footer className="my-5 pt-5 text-muted text-center text-small">
        <p className="mb-1">© 2017-2018 Company Name</p>
        <ul className="list-inline">
          <li className="list-inline-item"><a href="#">Privacy</a></li>
          <li className="list-inline-item"><a href="#">Terms</a></li>
          <li className="list-inline-item"><a href="#">Support</a></li>
        </ul>
      </footer>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
			return {
				shoppingCart: state.shoppingCart
			}
}

const mapDispatchToProps = (dispatch) => {
    return {
      saveOrderNumber: (num) => {
        dispatch(saveOrderNumber(num))
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutForm);
