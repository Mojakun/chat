import React from 'react';
import '../../App.css';
import CreateUserNameField from '../../components/molecules/CreateUserNameField';
import CreateUserMailField from '../../components/molecules/CreateUserMail';
import CreateUserPassword from '../../components/molecules/CreateUserPasswordField';
import Box from '@mui/material/Box';

const CreateUserForm = ({
  userName,
  userMail,
  userPassword,
  onChangeUserName,
  onChangeUserMail,
  onChangeUserPassword,
}) => {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
        <CreateUserNameField value={userName} onChange={onChangeUserName}></CreateUserNameField>
        <CreateUserMailField value={userMail} onChange={onChangeUserMail}></CreateUserMailField>
        <CreateUserPassword value={userPassword} onChange={onChangeUserPassword}></CreateUserPassword>
      </Box>
    </>
  );
};

export default CreateUserForm;
