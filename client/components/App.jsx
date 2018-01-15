import { Fragment } from 'react'
import h from 'react-hyperscript'

import ColourBox from './ColourBox'

const App = () => {
  const c = [ 'red', 'blue', 'yellow', 'green' ]
  const count = [1, 2, 3, 4]
  return (
    h('div', { 'className': 'columns' },
      [
        c.map((c, i) => h(ColourBox, { 'c': c, 'key': i, 'count': count[i] })),
        c.length > 100 && h(Fragment, 'this is how u conditional???')
      ])
  )
}

export default App
