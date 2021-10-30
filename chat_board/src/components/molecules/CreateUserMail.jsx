import * as React from 'react';
import MailField from '../atoms/MailField';

const CreateUserMailField = ({ value, onChange }) => {
  return <MailField name="mail" label="メールアドレス" variant="outlined" value={value} onChange={onChange} />;
};

export default CreateUserMailField;
