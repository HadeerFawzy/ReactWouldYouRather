import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Would You Rather</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">NewQuestion</NavLink>
    <NavLink to="/top3" activeClassName="is-active">LeaderBoard</NavLink>
    <NavLink to="/login" activeClassName="is-active">Login</NavLink>
  </header>
);

export default Header;
