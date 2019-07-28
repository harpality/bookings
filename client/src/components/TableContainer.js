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
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };
  render() {
    return <div />;
  }
}

export default TableContainer;
