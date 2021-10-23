// import logo from './logo.svg';
import React from 'react';
import '../../../App.css';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import UserAvater from '../../atoms/UserAvatar'

const ChatCard = (props) => {
  const chatData = props.chatData;

  return (
    <ListItem button>
      <ListItemAvatar>
        <UserAvater themeColor={chatData.theme_color} />
      </ListItemAvatar>
      <ListItemText
        primary={
          <React.Fragment>
            <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
              {chatData.title}
            </Typography>
            /{chatData.content}
          </React.Fragment>
        }
        secondary={
          <React.Fragment>
            <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
              {chatData.name}
            </Typography>
            /{chatData.updated_at || chatData.created_at}
          </React.Fragment>
        }
      />
    </ListItem>
  );
};

export default ChatCard;
