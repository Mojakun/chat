// import logo from './logo.svg';
import React from 'react';
import '../../App.css';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import UserAvater from '../molecules/UserAvatar';
import CategoryChips from '../molecules/CategoryChips';
import GoodButton from '../molecules/GoodButton';
import { styled } from '@mui/system';

const MessageCard = (props) => {
  const chatData = props.chatData;
  return (
    <SListItem button>
      <ListItemAvatar>
        <UserAvater color={chatData.theme_color} src={chatData.src}/>
      </ListItemAvatar>
      <ListItemText
        primary={
          <React.Fragment>
            <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
              {chatData.name} / {chatData.updated_at || chatData.created_at}
            </Typography>
          </React.Fragment>
        }
        secondary={
          <React.Fragment>
            <p>
              <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                {chatData.message}
              </Typography>
            </p>
            <CategoryChips label="test" />
            <GoodButton />
          </React.Fragment>
        }
      />
    </SListItem>
  );
};

const SListItem = styled(ListItem)`
  align-items: flex-start;
`;

export default MessageCard;
