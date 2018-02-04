import { Fragment as F } from 'react'
import { connect } from 'react-redux'
import { formValueSelector } from 'redux-form'
import h from 'react-hyperscript'
import { Link } from 'react-router-dom'

const { log } = global.console

const Results = props => {
  const { value1, value2, value3 } = props
  const style = { marginLeft: 100 }
  return (
    h(F, [
      'ty for taking my test',
      h(Link, { to: '/Wiz/3' }, [
        h('button', { className: 'button is-info' }, 'prev')
      ]),
      h('button', { onClick: () => log(props) }, 'whats in props'),
      h(Link, { to: '/Wiz/1' }, [
        h('button', { }, 'home :)')
      ]),
      h('div', { style }, [
        h('br'),
        `1: ${value1}`,
        h('br'),
        `2: ${value2}`,
        h('br'),
        `3: ${value3}`
      ])
    ])
  )
}

export default connect(state => {
  const value1 = formValueSelector('Wizard1')(state, 'wiz1Info')
  const value2 = formValueSelector('Wizard2')(state, 'wiz2Info')
  const value3 = formValueSelector('Wizard3')(state, 'wiz3Info')
  return { value1, value2, value3 }
})(Results)
