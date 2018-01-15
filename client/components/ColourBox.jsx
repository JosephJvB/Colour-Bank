import { Fragment } from 'react'
import h from 'react-hyperscript'

const ColourBox = (props) => {
  const hi = window.screen.availHeight
  // const w = window.screen.availWidth
  return (
    h('div', {
      'className': 'column is-3',
      'style': {
        'marginTop': hi / 8,
        'backgroundColor': props.col,
        'height': hi / 4
      }
    }, [
      h('button', {
        'className': 'button is-large',
        'onClick': () => console.log(props.count)
      }, 'reset'),
      h('p', props.count)
    ])
  )
}

export default ColourBox
