import { AUTH_CREATE_USER } from '../actionTypes'

export const createUser = user => ({
  type: AUTH_CREATE_USER,
  payload: {
    user
  }
})
