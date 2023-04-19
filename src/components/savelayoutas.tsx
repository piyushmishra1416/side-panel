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
        <div className="save-layout-modal__content">
          <h2 className="save-layout-modal__title">Save Layout As...</h2>
          <p>Name</p>
          <input
            type="text"
            className="save-layout-modal__input"
            placeholder="Enter text"
            value={layoutName}   
            onChange={(e) => this.setState({ layoutName: e.target.value })}
          />
          <div className="save-layout-modal__buttons">
            {/* <button onClick={this.handleSaveClick}>Save</button>
            <button onClick={onClose}>Cancel</button> */}
          </div>
        </div>
      </div>
    );
  }
}

interface MyComponentState {
  isSaveLayoutModalOpen: boolean;
}

class MyComponent extends Component<{}, MyComponentState> {
  state: MyComponentState = {
    isSaveLayoutModalOpen: false,
  };

  handleSaveLayoutClick = () => {
    this.setState({ isSaveLayoutModalOpen: true });
  };

  handleCloseSaveLayoutModal = () => {
    this.setState({ isSaveLayoutModalOpen: false });
  };

  render() {
    const { isSaveLayoutModalOpen } = this.state;

    return (
      <div>
        <button onClick={this.handleSaveLayoutClick}>Save Layout</button>
        {isSaveLayoutModalOpen && (
          <SaveLayoutModal onClose={this.handleCloseSaveLayoutModal} />
        )}
      </div>
    );
  }
}

export default MyComponent;
