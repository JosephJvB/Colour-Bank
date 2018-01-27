import { Fragment as F } from 'react'
import h from 'react-hyperscript'
import { Route } from 'react-router-dom'
// import { formValueSelector } from 'redux-form'
// import { connect } from 'react-redux'
import Sound from 'react-sound'

import WizOne from './WizOne'
import WizTwo from './WizTwo'
import WizThree from './WizThree'
import Results from './Results'

const { log } = global.console

const DaWizard = () => {
  const pages = [ WizOne, WizTwo, WizThree ]
  return (
    h(F, [
      // h(Sound, { url: '/sounds/pinball.mp3', playStatus: 'PLAYING' }),
      'Component: ',
      pages.map((p, i) => h(Route, { key: i, path: `/Wiz/${i + 1}`, render: () => h(p, { sub, renderField }) })),
      // h(Route, { path: '/Wiz/1', render: () => h(WizOne, { sub, renderField }) }),
      // h(Route, { path: '/Wiz/2', render: () => h(WizTwo, { sub, renderField }) }),
      // h(Route, { path: '/Wiz/3', render: () => h(WizThree, { sub, renderField }) }),
      h(Route, { path: '/Wiz/results', component: Results })
    ])
  )
}

// function passed to handleSubmit, logs the values entered
async function sub (vals) {
  let v = await vals
  await log(v)
}

// function that mad props are injected into. rendered the form field
const renderField = (props) => {
  // log(props)
  const { label, meta, input } = props
  const { touched, error } = meta
  return (
    h(F, [
      h('label', label),
      h('input', input),
      error && touched && h('span', error)
    ])
  )
}

export default DaWizard
