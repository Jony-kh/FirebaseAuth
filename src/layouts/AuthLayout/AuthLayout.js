import React from 'react'
import MainNav from '../../components/molecules/MainNav'
import { AuthLayoutProps } from '../../hooks/auth/auth'

export default function AuthLayout({ children }) {
  const props = AuthLayoutProps()
  
  return (
    <div>
      <h1>Auth</h1>
      <MainNav {...props} />
      {children}
    </div>
  )
}
