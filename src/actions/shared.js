import { getInitialData } from '../utils/api'
import { receiveUsers, saveUserAnswer, userAddQuestion } from '../actions/users'
import { receiveQuestions, saveQuesAnswer, addQuestion } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'
import { saveQuestionAnswer, saveQuestion } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(setAuthedUser(AUTHED_ID))
        dispatch(hideLoading())
      })
  }
}

export function handleSaveAnswer (qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return saveQuestionAnswer({authedUser, qid, answer})
        .then(() => {
            dispatch(saveQuesAnswer(authedUser, qid, answer));
            dispatch(saveUserAnswer(authedUser, qid, answer))
        })
  }
}

export function handleAddQuestion (optionOne, optionTwo){
  return (dispatch, getState) => {
    const { authedUser } = getState();
    console.log(authedUser)
    return saveQuestion({optionOneText: optionOne, optionTwoText: optionTwo, author: authedUser})
    .then((question) => {
        dispatch(addQuestion(question))
        dispatch(userAddQuestion(authedUser, question.id))
    })
  }
}