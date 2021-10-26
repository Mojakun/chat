import * as React from 'react';
import Chip from '@mui/material/Chip';

const Chips = ({ label, color, variant }) => {
  return <Chip label={label} color={color} variant={variant} />;
};

export default Chips;
