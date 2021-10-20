import React from 'react';
// import styled from 'styled-components';
import Container from '@mui/material/Container';

const MainLayout = (props) => {
  return (
    <>
      <head>
        <title>{props.title}</title>
      </head>
      <header>test</header>
      <Container maxWidth="md">{props.children}</Container>
    </>
  );
};

// const SExsample = styled.div``;

export default MainLayout;
