import React, { Component }  from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from '../components/Dashboard';
import LeaderBoard from '../components/LeaderBoard';
import NewQuestion from '../components/NewQuestion';
import login from '../components/Login';
import Header from '../components/Header';
import QuestionPage from '../components/QuestionPage';
import NotLoggedInPage from '../components/NotLoggedInPage';

class AppRouter extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    console.log(this.props.authedUser)

    const PrivateRoute = ({component: Component, ...rest}) => (
      <Route {...rest} render={(props) => (
        this.props.authedUser !== null ?
          <Component {...props}/>
          : <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }}/>
      )}/>
    )

    return (
      <BrowserRouter>
        <div>
          <Header />
            <Switch>
              <Route path='/login' exact component={login} /> 
              <PrivateRoute path="/" component={Dashboard} exact={true} />
              <PrivateRoute path="/questions/:id" component={QuestionPage}/>
              <PrivateRoute path="/leaderboard" component={LeaderBoard} />
              <PrivateRoute path="/add" component={NewQuestion} />
              <Route path='/404' component={NotLoggedInPage} />
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
