import * as React from 'react';
import TextField from '../atoms/TextField';

const CreateUserNameField = ({ value, onChange }) => {
  return (
    <TextField name="name" id="outlined-basic" label="名前" variant="outlined" value={value} onChange={onChange} />
  );
};

export default CreateUserNameField;
