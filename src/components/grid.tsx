import React, { Component } from "react";
import Header from "./side-panel";

export default class Landing extends Component {
  render() {
    return (
      <Header
        title="Layout"
        buttonText="Apply"
        onButtonClick={() => console.log("Button Clicked!")}
      />
    );
  }
}
