import React, { Component, Fragment }  from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from '../components/Dashboard';
import LeaderBoard from '../components/LeaderBoard';
import NewQuestion from '../components/NewQuestion';
import login from '../components/Login';
import Header from '../components/Header';

class AppRouter extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            {
              this.props.authedUser == null
              ? <Route path='/' exact component={login} /> 
              : <Fragment>
                  <Route path="/" component={Dashboard} exact={true} />
                  <Route path="/top3" component={LeaderBoard} />
                  <Route path="/create" component={NewQuestion} />
                </Fragment>
            }
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
};

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(AppRouter)
