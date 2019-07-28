import axios from 'axios';

export default {
  getBookings: function() {
    return axios.get('/api/getBookings');
  },
  createBooking: function(booking) {
    return axios.post('api/createbooking', booking);
  }
};
