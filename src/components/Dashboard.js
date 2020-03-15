import React, {Component} from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
  
  render() {
    const user = this.props.user;
    const answeredQuestions = this.props.answeredQuestions;
    const unAnsweredQuestions = this.props.unAnsweredQuestions;
    console.log("USER", user)
    console.log("answeredQuestions", answeredQuestions)
    console.log("unAnsweredQuestions", unAnsweredQuestions)
    return (
      <div>
        
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
