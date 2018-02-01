import React, { Fragment } from 'react'
import h from 'react-hyperscript'

import { reqColumn, addCount } from '../utils'

const { console } = global

class ColourBox extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: null
    }
    this.getCount = this.getCount.bind(this)
    this.colClick = this.colClick.bind(this)
  }

  componentDidMount () {
    this.getCount()
  }

  getCount () {
    reqColumn(`id/${this.props.id}`)
      .then(r => this.setState({ count: r.body.count }))
      .catch(err => console.log(err))
  }

  colClick (r) {
    let count = this.state.count + 1
    if (r === 'reset') count = 0
    addCount(this.props.id, count)
      .then(() => this.getCount())
      .catch(err => console.log(err))
  }

  render () {
    // const w = window.screen.availWidth
    const hi = window.screen.availHeight
    return (
      h('div', {
        'className': 'column',
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
