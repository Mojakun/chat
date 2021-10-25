import React from 'react';
import Avatar from '@mui/material/Avatar';

const Avater = ({src,alt,sx}) => {
    
  return (
    <Avatar src={src} alt={alt} sx={sx}></Avatar>
  );
};


export default Avater;