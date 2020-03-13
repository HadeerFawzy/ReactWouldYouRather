import React, { Component } from 'react';
import { connect } from 'react-redux'

class Login extends Component{
  render() {
    const users = this.props.users;
    return (
      <form>
        <h2>
          SIGN IN
        </h2>
        <select id="users">
          { Object.keys(users).map((id) => {
            let user = users[id]
            return (
              <option key={id} value={id}>
                {user.name}
              </option>
            )
          })}
        </select>
    
        <input type="submit" value="Submit"/>
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
