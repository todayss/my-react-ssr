//node 代码， babel解析
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../src/index'
import express from 'express'
const app = express()
app.use(express.static("public"))

app.get("/", (req, res) => {
  const content = renderToString(App)
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>开课吧</title>
    
  </head>
  <body>
    <div id="root">${content}</div>
    <script src="/bundle.js"></script>
  </body>
  </html>
  `)
})

app.listen(8000, () => {
  console.log("server is running")
})


// import React from 'react';
// import { renderToString } from 'react-dom/server';
// import express from 'express';
// import App from '../src/index.js';

// const app = express();
// app.use(express.static('public'));
// app.get('/', (req, res) => {
//   const content = renderToString(App);
//   res.send(`<html>
//   <head><meta charset="utf-8"><title>react ssr</title></head
//   <body>
//   <div id="root">${content}</div></body>
//   <script src="/bundle.js"></script>
//   </html>`)
// })

// app.listen('8000', () => {
//   console.log('success')
// })