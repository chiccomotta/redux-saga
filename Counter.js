/*eslint-disable no-unused-vars */
import React from "react"
import { Box } from "./Box"

const Counter = ({
  value,
  onIncrement,
  onDecrement,
  onIncrementAsync,
  onSayHello,
  onWriteLog
}) => (
  <div>
    <button onClick={onIncrementAsync}>Increment after 1 second</button>{" "}
    <button onClick={onIncrement}>Increment</button>{" "}
    <button onClick={onDecrement}>Decrement</button>
    <button onClick={onSayHello}>SayHello</button>
    <button onClick={() => onWriteLog("LOG")}>Write 'LOG'</button>
    <hr />
    <div>Clicked: {value} times</div>
    <Box Counter={value} />
  </div>
)
export default Counter
