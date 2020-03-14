import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import '../stylesheets/header.scss';

class Header extends Component{
  render(){
    return (
      <header className="appNav">
        <h1 className="title">Would You Rather</h1>
        { this.props.authedUser !== null &&
          <div className="links-wrapper">
            <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
            <NavLink to="/create" activeClassName="is-active">NewQuestion</NavLink>
            <NavLink to="/top3" activeClassName="is-active">LeaderBoard</NavLink>
            <NavLink to="/logout" activeClassName="is-active">Logout</NavLink>
          </div>
        }
      </header>
    )
  }
};

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(Header)
