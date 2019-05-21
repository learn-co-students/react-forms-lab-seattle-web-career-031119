import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  updateLogin = (ev) => {
    this.setState({
    [ev.target.name]: ev.target.value
    })
  }

  handleSubmit =(ev) => {
      ev.preventDefault()
      if(this.state.username.length !== 0 && this.state.password.length !== 0){
        this.props.handleLogin(this.state)
      }
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.updateLogin} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.updateLogin} value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
