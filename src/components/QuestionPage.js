import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../stylesheets/question.scss';
import '../stylesheets/question_page.scss';
import { handleSaveAnswer } from '../actions/shared'

class QuestionsPage extends Component {

  state = {
    selectedAnswer: '',
  }

  dispatchAnswer = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    dispatch(handleSaveAnswer(this.props.question.id, this.state.selectedAnswer))
  }

  optionResult = (option, userAnswer) => {
    const answersNum = this.props.question.optionOne.votes.length + this.props.question.optionTwo.votes.length
    const percentage = ((option.votes.length/ (answersNum))*100).toFixed(2) ;
    return (
      <div className={`option-result_or ${userAnswer === option.text && "colored"}`}>
        {userAnswer === option.text &&
          <span className="or_badge">
            Your vote
          </span>
        }
        <p className="or_text">
          Would you rather {option.text}?
        </p>
        <div className="percentage-bar">
          <div className="pb_filled" style={{ width:`${percentage}%`}}>
            {percentage}%
          </div>
        </div>
        <div className="votes-num">
          {option.votes.length} out of {answersNum} Votes
        </div>
      </div>
    )
  }

  render() {
    const question = this.props.question;
    const users = this.props.users;

    const colors = ['#574b90', '#3dc1d3', '#f78fb3', '#cf6a87', '#f5cd79', '#f19066'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
  
    const userAnswer = question.optionOne.votes.includes(this.props.authedUser) ? question.optionOne.text 
                       : question.optionTwo.votes.includes(this.props.authedUser) ? question.optionTwo.text
                       : null

    return(
      <div className='ques-page-wrap_qpw'>
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
              { userAnswer == null ?
                <div>
                  <h2>
                    Would You Rather ...
                  </h2>
                  {/* UnAnswered Question */} 
                  <label className="container"> {question.optionOne.text}
                    <input type="radio" name="radio" value="optionOne" 
                           onClick={(e) => this.setState({selectedAnswer: e.target.value})}/>
                    <span className="checkmark"></span>
                  </label>
                  <label className="container"> {question.optionTwo.text}
                    <input type="radio" name="radio" value="optionTwo" 
                           onClick={(e) => this.setState({selectedAnswer: e.target.value})}/>
                    <span className="checkmark"></span>
                  </label>
                  <input className="submit-button" type="submit"
                          onClick={this.dispatchAnswer} 
                          value="Submit"
                          disabled={this.state.disableSubmitBtn === 1}/>
                </div>
                : 
                <div className="answered-question_aq">
                  {/* Answered Question */}
                  <h2 className="aq_title">
                    Results:
                  </h2>
                  <div>
                    {this.optionResult(question.optionOne, userAnswer)}
                    {this.optionResult(question.optionTwo, userAnswer)}
                  </div>
                </div>
              }  
            </div>
          </div>
        </div>
      </div>
    )
  }

}

function mapStateToProps({authedUser, users, questions}, props) {
  const id = props.match.params.id
	return {
    question: questions[id],
    authedUser,
    users,
    questionId: id
	}
}

export default connect(mapStateToProps)(QuestionsPage)
