export const RECEIVE_USERS = 'RECEIVE_USERS'
export const USER_QUESTION_ANSWER = 'USER_QUESTION_ANSWER';

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function saveUserAnswer (auth, qid, option) {
  return {
    type: USER_QUESTION_ANSWER,
    auth,
    qid,
    option
  }
}