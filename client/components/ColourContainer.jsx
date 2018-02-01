import h from 'react-hyperscript'
import { Link } from 'react-router-dom'
import { Fragment, Component } from 'react'

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
    // this.getBigData = this.getBigData.bind(this)
  }
  // functions here

  componentDidMount () {
    reqBigData()
      .then(r => {
        // log('big select', r.body)
        this.setState({ boxData: r.body })
      })
  }

  // getBigData () {
  //   reqBigData()
  //     .then(r => {
  //       log(r)
  //       this.setState({ boxData: r.body })
  //     }) // might need to be something in r.body...do some console.logging
  // }

  // const rgbs = ['rgba(236, 39, 39, 0.6)', 'rgba(7, 0, 234, 0.6)', 'rgba(251, 255, 35, 0.6)', 'rgba(40, 166, 1, 0.6)']
  // const cols = ['red', 'blue', 'yellow', 'green']
  render () {
    const { boxData } = this.state
    return (
      h(Fragment, [
        h('div', { 'className': 'columns has-text-centered' },
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
        h(Link, { to: '/Wiz/1' }, [
          h('button', { 'className': 'button is-large' }, 'the Wizard awaits...')
        ]),
        h(Link, { to: '/p5' }, [
          h('button', { }, 'p5 :)')
        ])
      ])
    )
  }
}
export default ColourContainer
