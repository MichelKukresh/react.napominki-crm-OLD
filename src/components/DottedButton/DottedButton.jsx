import './DottedButton.scss'
import React from 'react'
import { classNames } from 'utils'

export default function DottedButton(data) {
  const { className, ...props } = data

  return (
    <div className={classNames('dotted-button', [className])} {...props}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}
