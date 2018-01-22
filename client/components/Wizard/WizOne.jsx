import { Fragment } from 'react'
import h from 'react-hyperscript'
import { Link } from 'react-router-dom'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'

// import Sound from 'react-sound'

const { log } = global.console

async function sub (vals) {
  let v = await vals
  await log(v)
}

let Wizard = props => {
  return (
    h(Fragment, [
      'im new Wizard',
      h('form', { onSubmit: props.handleSubmit(sub) }, [
        h(Field, { name: 'wizInfo',
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
      h(Link, { 'to': '/' }, [
        h('button', { className: 'button is-large' }, 'home sweet home')
      ])
      // h(Sound, { 'url': '/sounds/pinball.mp3', 'playStatus': 'PLAYING' })
    ])
  )
}
Wizard = reduxForm({
  form: 'wizard1'
})(Wizard)

Wizard = connect(state => {
  const value = formValueSelector('wizard1')(state, 'wizInfo')
  return { value }
})(Wizard)

export default Wizard
