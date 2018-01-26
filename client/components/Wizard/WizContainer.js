import { Fragment as F, Component } from 'react'
import { connect } from 'react-redux'
import { formValueSelector } from 'redux-form'
import h from 'react-hyperscript'

import WizOne from './WizOne'
import WizTwo from './WizTwo'
import WizThree from './WizThree'

const { log } = global.console

class WizContainer extends Component {
  constructor (props) {
    super(props)
    this.state = { formNo: 1 }
    // binds here
    // this.nextPage = this.nextPage.bind(this)

    // functions here

    this.nextPage = () => {
      const { formNo } = this.state
      this.setState({ formNo: formNo + 1 })
    }

    this.prevPage = () => {
      const { formNo } = this.state
      this.setState({ formNo: formNo - 1 })
    }
  }

  render () {
    const { formNo } = this.state
    const { nextPage, prevPage, props } = this
    return (
      h(F, [
        'hi im wizcon',
        h('br'),
        formNo === 1 && h(WizOne, { next: nextPage }),
        h('button', { onClick: () => log(props) }, 'contprops'),
        formNo === 2 && h(WizTwo, { next: nextPage, prev: prevPage }),
        formNo === 3 && h(WizThree, { prev: prevPage })
      ])
    )
  }
}

export default connect(state => {
  const value = formValueSelector('wizard1')(state, 'wiz1Info')
  return { value }
})(WizContainer)
