import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FuncCompOne from "./components/FuncCompOne";
import { UserProvider } from "./context-api/userContext";

function App() {
  return (
    <div className="App">
      <UserProvider value="Vikas">
        <FuncCompOne />
      </UserProvider>
    </div>
  );
}

export default App;
