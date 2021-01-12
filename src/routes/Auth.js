import React from 'react'
import { Route } from 'react-router-dom'
import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'
import AuthLayout from '../layouts/AuthLayout'

export default function Auth() {
  return (
    <Route exact path={['/auth/signup', '/auth/signin']}>
      <AuthLayout>
        <Route path="/auth/signup" component={SignUp} />
        <Route path="/auth/signin" component={SignIn} />
      </AuthLayout>
    </Route>
  )
}
