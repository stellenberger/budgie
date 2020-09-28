import React from 'react'
import { Redirect } from 'react-router-dom'

export default function Statistics({ user }) {
  return (
    <div>
      { user ? null : <Redirect to='/' /> }
      I am the Statistics component
    </div>
  )
}
