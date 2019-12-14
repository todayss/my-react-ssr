const express = require("express")
const app = express()

app.get("/api/cource/list", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "POST,GET,PUT,DELETE")
  res.header("Content-Type", "application/json;charset=utf-8")
  res.json({
    code: 0,
    list: [
      { name: "web全栈课程", id: 1 },
      { name: "js高级课程", id: 2 },
      { name: "js小白", id: 3 }
    ]
  })
})

app.listen("9000")