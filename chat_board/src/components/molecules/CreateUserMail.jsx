import * as React from 'react';
import TextField from '../atoms/TextField'

const CreateUserMailField = () => {
  return <TextField label="メールアドレス" variant="outlined" type="mail"/>;
};

export default CreateUserMailField;
