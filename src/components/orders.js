import React from 'react';

class Orders extends React.Component {

  state = {
   orders: []
  }



  componentDidMount(){
    let url = 'http://localhost:3000/api/v1/orders'
    fetch(url)
    .then(res => res.json())
    .then(json => {
      this.setState({
        orders: json
      })
    });
  }

  renderRow = (order) => {
    return (
      <tr>
        <th scope="row">{order.id}</th>
        <td valign="top">{order.first_name}</td>
        <td valign="top">{order.last_name}</td>
        <td valign="top">{order.e_mail}</td>
        <td valign="top">{order.address}</td>
        <td valign="top">{order.address_2}</td>
        <td valign="top">{order.state}</td>
        <td valign="top">{order.country}</td>
        <td valign="top">{order.zip_code}</td>
        <td valign="top">{order.order_number}</td>
      </tr>
    )
  }
  render() {
    return(
        <main role="main" className="container">
          <h1>Orders</h1>
            <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">first_name</th>
            <th scope="col">last_name</th>
            <th scope="col">email</th>
            <th scope="col">address</th>
            <th scope="col">address_2</th>
            <th scope="col">state</th>
            <th scope="col">Country</th>
            <th scope="col">zip code</th>
            <th scope="col">order_number</th>
          </tr>
        </thead>

        <tbody>
          {this.state.orders.map((order)=> {
            return this.renderRow(order)
          })}
        </tbody>
      </table>
</main>
    );
  }
}
export default Orders;
