import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import Index from './container/index'
import About from './container/about'



// export default (
//   <div>
//     <Route path="/" exact component={Index} />
//     <Route path="/about" exact component={About} />
//   </div>
// )

export default [
  {
    path: "/",
    component: Index,
    //loadData: Index.loadData,
    exact: true,
    key: "index"
  },
  {
    path: "/about",
    component: About,
    exact: true,
    key: "about"
  }
]