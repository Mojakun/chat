import React from 'react';
// import styled from 'styled-components';
import '../../../App.css';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import UserAvater from '../../atoms/UserAvatar';
import TextField from '@mui/material/TextField';

const PostField = () => {
//   const userInfo = props.userInfo;
  return (
    <ListItem button>
      <ListItemAvatar>
        <UserAvater themeColor={1} />
      </ListItemAvatar>
      <ListItemText
        primary={
          <React.Fragment>
            <TextField id="outlined-basic" label="つぶやく" variant="outlined" />
          </React.Fragment>
        }
        // secondary="つぶやく"
      />
    </ListItem>
  );
};

// const SExsample = styled.div``;

export default PostField;
