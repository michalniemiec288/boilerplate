import Firebase from '../utils/firebase'
import createReducer from '../utils/createReducer'
import { browserHistory } from 'react-router'

// ------------------------------------
// Constants
// ------------------------------------

export const REGISTER_FIREBASE_USER = 'REGISTER_FIREBASE_USER'
export const LOGIN_FIREBASE_USER = 'LOGIN_FIREBASE_USER'
export const FETCH_FIREBASE_USER = 'FETCH_FIREBASE_USER'
export const UPDATE_FIREBASE_USER = 'UPDATE_FIREBASE_USER'
export const CHANGE_FIREBASE_USER_PASSWORD = 'CHANGE_FIREBASE_USER_PASSWORD'
export const FIREBASE_PASSWORD_RESET_EMAIL = 'FIREBASE_PASSWORD_RESET_EMAIL'
export const LOGOUT_FIREBASE_USER = 'LOGOUT_FIREBASE_USER'
export const RESET_LOGIN_FORM = 'RESET_LOGIN_FORM'
export const USER_PASSWORD_NOT_MATCH = 'USER_PASSWORD_NOT_MATCH'

// ------------------------------------
// Actions
// ------------------------------------

export const registerUser = user => dispatch =>
  dispatch({
    type: REGISTER_FIREBASE_USER,
    payload: Firebase.registerUser(user)
  }).then(({ payload }) => {
    if (!payload.errorCode) browserHistory.push('/profile')
  })

export const loginUser = user => dispatch =>
  dispatch({
    type: LOGIN_FIREBASE_USER,
    payload: Firebase.loginUser(user)
  }).then(({ payload }) => {
    if (!payload.errorCode) browserHistory.push('/')
  })

export const fetchUser = () => ({
  type: FETCH_FIREBASE_USER,
  payload: Firebase.fetchUser()
})

export const updateUser = user => ({
  type: UPDATE_FIREBASE_USER,
  payload: Firebase.updateUserProfile({
    email: user.email || null,
    displayName: user.displayName || null
  })
})

export const changePassword = ({ password, repeatPassword }) =>
password === repeatPassword ? ({
  type: CHANGE_FIREBASE_USER_PASSWORD,
  payload: Firebase.changePassword(repeatPassword)
}) : ({
  type: USER_PASSWORD_NOT_MATCH,
  payload: { errorCode: "auth/password-not-match" }
})

export const resetPasswordEmail = ({ email }) => ({
  type: FIREBASE_PASSWORD_RESET_EMAIL,
  payload: Firebase.resetPasswordEmail(email)
})

export const logoutUser = user => ({
  type: LOGOUT_FIREBASE_USER,
  payload: Firebase.logoutUser(user)
})

export const resetForm = () => ({
  type: RESET_LOGIN_FORM
})

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  currentUser: null,
  firebaseMessage: ''
}

export default createReducer(initialState, {
  [FETCH_FIREBASE_USER]: (state, { payload }) => ({
    currentUser: payload
  }),
  [LOGOUT_FIREBASE_USER]: () => ({
    currentUser: initialState.currentUser
  }),
  [REGISTER_FIREBASE_USER]: (state, { payload }) => ({
    currentUser: payload,
    firebaseMessage: parseMessage(payload)
  }),
  [LOGIN_FIREBASE_USER]: (state, { payload }) => ({
    currentUser: payload,
    firebaseMessage: parseMessage(payload)
  }),
  [UPDATE_FIREBASE_USER]: (state, { payload }) => ({
    currentUser: payload,
    firebaseMessage: parseMessage(payload)
  }),
  [CHANGE_FIREBASE_USER_PASSWORD]: (state, { payload }) => ({
    currentUser: payload,
    firebaseMessage: parseMessage(payload)
  }),
  [USER_PASSWORD_NOT_MATCH]: (state, { payload }) => ({
    firebaseMessage: parseMessage(payload)
  }),
  [FIREBASE_PASSWORD_RESET_EMAIL]: (state, { payload }) => ({
    currentUser: payload,
    firebaseMessage: parseMessage(payload)
  }),
  [RESET_LOGIN_FORM]: () => ({
    firebaseMessage: initialState.firebaseMessage
  })
})

// ------------------------------------
//  Helpers
// ------------------------------------

const parseMessage = (payload) => {
  console.log(payload)
  if (payload && payload.errorCode) {
    switch (payload.errorCode) {
      case "auth/user-not-found": return "Nieznany lub usunięty użytkownik"; break
      case "auth/wrong-password": return "Nieprawidłowe hasło"; break
      case "auth/password-not-match": return "Hasła się nie zgadzają"; break
      case "auth/weak-password": return "Hasło powinno mieć conajmniej 6 znaków"; break
      case "auth/requires-recent-login": return "Operacja wymaga ponownego zalogowania się"; break
      case "auth/email-already-in-use": return "Adres e-mail jest używany przez innego użytkownika"; break
      default: return payload.errorMessage
    }
  } else {
    return "Zakończono powodzeniem"
  }
}
