import { getInitialData } from '../utils/api'
import { receiveUsers, saveUserAnswer } from '../actions/users'
import { receiveQuestions, saveQuesAnswer } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'
import { saveQuestionAnswer } from '../utils/api'
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
