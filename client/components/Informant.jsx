import { Fragment, Component } from 'react'
import { reduxForm } from 'redux-form'
import h from 'react-hyperscript'

class Informant extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
    // binds go here
  }
  // functions go here

  render () {
    return (
      h(Fragment, 'hi im informant')
    )
  }
}

export default Informant
