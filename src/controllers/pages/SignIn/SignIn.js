import React from 'react'
import { useSignInProps } from '../../hooks/auth/auth';
import Field from '../../../components/atoms/Field'


export default function SignIn() {
  const { fields, updateField, checkUser, validationErrors } = useSignInProps();

  const onInputChange = ({ target }) => {
    updateField(target.name, target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault()
    checkUser()
  }

  const errorMessage = validationErrors.general ? <p>{validationErrors.general}</p> : ""

  return (
    <div>
      <h1>SIGN IN</h1>
      {errorMessage}
      <form onSubmit={onSubmit}>
        <Field
          required
          id="login"
          name="login"
          type="text"
          label="Login"
          value={fields.login}
          onChange={onInputChange}
          validationError={validationErrors?.login}
          component={props => <input {...props} />}
        />
        <Field
          required
          id="password"
          name="password"
          type="password"
          label="Password"
          value={fields.password}
          onChange={onInputChange}
          validationError={validationErrors?.password}
          component={props => <input {...props} />}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  )
}
