import React, { useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import CounterOne from "./components/CounterOne";
import ComponentA from "./components/ComponentA";
import { CounterProvider } from "./context-api/counterContext";

function App() {
  const initialState = {
    firstName: "Guru",
    count: 0
  };

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return {
          ...state,
          count : state.count + 1

        };
      default:
        return initialState;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <CounterOne /> */}
      <CounterProvider
        value={{
          state: state,
          dispatch: dispatch
        }}
      >
        <ComponentA />
      </CounterProvider>
    </div>
  );
}

export default App;
