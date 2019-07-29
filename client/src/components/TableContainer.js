import React from 'react';
import moment from 'moment';

const TableContainer = props => {
  return (
    <div className="tableContainer">
      <table className="bookingsTable">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Email</th>
            <th>Address</th>
            <th>Booking Type</th>
            <th className="rightAlign">Booking Date/Time</th>
          </tr>
        </thead>
        <tbody>
          {props.result.map(result => {
            const { id, name, email, address, appt_type, appt_date, appt_time } = result;
            return (
              <tr key={id}>
                <td className="customerName">{name}</td>
                <td>{email}</td>
                <td>{address}</td>
                <td>{appt_type}</td>
                <td className="rightAlign">
                  {moment(appt_date).format('LL')} at {appt_time}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableContainer;
