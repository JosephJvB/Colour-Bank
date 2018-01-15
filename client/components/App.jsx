import { Fragment } from 'react'
import h from 'react-hyperscript'

import ColourBox from './ColourBox'

const App = () => {
  const cols = [ 'rgba(236, 39, 39, 0.6)', 'rgba(7, 0, 234, 0.6)', 'rgba(251, 255, 35, 0.6)', 'rgba(40, 166, 1, 0.6)' ]
  const count = [1, 2, 3, 4]
  return (
    h('div', { 'className': 'columns has-text-centered' },
      [
        cols.map((c, i) => h(ColourBox, { 'col': c, 'key': i, 'count': count[i] })),
        h('p', 22),
        cols.length > 100 && h(Fragment, 'this is how u conditional???')
      ])
  )
}

export default App
