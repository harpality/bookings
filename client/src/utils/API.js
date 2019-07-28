import axios from 'axios';

export default {
  getBookings: function() {
    return axios.get('/api/getBookings');
  },
  createBooking: function() {
    return axios.post('api/createbooking');
  }
};
