import React from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheets/header.scss';

const Header = () => (
  <header>
    <h1 className="title">Would You Rather</h1>
    <div className="links-wrapper">
      <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
      <NavLink to="/create" activeClassName="is-active">NewQuestion</NavLink>
      <NavLink to="/top3" activeClassName="is-active">LeaderBoard</NavLink>
      <NavLink to="/login" activeClassName="is-active">Login</NavLink>
    </div>
  </header>
);

export default Header;
