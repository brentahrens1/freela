import React, { Component } from "react";
// import 'semantic-ui-css/semantic.min.css';
import { Button, Header, Icon, Modal } from "semantic-ui-react";

class ModalBasic extends Component {

    state = {
        modalOpen: false
    }

    handleOpen = () => {
        this.setState({
            modalOpen: true
        })
    }

    handleClose = () => {
        this.props.handleDelete()
        this.setState({
            modalOpen: false

        })
    }

    modalHandler = () => {
        this.setState({
            modalOpen: false
        })
    }

  render() {
    return (
      <Modal 
        trigger={<Button onClick={this.handleOpen}>Delete</Button>}
        open = {this.state.modalOpen}
        onClose = {this.modalHandler}
        close = {!this.state.modalOpen}
        basic size="small"
        >
        <Header icon="trash" content="" />
        <Modal.Content>
          <p>
            Are you sure you want to delete?
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.handleClose} color="green" inverted>
            <Icon name="checkmark" /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default ModalBasic;
