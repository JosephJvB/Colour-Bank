import React, { Fragment } from 'react'
import h from 'react-hyperscript'

const { log } = global.console

const ColourBox = (props) => {
  // const w = window.screen.availWidth
  const hi = window.screen.availHeight
  const { box, onClick } = props
  const { id, rgba, count } = box
  return (
    h('div', {
      className: 'column',
      style: {
        marginTop: hi / 14,
        backgroundColor: rgba,
        height: hi / 4
      }
    }, [
      h('button', {
        className: 'button is-large',
        onClick: () => onClick(id, 'reset')
      }, 'reset'),
      h('h1', {
        className: 'subtitle is-1',
        onClick: () => onClick(id)
      }, count)
    ])
  )
}

export default ColourBox
