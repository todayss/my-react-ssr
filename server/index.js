//node 代码， babel解析
import React from 'react'
import { renderToString } from 'react-dom/server'
import routes from '../src/index'
import express from 'express'
import { StaticRouter, matchPath, Route } from 'react-router-dom'
import { getServerStore } from '../src/store/store'
import { Provider } from 'react-redux'
import Header from '../src/component/Header'

const store = getServerStore()
const app = express()
app.use(express.static("public"))

app.get("*", (req, res) => {
  const promises = []
  routes.map(route => {
    const match = matchPath(req.path, route)
    if (match) {
      const { loadData } = route.component
      if (loadData) {
        promises.push(loadData(store))
      }
    }
  })
  Promise.all(promises)
    .then((result) => {
      console.log("res", result)
      const content = renderToString(
        <Provider store={store}>
          <StaticRouter location={req.url} >
            <Header></Header>
            {
              routes.map(route => {
                return <Route {...route} />
              })
            }
          </StaticRouter>
        </Provider>
      )
      res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>开课吧</title>
      
    </head>
    <body>
      <div id="root">${content}</div>
      <script>
      window._context = ${JSON.stringify(store.getState())}
      </script>
      <script src="/bundle.js"></script>
    </body>
    </html>
    `)
    }).catch(err => {
      console.log(err)
      res.send("报错了")
    })
})

app.listen(8000, () => {
  console.log("server is running")
})
