import React, { Component } from "react";
import InputRef from "./InputRef";

export default class ParentRef extends Component {
  
    constructor(props) {
        super(props)
        this.childRef = React.createRef();
    }
    callChild = ()=>{
        console.log(this.childRef)
        this.childRef.current.inputMethod();
    }

    render() {
    return (
      <div>
        <InputRef ref={this.childRef}/>
        <button onClick={this.callChild}>Click</button>
      </div>
    );
  }
}
