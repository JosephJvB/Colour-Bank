import h from 'react-hyperscript'
import { Link } from 'react-router-dom'
import { Fragment as F, Component } from 'react'

import { reqBigData, addCount, delBox, postBox } from '../utils'

import ColourBox from './ColourBox'
import BoxForm from './BoxForm'

const { log } = global.console

class ColourContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      boxData: []
    }
    // binds here
    this.onClick = this.onClick.bind(this)
    this.customSubmit = this.customSubmit.bind(this)
  }
  // functions here
  componentDidMount () {
    reqBigData()
      .then(r => {
        log('big select', r.body)
        this.setState({ boxData: r.body })
      })
  }

  onClick (id, r) {
    if (r === 'delete') {
      return delBox(id)
        .then(() => this.updateBoxData())
        .catch(err => log(err))
    }
    // log(this.state)
    const box = this.state.boxData.find(b => b.id === id)
    let count = box.count + 1
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

  customSubmit (vals) {
    log(vals)
    postBox(vals)
      .then(() => this.updateBoxData())
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
        h(BoxForm, { customSubmit: this.customSubmit })
      ])
    )
  }
}
export default ColourContainer
