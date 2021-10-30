// import logo from './logo.svg';
import React, { useState, useEffect, useCallback } from 'react';
import '../App.css';
import MainLayout from '../components/templates/MainLayout';
import axios from 'axios';
// import ChatCard from './components/organisms/chat/ChatCard';
import MessageCard from '../components/organisms/MessageCard';
import PostField from '../components/organisms/chat/PostField';
import Message from '../entities/Message';
import Category from '../entities/Category';
import Divider from '@mui/material/Divider';
import CategoryTabs from '../components/organisms/CategoryTabs';
import { Typography, List } from '@mui/material/';

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(2);
  const [data, setData] = useState([]);

  const handleCategoryChange = useCallback(
    (e, selectedCategory) => {
      setSelectedCategoryId(selectedCategory);
    },
    [setSelectedCategoryId]
  );

  useEffect(async () => {
    const params = {
      category_id: selectedCategoryId,
    };
    let result = await axios.post('/api/message/fetchMessagesByCategory', params);
    if (!result.data) return;
    const messages = result.data.map((message) => {
      return new Message(message);
    });
    setData(messages);

    result = await axios.get('/api/category/fetchCategories');
    if (!result.data) return;
    const categories = result.data.map((category) => {
      return new Category(category);
    });

    setCategories(categories);
  }, [selectedCategoryId]);

  return (
    <MainLayout title={'home'}>
      <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}></Typography>

      <List sx={{ mb: 2 }}>
        <PostField />
        <CategoryTabs
          categories={categories}
          selectedCategoryId={selectedCategoryId}
          handleCategoryChange={handleCategoryChange}
        />
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

export default Home;
