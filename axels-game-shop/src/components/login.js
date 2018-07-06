import React from 'react';


class Login extends React.Component {

  state = {
      username:'',
      password:''
  }

  handleLoginInfo = (e) => {
    this.setState({
          [e.target.name]: e.target.value
    });
  }



  handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    let url = 'http://localhost:3000/api/v1/sessions'
    fetch(url, {
      body: JSON.stringify(this.state),
      method: "POST",
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json'
        // 'authorization': localStorage.getItem('token')

      },
    }).then(res => res.json())
    .then(json => {
      console.log(json)
      localStorage.setItem('token', json.token);
      localStorage.setItem('id', json.id);
      this.props.history.push("/inventory")
    });
  }
  render(){

    console.log(this.props);
    return(
      <main role="main" className="container cardContainer">
        <div className="row">
            <div className="col-sm-6 col-md-4 offset-md-4">
                <h1 className="text-center login-title">Login</h1>
                <div className="form-group">
                    <form className="form-signin" onSubmit={(e) => this.handleSubmit(e)}>
                      <label htmlFor="username">Username:</label>
                    <input onChange={this.handleLoginInfo} name="username" type="text" className="form-control" placeholder="Username" required autoFocus /><br/>
                      <label htmlFor="password">Password:</label>
                    <input onChange={this.handleLoginInfo} name="password"  type="password" className="form-control" placeholder="Password" required /><br/>

                     <a href="#" className="pull-right need-help">Need help? </a><span className="clearfix"></span>
                       <button className="btn btn-lg btn-primary btn-block" type="submit">
                           Sign in</button>
                    </form>
                </div>
            </div>
        </div>
      </main>

    );
  }
}

export default Login ;
