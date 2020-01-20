import React from "react";
import styled from "styled-components";
import EncryptView from "./EncryptView";

function App() {
  return (
    <Main>
      <EncryptView />
    </Main>
  );
}

export default App;

const Main = styled.div`
  display: flex;
  min-height: 100vh;
`;
