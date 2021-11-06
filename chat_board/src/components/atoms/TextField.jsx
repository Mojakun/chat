import * as React from 'react';
import MuiTextField from '@mui/material/TextField';

const TextField = ({ name, label, variant, onChange, value }) => {
  return <MuiTextField name={name} label={label} type="text" variant={variant} onChange={onChange} value={value} />;
};

export default TextField;
