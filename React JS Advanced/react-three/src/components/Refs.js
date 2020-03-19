import React, { Component } from "react";

export default class Refs extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.inputRef = React.createRef();

    this.state = {
      inputs: ["ref1", "ref2", "ref3"]
    };
  }

  componentDidMount() {
    console.log(this.myRef.current.textContent);
  }
  focusInput = () => {
    this.inputRef.current.focus();
  };
  createReference = v => {
    v.current.focus();
  };
  render() {
    return (
      <>
        <div ref={this.myRef}>Welcome</div>
        <input ref={this.inputRef} />
        <input />
        <button onClick={this.focusInput}>Click to Focus</button>
        {this.state.inputs.map(value => {
          value = React.createRef();

          return (
            <>
              <input ref={value} />
              <button
                onClick={() => {
                  this.createReference(value);
                }}
              >
                Click
              </button>
            </>
          );
        })}
      </>
    );
  }
}
