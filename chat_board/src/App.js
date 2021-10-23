// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import MainLayout from './components/templates/layout/MainLayout';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import axios from 'axios';
import ChatCard from './components/organisms/chat/ChatCard';

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
            <ChatCard chatData={d}/>
          </React.Fragment>
        ))}
      </List>
    </MainLayout>
  );
};

export default App;
