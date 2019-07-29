import React, { Component } from 'react';
import Button from './Button';
import Modal from 'react-modal';
import API from '../utils/API';
import TableContainer from './TableContainer';

class Heading extends Component {
  state = {
    result: [],
    showModal: false,
    name: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    bookingType: 'Dog Walk',
    date: '',
    time: ''
  };

  componentDidMount() {
    Modal.setAppElement('body');
    this.getAllBookings();
  }

  getAllBookings = () => {
    API.getBookings()
      .then(res =>
        this.setState({
          result: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleOpenModal = () => {
    this.setState({ showModal: true });
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
    let address = `${this.state.street} ${this.state.city}, ${this.state.state}, ${
      this.state.zipcode
    }`;
    API.createBooking({
      name: this.state.name,
      email: this.state.email,
      address: address,
      appt_type: this.state.bookingType,
      appt_date: this.state.date,
      appt_time: this.state.time
    })
      .then(res => console.log(res.data))
      .then(this.handleCloseModal)
      .then(this.getAllBookings)
      .then(
        this.setState({
          name: '',
          email: '',
          street: '',
          city: '',
          state: '',
          zipcode: '',
          bookingType: 'Dog Walk',
          date: '',
          time: ''
        })
      );
  };

  render() {
    return (
      <div>
        <div className="heading">
          <div>Bookings</div>
          <Button showmodal={this.handleOpenModal} />
          <Modal className="modal" isOpen={this.state.showModal}>
            <h2>Create booking</h2>
            <form onSubmit={this.handleFormSubmit}>
              <div className="row">
                <div className="column">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    onChange={this.handleInputChange}
                    name="name"
                    value={this.state.name}
                    className="name"
                  />
                </div>
                <div className="column">
                  <label htmlFor="bookingType">Booking type</label>
                  <select
                    name="bookingType"
                    value={this.state.bookingType}
                    onChange={this.handleInputChange}>
                    <option value="Dog Walk">Dog Walk</option>
                    <option value="Housekeeping">Housekeeping</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="column">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    onChange={this.handleInputChange}
                    name="email"
                    value={this.state.email}
                  />
                </div>
                <div className="column">
                  <label htmlFor="date">Booking Date</label>
                  <input
                    type="date"
                    onChange={this.handleInputChange}
                    name="date"
                    value={this.state.date}
                    className="date"
                  />
                </div>
              </div>
              <div className="row">
                <div className="column">
                  <label htmlFor="address">Street Address</label>
                  <input
                    type="text"
                    onChange={this.handleInputChange}
                    name="street"
                    value={this.state.street}
                  />
                </div>
                <div className="column">
                  <label htmlFor="date">Booking Time</label>
                  <input
                    type="text"
                    onChange={this.handleInputChange}
                    name="time"
                    value={this.state.time}
                  />
                </div>
              </div>
              <div className="column">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  onChange={this.handleInputChange}
                  name="city"
                  value={this.state.city}
                  className="city"
                />
              </div>
              <div className="stateZip">
                <div className="row">
                  <div className="column">
                    <label htmlFor="state">State</label>
                    <input
                      type="text"
                      onChange={this.handleInputChange}
                      name="state"
                      value={this.state.state}
                      className="state"
                    />
                  </div>
                  <div className="column">
                    <label className="zipcode" htmlFor="zipcode">
                      Zip code
                    </label>
                    <input
                      type="text"
                      onChange={this.handleInputChange}
                      name="zipcode"
                      value={this.state.zipcode}
                      className="zipcode"
                    />
                  </div>
                </div>
              </div>
              <button type="submit" value="Create booking">
                Create booking
              </button>
            </form>
            <button onClick={this.handleCloseModal}>X</button>
          </Modal>
        </div>
        <TableContainer result={this.state.result} />
      </div>
    );
  }
}

export default Heading;
