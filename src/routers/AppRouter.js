import React, { Component }  from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
    return (
      <BrowserRouter>
        <div>
          <Header />
            <Switch>
              <Route path='/login' exact component={login} /> 
              <Route path="/dashboard" component={Dashboard} exact={true} />
              <Route path="/questions/:id" component={QuestionPage}/>
              <Route path="/leaderboard" component={LeaderBoard} />
              <Route path="/add" component={NewQuestion} />
              <Route path='*' component={NotLoggedInPage} />
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
