import { Fragment } from 'react'
import h from 'react-hyperscript'
import { Route } from 'react-router-dom'

import ColourContainer from './ColourContainer'
import Informant from './Informant'
// import WizContainer from './Wizard/WizContainer'

import WizOne from './Wizard/WizOne'
import WizTwo from './Wizard/WizTwo'
import WizThree from './Wizard/WizThree'

const App = () => {
  return (
    h(Fragment, [
      h(Route, {'path': '/',
        exact: true,
        component: ColourContainer
      }),
      h(Route, {path: '/oldForm',
        component: Informant
      }
      ),
      h(Route, { path: '/wiz1', exact: false, component: WizOne }),
      // h('button', { onClick: () => log() }, 'contprops'),
      h(Route, { path: '/wiz2', exact: false, component: WizTwo }),
      h(Route, { path: '/wiz3', exact: false, component: WizThree })
    ])
  )
}

export default App

// export default connect(state => {
//   const value = formValueSelector('wizard1')(state, 'wiz1Info')
//   return { value }
// })(WizContainer)
