import * as React from 'react';
import TextField from '../atoms/TextField';

const CreateUserPassword = ({ value, onChange }) => {
  return (
    <TextField
      name="password"
      label="パスワード"
      variant="outlined"
      type="password"
      value={value}
      onChange={onChange}
    />
  );
};

export default CreateUserPassword;
