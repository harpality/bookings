import React, { Component } from 'react';
import API from '../utils/API';
import moment from 'moment';

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
              const { id, name, email, address, appt_type, appt_date, appt_time } = result;
              return (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{address}</td>
                  <td>{appt_type}</td>
                  <td>
                    {moment(appt_date).format('LL')} at {appt_time}
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
