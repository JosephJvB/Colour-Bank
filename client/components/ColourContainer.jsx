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
    this.onClick = this.onClick.bind(this)
  }
  // functions here
  componentDidMount () {
    reqBigData()
      .then(r => {
        // log('big select', r.body)
        this.setState({ boxData: r.body })
      })
  }

  onClick (id, r) {
    // log(this.state)
    let count = this.state.boxData[id - 1].count + 1
    if (r === 'reset') count = 0
    addCount(id, count)
      .then(() => this.updateBoxData())
      .catch(err => log(err))
  }

  // I never bound this function, but it works. I think bind is only required if it gets used by a DOM element? cos right now it's only being used in the above function. Either way something to be aware of
  updateBoxData () {
    reqBigData()
      .then(r => {
        // log(r)
        this.setState({ boxData: r.body })
      })
      .catch(err => log(err))
  }

  render () {
    const { boxData } = this.state
    const { onClick } = this
    return (
      h(F, [
        h(Link, { to: '/Wiz/1' }, [
          h('button', { className: 'button is-large' }, 'the Wizard awaits...')
        ]),
        h(Link, { to: '/p5' }, [
          h('button', { className: 'button is-large' }, 'p5 :)')
        ]),
        h('div', { className: 'columns has-text-centered' },
        // map over data in state which will be array of objects from DB :)
          boxData.map(box => h(ColourBox, { key: box.id, box, onClick }))
        ),
        h(F, 'i\'m gonna put a form here ya heard')
      ])
    )
  }
}
export default ColourContainer
