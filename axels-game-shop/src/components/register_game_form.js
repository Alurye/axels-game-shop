import React from 'react';

class RegisterGameForm extends React.Component {

  state = {
    gameFields: {
      title:'',
      console:'',
      quantity:0,
      price:'',
      genre:'',
      img: '',
      description:'',
      store_id:1
    }
  }

  handleGameInfo = ({target}) => {

    this.setState({
       gameFields: {...this.state.gameFields,
        [target.name]: target.value
      }

    });
  }

handleSubmit = (e) => {
  e.preventDefault();
  let url = 'http://localhost:3000/api/v1/games'
  fetch(url, {
    body: JSON.stringify(this.state.gameFields),
    method: "POST",
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json'
    },
  }).then(res => res.json())
  .then(json =>  {console.log(json)
    this.props.history.push('/inventory');

  });
}

  render(){
    console.log(this.state.gameFields);
    console.log(this.props);
    return (
      <main role="main" className="container col-md-4 offset-md-4">
        <h2>Register New Game</h2>
      <form onSubmit={this.handleSubmit}>
  <div className="form-group">
    <label htmlFor="title">Title:</label>
    <input onChange={this.handleGameInfo} name="title" value={this.state.gameFields.title} type="text" className="form-control" id="title" placeholder="Street Fighter" />
  </div>
  <div className="form-group">
    <label htmlFor="console">Console:</label>
    <input onChange={this.handleGameInfo} id="console" value={this.state.gameFields.console} name="console" type="text" className="form-control"  placeholder="e.g. Sega Genesis" />
  </div>
  <div className="form-group">
    <label htmlFor="quantity">Quantity:</label>
    <input onChange={this.handleGameInfo} id="quantity" value={this.state.gameFields.quantity} name="quantity" type="number" className="form-control"  placeholder="0" />
  </div>
  <div className="form-group">
    <label htmlFor="price">Price:</label>
    <input onChange={this.handleGameInfo} name="price" value={this.state.gameFields.price} type="text" className="form-control"  placeholder="" />
  </div>
  <div className="form-group">
    <label htmlFor="genre">Genre:</label>
    <input onChange={this.handleGameInfo} name="genre" value={this.state.gameFields.genre} type="text" className="form-control"  placeholder="" />
  </div>
  <div className="form-group">
    <label htmlFor="image">Image:</label>
    <input onChange={this.handleGameInfo} name="img" value={this.state.gameFields.img} type="text" className="form-control"   />
  </div>
  <div className="form-group">
    <label htmlFor="console">Description:</label>
    <input onChange={this.handleGameInfo} value={this.state.gameFields.description} name="description" type="text" className="form-control" />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  </main>
    );
  }
}

export default RegisterGameForm;
