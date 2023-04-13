import React, { Component } from "react";
import "./select.css";

interface Selectlayoutprops {
  name: string;
}

export default class Selectlayout extends Component<Selectlayoutprops> {
  constructor(props: Selectlayoutprops) {
    super(props);
  }
  render() {
    const { name } = this.props;

    return (
      <div className="Frame21592 content toast">
        <div className="Heading">{name}</div>
        <div className="vertbutton"></div>
      </div>
    );
  }
}
