import React from 'react';

class Orders extends React.Component {

  state = {
   orders: []
  }

  renderOrderRow(){
    return (
      <tr>
        <th scope="row">1</th>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{email}</td>
        <td>{address}</td>
        <td>{address_2}</td>
        <td>{state}</td>
        <td>{country}</td>
        <td>{zipCode}</td>
        <td>{dateCreated}</td>
      </tr>
    )
  }

  componentDidMount(){
    let url = 'http://localhost:3000/orders'
    fetch(url)
    .then(res => res.json())
    .then(orders => {
      this.setState({
        orders: orders
      })
    });
  }


  render() {
    console.log(this.state)
    return(
            <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">first_name</th>
            <th scope="col">last_name</th>
            <th scope="col">email</th>
            <th scope="col">address</th>
            <th scope="col">address_2</th>
            <th scope="col">state</th>
            <th scope="col">Country</th>
            <th scope="col">zip code</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{Mark}</td>
            <td>{Otto}</td>
            <td>{@mdo}</td>
            <td>{Mark}</td>
            <td>{Otto}</td>
            <td>{@mdo}</td>
            <td>{}</td>
            <td>{}</td>
          </tr>
        </tbody>
      </table>

    );
  }
}
