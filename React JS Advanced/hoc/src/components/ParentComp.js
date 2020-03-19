import React, { Component } from "react";
import InputCounter from "./InputCounter";
import MouseCounter from "./MouseCounter";
import ButtonCounter from "./ButtonCounter";
import ErrorBoundary from "../error-boundary/ErrorBoundary";
import ErrorBoundaryInput from "../error-boundary/ErrorBoundaryInput";

export default class ParentComp extends Component {
  render() {
    return (
      <div>
        <ErrorBoundaryInput>
          <InputCounter />
        </ErrorBoundaryInput>
        <ErrorBoundary>
          <MouseCounter name="Srikanth" />
        </ErrorBoundary>
        <ButtonCounter />
      </div>
    );
  }
}
