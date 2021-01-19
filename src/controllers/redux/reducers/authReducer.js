import { initialSignUpFormValues, initialSignUpValidationErrors } from "../../constants/auth/signup"
import {
  AUTH_CREATE_USER,
  AUTH_UPDATE_SIGNUP_FORM,
  AUTH_RESET_SIGNUP_FORM,
  AUTH_SET_FORM_VALIDATION_ERRORS
} from "../actionTypes"

const initialState = {
  users: [],
  lastUserID: 0,
  forms: {
    signup: initialSignUpFormValues
  },
  validationErrors: initialSignUpValidationErrors
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_CREATE_USER:
      return {
        ...state,
        users: [
          ...state.users,
          {
            ...action.payload.user,
            id: state.lastUserID
          }
        ],
        lastUserID: state.lastUserID + 1
      }
    case AUTH_UPDATE_SIGNUP_FORM:
      return {
        ...state,
        forms: {
          ...state.forms,
          signup: action.payload.newForm
        }
      }
    case AUTH_RESET_SIGNUP_FORM:
      return {
        ...state,
        forms: {
          ...state.forms,
          signup: initialSignUpFormValues
        }
      }
    case AUTH_SET_FORM_VALIDATION_ERRORS:
      return {
        ...state,
        validationErrors: {
          ...state.validationErrors,
          ...action.payload.newValidationErrorsState
        }
      }
    default:
      return state
  }
}
