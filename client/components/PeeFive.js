import { Fragment as F } from 'react'
import h from 'react-hyperscript'
import P5Wrapper from 'react-p5-wrapper'
import { Link } from 'react-router-dom'

import sketch from '../sketch'
import fractalTree from '../fractalTree'

const PeeFive = () => {
  return (
    h(F, [
      h(Link, { to: '/' }, [
        h('button', { className: 'button is-success' }, 'home :)')
      ]),
      h(F, 'enjoy da P5 m\'dude'),
      h('div', { className: 'columns', style: { marginTop: 20 } }, [
        h(P5Wrapper, { sketch: fractalTree }),
        h(P5Wrapper, { sketch })
      ])
      // so basically the P5Wrapper takes a vanilla js file and is able to render it inside react framework. pretty neat
    ])
  )
}

export default PeeFive
