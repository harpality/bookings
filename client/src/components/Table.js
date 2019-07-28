import React from 'react';

const Table = props => {
  return (
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
        <tr>
          <td>Michael Jordan</td>
          <td>michael@michael.gov</td>
          <td>7329 Michael Drive Michael, TX 78751</td>
          <td>Dog Walk</td>
          <td>June 9th, 2019 at 7:00pm</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
