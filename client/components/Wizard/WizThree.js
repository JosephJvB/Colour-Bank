import { Fragment as F } from 'react'
import h from 'react-hyperscript'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import { validate } from '../../utils'

const { log } = global.console

const WizThree = (props) => {
  return (
    h(F, [
      'wiz3',
      h(Link, { to: '/wiz2' }, [
        h('button', {
        }, 'prev')
      ]),
      h('button', { onClick: () => log(props) }, 'props'),
      h(Link, { to: '/' }, [
        h('button', {
        }, 'home')
      ])
    ])
  )
}

export default reduxForm({
  form: 'Wizard3',
  validate
})(WizThree)
