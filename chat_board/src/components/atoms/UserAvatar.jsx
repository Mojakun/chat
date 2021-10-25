import React from 'react';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
import ThemeColorModel from '../../models/ThemeColorModel';

const UserAvater = (props) => {
  const color = ThemeColorModel.getThemeColor(props.themeColor);

  return (
    <SAvatar src="https://picsum.photos/200/300" alt="UserAvatar" sx={{ border: 3, borderColor: color }}></SAvatar>
  );
};

const SAvatar = styled(Avatar)``;

export default UserAvater;
