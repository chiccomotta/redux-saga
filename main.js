import "babel-polyfill"
import React from "react"
import ReactDOM from "react-dom"
import { applyMiddleware, createStore } from "redux"
import createSagaMiddleware from "redux-saga"
import Counter from "./Counter"
import reducer from "./reducers"
import rootSaga from "./sagas"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

const action = act => store.dispatch(act)

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action({ type: "INCREMENT" })}
      onDecrement={() => action({ type: "DECREMENT" })}
      onIncrementAsync={() => action({ type: "INCREMENT_ASYNC" })}
      onSayHello={() => action({ type: "SAY_HELLO" })}
      onWriteLog={msg => action({ type: "WRITE_LOG", msg: msg })}
    />,
    document.getElementById("root")
  )
}

render()
store.subscribe(render)
