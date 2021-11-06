import * as React from 'react';
import MuiTextField from '@mui/material/TextField';

const PasswordField = ({ name, label, variant, onChange, value }) => {
  return <MuiTextField name={name} label={label} type="password" variant={variant} onChange={onChange} value={value} />;
};

export default PasswordField;
