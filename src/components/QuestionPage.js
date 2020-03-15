import React, {Component} from 'react';
import { connect } from 'react-redux';
import Question from './Question';

class QuestionsPage extends Component {
  render() {
    return(
      <div>
        <Question/>
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
