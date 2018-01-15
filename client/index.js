import React from 'react'
import ReactDOM from 'react-dom'
import h from 'react-hyperscript'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    h(App),
    document.getElementById('app')
  )
})
