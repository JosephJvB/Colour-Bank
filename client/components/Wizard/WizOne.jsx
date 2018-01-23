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

const WizOne = props => {
  const { handleSubmit } = props
  return (
    h(Fragment, [
      'im WizOne',
      h('form', { onSubmit: handleSubmit(sub) }, [
        h(Field, { name: 'wiz1Info',
          component: 'input',
          type: 'text',
          placeholder: 'answer true' }),
        h('button',
          {
            className: 'button is-large',
            type: 'submit'
          },
          'answer')
      ]),
      // h('button', { onClick: log('something') }),
      h(Link, { 'to': '/' }, [
        h('button', { className: 'button is-large' }, 'home sweet home')
      ])
      // h(Sound, { 'url': '/sounds/pinball.mp3', 'playStatus': 'PLAYING' })
    ])
  )
}
export default reduxForm({
  form: 'wizard1',
  validate
})(WizOne)
