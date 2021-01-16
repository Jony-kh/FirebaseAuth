import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../pages/Home'

export default function Auth() {
  return (
    <Route exact path="/" component={Home} />
  )
}
