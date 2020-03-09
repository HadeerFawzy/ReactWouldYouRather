import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import LeaderBoard from '../components/LeaderBoard';
import NewQuestion from '../components/NewQuestion';
import login from '../components/Login';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/dashboard/:id" component={Dashboard} exact={true} />
        <Route path="/top3" component={LeaderBoard} />
        <Route path="/create" component={NewQuestion} />
        <Route path="/" component={login} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
