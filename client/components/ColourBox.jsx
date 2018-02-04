import React, { Fragment as F } from 'react'
import h from 'react-hyperscript'

// const { log } = global.console

const hi = window.screen.availHeight

const ColourBox = props => {
  const { box, onClick } = props
  const { id, colour, count } = box
  return (
    h('div', {
      className: 'column',
      style: {
        marginTop: hi / 14,
        marginBottom: hi / 14,
        backgroundColor: colour,
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
      }, count),
      h('button', {
        className: 'button',
        onClick: () => onClick(id, 'delete')
      }, 'delete')
    ])
  )
}

export default ColourBox
