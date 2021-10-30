import React, { useState, useCallback } from 'react';
import '../../App.css';
import MainLayout from '../../components/templates/MainLayout';
import CreateUserForm from '../../components/organisms/CreateUserForm';

const SingUp = () => {
  const [userData, setUserData] = useState({ name: '', mail: '', password: '' });

  console.log(setUserData);
  console.log(useCallback);

  const handleUserDateChange = useCallback(
    //ObjectのuserStateにセットできない...

    (e) => {
      const targetName = e.target.name;
      console.log(targetName);
      if (targetName === 'name') {
        setUserData({ ...userData, name: e.target.value });
      }
      if (targetName === 'mail') {
        setUserData({ ...userData, mail: e.target.value });
      }
      if (targetName === 'password') {
        setUserData({ ...userData, password: e.target.value });
      }
    },
    [setUserData]
  );

  return (
    <MainLayout>
      <CreateUserForm userData={userData} onChange={handleUserDateChange} />
      <div>
        <p>{userData.name}</p>
        <p>{userData.mail}</p>
        <p>{userData.password}</p>
      </div>
    </MainLayout>
  );
};

export default SingUp;
