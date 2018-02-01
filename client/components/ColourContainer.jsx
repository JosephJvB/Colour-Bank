import h from 'react-hyperscript'
import { Link } from 'react-router-dom'
import { Fragment as F, Component } from 'react'

import { reqBigData, addCount } from '../utils'

import ColourBox from './ColourBox'

const { log } = global.console

class ColourContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      boxData: []
    }
    // binds here
  }
  // functions here

  componentDidMount () {
    reqBigData()
      .then(r => {
        // log('big select', r.body)
        this.setState({ boxData: r.body })
      })
  }

  render () {
    const { boxData } = this.state
    return (
      h(F, [
        h(Link, { to: '/Wiz/1' }, [
          h('button', { className: 'button is-large' }, 'the Wizard awaits...')
        ]),
        h(Link, { to: '/p5' }, [
          h('button', { className: 'button is-large' }, 'p5 :)')
        ]),
        h('div', { className: 'columns has-text-centered' },
        // map over info in state which will be array of objects from DB
          boxData.map(box => h(ColourBox, {
            key: box.id,
            id: box.id,
            rgba: box.rgba,
            colour: box.colour,
            count: box.count
          })
          )
        ),
        h(F, 'i\'m gonna put a form here ya heard')
      ])
    )
  }
}
export default ColourContainer
