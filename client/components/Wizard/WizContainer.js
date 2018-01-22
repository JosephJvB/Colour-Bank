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

// Wizard = connect(state => {
//   const value = formValueSelector('wizard1')(state, 'wiz1Info')
//   return { value }
// })(Wizard)

export default WizContainer
