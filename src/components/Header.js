import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/authedUser';
import '../stylesheets/header.scss';

class Header extends Component{
  logout = () => {
    this.props.dispatch(logout())
  }
  render(){
    return (
      <header className="appNav">
        <h1 className="title">Would You Rather</h1>
        
          <div className="links-wrapper">
            <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
            <NavLink to="/add" activeClassName="is-active">NewQuestion</NavLink>
            <NavLink to="/leaderboard" activeClassName="is-active">LeaderBoard</NavLink>
            { this.props.authedUser &&
              <h3 className='hello-user'>Hello, {this.props.users[this.props.authedUser].name}</h3>
            }
            <NavLink to="/login" activeClassName="" onClick={this.logout}>Logout</NavLink>
          </div>
        
      </header>
    )
  }
};

function mapStateToProps ({ authedUser, users }) {
  return {
    authedUser,
    users
  }
}

export default connect(mapStateToProps)(Header)
