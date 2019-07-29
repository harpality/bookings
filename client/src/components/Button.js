import React from 'react';

// Button to create a booking
const Button = props => {
  return (
    <button type="button" className="btn" onClick={props.showmodal}>
      Create booking
    </button>
  );
};

export default Button;
