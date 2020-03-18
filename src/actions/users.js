export const RECEIVE_USERS = 'RECEIVE_USERS'
export const USER_QUESTION_ANSWER = 'USER_QUESTION_ANSWER';
export const USER_ADD_QUESTION = 'USER_ADD_QUESTION';

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function saveUserAnswer (authedUser, qid, answer) {
  return {
    type: USER_QUESTION_ANSWER,
    authedUser,
    qid,
    answer
  }
}

export function userAddQuestion(authedUser, qid) {
  return {
      type: USER_ADD_QUESTION,
      authedUser,
      qid
  }
}