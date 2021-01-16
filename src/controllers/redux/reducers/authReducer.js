import { AUTH_CREATE_USER } from "../actionTypes"

const initialState = {
  users: [],
  lastUserID: 0
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
    default:
      return state
  }
}
