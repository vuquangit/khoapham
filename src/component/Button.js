import React from 'react';

const Button = ({ onClick, value, color = '#eaf5ff' }) => (
  <button
    style={{
      padding: 8,
      borderRadius: 8,
      backgroundColor: color,
      minWidth: 60
    }}
    onClick={onClick}
  >
    {value}
  </button>
);

export default Button;
