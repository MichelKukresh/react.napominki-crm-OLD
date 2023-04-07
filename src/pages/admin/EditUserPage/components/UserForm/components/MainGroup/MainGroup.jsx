import React from 'react'
import { AdminForm } from 'components'
import { FirstName, LastName, Role } from './components'

export default function MainGroup() {
  return (
    <AdminForm.Group title="Основное">
      <Role />
      <FirstName />
      <LastName />
    </AdminForm.Group>
  )
}
