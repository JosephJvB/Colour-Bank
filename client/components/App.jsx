import { Fragment } from 'react'
import h from 'react-hyperscript'

import ColourBox from './ColourBox'
import Informant from './Informant'

const App = () => {
  const rgbs = [ 'rgba(236, 39, 39, 0.6)', 'rgba(7, 0, 234, 0.6)', 'rgba(251, 255, 35, 0.6)', 'rgba(40, 166, 1, 0.6)' ]
  const cols = ['red', 'blue', 'yellow', 'green']
  return (
    h(Fragment, [
      h('div', { 'className': 'columns has-text-centered' }, [
        rgbs.map((c, i) => h(ColourBox, { 'key': i, 'rgb': c, 'col': cols[i] }))
      ]),
      cols.length > 100 && h(Fragment, 'this is how u conditional???'),
      h(Informant)
    ])
  )
}

export default App
