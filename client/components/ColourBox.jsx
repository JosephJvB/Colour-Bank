import { Fragment } from 'react'
import h from 'react-hyperscript'

const ColourBox = (props) => {
  const w = window.screen.availWidth
  const hi = window.screen.availHeight
  return (
    h('div.col', {
      'style': {
        'backgroundColor': props.c,
        'height': hi / 4,
        'width': w / 4
      },
      'onClick': () => console.log(window)
    })
  )
}

export default ColourBox
