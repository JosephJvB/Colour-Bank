import { Fragment as F, Component } from 'react'
import { connect } from 'react-redux'
import { formValueSelector } from 'redux-form'
import h from 'react-hyperscript'
import { Route } from 'react-router-dom'

// import WizOne from './WizOne'
// import WizTwo from './WizTwo'
// import WizThree from './WizThree'

const { log } = global.console

class WizContainer extends Component {
  constructor (props) {
    super(props)
    this.state = { }
    // binds here
  }
  // functions here

  render () {
    return (
      h(F, [
        'hi im wizcon',
        h('br')
      ])
    )
  }
}

export default connect(state => {
  const value = formValueSelector('wizard1')(state, 'wiz1Info')
  return { value }
})(WizContainer)
