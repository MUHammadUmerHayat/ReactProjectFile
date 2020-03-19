import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  state = {
    hasError: false
  };
  static getDerivedStateFromError(error) {
    // console.log("error",error)
    return {
      hasError: true
    };
  }
  componentDidCatch(error,errorInfo){
    console.log("Errror Info ",errorInfo)
  }
  render() {
    if(this.state.hasError){
        return <h1>Something went wrong!!!</h1>
    }else{
        return this.props.children
    }
  }
}
