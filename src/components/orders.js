import React from 'react';
import {getOrders} from '../actions/index';
import {connect} from 'react-redux';

class Orders extends React.Component {


  componentDidMount(){
    this.props.getOrders();
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
        <td valign="top"><ul>{order.games.length > 0 ?
                    order.games.map(g =>{return <li>{g.title}</li> }): null}</ul></td>

      </tr>
    )
  }
  render() {
    console.log(this.props.orders);
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
            <th scope="col">games_ordered</th>
          </tr>
        </thead>

        <tbody>
          {this.props.orders.map((order)=> {
            return this.renderRow(order)
          })}
        </tbody>
      </table>
</main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orders
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getOrders: () => {
      dispatch(getOrders())
    },
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
