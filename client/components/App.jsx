import { Fragment } from 'react'
import h from 'react-hyperscript'
import { Route } from 'react-router-dom'

import ColourContainer from './ColourContainer'
import Informant from './Informant'
import WizContainer from './Wizard/WizContainer'

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
      h(Route, {'path': '/newWizard1',
        component: WizContainer
      }
      )
    ])
  )
}

export default App
