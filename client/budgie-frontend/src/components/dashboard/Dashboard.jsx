import React from 'react'
import { Redirect } from 'react-router-dom'

export default function Dashboard({ user }) {
  return (
    <div>
      { user ? null : <Redirect to='/' /> }
      I am the Dashboard Component 
    </div>
  )
}
