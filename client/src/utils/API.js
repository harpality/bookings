import axios from 'axios';

// API calls - GET for getting all bookings, and POST for creating a booking and return the response.
export default {
  getBookings: function() {
    return axios.get('/api/getBookings');
  },
  createBooking: function(booking) {
    return axios.post('api/createbooking', booking);
  }
};
