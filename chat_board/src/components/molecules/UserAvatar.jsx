import React from 'react';
import Avatar from '../atoms/Avatar';

const UserAvater = ({ src, color }) => {
  return <Avatar src={src} alt="UserAvatar" sx={{ border: 3, borderColor: color }}></Avatar>;
};

export default UserAvater;
