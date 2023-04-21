import React, { Component } from "react";
import "./save-layout.css"

interface SaveLayoutModalProps {
  onClose: () => void;
}

interface SaveLayoutModalState {
  layoutName: string;
}

class SaveLayoutModal extends Component<SaveLayoutModalProps, SaveLayoutModalState> {
  state: SaveLayoutModalState = {
    layoutName: "",
  };

  handleSaveClick = () => {
    // Handle saving the layout
    this.props.onClose();
  };

  render() {
    const { onClose } = this.props;
    const { layoutName } = this.state;

    return (
      <div className="save-layout-modal">
        <div className="save-layout-content">
        <div className="save-layout-modal__content">
          <div className="save-layout-modal-title-bar">
            <div className="save-layout-modal-title">
          <h2 className="save-layout-modal-title-text">Save Layout As</h2>
          <i className="save-layout-modal-closeicon"></i>
         </div>
         <div className="save-layout-modal-singleline"> 
          Placeholder Description 
          </div>
          </div>

          {/* Search Bar */}
          <p className="search-text">Name</p>
          <input
            type="text"
            className="save-layout-modal__input"
            placeholder="Enter text"
            value={layoutName}   
            onChange={(e) => this.setState({ layoutName: e.target.value })}
          />
          {/* <div className="save-layout-modal__buttons">
            <button onClick={this.handleSaveClick}>Save</button>
            <button onClick={onClose}>Cancel</button>
          </div> */}
        </div>
        </div>
        <div className="save-layout-modal-tabs">
            <button
              className="tab1"
              // onClick={() => this.handleTabClick("private") 
            >
              <div className="label1">PRIVATE</div>
            </button>
            <button
              // className={`${activeTab === "global" ? "active" : ""} tab2`}
            //   onClick={() => this.handleTabClick("global")}
            className="tab2"
            >
              
              <div className="label2">GLOBAL</div>
            </button>
          </div>

        <div className='modal__footer'>
                <button className="footer-button" >
                  Cancel
                </button>
                <button className="footer-button1" >
                  Submit
                </button>
              </div>
      </div>
    );
  }
}
export default SaveLayoutModal;

// interface MyComponentState {
//   isSaveLayoutModalOpen: boolean;
// }

// class MyComponent extends Component<{}, MyComponentState> {
//   state: MyComponentState = {
//     isSaveLayoutModalOpen: false,
//   };

//   handleSaveLayoutClick = () => {
//     this.setState({ isSaveLayoutModalOpen: true });
//   };

//   handleCloseSaveLayoutModal = () => {
//     this.setState({ isSaveLayoutModalOpen: false });
//   };

//   render() {
//     const { isSaveLayoutModalOpen } = this.state;

//     return (
//       <div>
//         <button onClick={this.handleSaveLayoutClick}>Save Layout</button>
//         {isSaveLayoutModalOpen && (
//           <SaveLayoutModal onClose={this.handleCloseSaveLayoutModal} />
//         )}
//       </div>
//     );
//   }
// }

// export default MyComponent;
