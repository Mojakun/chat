import React from 'react';
import '../../App.css';
import CreateUserNameField from '../../components/molecules/CreateUserNameField';
import CreateUserMailField from '../../components/molecules/CreateUserMail';
import CreateUserPassword from '../../components/molecules/CreateUserPasswordField';
import Box from '@mui/material/Box';
const CreateUserForm = () => {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
        <CreateUserNameField></CreateUserNameField>
        <CreateUserMailField ></CreateUserMailField>
        <CreateUserPassword></CreateUserPassword>
      </Box>
    </>
  );
};

export default CreateUserForm;
