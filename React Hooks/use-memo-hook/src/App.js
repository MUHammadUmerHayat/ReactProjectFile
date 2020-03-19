import React, { useState, Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import Calculator from "./components/Calculator";
// import LazyLoading from "./components/LazyLoading";

const LazyLoading = React.lazy(() => import("./components/LazyLoading"));

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      {/* <Counter /> */}
      <Calculator />
      {show ? (
        <Suspense fallback={<h1>Loading</h1>}>
          <LazyLoading />
        </Suspense>
      ) : null}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default App;
