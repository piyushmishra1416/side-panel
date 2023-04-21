import React, { Component } from "react";
import "./sidepanel.css";
import Selectlayout from "./Selectlayout";
import SaveLayoutModal from "./savelayoutas";

interface HeaderProps {
  title: string;
  buttonText: string;
  onButtonClick: () => void;
  
}
interface HeaderState {
  activeTab: "private" | "global";
  isSaveLayoutModalOpen: boolean;
}

interface HeaderState {}

export default class Header extends Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      activeTab: "private",
      isSaveLayoutModalOpen: false,
    };
  }

  handleTabClick = (tab: "private" | "global") => {
    this.setState({ activeTab: tab });
  };

  handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value;
  };
  handleSaveLayoutClick = () => {
    this.setState({ isSaveLayoutModalOpen: true });
  };

  handleCloseSaveLayoutModal = () => {
    this.setState({ isSaveLayoutModalOpen: false });
  };

  render() {
    const { title, buttonText, onButtonClick } = this.props;
    const { activeTab, isSaveLayoutModalOpen } = this.state;

    return (
      <>
      <div className="body">

        {/* HEADER */}
        <header className="header">
          <div className="header-content title">
            {title}
            <button
              className="header-button button-text"
              onClick={onButtonClick}
            >
              {buttonText}
            </button>
          </div>
        </header>

        {/* BODY */}
        <div className="BodyContent">
          {/* TABS */}
          <div className="tabs">
            <button
              className="tab1"
              onClick={() => this.handleTabClick("private")}
            >
              <div className="label1">PRIVATE</div>
            </button>
            <button
              className={`${activeTab === "global" ? "active" : ""} tab2`}
              onClick={() => this.handleTabClick("global")}
            >
              <div className="label2">GLOBAL</div>
            </button>
          </div>

          {/* SEARCH BAR */}
          <div className="layout-box">
            <div className="search-box search searchparts">
              {/* <div className="icon">
                    <div className="icon-left"></div> */}
              <input
                className="text"
                type="text"
                placeholder="Search Layout"
                onChange={this.handleSearch}
              />
              {/* </div> */}
              <div>
       <button onClick={this.handleSaveLayoutClick}>Save Layout</button>
       
     </div>
            </div>

            {/* LAYOUT */}
            <div>
              <Selectlayout name="Layout1" />
            </div>
            <div>
              <Selectlayout name="Layout2" />
            </div>
            <div>
              <Selectlayout name="Layout3" />
            </div>
          </div>
        </div>
      </div>
      {isSaveLayoutModalOpen && (
         <SaveLayoutModal onClose={this.handleCloseSaveLayoutModal} />
       )}
       
     </>
     
    );
  }
}
