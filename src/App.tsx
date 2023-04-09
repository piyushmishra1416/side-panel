// import React, { useState } from 'react';
// import SidePanel from './components/side-panel';

// function App() {
//   const [isPanelOpen, setIsPanelOpen] = useState(false);

//   const openSidePanel = () => {
//     console.log('Opening side panel');
//     setIsPanelOpen(true);
//   };

//   const closeSidePanel = () => {
//     console.log('Closing side panel');
//     setIsPanelOpen(false);
//   };

//   return (
//     <div className="App">
//       <button onClick={openSidePanel}>Open Side Panel</button>
//       <SidePanel isOpen={isPanelOpen} onClose={closeSidePanel} />
//     </div>
//   );
// }

import React, { Component } from "react";
import Landing from "./components/grid";

class App extends Component {
  render() {
    return (
     
<div>
      <h1>Welcome to My App</h1>
      <Landing />
    </div>
     
    );
  }
}

export default App;

