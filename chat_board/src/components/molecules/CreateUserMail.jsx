import * as React from 'react';
import TextField from '../atoms/TextField';

const CreateUserMailField = ({ value, onChange }) => {
  return (
    <TextField name="mail" label="メールアドレス" variant="outlined" type="mail" value={value} onChange={onChange} />
  );
};

export default CreateUserMailField;
