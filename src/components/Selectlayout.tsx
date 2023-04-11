import React, { Component } from 'react'
import "./select.css"
// import { title } from 'process';

interface Selectlayoutprops {
  name: string;
  
}

export default class Selectlayout extends Component<Selectlayoutprops> {
  constructor(props: Selectlayoutprops) {
    super(props);
    
  }
  render()
  {
    const {name} = this.props;
  
    return (
      
        // <div className="Frame21592"> 
        // <div className="toast">
          <div className="Frame21592 content toast">
            <div className="Heading">
          {name }
          </div>
        </div>
        // </div>
        // </div>
   
   

    )
  }
}
