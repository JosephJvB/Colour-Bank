import { Fragment } from 'react'
import h from 'react-hyperscript'
import { Link } from 'react-router-dom'
import { reduxForm, Field } from 'redux-form'
import { validate } from '../../utils'
// import { connect } from 'react-redux'

// import Sound from 'react-sound'

const { log } = global.console

async function sub (vals) {
  let v = await vals
  await log(v)
}

const renderField = (props) => {
  // log(props)
  const { label, meta, input } = props
  const { touched, error } = meta
  return (
    h(Fragment, [
      h('label', label),
      h('input', input),
      error && touched && h('span', error)
    ])
  )
}

const WizOne = props => {
  const { handleSubmit, next } = props
  return (
    h(Fragment, [
      'im WizOne',
      h('form', { onSubmit: handleSubmit(sub) }, [
        h(Field, { name: 'wiz1Info',
          component: renderField,
          label: 'tex here',
          type: 'text',
          placeholder: 'answer true' }),
        h('button',
          {
            className: 'button is-large',
            type: 'submit'
          },
          'answer')
      ]),
      h(Link, { to: '/Wiz/2' }, [
        h('button', { onClick: next }, 'next')
      ]),
      h(Link, { 'to': '/' }, [
        h('button', { className: 'button is-large' }, 'home sweet home')
      ]),
      h('button', { onClick: () => log(props) }, 'props')
      // h(Sound, { 'url': '/sounds/pinball.mp3', 'playStatus': 'PLAYING' })
    ])
  )
}
export default reduxForm({
  form: 'wizard1',
  // destroyOnUnmount: false,
  validate
})(WizOne)
