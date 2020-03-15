import React, {Component} from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import '../stylesheets/dashboard.scss';

class Dashboard extends Component {
  state = {
    tab: 1
  }

  render() {
    const user = this.props.user;
    const answeredQuestions = this.props.answeredQuestions;
    const unAnsweredQuestions = this.props.unAnsweredQuestions;

    return (
      <div className='dashboard'>
        <div className="tabs-wrapper">
          <div className={`tab ${this.state.tab == 1 ? 'active' : ''}`}
               onClick={() => {this.setState({ tab: 1})}}>
            Unanswered Questions
          </div>
          <div className={`tab ${this.state.tab == 2 ? 'active' : ''}`}
               onClick={() => {this.setState({ tab: 2})}}>
            Answered Questions
          </div>
        </div>
        <div className='content-wrapper'>
          { this.state.tab == 1 ?
              unAnsweredQuestions.map((question, index) => (
                <Question key={index} id={question}/>
              ))
            : this.state.tab == 2 ? 
              answeredQuestions.map((question, index) => (
                <Question key={index} id={question}/>
              )) 
            : null  
          }
        </div>
      </div>
    )
  }
};


function mapStateToProps ({ authedUser, users, questions }) {
  const user = users[authedUser]  
  const answeredQuestions = Object.keys(questions).length !== 0
        ? Object.keys(user.answers).sort((a,b) => questions[b].timestamp - questions[a].timestamp)
        : []

    const unAnsweredQuestions = Object.keys(questions).length !== 0
        ? Object.keys(questions).filter(question => !answeredQuestions.includes(question)).sort((a,b) => questions[b].timestamp - questions[a].timestamp)
        : []
  return {
    user,
    answeredQuestions,
    unAnsweredQuestions
  }
}

export default connect(mapStateToProps)(Dashboard)
