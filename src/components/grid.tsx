import React, { Component } from "react";
import Header from "./side-panel";
import MyComponent from "./savelayoutas";


export default class Landing extends Component {
  render() {
    return (
      <div>
      <Header
        title="Layout"
        buttonText="Apply"
        onButtonClick={() => console.log("Button Clicked!")}
      />
     
      <div>
      
          <MyComponent  />
        
      </div>
      </div>
    );
  }
}
