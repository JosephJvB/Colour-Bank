import React, { Fragment } from 'react'
import h from 'react-hyperscript'

import { reqCount, addCount } from '../utils'

const { console } = global

class ColourBox extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: null
    }
    this.getCount = this.getCount.bind(this)
    this.colClick = this.colClick.bind(this)
    // this.reset = this.reset.bind(this)
  }

  componentDidMount () {
    this.getCount()
  }

  getCount () {
    reqCount(this.props.col)
      .then(r => this.setState({ count: r.body.count }))
      .catch(err => console.log(err))
  }

  colClick (r) {
    let count = this.state.count + 1
    if (r === 'reset') count = 0
    addCount(this.props.col, count)
      .then(c => this.setState({ count: c }))
      .catch(err => console.log(err))
  }

  // reset () {
  //   addCount(this.props.col, 0)
  //     .then(c => this.setState({ count: c }))
  //     .catch(err => console.log(err))
  // }

  render () {
    // const w = window.screen.availWidth
    const hi = window.screen.availHeight
    return (
      h('div', {
        'className': 'column is-3',
        'style': {
          'marginTop': hi / 8,
          'backgroundColor': this.props.rgb,
          'height': hi / 4
        }
      }, [
        h('button', {
          'className': 'button is-large',
          'onClick': () => this.colClick('reset')
        }, 'reset'),
        h('h1', {
          'className': 'subtitle is-1',
          'onClick': this.colClick
        }, this.state.count)
      ])
    )
  }
}

export default ColourBox
