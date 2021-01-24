import React from 'react'
import { useSignUpProps } from '../../hooks/auth/auth';
import Field from '../../../components/atoms/Field'

export default function SignUp() {
  const { fields, updateField, createUser, validationErrors } = useSignUpProps();

  const onInputChange = ({ target }) => {
    updateField(target.name, target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault()
    createUser()
  }

  return (
    <div>
      <h1>SING UP</h1>
      <form onSubmit={onSubmit}>
        <Field
          required
          id="name"
          name="name"
          type="text"
          label="Name"
          value={fields.name}
          onChange={onInputChange}
          validationError={validationErrors?.name}
          component={props => <input {...props} />}
        />
        <Field
          required
          id="age"
          name="age"
          type="number"
          label="Age"
          value={fields.age}
          onChange={onInputChange}
          validationError={validationErrors?.age}
          component={props => <input {...props} />}
        />
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
        <Field
          required
          id="password2"
          name="password2"
          type="password"
          label="Repeat Password"
          value={fields.password2}
          onChange={onInputChange}
          validationError={validationErrors?.password2}
          component={props => <input {...props} />}
        />
        <button type="submit">Create user</button>
      </form>
    </div>
  )
}
