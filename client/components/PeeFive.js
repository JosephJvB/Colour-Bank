import { Fragment as F } from 'react'
import h from 'react-hyperscript'
import P5Wrapper from 'react-p5-wrapper'

import sketch from '../sketch'

const PeeFive = () => {
  return (
    h(F, [
      'im p5',
      h(P5Wrapper, { sketch })
    ])
  )
}

export default PeeFive
