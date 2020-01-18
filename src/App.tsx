import React from "react";
import styled from "styled-components";

function App() {
  return (
    <Main>
      <Box />
      <Box />
    </Main>
  );
}

export default App;

const Main = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

const Box = styled.textarea`
  background-color: #383d47;
  color: #fff;
  display: flex;
  flex: 1;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  border: none;
  overflow: auto;
  outline: none;
  box-shadow: none;
  resize: none;
  font-size: 14px;
  :last-child {
    margin-right: 10px;
  }
`;
