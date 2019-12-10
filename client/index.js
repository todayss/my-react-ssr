import React from 'react'
import ReactDOM from 'react-dom'
import App from '../src/index'

//注水
ReactDOM.hydrate(App, document.getElementById('root'))
