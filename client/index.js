import React from 'react'
import ReactDOM from 'react-dom'
import App from '../src/index'
import { BrowserRouter as Router } from 'react-router-dom'
import store from '../src/store/store'
import { Provider } from 'react-redux'
const Page = (
  <Provider store={store}>
    <Router >
      {App}
    </Router>
  </Provider>
)

//注水
ReactDOM.hydrate(Page, document.getElementById('root'))
