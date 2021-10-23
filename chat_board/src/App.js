// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import MainLayout from './components/templates/layout/MainLayout';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
// import ListSubheader from '@mui/material/ListSubheader';
// import Avatar from '@mui/material/Avatar';
import UserAvater from './components/atoms/UserAvatar';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const result = await axios.get('/api/chat/fetchChats');
    console.log(result);
    setData(result.data);
  }, []);

  return (
    <MainLayout title={'home'}>
      <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}></Typography>
      <List sx={{ mb: 2 }}>
        {data.map((d) => (
          <React.Fragment key={d.id}>
            <ListItem button>
              <ListItemAvatar>
                <UserAvater themeColor={d.theme_color} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                    {d.title}
                    </Typography>
                    /{d.content}
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                    {d.name}
                    </Typography>
                    /{d.updated_at || d.created_at}
                  </React.Fragment>
                }
              />
            </ListItem>
          </React.Fragment>
        ))}
      </List>
    </MainLayout>
  );
};

export default App;
