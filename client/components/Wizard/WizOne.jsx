import { Fragment } from 'react'
import h from 'react-hyperscript'
import { Link } from 'react-router-dom'
import { reduxForm, Field } from 'redux-form'

import { validate, sub, renderField } from '../../utils'

// import Sound from 'react-sound'

const { log } = global.console

const WizOne = props => {
  const { handleSubmit } = props
  return (
    h(Fragment, [
      'im WizOne',
      h('form', { onSubmit: handleSubmit(sub) }, [
        h(Field, { name: 'wiz1Info',
          component: renderField,
          label: 'wiz1',
          type: 'text',
          placeholder: 'ur text here' })
      ]),
      h(Link, { 'to': '/' }, [
        h('button', { className: 'button is-info' }, 'home sweet home')
      ]),
      h('button', { onClick: () => log(props) }, 'props')
      // h(Sound, { 'url': '/sounds/pinball.mp3', 'playStatus': 'PLAYING' })
    ])
  )
}
export default reduxForm({
  form: 'Wizard1',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(WizOne)
