import React from 'react';
import '../../App.css';
import MainLayout from '../../components/templates/MainLayout';
import CreateUserNameField from '../../components/molecules/CreateUserNameField';
import CreateUserMailField from '../../components/molecules/CreateUserMail';
import CreateUserPassword from '../../components/molecules/CreateUserPasswordField';

const SingUp = () => {
  return (
    <MainLayout>
      <CreateUserNameField></CreateUserNameField>
      <CreateUserMailField></CreateUserMailField>
      <CreateUserPassword></CreateUserPassword>
    </MainLayout>
  );
};

export default SingUp;
