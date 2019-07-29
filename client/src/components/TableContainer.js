import React from 'react';
// Import moment for time formatting
import moment from 'moment';

// Function to format user's address into a line break using regex
function formattedAddress(address) {
  const regex = /[a-zA-z]*,/gm;
  const str = address;
  let m;

  while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
      console.log(`Found match, group ${groupIndex}: ${match}`);
    });
    return `${address.slice(0, m.index)} \n ${address.slice(m.index, address.length)}`;
  }
}

// Component to display dynamic table with user booking details in table
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
                <td>
                  <div className="display-linebreak">{formattedAddress(address)}</div>
                </td>
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
