import React from 'react'
import ReactDOM from 'react-dom'
import h from 'react-hyperscript'
import { Provider } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'

import Store from './Store'
import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    h(Provider,
      { 'store': Store },
      [
        h(Router, [
          h(App)
        ])
      ]),
    document.getElementById('app')
  )
})
