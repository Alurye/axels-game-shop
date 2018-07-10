import React from 'react';


class SignUp extends React.Component {

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
    let url = 'http://localhost:3000/api/v1/signup'
    fetch(url, {
      body: JSON.stringify(this.state),
      method: "POST",
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json'
      },
    }).then(res => res.json())
    .then(json => {
      console.log(json)
      localStorage.setItem('token', json.token);
      // localStorage.setItem('id', json.id);
      this.props.history.push("/")
    }

  );
  }
  render(){


    return(
      <main role="main" className="container gameContainer">
        <div className="row">
            <div className="col-sm-6 col-md-4 offset-md-4">
                <h1 className="text-center login-title">Sign Up for Game Shop</h1>
                <div className="form-group">
                    <form className="form-signin" onSubmit={(e) => this.handleSubmit(e)}>
                      <label htmlFor="username">Username:</label>
                    <input onChange={this.handleLoginInfo} name="username" type="text" className="form-control" placeholder="Username" required autoFocus /><br/>
                      <label htmlFor="password">Password:</label>
                    <input onChange={this.handleLoginInfo} name="password"  type="password" className="form-control" placeholder="Password" required /><br/>

                    <label className="checkbox pull-left">
                        <input type="checkbox" value="remember-me" />
                        Remember me
                    </label>
                     <a href="#" className="pull-right need-help">Need help? </a><span className="clearfix"></span>
                       <button className="btn btn-lg btn-primary btn-block" type="submit">
                           Sign in</button>
                    </form>
                </div>

                <a href="#" className="text-center new-account">Create an account </a>
            </div>
        </div>
      </main>

    );
  }
}

export default SignUp ;
