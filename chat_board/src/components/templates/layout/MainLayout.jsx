import React from 'react';
// import styled from 'styled-components';
import Container from '@mui/material/Container';
import Header from '../../organisms/layout/Header';

const MainLayout = (props) => {
  return (
    <>
      <head>
        <title>{props.title}</title>
      </head>
      <Header>test</Header>
      <Container maxWidth="md">{props.children}</Container>
    </>
  );
};

// const SExsample = styled.div``;

export default MainLayout;
