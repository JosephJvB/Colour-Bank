import React, { Fragment } from 'react'
import h from 'react-hyperscript'

import { addCount, reqCount } from '../utils'

const { log } = global.console

class ColourBox extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
    this.getCount = this.getCount.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  componentDidMount () {
    // log('boxprops', this.props)
    this.setState({ count: this.props.count })
  }

  onClick (r) {
    const { id } = this.props
    let count = this.state.count + 1
    if (r === 'reset') count = 0
    addCount(id, count)
      .then(() => this.getCount())
      .catch(err => log(err))
  }

  getCount () {
    reqCount(this.props.id)
      .then(r => {
        log(r.body)
        this.setState({ count: r.body.count })
      })
      .catch(err => log(err))
  }

  render () {
    // const w = window.screen.availWidth
    const hi = window.screen.availHeight
    const { rgba } = this.props
    return (
      h('div', {
        className: 'column',
        style: {
          marginTop: hi / 14,
          backgroundColor: rgba,
          height: hi / 4
        }
      }, [
        h('button', {
          className: 'button is-large',
          onClick: () => this.onClick('reset')
        }, 'reset'),
        h('h1', {
          className: 'subtitle is-1',
          onClick: this.onClick
        }, this.state.count)
      ])
    )
  }
}

export default ColourBox
