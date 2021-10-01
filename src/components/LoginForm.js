import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  changeUsername = (e) => {
    const inputValue = e.target.value
    this.setState(
      () => {
          return {username: inputValue}
      }
    )
  }

  changePassword = (e) => {
    const inputValue = e.target.value
    this.setState(
      () => {
          return {password: inputValue}
      }
    )
  }

  login = (e) => {
    console.log(this.props.handleLogin)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    const u = this.state.username
    const p = this.state.password
    u.length === 0 || p.length === 0
    ? console.log('true')
    : this.props.handleLogin(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.changeUsername} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.changePassword} value={this.state.password}/>
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
