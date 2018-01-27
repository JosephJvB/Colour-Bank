import { Fragment } from 'react'
import h from 'react-hyperscript'
import { Route } from 'react-router-dom'

import ColourContainer from './ColourContainer'
import Informant from './Informant'

import DaWizard from './Wizard/DaWizard'

const App = () => {
  return (
    h(Fragment, [
      h(Route, {'path': '/',
        exact: true,
        component: ColourContainer
      }),
      h(Route, { path: '/oldForm', component: Informant }),
      h(Route, { path: '/Wiz', component: DaWizard })
    ])
  )
}

export default App

// export default connect(state => {
//   const value = formValueSelector('wizard1')(state, 'wiz1Info')
//   return { value }
// })(WizContainer)
