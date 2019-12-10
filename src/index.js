import React, { useState } from 'react'

function App() {
  let [count, setCount] = useState(1)
  return <div>
    <h1>开课吧&& {count}</h1>
    <button onClick={() => setCount(count + 1)}>+1</button>
  </div>
}

export default <App></App>
