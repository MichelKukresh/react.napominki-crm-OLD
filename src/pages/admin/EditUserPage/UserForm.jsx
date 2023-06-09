import React from 'react'
import { useNavigate } from 'react-router-dom'

import { AdminForm } from 'components'
import { Auth, Contacts, MainGroup } from './'

import { EditUserContext } from 'context'
import { ROUTES } from 'router/routes'
import { MODELS } from 'constants'

export default function UserForm() {
  const { id, data, setError } = React.useContext(EditUserContext)

  const navigate = useNavigate()
  const redirect = () => navigate(ROUTES.ADMIN.CHILDREN.USERS.PATH)

  const formTitle = (id ? 'Редактирование' : 'Добавление') + ' пользователя'

  const deleteButton = { text: 'Удалить пользователя', onDelete: redirect }

  return (
    <AdminForm
      id={id}
      data={data}
      model={MODELS.USER.VALUE}
      title={formTitle}
      onCancel={{ callback: redirect }}
      onSave={redirect}
      onError={setError}
      deleteButton={deleteButton}
    >
      <MainGroup />
      <Contacts />
      <Auth />
    </AdminForm>
  )
}
