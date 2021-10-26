import * as React from 'react';
import Chip from '../atoms/Chips';

const CategoryChips = ({ label }) => {
  return <Chip label={label} color="secondary" variant="outlined" />;
};

export default CategoryChips;
