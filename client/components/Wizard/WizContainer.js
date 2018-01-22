import { Fragment } from 'react'
import h from 'react-hyperscript'

import WizOne from './WizOne'

const WizContainer = props => {
  return (
    h(Fragment, [
      'hi im wizcon',
      h('br'),
      h(WizOne)
    ])
  )
}

export default WizContainer
