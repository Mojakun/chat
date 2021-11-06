import React from 'react';
// import styled from 'styled-components';
import Container from '@mui/material/Container';
import Header from '../organisms/layout/Header';

const MainLayout = (props) => {
  return (
    <>
      <head>
        <meta name="description" content="以前作ったメタ言語スターターキットの内容をReact環境で再現してみる" />
        <title>Reactとメタ言語の比較</title>
      </head>
      <Header >test</Header>
      <Container maxWidth="md" sx={{pt:'10px'}}>{props.children}</Container>
    </>
  );
};

// const SExsample = styled.div``;

export default MainLayout;
