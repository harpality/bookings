import React, { Component } from 'react';
import API from '../utils/API';

class TableContainer extends Component {
  state = {
    result: []
  };

  componentDidMount() {
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
  render() {
    return (
      <div className="tableContainer">
        <table className="bookingsTable">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Email</th>
              <th>Address</th>
              <th>Booking Type</th>
              <th>Booking Date/Time</th>
            </tr>
          </thead>
          <tbody>
            {this.state.result.map(result => {
              const { name, email, address, appt_type, appt_date, appt_time } = result;
              return (
                <tr>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{address}</td>
                  <td>{appt_type}</td>
                  <td>
                    {appt_date} at {appt_time}pm
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableContainer;
