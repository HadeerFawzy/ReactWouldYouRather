import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../stylesheets/question.scss';

class QuestionsPage extends Component {
  
  render() {
    const question = this.props.question;
    const users = this.props.users

    const colors = ['#574b90', '#3dc1d3', '#f78fb3', '#cf6a87', '#f5cd79', '#f19066'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
  
    return(
      <div>
        <div className='questions-wrapper_qw'>
          <h3 className="qw_user">
            {users[question.author].name}
          </h3>
          <div className="qw_content">
            <div className="qw_1st-letter">
              <span style={{backgroundColor: randomColor}}>
                {users[question.author].name.charAt(0)}
              </span>
            </div>
            <div className="qw_answers">
              <h2>
                Would You Rather ...
              </h2>
              {/* Answered Question */}

              {/* UnAnswered Question */}
            </div>
          </div>
        </div>
      </div>
    )
  }

}

function mapStateToProps({authedUser, users, questions}, {id}) {
	return {
    question: questions[id],
    authedUser,
    users,
    questionId: id
	}
}

export default connect(mapStateToProps)(QuestionsPage)
