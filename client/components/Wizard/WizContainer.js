import { Fragment, Component } from 'react'
import h from 'react-hyperscript'

import WizOne from './WizOne'

class WizContainer extends Component {
  constructor (props) {
    super(props)
    this.state = { formNo: 1 }
    // binds here
  }
  // functions here

  nextPage () {
    const { formNo } = this.state
    this.setState({ formNo: formNo + 1 })
  }

  prevPage () {
    const { formNo } = this.state
    this.setState({ formNo: formNo - 1 })
  }

  render () {
    const { formNo } = this.state
    const { nextPage, prevPage } = this
    return (
      h(Fragment, [
        'hi im wizcon',
        h('br'),
        formNo === 1 && h(WizOne, { next: nextPage })
        // formNo === 2 && h(WizTwo)
        // formNo === 3 && h(WizThree)
      ])
    )
  }
}

// Wizard = connect(state => {
//   const value = formValueSelector('wizard1')(state, 'wiz1Info')
//   return { value }
// })(Wizard)

export default WizContainer
