import React, { Component } from 'react';
import Button from './Button';
import Modal from 'react-modal';
import Form from './Form';

class Heading extends Component {
  state = {
    showModal: false,
    name: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: ''
  };

  componentDidMount() {
    Modal.setAppElement('body');
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
    console.log('working');
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(
      this.state.name,
      this.state.email,
      this.state.street,
      this.state.city,
      this.state.state,
      this.state.zipcode
    );
  };

  render() {
    return (
      <div className="heading">
        <div>Bookings</div>
        <Button showmodal={this.handleOpenModal} />
        <Modal className="modal" isOpen={this.state.showModal}>
          <h2>Create booking</h2>
          <form onSubmit={this.handleFormSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              onChange={this.handleInputChange}
              name="name"
              value={this.state.name}
            />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              onChange={this.handleInputChange}
              name="email"
              value={this.state.email}
            />
            <label htmlFor="address">Street Address</label>
            <input
              type="text"
              onChange={this.handleInputChange}
              name="street"
              value={this.state.street}
            />
            <label htmlFor="city">City</label>
            <input
              type="text"
              onChange={this.handleInputChange}
              name="city"
              value={this.state.city}
            />
            <div className="stateZip">
              <div className="labelOnTop">
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  onChange={this.handleInputChange}
                  name="state"
                  value={this.state.state}
                  className="state"
                />
              </div>
              <div className="labelOnTop">
                <label htmlFor="zipcode">Zip code</label>
                <input
                  type="text"
                  onChange={this.handleInputChange}
                  name="zipcode"
                  value={this.state.zipcode}
                  className="zipcode"
                />
              </div>
            </div>
            <input type="submit" value="Create booking" />
          </form>
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </Modal>
      </div>
    );
  }
}

export default Heading;
