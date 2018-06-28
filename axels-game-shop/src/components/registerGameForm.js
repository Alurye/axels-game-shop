import React from 'react';

class RegisterGameForm extends React.Component {

  state = {
    gameFields: {
      title:'',
      console:'',
      quantity:null,
      price:'',
      genre:'',
      img: '',
      description:''
    }
  }

  handleGameInfo = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

handleSubmit = (e) => {
  e.preventDefault();
  console.log('submitted');
}

  render(){
    console.log(this.state.gameFields);
    return (
      <form onSubmit={this.handleSubmit}>
  <div class="form-group">
    <label htmlFor="title">Title:</label>
    <input name="title" value={this.state.gameFields.title} type="text" className="form-control" id="title" placeholder="Password">
  </div>
  <div className="form-group">
    <label htmlFor="console">Console:</label>
    <input id="console" value={this.state.gameFields.console} name="console" type="text" className="form-control"  placeholder="e.g. Sega Genesis">
  </div>
  <div className="form-group">
    <label htmlFor="quantity">Quantity:</label>
    <input id="quantity" value={this.state.gameFields.quantity} name="quantity" type="number" className="form-control"  placeholder="0">
  </div>
  <div className="form-group">
    <label htmlFor="price">Price:</label>
    <input name="price" value={this.state.gameFields.price} type="text" className="form-control"  placeholder="">
  </div>
  <div className="form-group">
    <label htmlFor="genre">Genre:</label>
    <input name="genre" value={this.state.gameFields.genre} type="text" className="form-control"  placeholder="">
  </div>
  <div className="form-group">
    <label htmlFor="image">Image:</label>
    <input name="img" value={this.state.gameFields.img} type="text" className="form-control"  placeholder="e.g. Sega Genesis">
  </div>
  <div className="form-group">
    <label htmlFor="console">Description:</label>
    <input value={this.state.gameFields.description} name="description" type="text" className="form-control"  placeholder="e.g. Sega Genesis">
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    );
  }
}

export default RegisterGameForm;
