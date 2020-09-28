import React from 'react'
import { Redirect } from 'react-router-dom'

export default function Account({ user }) {
  return (
    <div>
      { user ? null : <Redirect to='/' /> }
      I am the Account component
    </div>
  )
}
