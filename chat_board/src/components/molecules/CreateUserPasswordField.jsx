import * as React from 'react';
import PasswordField from '../atoms/PasswordField';
const CreateUserPassword = ({ value, onChange }) => {
  return <PasswordField name="password" label="パスワード" variant="outlined" value={value} onChange={onChange} />;
};

export default CreateUserPassword;
