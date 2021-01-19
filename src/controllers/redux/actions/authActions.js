import {
  AUTH_CREATE_USER,
  AUTH_UPDATE_SIGNUP_FORM,
  AUTH_RESET_SIGNUP_FORM,
  AUTH_SET_FORM_VALIDATION_ERRORS
} from '../actionTypes'

export const createUser = user => ({
  type: AUTH_CREATE_USER,
  payload: {
    user
  }
})

export const updateSignUpForm = newForm => ({
  type: AUTH_UPDATE_SIGNUP_FORM,
  payload: {
    newForm
  }
})

export const resetSignUpForm = () => ({
  type: AUTH_RESET_SIGNUP_FORM
})

export const setAuthValidationErrors = newValidationErrorsState => ({
  type: AUTH_SET_FORM_VALIDATION_ERRORS,
  payload: {
    newValidationErrorsState
  }
})
