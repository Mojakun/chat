import React from 'react';
import '../../App.css';
import MainLayout from '../../components/templates/MainLayout';
import CreateUserForm from '../../components/organisms/CreateUserForm';

const SingUp = () => {

  return (
    <MainLayout>
      <CreateUserForm/>
    </MainLayout>
  );
};

export default SingUp;
