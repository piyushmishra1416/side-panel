// interface SidePanelProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const SidePanel: React.FC<SidePanelProps> = ({ isOpen, onClose }) => {
//   return (
//     <div className={`sidepanel ${isOpen ? 'open' : ''}`}>
//       <div className="header">
//         <h2>Side Panel</h2>
//         <button onClick={onClose}>Close</button>
//       </div>
//       <div className="content">
//         <h3>Layouts</h3>
//         <div className="tabs">
//           <button>Private</button>
//           <button>Global</button>
//         </div>
//       </div>
//     </div>
//   );
// };
import React, { Component } from "react";
import "./sidepanel.css";

interface HeaderProps {
  title: string;
  buttonText: string;
  onButtonClick: () => void;
}
interface HeaderState {
  activeTab: "private" | "global";
}

interface HeaderState {}

export default class Header extends Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      activeTab: "private",
    };
  }

  handleTabClick = (tab: "private" | "global") => {
    this.setState({ activeTab: tab });
  };

  handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
   const searchQuery = event.target.value;
   // do something with searchQuery, like update search results in state
 };

  render() {
    const { title, buttonText, onButtonClick } = this.props;
    const { activeTab } = this.state;

    return (
      <div className="body">
      <header className="Panel ">
        <h1
          style={{
            display: "inline-block",
            marginRight: "100px",
            marginLeft: "10px",
          }}
        >
          {title}
        </h1>
        <button className="header-button" onClick={onButtonClick}>
          {buttonText}
        </button>
      </header>
      <div className="header-divider"></div>
       <div className="tabs">
       <button
         className={activeTab === "private" ? "active" : ""}
         onClick={() => this.handleTabClick("private")}
       >
         PRIVATE
       </button>
       <button
         className={activeTab === "global" ? "active" : ""}
         onClick={() => this.handleTabClick("global")}
       >
         GLOBAL
       </button>
     </div>
     <div className="search-divider"></div>
     <div className="search">
          <input type="text" placeholder="Search Layout" onChange={this.handleSearch} />
        </div>
     </div>
    );
  }
}
