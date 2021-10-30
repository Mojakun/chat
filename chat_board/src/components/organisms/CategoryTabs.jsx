import React from 'react';
import '../../App.css';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';


const CategoryNabs = ({ categories, selectedCategoryId, handleCategoryChange }) => {
  return (
    <>
      <BottomNavigation
        showLabels
        value={selectedCategoryId}
        onChange={handleCategoryChange}
      >
      {categories.map((category) => (
         <BottomNavigationAction label={category.name} key={category.id} value={category.id}/>
      ))}
      </BottomNavigation>
    </>
  );
};

export default CategoryNabs;



