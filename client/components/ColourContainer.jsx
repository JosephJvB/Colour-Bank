import h from 'react-hyperscript'
import { Link } from 'react-router-dom'
import { Fragment } from 'react'

import ColourBox from './ColourBox'

const ColourContainer = () => {
  const rgbs = ['rgba(236, 39, 39, 0.6)', 'rgba(7, 0, 234, 0.6)', 'rgba(251, 255, 35, 0.6)', 'rgba(40, 166, 1, 0.6)']
  const cols = ['red', 'blue', 'yellow', 'green']
  return (
    h(Fragment, [
      h('div', { 'className': 'columns has-text-centered' },
        rgbs.map((c, i) => h(ColourBox, { 'key': i, 'rgb': c, 'col': cols[i] }))
      ),
      h(Link, { to: '/wiz1' }, [
        h('button', { 'className': 'button is-large' }, 'the Wizard awaits...')
      ])
    ])
  )
}
export default ColourContainer
