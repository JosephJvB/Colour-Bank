import h from 'react-hyperscript'
import { Link } from 'react-router-dom'
import { Fragment, Component } from 'react'

import { reqColumn } from '../utils'

import ColourBox from './ColourBox'

const { log } = global.console

class ColourContainer extends Component() {
  constructor (props) {
    super(props)
    this.state = {
      colourArray: [],
      rgbaArray: []
    }
    // binds here
    // this.setColoursAndRGBA = this.setColoursAndRGBA.bind(this)
  }
  // functions here

  componentDidMount () {
    this.getColoursAndRGBA()
  }

  setColoursAndRGBA () {
    reqColumn('colour')
      .then(r => this.setState({ colourArray: r.body.colours }))
      .catch(err => log(err))
    reqColumn('rgba')
      .then(r => this.setState({ colourArray: r.body.rgbas }))
      .catch(err => log(err))

      // doing this.setState twice...seems dumb...maybe even causes errors....yikes

    // this.setState({
    //   colourArray: reqColumn('colour'),
    //   rgbaArray: reqColumn('rgba')
    // })
  }

  // const rgbs = ['rgba(236, 39, 39, 0.6)', 'rgba(7, 0, 234, 0.6)', 'rgba(251, 255, 35, 0.6)', 'rgba(40, 166, 1, 0.6)']
  // const cols = ['red', 'blue', 'yellow', 'green']
  render () {
    return (
      h(Fragment, [
        h('div', { 'className': 'columns has-text-centered' },
          rgbs.map((c, i) => h(ColourBox, { 'key': i, 'rgb': c, 'col': cols[i] }))
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
