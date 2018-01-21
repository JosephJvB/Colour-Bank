import { Fragment } from 'react'
import h from 'react-hyperscript'
import { Route } from 'react-router-dom'

import ColourContainer from './ColourContainer'
import Informant from './Informant'
import Wizard from './Wizard'

const App = () => {
  return (
    h(Fragment, [
      h(Route, {'path': '/',
        'exact': true,
        'component': ColourContainer
      }),
      h(Route, {'path': '/oldWizard',
        'component': Informant
      }
      ),
      h(Route, {'path': '/newWizard1',
        'component': Wizard
      }
      )
    ])
  )
}

export default App
