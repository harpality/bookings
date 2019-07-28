import React, { Component } from 'react';
import Button from './Button';
import Modal from 'react-modal';

class Heading extends React.Component {
  state = {
    showModal: false
  };

  handleOpenModal = () => {
    this.setState({ showModal: true });
    console.log('working');
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div className="heading">
        <div>Bookings</div>
        <Button showmodal={this.handleOpenModal} />
        <Modal className="modal" isOpen={this.state.showModal}>
          <h2>Create booking</h2>
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </Modal>
      </div>
    );
  }
}

export default Heading;
