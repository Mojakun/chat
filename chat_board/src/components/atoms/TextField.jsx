import * as React from 'react';
import MuiTextField from '@mui/material/TextField';

const TextField = ({ label, variant, type = 'text', onChange }) => {
  return <MuiTextField label={label} type={type} variant={variant} onChange={onChange} />;
};

export default TextField;
