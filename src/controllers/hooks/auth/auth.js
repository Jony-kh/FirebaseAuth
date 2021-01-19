import { useDispatch, useSelector } from "react-redux"
import { createUser as createUserAction, resetSignUpForm, updateSignUpForm } from '../../redux/actions/authActions'
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
    if(isValid) {
      dispatch(createUserAction(fields))
      dispatch(resetSignUpForm())
    }
  }
  return {
    fields,
    validationErrors: validationErrors.signup,
    updateField,
    createUser
  }
}
