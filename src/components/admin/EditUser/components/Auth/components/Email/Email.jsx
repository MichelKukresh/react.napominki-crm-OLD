import React from 'react'
import { Input } from 'components'
import { EditUserContext } from 'core/context'
import { useErrors, useInitial } from 'core/hooks'

export default function Email() {
  const context = React.useContext(EditUserContext)
  const { initial, errors, setData } = context

  const [email, setEmail] = useInitial(initial, 'email', '')
  const error = useErrors(errors, 'email')

  React.useEffect(() => {
    setData((prev) => {
      return {
        ...prev,
        email,
      }
    })
  }, [email])

  return (
    <Input
      type="email"
      label="Email"
      error={error}
      value={email}
      onInput={setEmail}
      className="col col-12 "
    />
  )
}
