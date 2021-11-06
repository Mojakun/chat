import * as React from 'react';
import Chip from '@mui/material/Chip';

const Chips = ({ label, color, variant, size }) => {
  return <Chip label={label} color={color} variant={variant} size={size} />;
};

export default Chips;
