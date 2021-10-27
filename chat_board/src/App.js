// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import MainLayout from './components/templates/layout/MainLayout';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import axios from 'axios';
// import ChatCard from './components/organisms/chat/ChatCard';
import MessageCard from './components/organisms/MessageCard';
import PostField from './components/organisms/chat/PostField';
import Message from './entities/Message';
import Category from './entities/Category';
import Divider from '@mui/material/Divider';

const App = () => {
  const [categories,setCategories] = useState([]);
  const [data, setData] = useState([]);

  useEffect(async () => {
    const params = {
      category_id:1
    }
    const result = await axios.post('/api/message/fetchMessagesByCategory',params);
    if (!result.data) return;
    const messages = result.data.map((message) => {
      return new Message(message);
    });
    setData(messages);
  }, []);

  useEffect(async () => {
    const result = await axios.get('/api/category/fetchCategories');
    console.log(result)
    if (!result.data) return;
    const categories = result.data.map((category) => {
      return new Category(category);
    });
    setCategories(categories);
  }, []);
  console.log(categories)

  return (
    <MainLayout title={'home'}>
      <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}></Typography>
      <List sx={{ mb: 2 }}>
        <PostField />
        {data.map((d) => (
          <React.Fragment key={d.id}>
            <MessageCard chatData={d} />
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </MainLayout>
  );
};

export default App;
