import React, { Fragment } from 'react'
import h from 'react-hyperscript'

import { reqCount, addCount, switcher } from '../utils'

const { console } = global

class ColourBox extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
    this.getCount = this.getCount.bind(this)
    // this.reset = this.reset.bind(this)
  }

  componentDidMount () {
    this.getCount()
  }

  getCount () {
    reqCount(col)
      .then(c => this.setState({ count: c }))
      .catch(err => console.log(err))
  }

  reset () {
    // somehow reset DB value to 0
  }

  render () {
    // const w = window.screen.availWidth
    const hi = window.screen.availHeight
    return (
      h('div', {
        'className': 'column is-3',
        'style': {
          'marginTop': hi / 8,
          'backgroundColor': this.props.col,
          'height': hi / 4
        }
      }, [
        h('button', {
          'className': 'button is-large',
          'onClick': this.reset()
        }, 'reset'),
        h('h1', {
          'className': 'subtitle is-1',
          'onClick': () => console.log('lol')
        }, this.state.count)
      ])
    )
  }
}

export default ColourBox
