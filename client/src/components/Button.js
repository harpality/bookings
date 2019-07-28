import React from 'react';

const Button = props => {
  return (
    <button type="button" className="btn" onClick={props.showmodal}>
      Create booking
    </button>
  );
};

export default Button;
