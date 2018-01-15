import { Fragment } from 'react'
import h from 'react-hyperscript'

import ColourBox from './ColourBox'

const App = () => {
  const c = [ 'red', 'blue', 'yellow', 'green' ]
  return (
    h(Fragment, [
      c.map((c, i) => h(ColourBox, {'c': c, 'key': i})),
      c.length > 100 && h(Fragment, 'this is how u conditional???')
    ])
  )
}

export default App
