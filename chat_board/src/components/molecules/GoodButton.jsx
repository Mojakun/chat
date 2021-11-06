import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

const GoodButton = () => {
  return (
    <IconButton aria-label="delete">
      <ThumbUpAltIcon />
    </IconButton>
  );
};

export default GoodButton;
