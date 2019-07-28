import React, { Component } from 'react';
import API from '../utils/API';
import Table from './Table';

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
        <Table />
        {/* {this.state.result.map(result => (
          <div>{result.name}</div>
        ))} */}
      </div>
    );
  }
}

export default TableContainer;
