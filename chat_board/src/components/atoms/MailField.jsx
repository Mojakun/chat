import * as React from 'react';
import MuiTextField from '@mui/material/TextField';

const MailField = ({ name, label, variant, onChange, value }) => {
  return <MuiTextField name={name} label={label} type="mail" variant={variant} onChange={onChange} value={value} />;
};

export default MailField;
