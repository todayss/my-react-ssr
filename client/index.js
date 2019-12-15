import React from 'react'
import ReactDOM from 'react-dom'
import routes from '../src/index'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { getClientStore, getServerStore } from '../src/store/store'
import Header from '../src/component/Header'
import { Provider } from 'react-redux'
const Page = (
  <Provider store={getClientStore()}>
    <Router >
      <Header />
      {
        routes.map(route => {
          return <Route {...route} />
        })
      }
    </Router>
  </Provider>
)

//注水
ReactDOM.hydrate(Page, document.getElementById('root'))
