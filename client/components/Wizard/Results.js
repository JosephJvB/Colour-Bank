import { Fragment as F } from 'react'
import { connect } from 'react-redux'
import { formValueSelector } from 'redux-form'
import h from 'react-hyperscript'
import { Link } from 'react-router-dom'

const { log } = global.console

const Results = props => {
  return (
    h(F, [
      'ty for taking my test',
      h('button', { onClick: () => log(props) }, 'whats in props'),
      h(Link, { to: '/Wiz/1' }, [
        h('button', { }, 'home :)')
      ])
    ])
  )
}

export default connect(state => {
  const value = formValueSelector('wizard1')(state, 'wiz1Info')
  return { value }
})(Results)
