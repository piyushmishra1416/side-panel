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
        <div className="Content">
        <div
          className="title"
        >
          {title}
        </div>
        <div className="button">
        <button className="header-button" onClick={onButtonClick}>
          <div className="button-text">  {buttonText }
          </div>
        </button>
        </div>
        </div>
      </header>
      <div className="header-divider"></div>
      <div className="BodyContent">
       <div className="tabs">
       <button
        className="tab1"
         onClick={() => this.handleTabClick("private")}
         
       >
        <div className="label1">
         PRIVATE
         </div>
       </button>
       <button
         className={`${activeTab === "global" ? "active" : ""} tab2`}
        //  className={activeTab === "global" ? "active" : ""}
         onClick={() => this.handleTabClick("global")}
       >
         <div className="label2">
         GLOBAL
         </div>
       </button>
     </div>
     {/* <div className="search-divider"></div> */}
     <div className="settings">
      <div className="Frame-21948">

     <div className="searchparts">
     <div className="search">
      <div className="icon">
        <div className="icon-left"></div>
      </div>
          {/* <input type="text" placeholder="Search Layout" onChange={this.handleSearch} /> */}
          <div className="text">
            <div className="placeholder">
              Search Layout
            </div>
          </div>
        </div>
        </div>
        </div>
        <div className="Frame21592">
          <div className="Frame21569">
            <div className="Toast1">
              <div className="content">
                <div className="text-vert">
                  <div className="Frame21741">
                    <div className="Heading">
                      Layout1
                    </div>
                  </div>
                </div>
              </div>
              <div className="Close">

              </div>
            </div>

            <div className="Toast1">
              <div className="content">
                <div className="text-vert">
                  <div className="Frame21741">
                    <div className="Heading">
                      Layout1
                    </div>
                  </div>
                </div>
              </div>
              <div className="Close">

              </div>
            </div>

            <div className="Toast1">
              <div className="content">
                <div className="text-vert">
                  <div className="Frame21741">
                    <div className="Heading">
                      Layout1
                    </div>
                  </div>
                </div>
              </div>
              <div className="Close">

              </div>
            </div>



          </div>


        </div>
        </div>
        </div>
     </div>
    
    );
  }
}
