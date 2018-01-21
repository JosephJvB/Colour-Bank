import { Fragment } from 'react'
import h from 'react-hyperscript'
import { Link } from 'react-router-dom'

const Wizard = props => {
  return (
    h(Fragment, [
      'im new Wizard',
      h(Link, { 'to': '/' }, [
        h('button', { 'className': 'button is-large' }, 'home sweet home')
      ])
    ])
  )
}

export default Wizard
