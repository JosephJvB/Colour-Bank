import React, { Fragment as F } from 'react'
import h from 'react-hyperscript'
import { reduxForm, Field } from 'redux-form'

// import { postBox } from '../utils'

const { log } = global.console

const renderField = (props) => {
  const { input, meta, label } = props
  input.autoComplete = 'off'
  return (
    h(F, [
      h('label', label),
      h('input', input)
    ])
  )
}

const BoxForm = props => {
  const { handleSubmit, customSubmit } = props
  return (
    h(F, [
      'i\'m the form',
      h('br'),
      h('form', { onSubmit: handleSubmit(customSubmit) }, [
        h(Field, {
          name: 'rgbaInput',
          component: renderField,
          label: 'colour rgba value',
          type: 'text',
          placeholder: 'enter rgb'
        }),
        h('button', { type: 'submit' }, 'submit')
      ])
    ])
  )
}

export default reduxForm({
  form: 'boxForm'
})(BoxForm)
