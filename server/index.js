//node 代码， babel解析
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../src/index'
import express from 'express'
console.log(App)
const app = express()

app.get("/", (req, res) => {
  const content = renderToString(App)
  // res.send(`
  // <!DOCTYPE html>
  // <html lang="en">
  // <head>
  //   <meta charset="UTF-8">
  //   <title>开课吧</title>
  // </head>
  // <body>
  //   <div id="root">${content}</div>
  // </body>
  // </html>
  // `)
  res.send("node")
})

app.listen(8000, () => {
  console.log("server is running")
})