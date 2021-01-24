import { useDispatch, useSelector } from "react-redux"
import { useHistory } from 'react-router-dom';
import { createUser as createUserAction, resetSignUpForm, setAuthValidationErrors, setCurrentUser, updateSignInForm, updateSignUpForm } from '../../redux/actions/authActions'
import validateSignup from "../../validators/signupValidators"

export function AuthLayoutProps() {
  return {
    navItems: [
      { title: 'SignIn', link: '/auth/signin' },
      { title: 'SignUp', link: '/auth/signup' }
    ]
  }
}

export function useSignUpProps() {
  const dispatch = useDispatch()
  const history = useHistory()
  const authState = useSelector(state => state.auth)
  const fields = authState.forms.signup
  const { validationErrors } = authState
  const updateField = (key, value) => {
    dispatch(updateSignUpForm({
      ...fields,
      [key]: value
    }))
  }
  const createUser = () => {
    const isValid = validateSignup(fields, dispatch)
    if (isValid) {
      dispatch(createUserAction(fields))
      dispatch(resetSignUpForm())
      history.push('/auth/signin')
    }
  }
  return {
    fields,
    validationErrors: validationErrors.signup,
    updateField,
    createUser
  }
}

export function useSignInProps() {
  const dispatch = useDispatch()
  const history = useHistory()
  const authState = useSelector(state => state.auth)
  const fields = authState.forms.signin
  const { validationErrors } = authState
  const updateField = (key, value) => {
    dispatch(updateSignInForm({
      ...fields,
      [key]: value
    }))
  }
  const checkUser = () => {
    const { login, password } = authState.forms.signin
    const { users } = authState
    const user = users.find(user => user.login === login && user.password === password)
    if (!user) {
      return dispatch(setAuthValidationErrors({
        signin: {
          general: "Login or password is incorrect!"
        }
      }))
    }

    dispatch(setCurrentUser(user))
    history.push('/');
  }

  return {
    fields,
    validationErrors: validationErrors.signin,
    updateField,
    checkUser
  }
}
