import { Fragment as F } from 'react'
import h from 'react-hyperscript'
import { Route } from 'react-router-dom'
// import { formValueSelector } from 'redux-form'
// import { connect } from 'react-redux'
// import Sound from 'react-sound'

import WizOne from './WizOne'
import WizTwo from './WizTwo'
import WizThree from './WizThree'
import Results from './Results'

// const { log } = global.console

const DaWizard = () => {
  const pages = [ WizOne, WizTwo, WizThree ]
  return (
    h(F, [
      // h(Sound, { url: '/sounds/pinball.mp3', playStatus: 'PLAYING' }),
      'Component: ',
      pages.map((p, i) => h(Route, { key: i, path: `/Wiz/${i + 1}`, component: p })),
      // h(Route, { path: '/Wiz/1', render: () => h(WizOne, { sub, renderField }) }),
      // h(Route, { path: '/Wiz/2', render: () => h(WizTwo, { sub, renderField }) }),
      // h(Route, { path: '/Wiz/3', render: () => h(WizThree, { sub, renderField }) }),
      h(Route, { path: '/Wiz/results', component: Results })
    ])
  )
}

export default DaWizard
