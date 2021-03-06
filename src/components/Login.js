import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../stylesheets/login.scss';
import logo from '../logo.svg';
import { setAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom';

class Login extends Component {

  state = {
    user: '',
    redirectToDashboard: 0
  }

  handleSelectUser = (selectedUser) => {
    this.setState({
      user: selectedUser
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.state.user !== '' &&
      this.props.dispatch(setAuthedUser(this.state.user)) 
      this.setState({redirectToDashboard: 1})
  }

  render() {
    const users = this.props.users;
    const { from } = this.props.location.state || { from: { pathname: '/' } }

    if(this.state.redirectToDashboard) {
      return <Redirect to={ from } />
    }
    return (
      <form className="loginForm" onSubmit={this.handleSubmit}>
        <header>
          <h3>
            Welcome to the Would You Rather App!
          </h3>
          <p>
            Please sign in to continue
          </p>
        </header>
        <img src={logo} alt="logo" className="logoImg"/>
        <h2>
          SIGN IN
        </h2>
        <select id="users" className="usersSelect"
                onChange={(e) => this.handleSelectUser(e.target.value)}>
          <option value=''> Select a User </option>
          { Object.keys(users).map((id) => {
            let user = users[id]
            return (
              <option key={id} value={id}>
                {user.name}
              </option>
            )
          })}
        </select>

        <input type="submit" value="Submit" className="submit" 
               disabled={this.state.user === ''}
               title={this.state.user === '' ? "Please select a user" : ""}/>

      </form>
    )
  }
};


function mapStateToProps ({ users }) {
  return {
    users
  }
}

export default connect(mapStateToProps)(Login)
