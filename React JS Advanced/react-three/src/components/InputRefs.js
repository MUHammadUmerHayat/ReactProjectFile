import React, { Component } from "react";

export default class InputRefs extends Component {

    constructor(props){
        super(props)
        this.inputRef1 = React.createRef();
    }

    componentDidMount(){
        this.inputRef1.current.focus();
    }

  render() {
    return (
      <>
        <input ref={this.inputRef1} style={{ marginLeft: "25%" }} />
      </>
    );
  }
}
