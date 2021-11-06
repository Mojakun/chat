import React, { useState, useCallback } from 'react';
import '../../App.css';
import MainLayout from '../../components/templates/MainLayout';
import CreateUserForm from '../../components/organisms/CreateUserForm';

const SingUp = () => {
  const [userName, setUserName] = useState('');
  const [userMail, setUserMail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const onChangeUserName = useCallback(
    (e) => {
      setUserName(e.target.value);
    },
    [userName]
  );
  const onChangeUserMail = useCallback(
    (e) => {
      setUserMail(e.target.value);
    },
    [userMail]
  );
  const onChangeUserPassword = useCallback(
    (e) => {
      setUserPassword(e.target.value);
    },
    [userPassword]
  );

  return (
    <MainLayout>
      <CreateUserForm
        userName={userName}
        userMail={userMail}
        userPassword={userPassword}
        onChangeUserName={onChangeUserName}
        onChangeUserMail={onChangeUserMail}
        onChangeUserPassword={onChangeUserPassword}
      />
      <div>
        <p>{userName}</p>
        <p>{userMail}</p>
        <p>{userPassword}</p>
      </div>
    </MainLayout>
  );
};

export default SingUp;
