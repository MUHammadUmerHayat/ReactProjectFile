import React, { Component } from "react";

export default class ErrorBoundaryInput extends Component {
  state = {
    hasError: false
  };
  static getDerivedStateFromError(error) {
    console.log("error",error)
    return {
      hasError: true
    };
  }
  render() {
    if(this.state.hasError){
        return <h1>Error in Input Component!!!</h1>
    }else{
        return this.props.children
    }
  }
}
