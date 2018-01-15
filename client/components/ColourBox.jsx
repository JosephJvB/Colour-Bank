import { Fragment } from 'react'
import h from 'react-hyperscript'

const ColourBox = (props) => {
  return (
    h(Fragment, props.c)
  )
}

export default ColourBox
