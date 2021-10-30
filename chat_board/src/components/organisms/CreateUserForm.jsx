import React from 'react';
import '../../App.css';
import CreateUserNameField from '../../components/molecules/CreateUserNameField';
import CreateUserMailField from '../../components/molecules/CreateUserMail';
import CreateUserPassword from '../../components/molecules/CreateUserPasswordField';
import Box from '@mui/material/Box';

const CreateUserForm = ({ userData, onChange }) => {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
        <CreateUserNameField value={userData.name} onChange={onChange}></CreateUserNameField>
        <CreateUserMailField value={userData.mail} onChange={onChange}></CreateUserMailField>
        <CreateUserPassword value={userData.password} onChange={onChange}></CreateUserPassword>
      </Box>
    </>
  );
};

export default CreateUserForm;
