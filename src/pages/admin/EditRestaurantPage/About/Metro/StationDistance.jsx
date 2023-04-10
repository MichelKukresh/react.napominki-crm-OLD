import styles from './Metro.module.scss'
import React from 'react'

import { AdminForm } from 'components'

import { useErrors } from 'hooks'

export default function StationDistance({ errors, name, onInput, distance }) {
  const error = useErrors(errors, name)

  return (
    <AdminForm.Control
      type="number"
      label="Расстояние"
      name={name}
      value={distance}
      onInput={onInput}
      error={error}
      className={styles.distance}
    />
  )
}
