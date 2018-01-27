import { Fragment as F } from 'react'
import h from 'react-hyperscript'
import { Link, Route } from 'react-router-dom'

import WizOne from './WizOne'
import WizTwo from './WizTwo'
import WizThree from './WizThree'
import Results from './Results'

const DaWizard = () => {
  return (
    h(F, [
      'hi',
      h(Route, { path: '/Wiz/1', component: WizOne }),
      h(Route, { path: '/Wiz/2', component: WizTwo }),
      h(Route, { path: '/Wiz/3', component: WizThree }),
      h(Route, { path: '/Wiz/results', component: Results })
    ])
  )
}

export default DaWizard
